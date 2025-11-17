# 🚀 Deployment Guide

Your dog rescue management system is ready for production! This guide will walk you through deploying to Vercel.

## Prerequisites

- Vercel account (free tier available)
- Supabase project set up
- GitHub repository

## Step 1: Vercel Setup

### 1.1 Install Vercel CLI (if not done)
```bash
npm install -g vercel
```

### 1.2 Login to Vercel
```bash
vercel login
```

### 1.3 Link your project
```bash
vercel link
```
Follow the prompts to connect your GitHub repository.

## Step 2: Environment Variables

### 2.1 Complete Environment Variable Matrix

Set up these environment variables in Vercel dashboard → Project Settings → Environment Variables:

#### **Required Variables**

| Variable | Description | Example | Source |
|----------|-------------|---------|--------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:your-password@db.xcegtpafqfoksbkhdezj.supabase.co:5432/postgres` | Supabase Dashboard → Settings → Database |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://your-project-ref.supabase.co` | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | Supabase Dashboard → Settings → API |

#### **Optional Variables (Development/Testing)**

| Variable | Description | Default | Used For |
|----------|-------------|---------|----------|
| `NODE_ENV` | Environment mode | `production` | Test endpoint gating |
| `TEST_SECRET` | Test API secret | `test-secret-key` | E2E test authentication |
| `NEXTAUTH_SECRET` | NextAuth secret | Auto-generated | Session encryption |

**Important:** Get database and Supabase values from your Supabase project dashboard → Settings → API.

### 2.2 Database Considerations

Your database is already set up with the seeded data. For production, you may want to:

1. **Keep the seeded data** for immediate testing
2. **Clear seeded data** and start fresh:
   ```sql
   -- Run in Supabase SQL editor
   DELETE FROM volunteer_shift_signups;
   DELETE FROM vaccination_records;
   DELETE FROM medication_records;
   DELETE FROM vet_visit_records;
   DELETE FROM medical_records;
   DELETE FROM log_entries;
   DELETE FROM applications;
   DELETE FROM shifts;
   DELETE FROM dogs;
   DELETE FROM profiles;
   ```

## Step 3: Deploy

### 3.1 Deploy to production
```bash
npm run deploy
```

### 3.2 Or deploy via Vercel dashboard
Push your code to GitHub, and Vercel will automatically deploy.

## Step 4: Database Migration

### 4.1 Run Prisma migrations on Supabase
```bash
npx prisma migrate deploy
```

### 4.2 Breaking Changes in Recent Migrations

**Medical Records Refactoring (2025-10-24)**:
- **Breaking Change**: The `medical_records` table structure was refactored to use separate tables for different record types (`vaccination_records`, `medication_records`, `vet_visit_records`).
- **Data Loss Warning**: If you have existing data in the old flattened columns (`vaccineType`, `medicationName`, `dosage`, `frequency`, `vetName`, `visitReason`, `nextDueDate`), it will be **permanently lost** during migration.
- **Action Required**: Back up any important medical data before deploying if your database contains real data.
- **New Structure**: Medical records now use a proper relational model with type-specific tables.

**Application Audit Fields (2025-10-25)**:
- **New Feature**: Added `statusNotes` field for tracking status change reasons and `updatedAt` timestamp for audit trails.
- **No Breaking Changes**: Safe to apply to existing databases.

**Shift Soft Delete (2025-10-25)**:
- **New Feature**: Added `is_deleted` boolean flag and `deleted_at` timestamp for soft deletion of shifts.
- **No Breaking Changes**: Safe to apply to existing databases.

**Performance Indexes (2025-10-25)**:
- **Performance Improvement**: Added indexes on frequently queried fields (`Profile.role`, `applications.updatedAt`, `dogs.updatedAt`, etc.).
- **No Breaking Changes**: Safe to apply to existing databases.


## Step 5: Post-Deployment Setup

### 5.1 Update Supabase Auth redirect URLs

In Supabase Dashboard → Authentication → URL Configuration:

- **Site URL**: `https://your-vercel-app.vercel.app`
- **Redirect URLs**: Add `https://your-vercel-app.vercel.app/auth/callback`

### 5.2 Test the application

1. Visit your deployed URL
2. Try signing up a new user
3. Verify all features work

### 5.3 Admin Access

Your database is seeded with test data, including user profiles. To log in as an admin, you must sign up using the email defined in the `prisma/seed.ts` file (e.g., `admin@example.com`). Supabase will automatically link your new auth account to the existing `ADMIN` profile.

## Step 6: Domain Setup (Optional)

### 6.1 Custom domain
In Vercel dashboard → Project Settings → Domains:
- Add your custom domain
- Follow DNS setup instructions

## Step 7: Monitoring & Analytics

### 7.1 Add error tracking (recommended)
```bash
npm install @sentry/nextjs
```

Then set the `SENTRY_DSN` environment variable in Vercel:
- Get your DSN from https://sentry.io → Your Project → Settings → Client Keys (DSN)
- Add `SENTRY_DSN` to Vercel environment variables

The application includes Sentry integration at `lib/monitoring/sentry.ts` that:
- ✅ Captures server action exceptions with user role context (no PII)
- ✅ Adds breadcrumbs on middleware access denials
- ✅ Logs rate-limit hits
- ✅ Gracefully degrades if Sentry is not installed or configured

