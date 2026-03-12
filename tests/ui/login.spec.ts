import { test, expect } from '@playwright/test';

test('BrightBud login page loads', async ({ page }) => {

  await page.goto('https://brightbud.ai/login');

  await expect(page).toHaveURL(/login|brightbud/i);

});