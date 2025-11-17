# 🚀 Launch Gate Checklist

**All items must be checked before merging to `main`**

## 🔒 Security Checks

### Supply Chain & Code Security
- [ ] **CodeQL Analysis**: No critical/high severity issues
- [ ] **Semgrep SAST**: No critical/high severity findings
- [ ] **Dependency Review**: No new vulnerable dependencies
- [ ] **Secret Scanning**: No secrets committed to code
- [ ] **Lockfile Integrity**: `npm ci --frozen-lockfile` passes

### Runtime Security
- [ ] **OWASP ZAP DAST**: No high-severity vulnerabilities
- [ ] **Rate Limiting**: Shadow mode testing completed (if limits changed)
- [ ] **Environment Validation**: All required secrets configured
- [ ] **PII Encryption**: Sensitive fields properly encrypted

### Access Control
- [ ] **RBAC Testing**: All role-based access controls verified
- [ ] **Authentication Flows**: Login/signup/logout working correctly
- [ ] **Authorization Checks**: Admin/staff/volunteer permissions correct

## 📊 Performance & Reliability

### Performance Budgets
- [ ] **Lighthouse Scores**:
  - Performance: ≥90
  - Accessibility: ≥90
  - Best Practices: ≥90
  - SEO: ≥80
- [ ] **Core Web Vitals**:
  - LCP: ≤2.5s
  - FID: ≤100ms
  - CLS: ≤0.1

### SLO Monitoring
- [ ] **Rate Limit Metrics**: Rejection rate <0.3% over 5min
- [ ] **Auth Redirects**: No unexpected spikes
- [ ] **API Latency**: p50 <500ms, p95 <1s
- [ ] **Error Rates**: <1% for critical paths

## 🧪 Testing & Quality

### Automated Testing
- [ ] **Unit Tests**: All tests pass (≥80% coverage)
- [ ] **Integration Tests**: Server actions working
- [ ] **E2E Tests**: Critical user journeys pass
  - Public adoption browsing
  - Admin dashboard functionality
  - Application submission flow

### Manual Testing
- [ ] **Cross-browser**: Chrome, Firefox, Safari tested
- [ ] **Mobile Responsiveness**: iOS Safari, Android Chrome
- [ ] **Accessibility**: Keyboard navigation, screen readers
- [ ] **Performance**: No regressions in load times

## 🚀 Deployment Readiness

### Infrastructure
- [ ] **Database Migrations**: Safe rollback plan prepared
- [ ] **Environment Config**: All env vars documented and set
- [ ] **CDN/Storage**: Static assets properly configured
- [ ] **Monitoring**: Sentry, logging, alerting configured

### Data Integrity
- [ ] **Backup Verification**: Recent backup tested
- [ ] **Data Migration**: No data loss scenarios
- [ ] **Encryption**: Field-level encryption working
- [ ] **GDPR Compliance**: User data deletion tested

### Disaster Recovery
- [ ] **DR Runbook**: Updated with any new procedures
- [ ] **Restore Testing**: Last restore rehearsal <30 days old
- [ ] **RTO/RPO**: Within acceptable limits
- [ ] **Failover**: Alternative deployment ready

## 📋 Pre-launch Verification

### Final Checks
- [ ] **Smoke Tests**: Production-like environment tested
- [ ] **Load Testing**: Basic load test completed
- [ ] **Rollback Plan**: Clear rollback procedure documented
- [ ] **Communication**: Stakeholders notified of launch

### Documentation
- [ ] **Changelog**: User-facing changes documented
- [ ] **Runbook Updates**: Any new procedures documented
- [ ] **Monitoring Dashboards**: New metrics added to dashboards
- [ ] **Incident Response**: Updated for new features

---

## 🚨 Emergency Contacts

- **Lead Engineer**: [Name] - [Contact]
- **Security Lead**: [Name] - [Contact]
- **Infrastructure Lead**: [Name] - [Contact]
- **Product Lead**: [Name] - [Contact]

## 🔄 Rollback Procedure

If issues are discovered post-launch:

1. **Immediate**: Notify on-call engineer
2. **Assess**: Determine impact and rollback feasibility
3. **Execute**: Roll back to previous commit
4. **Verify**: Confirm application stability
5. **Communicate**: Update stakeholders on status

---

**By checking these boxes, I confirm that this PR meets all launch gate requirements and is ready for production deployment.**
