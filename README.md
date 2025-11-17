# 🐕 Senior Dog Rescue Management System

A **work-in-progress** dog rescue management platform built with modern web technologies. Features comprehensive dog management, volunteer coordination, application processing, and administrative tools.

## 🚀 Status: In Development

✅ Most core workflows implemented
✅ Comprehensive test suite (137 automated tests and counting)
✅ Vercel + Supabase deployment path documented
✅ Database seeded with realistic fixtures for demos

---

## 🔒 Security Quickstart

**For new contributors:** Complete these security steps before your first commit:

1. **Create first ADMIN user:**
   ```bash
   # After seeding, sign up with admin@example.com (or the email defined in seed.ts)
   # Supabase will automatically link to the existing ADMIN profile
   ```

2. **Rotate keys:**
   - Generate new `NEXTAUTH_SECRET`: `openssl rand -base64 32`
   - Update `.env.local` with production values
   - Never commit `.env.local` or `.env` files

3. **Verify RBAC:**
   ```bash
   # Test access control
   npm run test:e2e -- --project=staff
   npm run test:e2e -- --project=admin
   ```

4. **Run smoke tests:**
   ```bash
   # Verify critical security features
   npm run test:coverage
   npm run test:e2e -- e2e/specs/staff.medical-history.spec.ts
   ```

**Security Post-Deploy Checklist:**
- ✅ Medical document bucket is **private** (verify signed URLs work)
- ✅ RBAC working (test admin/staff/volunteer access)
- ✅ Rate limiting active (test with rapid requests)
- ✅ CSP headers present (check DevTools Network tab)

---

## 🔑 Role Update Rules (Admin → Staff/Volunteer)

* Only **ADMIN** may change user roles.
* You **cannot** demote the **last remaining ADMIN** (409 conflict).
* You **cannot** self-demote below ADMIN.
* E2E: The test server is launched with explicit Supabase env vars via Playwright `webServer.env`; do **not** set `NODE_ENV=test` for the Next server. Use `APP_ENV=test` for toggles.

---

## ✨ Features

- **🐕 Dog Management**: Complete CRUD operations with medical records and documents
- **🔍 Public Adoption Filters**: URL-driven filters for breed, age, and special needs
- **🎉 Happy Tails Hub**: Showcase adopted seniors with adoption dates and stories
- **📝 Application System**: Streamlined adoption/foster applications with references and consistent field-level validation
- **🏡 Foster CRM**: Track foster capabilities, notes, and updates in the admin UI
- **🗓️ Events Calendar**: Public view with upcoming/past filters and full admin CRUD
- **👥 Volunteer Coordination**: Shift scheduling and signup management with cancellation propagation
- **📊 Activity Logging**: Track all dog activities and health updates
- **👑 Admin Dashboard**: Role-based access control and system management
- **📱 Responsive UI**: Modern interface with accessibility considerations
- **🛡️ Centralized Security**: Admin layout enforces RBAC, and server actions validate input with Zod
- **🧪 Comprehensive Testing**: 137 automated tests with excellent coverage
- **🚀 Cloud Ready**: Optimized for Vercel + Supabase deployments

### 🔄 Shifts: Delete vs Cancel

**Delete** = removes shift from default view (soft-delete), only allowed if **no active signups**.
- Soft-deletes the shift (status = DELETED, deletedAt = now)
- Row disappears from default admin view but appears with "Deleted" badge when "Show deleted shifts" is enabled
- Cannot be undone (no restore functionality in current implementation)

**Cancel** = keeps shift but cancels signups (with reason), shows badges/reasons to volunteers.
- Marks all signups as cancelled with timestamp and reason
- Shift remains visible in admin dashboard
- Volunteers see cancellation notices in their dashboard
- Full audit trail and notifications sent to affected volunteers

**Security & Testing:**
- Admin-only access with double-gated authentication (JWT + database role validation)
- Delete only blocks on active (non-cancelled) signups
- Cancel propagates to all signups with audit logging
- Test affordances via `EXPOSE_TEST_API=1` + `x-test-secret` headers
- Comprehensive E2E test suite validates both behaviors
- Run tests: `npm run test:e2e:admin -- e2e/specs/admin.shifts-cancel-propagation.spec.ts`

