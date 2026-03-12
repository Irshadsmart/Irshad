import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  workers: 2,

  use: {
    headless: true,
    baseURL: 'https://brightbud.ai',
    trace: 'on-first-retry'
  }
});