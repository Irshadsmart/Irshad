import { test, expect } from '@playwright/test';
import { users } from '../../utils/testData';

test('BrightBud login', async ({ page }) => {

  await page.goto('https://brightbud.ai', { waitUntil: 'domcontentloaded' });

  await page.waitForTimeout(3000);

  const loginButton = page.locator('text=Login');

  await loginButton.click();

  await page.locator('text=Continue with Email').click();

  await page.locator('input[type="email"]').fill(users.validUser.email);

  await page.locator('input[type="password"]').fill(users.validUser.password);

  await page.locator('text=Continue').click();

});