**Note:** Sentry integration is optional and won't break the app if not configured.

### 7.2 Analytics (optional)
Add Vercel Analytics or Google Analytics for usage tracking.

## Troubleshooting

### Common Issues:

1. **Build fails**: Check that all environment variables are set
2. **Database connection fails**: Verify DATABASE_URL format
3. **Auth redirects don't work**: Check Supabase URL configuration
4. **Static assets missing**: Ensure `next.config.ts` is properly configured

### Useful Commands:

```bash
# Check deployment status
vercel ls

# View logs
vercel logs

# Redeploy
npm run deploy

# Environment variables
vercel env ls
```

## Environment Parity Checklist

Ensure all environments (development, staging, production) have identical configurations:

- [ ] Supabase project settings match (policies, bucket privacy settings)
- [ ] Database schema is identical (same migrations applied)
- [ ] Environment variables are consistent across environments
- [ ] Next.js image domains configured for all external image sources
- [ ] Supabase storage bucket names and permissions are identical

## First-Run Hardening Steps

Complete these security and setup tasks immediately after initial deployment:

- [ ] Create admin user account for system management
- [ ] Rotate all API keys and tokens to production values
- [ ] Verify RBAC is working (test admin vs staff vs volunteer access)
- [ ] Confirm medical document storage is private with signed URLs
- [ ] Test application status transitions and audit logging
- [ ] Verify shift signup capacity enforcement is working
- [ ] Check that all external integrations (Supabase, Vercel) are properly configured

## Security Post-Deploy Checklist

**Run these commands against your staging/production deployment:**

### Kill-switch & Test Affordances
```bash
# Should 404 (or 405) in non-test envs even WITH fake cookies/headers
curl -i https://<host>/api/test-api/reset

# Should 404 even if someone tries to pass the secret header
curl -i -H 'x-test-secret: something' https://<host>/api/test-api/reset
```

### Rate Limiting + Headers
```bash
# Spike traffic and confirm 429 + Retry-After (+ security headers)
for i in {1..40}; do curl -s -o /dev/null -w "%{http_code}\n" https://<host>/api/public/ping; done

# Then inspect a single response:
curl -i https://<host>/api/public/ping
# Expect: HTTP/1.1 429, Retry-After, and CSP/X-Frame-Options/X-Content-Type-Options present
```

### Auth Flows Gated by Limiter
```bash
# Simulate abuse on /auth route
for i in {1..40}; do curl -s -o /dev/null -w "%{http_code}\n" https://<host>/auth/signin; done

curl -i https://<host>/auth/signin
# Expect: 429 with same security headers
```

### Unknown External Image Host Rejection
```bash
curl -i 'https://<host>/_next/image?url=https%3A%2F%2Fbad.example.com%2Fb.png&w=384&q=75'
# Expect: 400/403 and structured log line with reason=domain_not_allowed (no stack trace)
```

### Log Redaction Spot-Check
- Trigger one rejection (D) and confirm logs: secret values **redacted**, cookies logged as **names only**.

---

## Production Checklist

- [ ] Environment variables configured and validated (`npm run build:env` passes)
- [ ] Database migrations run (use `npm run db:migrate:with-backup` for schema changes)
- [ ] Supabase auth URLs updated
- [ ] Application tested end-to-end
- [ ] **Security checklist above completed**
- [ ] Custom domain (optional)
- [ ] Monitoring set up (recommended)

## Next Steps

Once deployed:

1. **Gather user feedback** on the initial release
2. **Monitor performance** and error rates
3. **Plan feature enhancements** based on real usage
4. **Set up backup strategies** for your database

## Post-Deploy Checklist CI Job

A scriptable post-deploy validation script is available at `scripts/post-deploy-check.ts`:

```bash
# Run post-deploy checks
pnpm tsx scripts/post-deploy-check.ts
```

This script validates:
- ✅ Medical documents bucket exists and is **private**
- ✅ Signed URL generation works correctly
- ✅ Document downloads are properly gated

**CI Integration Example** (GitHub Actions):

```yaml
- name: Post-deploy validation
  run: |
    pnpm tsx scripts/post-deploy-check.ts
  env:
    NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
    NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
    SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
```

The script returns exit code 0 if all checks pass, 1 if any fail (blocking deployment if integrated into CI).

## First-Run Hardening Steps

Complete these security and setup tasks immediately after initial deployment:

- [ ] Create admin user account for system management
- [ ] Rotate all API keys and tokens to production values
- [ ] Verify RBAC is working (test admin vs staff vs volunteer access)
- [ ] Confirm medical document storage is private with signed URLs (use `scripts/post-deploy-check.ts`)
- [ ] Test application status transitions and audit logging
- [ ] Verify shift signup capacity enforcement is working
- [ ] Check that all external integrations (Supabase, Vercel) are properly configured

## Production Checklist

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Supabase auth URLs updated
- [ ] Application tested end-to-end
- [ ] Post-deploy checklist passes (`pnpm tsx scripts/post-deploy-check.ts`)
- [ ] Custom domain (optional)
- [ ] Monitoring set up (recommended)

Your dog rescue management system is now live! 🎉
