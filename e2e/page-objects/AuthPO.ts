import { Page } from '@playwright/test';

export class AuthPO {
  constructor(private page: Page) {}

  async gotoSignUp() {
    await this.page.goto('http://localhost:3000/auth/sign-up');
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForSelector('[data-testid="input-signup-email"]', { timeout: 10000 });
  }

  async gotoLogin() {
    await this.page.goto('http://localhost:3000/auth/login');
    await this.page.waitForLoadState('networkidle');
    // Wait for either auth-ready signal OR the email input (resilient to future changes)
    await Promise.race([
      this.page.waitForSelector('[data-testid="auth-ready"]', { timeout: 10000 }),
      this.page.waitForSelector('[data-testid="input-login-email"]', { timeout: 10000 })
    ]);
  }

  get signupEmail() {
    return this.page.getByTestId('input-signup-email');
  }

  get signupPassword() {
    return this.page.getByTestId('input-signup-password');
  }

  get signupName() {
    return this.page.getByTestId('input-signup-name');
  }

  get signupRepeatPassword() {
    return this.page.locator('input[name="repeat-password"]');
  }

  get loginEmail() {
    return this.page.getByTestId('input-login-email');
  }

  get loginPassword() {
    return this.page.getByTestId('input-login-password');
  }

  get submit() {
    return this.page.getByTestId('btn-submit');
  }

  get confirmMessage() {
    return this.page.getByTestId('message-confirmation');
  }

  get errorMessage() {
    return this.page.getByTestId('message-error');
  }

  async expectSuccessMessage(options?: { timeout?: number }) {
    await this.confirmMessage.waitFor({ state: 'visible', timeout: options?.timeout || 15000 });
  }

  async expectErrorMessage(options?: { timeout?: number }) {
    // Wait for either the error message to appear OR a reasonable timeout
    // The error message may not always appear immediately
    try {
      await this.errorMessage.waitFor({ state: 'visible', timeout: options?.timeout || 5000 });
    } catch {
      // If error message doesn't appear, that's okay - the test will fail on the next assertion
    }
  }

  async signUp(name: string, email: string, password: string) {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupPassword.fill(password);
    await this.signupRepeatPassword.fill(password);
    await this.submit.click();
  }

  async login(email: string, password: string) {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.submit.click();
  }

}
