import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: 4,
  testDir: './tests',
  reporter: 'html',

  use: {
    baseURL: 'https://brightbud.ai',
    headless: true,   // important for CI
    trace: 'on-first-retry'
  }
});