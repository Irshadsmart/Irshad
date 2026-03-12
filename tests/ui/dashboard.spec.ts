import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth.json' });

test('Dashboard loads successfully', async ({ page }) => {

  await page.goto('https://brightbud.ai/dashboard');

  await expect(page).toHaveURL(/dashboard/);

});