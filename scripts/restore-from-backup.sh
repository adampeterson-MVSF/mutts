#!/bin/bash
# scripts/restore-from-backup.sh
#
# Disaster Recovery Restore Script
# This script restores the database from a backup file for DR testing
#
# Usage: ./scripts/restore-from-backup.sh [backup-file.sql] [target-database-url]
#
# Environment variables:
#   DATABASE_URL_RESTORE - Target database URL for restore (defaults to DATABASE_URL)
#   BACKUP_RETENTION_DAYS - How long to keep backup files (default: 90)
#
# Example:
#   ./scripts/restore-from-backup.sh db-backups/backup-2024-01-15.sql
#   ./scripts/restore-from-backup.sh latest  # Uses most recent backup

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log() {
  echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
  echo -e "${RED}[ERROR] $1${NC}" >&2
}

success() {
  echo -e "${GREEN}[SUCCESS] $1${NC}"
}

warning() {
  echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Default values
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="${PROJECT_ROOT}/db-backups"
BACKUP_RETENTION_DAYS="${BACKUP_RETENTION_DAYS:-90}"
RESTORE_START_TIME=$(date +%s)

# Parse arguments
BACKUP_FILE="${1:-latest}"
TARGET_DB_URL="${DATABASE_URL_RESTORE:-${DATABASE_URL:-}}"

if [ -z "$TARGET_DB_URL" ]; then
  error "No target database URL specified. Set DATABASE_URL_RESTORE or DATABASE_URL environment variable."
  exit 1
fi

# Validate backup file
if [ "$BACKUP_FILE" = "latest" ]; then
  BACKUP_FILE=$(find "$BACKUP_DIR" -name "backup-*.sql" -type f -printf '%T@ %p\n' 2>/dev/null | sort -n | tail -1 | cut -d' ' -f2-)
  if [ -z "$BACKUP_FILE" ]; then
    error "No backup files found in $BACKUP_DIR"
    exit 1
  fi
fi

if [ ! -f "$BACKUP_FILE" ]; then
  error "Backup file not found: $BACKUP_FILE"
  exit 1
fi

# Extract backup metadata from filename
BACKUP_BASENAME=$(basename "$BACKUP_FILE" .sql)
if [[ $BACKUP_BASENAME =~ backup-([0-9]{4}-[0-9]{2}-[0-9]{2}) ]]; then
  BACKUP_DATE="${BASH_REMATCH[1]}"
else
  BACKUP_DATE="unknown"
fi

log "Starting disaster recovery restore"
log "Backup file: $BACKUP_FILE"
log "Backup date: $BACKUP_DATE"
log "Target database: ${TARGET_DB_URL:0:50}..." # Truncate for security
log "Backup retention: ${BACKUP_RETENTION_DAYS} days"

# Pre-restore checks
log "Performing pre-restore validation..."

# Check if backup file is recent enough for DR testing
if [ "$BACKUP_DATE" != "unknown" ]; then
  BACKUP_TIMESTAMP=$(date -d "$BACKUP_DATE" +%s)
  CURRENT_TIMESTAMP=$(date +%s)
  BACKUP_AGE_DAYS=$(( (CURRENT_TIMESTAMP - BACKUP_TIMESTAMP) / 86400 ))

  if [ $BACKUP_AGE_DAYS -gt $BACKUP_RETENTION_DAYS ]; then
    warning "Backup is ${BACKUP_AGE_DAYS} days old, exceeding retention policy (${BACKUP_RETENTION_DAYS} days)"
    warning "This may not be suitable for production DR testing"
  fi

  log "Backup age: ${BACKUP_AGE_DAYS} days"
fi

# Check backup file integrity (basic size check)
BACKUP_SIZE=$(stat -f%z "$BACKUP_FILE" 2>/dev/null || stat -c%s "$BACKUP_FILE" 2>/dev/null || echo "0")
if [ "$BACKUP_SIZE" -lt 1024 ]; then
  error "Backup file appears to be too small (${BACKUP_SIZE} bytes). May be corrupted."
  exit 1
fi

log "Backup file size: ${BACKUP_SIZE} bytes"

# Confirm destructive operation
warning "⚠️  This will OVERWRITE the target database!"
warning "Target: ${TARGET_DB_URL:0:50}..."
echo
read -p "Type 'RESTORE' to confirm: " -r
if [ "$REPLY" != "RESTORE" ]; then
  log "Restore cancelled by user"
  exit 0
fi

# Start restore process
log "Beginning database restore..."

# Record restore metrics
RESTORE_START=$(date +%s)

# Perform the restore
if psql "$TARGET_DB_URL" < "$BACKUP_FILE"; then
  success "Database restore completed successfully"
else
  error "Database restore failed"
  exit 1
fi

# Run Prisma migrations to ensure schema compatibility
log "Running Prisma migrations..."
if npx prisma migrate deploy; then
  success "Prisma migrations completed"
else
  error "Prisma migrations failed"
  exit 1
fi

# Calculate restore duration
RESTORE_END=$(date +%s)
RESTORE_DURATION=$((RESTORE_END - RESTORE_START))
TOTAL_DURATION=$((RESTORE_END - RESTORE_START_TIME))

# Run smoke tests
log "Running smoke tests..."
if node scripts/smoke-check.mjs; then
  success "Smoke tests passed"
else
  error "Smoke tests failed - restore may be incomplete"
  exit 1
fi

# Calculate RTO and RPO metrics
log "Calculating DR metrics..."

if [ "$BACKUP_DATE" != "unknown" ]; then
  BACKUP_TIMESTAMP=$(date -d "$BACKUP_DATE" +%s)
  RPO_MINUTES=$(( (RESTORE_START - BACKUP_TIMESTAMP) / 60 ))
  success "Recovery Point Objective (RPO): ${RPO_MINUTES} minutes of data loss"
else
  warning "Unable to calculate RPO - backup date unknown"
fi

success "Recovery Time Objective (RTO): ${TOTAL_DURATION} seconds to restore"

# Generate DR report
REPORT_FILE="${PROJECT_ROOT}/dr-report-$(date +%Y%m%d-%H%M%S).json"
cat > "$REPORT_FILE" << EOF
{
  "dr_test_timestamp": "$(date -Iseconds)",
  "backup_file": "$BACKUP_FILE",
  "backup_date": "$BACKUP_DATE",
  "backup_age_days": ${BACKUP_AGE_DAYS:-0},
  "restore_duration_seconds": $TOTAL_DURATION,
  "rto_seconds": $TOTAL_DURATION,
  "rpo_minutes": ${RPO_MINUTES:-0},
  "backup_size_bytes": $BACKUP_SIZE,
  "target_database": "${TARGET_DB_URL:0:50}...",
  "smoke_tests_passed": true,
  "status": "SUCCESS"
}
EOF

success "DR test completed successfully!"
success "Report saved to: $REPORT_FILE"
log "Total duration: ${TOTAL_DURATION} seconds"

# Cleanup old reports (keep last 10)
find "$PROJECT_ROOT" -name "dr-report-*.json" -type f -printf '%T@ %p\n' 2>/dev/null |
  sort -n |
  head -n -10 |
  cut -d' ' -f2- |
  xargs -r rm -f

log "DR rehearsal completed. Ready for production use."
