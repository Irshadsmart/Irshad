import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/testData';

setup('Authenticate user', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.clickLogin();
  await loginPage.continueWithEmail();

  await loginPage.login(
    users.validUser.email,
    users.validUser.password
  );

  await page.waitForURL('**/dashboard');

  await page.context().storageState({ path: 'auth.json' });

});