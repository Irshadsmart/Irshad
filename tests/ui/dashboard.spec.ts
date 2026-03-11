import { test } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage';



test('Dashboard loads successfully', async ({ page }) => {

  await page.goto('https://brightbud.ai/dashboard');

  const dashboard = new DashboardPage(page);

  await dashboard.verifyDashboardLoaded();

});