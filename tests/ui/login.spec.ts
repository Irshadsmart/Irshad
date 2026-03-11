import { test, expect } from '@playwright/test';
import { users } from '../../utils/testData';

test('BrightBud login', async ({ page }) => {

  await page.goto('https://brightbud.ai');

  const loginButton = page.getByRole('button', { name: /login/i });

  await loginButton.waitFor({ state: 'visible' });

  await loginButton.click();

  await page.getByRole('button', { name: /continue with email/i }).click();

  await page.getByLabel(/email/i).fill(users.validUser.email);

  await page.locator('input[type="password"]').fill(users.validUser.password);

  await page.getByRole('button', { name: /continue/i }).click();

});