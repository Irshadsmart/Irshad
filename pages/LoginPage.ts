import { Page, expect } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/login');
  }

  async verifyLoginPage() {
    await expect(this.page).toHaveURL(/login|brightbud/i);
  }

}