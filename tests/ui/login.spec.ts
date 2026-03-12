import { test, expect } from '@playwright/test';
import { users } from '../../utils/testData';

test('BrightBud login', async ({ page }) => {

  await page.goto('https://brightbud.ai/login');

  // Wait for email field instead of buttons
  const emailInput = page.locator('input[type="email"]');
  await emailInput.waitFor({ state: 'visible' });

  await emailInput.fill(users.validUser.email);

  await page.locator('input[type="password"]').fill(users.validUser.password);

  await page.locator('button[type="submit"]').click();

  // Optional: verify successful navigation
  await page.waitForURL(/dashboard|app|home/);

});