## 🚀 Getting Started in 1 Command

For new developers, get a fully functional development environment with seeded data:

```bash
# One-command setup: installs deps, migrates DB, seeds data, and starts dev server
npm run dev:seed
```

This runs: `npm install` → `prisma migrate dev` → `prisma db seed` → `npm run dev`

---

## 🏃 Manual Setup (Detailed)

If you need more control over the setup process:

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Database setup
npm run db:migrate  # Run migrations
npm run db:seed     # Seed with test data

# Start development server
npm run dev

# Run tests
npm run test:coverage
```

### 🔑 Environment Variables & Safety

Create `.env.local` with these variables (see `.env.local.example`):

```env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

#### Environment Validation

The app includes strict environment validation (`lib/env.ts`) that:

- **Fails fast** on missing or invalid variables
- **Prevents test affordances** from being enabled outside test environment
- **Validates URLs and required formats**

Run validation: `npm run build:env`

#### Safety Features

- **Test endpoints are inert** in production (404 responses)
- **Rate limiting** protects auth and API routes with security headers
- **Image domains are allowlisted** - unknown hosts are rejected
- **Logs are redacted** in production (secrets and cookies masked)
- **CI guards** prevent regressions (see `.github/workflows/guards.yml`)

### 👥 Seed Accounts

After seeding, these test accounts are available:

- **Admin**: `admin@example.com` (full system access)
- **Staff**: `staff@example.com` (dog/medical/application management)
- **Volunteer**: `volunteer@example.com` (shift signup access)
- **Public**: Sign up any email for public access only

All accounts use password: `password123`

## 🧪 E2E Testing

The application includes comprehensive E2E tests using Playwright that validate full user workflows across different roles.

### Test Environment Setup

E2E tests run against a dedicated test environment with special API endpoints that are only available when `NODE_ENV=test`:

- `/api/test-api/reset` - Resets database to clean state
- `/api/test-api/login` - Creates test user sessions for different roles
- `/api/test-api/mailbox/clear` - Clears test email mailbox
- `/api/__test__/cleanup` - Cleans up test artifacts

#### Test API Login Endpoint

The `/api/test-api/login` endpoint creates authenticated sessions for E2E testing:

**Request:**
```bash
POST /api/test-api/login
Content-Type: application/json
x-test-secret: test-secret-default

{
  "role": "ADMIN" | "STAFF" | "VOLUNTEER"
}
```

**Response (200):**
```json
{
  "cookie": "session-token-value",
  "message": "Login successful",
  "user": {
    "id": "uuid",
    "email": "admin@test.example.com"
  }
}
```

**Supported Roles:**
- `ADMIN` - Full administrative access
- `STAFF` - Staff-level access for applications and dogs
- `VOLUNTEER` - Volunteer-level access for shifts and basic features

### E2E Authentication Testing Strategy

The E2E test suite uses a **global setup pattern** for authentication rather than testing form interactions directly:

1. **Global Setup Authentication**: The `global-setup.ts` file uses the test API (`/api/test-api/login`) to create authenticated sessions for different roles (`public`, `volunteer`, `staff`, `admin`)

2. **Pre-authenticated State**: Each test runs with a pre-authenticated state stored in Playwright's storage state files (`storageState.{role}.json`)

3. **Test Focus**: Tests verify access control and functionality using these pre-authenticated states, rather than testing the login/signup forms directly

4. **Form Testing**: Login and signup forms are tested for presence and rendering, but not for submission flows (which would require email interception infrastructure)

5. **Logout Testing**: Tests verify logout functionality works correctly with the test sessions established by global setup

This approach aligns with the principle of testing **user workflows** rather than **implementation details**, focusing on what users can access and do rather than how they authenticate.

### Security Measures

Test endpoints are protected by multiple layers:
- **Environment gating**: Only accessible when `NODE_ENV === 'test'`
- **Secret header**: Requires `x-test-secret` header matching `TEST_SECRET` env var
- **404 responses**: Return 404 (not 403) to avoid revealing endpoint existence

