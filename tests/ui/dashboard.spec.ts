import { test, expect } from '../../fixtures/testFixtures';

test('Dashboard loads successfully', async ({ page }) => {

  await test.step('Navigate to homepage', async () => {
    await page.goto('/');
  });

  await test.step('Verify page title', async () => {
    await expect(page).toHaveTitle(/BrightBud/i);
  });

});