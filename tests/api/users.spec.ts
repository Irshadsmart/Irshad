import { test, expect } from '@playwright/test';

test('BrightBud homepage API', async ({ request }) => {

  const response = await request.get('https://brightbud.ai');

  expect(response.status()).toBeGreaterThan(0);

});