### Running E2E Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run specific test file
npx playwright test e2e/specs/admin.applications-dashboard.spec.ts

# Run with UI mode
npx playwright test --ui

# Run focused buckets for development
npm run test:e2e:admin    # Admin-only tests
npm run test:e2e:staff    # Staff-only tests
npm run test:e2e:slow     # @slow tagged tests (opt-in)
```

Test roles include: `public`, `volunteer`, `staff`, `admin` with appropriate permissions and UI access.

### Test Data Model & Secrets

**Test Data Setup:**
- Database is reset via `/api/test-api/reset` before each test run
- Seeded data includes deterministic IDs for reliable test targeting
- Global setup logs key entity IDs (e.g., "first ACTIVE event id: 101") for spec reuse
- Fixtures in `e2e/fixtures/` provide stable test files (PDFs, CSVs, etc.)

**Environment Secrets:**
- `TEST_SECRET`: Must match the `x-test-secret` header sent by Playwright
- Default: `'test-secret-default'` (configurable via env var)
- Required for test API endpoints and synthetic authentication

### Quarantining Flaky Tests

When a test becomes unreliable:

1. **Immediate action**: Add `.skip` to the test with a clear reason:
   ```typescript
   test.skip('create event - temporarily disabled due to timing issues', async () => {
     // test code
   });
   ```

2. **Ticket creation**: Reference the quarantine in a GitHub issue with:
   - Failure rate and error patterns
   - Steps to reproduce locally
   - Proposed fix approach

3. **Re-enablement**: Remove `.skip` only after:
   - Fix is implemented and tested
   - Test passes consistently in 10+ local runs
   - CI shows green in multiple PR builds

### Why x-test-secret Matters

The `x-test-secret` header is **critical** for E2E test functionality. Without it, the middleware treats all requests as unauthenticated, causing widespread test failures:

- **Authentication Bypass**: The middleware creates synthetic test sessions only when the `x-test-secret` header matches the `TEST_SECRET` environment variable
- **Test API Access**: Endpoints like `/api/test-api/reset` and `/api/test-api/login` require this header to function
- **Consistent Behavior**: Playwright's `extraHTTPHeaders` configuration ensures every request includes the header automatically

**Common Setup Issues:**
- Missing header → All role-based pages redirect to login (15-45s timeouts)
- Wrong header value → 404 responses from test endpoints
- Header not propagated → Inconsistent authentication state

### Common Causes of 15s/45s Timeouts

Most timeout failures stem from authentication or state issues:

1. **Missing x-test-secret header**: Tests time out waiting for pages that redirect to login
2. **Stale storage state**: Old cookies prevent fresh authentication
3. **Server not started with test env**: `EXPOSE_TEST_API=1` and `NODE_ENV=test` required
4. **Database not reset**: Tests fail when expecting seeded data that's missing
5. **Page content not loaded**: Missing `await expect(page.locator('body')).toBeVisible()` calls

**Quick Diagnosis:**
```bash
# Check test server is running with correct env
curl -H "x-test-secret: test-secret-default" http://localhost:3000/api/test-api/reset

# Verify storage state is fresh (not skipped)
grep "storage state already exists" test-output.log || echo "Fresh state generated"
```

## 🔧 Troubleshooting

### Database Issues

**Prisma Migration Locks**
```bash
# Reset migration state if stuck
npx prisma migrate reset --force

# Resolve migration conflicts
npx prisma migrate resolve --applied <migration-id>
```

**Connection Issues**
```bash
# Check database connectivity
npx prisma db push --preview-feature

# Reset database completely
npx prisma migrate reset
```

### Testing Issues

**Playwright Browser Cache**
```bash
# Clear Playwright cache
npx playwright install --force

# Update browser binaries
npx playwright install-deps
```

**E2E Test Failures**
```bash
# Run with debug output
DEBUG=pw:api npm run test:e2e -- --project=admin --headed

# Check test environment
curl http://localhost:3000/api/test
```

**Coverage Issues**
```bash
# Check coverage thresholds
npm run test:coverage

