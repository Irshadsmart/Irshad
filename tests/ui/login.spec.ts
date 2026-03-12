import { test } from '../../fixtures/testFixtures';
import { LoginPage } from '../../pages/LoginPage';

test('Login page loads', async ({ page }) => {

  const login = new LoginPage(page);

  await test.step('Open login page', async () => {
    await login.open();
  });

  await test.step('Verify login page loaded', async () => {
    await login.verifyLoginPage();
  });

});