import { test as setup, expect } from '@playwright/test';

setup('login page loads', async ({ page }) => {

  await page.goto('https://brightbud.ai/login');

  await expect(page).toHaveURL(/login|brightbud/i);

});