# View HTML coverage report
open coverage/index.html
```

### Development Issues

**Build Failures**
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check TypeScript errors
npx tsc --noEmit
```

**Environment Variables**
```bash
# Copy example env file
cp .env.example .env.local

# Required variables:
# DATABASE_URL=postgresql://...
# NEXTAUTH_SECRET=your-secret
# NEXTAUTH_URL=http://localhost:3000
```

## ⚙️ Required Configuration

- **Supabase Storage**
  - Create a bucket named `medical-documents` with **private** access (no public read).
  - Enable file uploads up to the maximum size supported by your plan.
  - Medical documents are served via signed URLs through `/api/medical-documents/[...path]`.
- **Prisma Migrations**
  - Latest schema includes `FosterProfile`, `MedicalDocument`, and `Event` tables—ensure `npx prisma migrate dev` has been run in every environment.
- **Revalidation**
  - Server actions rely on Next.js revalidation; confirm your deployment target supports on-demand ISR (Vercel does by default).

### 🔐 Signed URLs for Medical Documents

Medical documents are stored in a private Supabase bucket and served via temporary signed URLs to ensure secure access control:

```bash
# Example: Download a document via signed URL
curl "https://your-app.com/api/medical-documents/123/document.pdf"
# Redirects to: https://supabase-url/storage/v1/object/sign/medical-documents/123/document.pdf?token=...
```

- URLs expire after 1 hour for security
- Only authenticated STAFF/ADMIN users can generate signed URLs
- Documents are deleted from both storage and database when removed

## 🔒 Security

### Role-Based Access Control (RBAC)
- **Double-gated admin access**: JWT claims in middleware + database role validation in server actions
- **Three-tier roles**: VOLUNTEER (shifts only), STAFF (dogs/medical/apps), ADMIN (full access)
- **Server-side enforcement**: All data access validates roles using database Profile.role, not just JWT claims

### Server Action Validation
- **Zod schemas**: All input validation uses centralized Zod schemas as single source of truth
- **Structured errors**: Actions return typed error objects with field-level validation messages
- **Fail fast**: Invalid input returns 4xx errors with clear messages, never silently fails

### PII Handling
- **Medical documents**: Private storage with signed URLs, no public access
- **Application data**: Encrypted in transit, role-restricted access
- **Audit trails**: Status changes tracked via `ApplicationAudit` table (append-only)
- **Session security**: Supabase handles auth tokens, middleware validates sessions

### Error Monitoring (Optional)
- **Sentry integration**: Configured at `lib/monitoring/sentry.ts` for production error tracking
- **Breadcrumbs**: Automatic breadcrumbs for access denials and rate-limit hits
- **No PII**: Error tracking includes user role but never emails or phone numbers
- **Graceful degradation**: App works normally if Sentry is not installed or configured

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment instructions.

---

## Core Principles

1.  **Pragmatism Over Purity:** Solve real problems, reject unnecessary complexity
2.  **"Good Taste" (Simplicity):** Flat data structures, centralized logic

---

## Core Architectural Decisions

To prevent "flip-flopping," the following decisions are final.

### 1. Server Logic: Centralized Actions

**We DO NOT co-locate server actions.**

All server-side logic (all database access for both reads and writes) is centralized in the `/lib/actions/` directory. Pages and Components must not import prisma directly. This provides a single, predictable place to find and manage data logic.

`middleware.ts` performs the initial JWT claim gate for admin routes, and server actions call `assertRole()` with database Profile.role validation as a second line of defence.

* `/lib/actions/dog.actions.ts`
* `/lib/actions/medical.actions.ts`
* `/lib/actions/shift.actions.ts`
* (etc.)

### 2. Data Model: Source of Truth

The single source of truth for all data models is `prisma/schema.prisma`.

For example, `MedicalRecord` uses a normalized design with satellite tables (`VaccinationRecord`, `MedicationRecord`, `VetVisitRecord`) to separate concerns. This is the correct and final implementation. Refer to `components/admin/MedicalRecordTable.tsx` for a reference implementation of how to query and display this data.
