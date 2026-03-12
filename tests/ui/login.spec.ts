import { test, expect } from '@playwright/test';
import { users } from '../../utils/testData';

test('BrightBud login', async ({ page }) => {

  await page.goto('https://brightbud.ai');

  // Wait for redirect to Auth0 login page
  await page.waitForURL(/login|auth0|brightbud/i, { timeout: 60000 });

  // Wait for email input after redirect
  const emailInput = page.locator('input[type="email"]');
  await emailInput.waitFor({ state: 'visible', timeout: 60000 });

  await emailInput.fill(users.validUser.email);

  await page.locator('input[type="password"]').fill(users.validUser.password);

  await page.locator('button[type="submit"]').click();

});