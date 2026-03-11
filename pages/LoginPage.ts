import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://brightbud.ai');
  }

  async clickLogin() {
    await this.page.getByRole('button', { name: /login/i }).click();
  }

  async continueWithEmail() {
    await this.page.getByRole('button', { name: /continue with email/i }).click();
  }

  async login(email: string, password: string) {
    await this.page.getByLabel(/email/i).fill(email);
    await this.page.locator('input[type="password"]').fill(password);
    await this.page.getByRole('button', { name: /^continue$/i }).click();
  }
}