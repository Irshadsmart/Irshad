import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: 4

  testDir: './tests',

  reporter: 'html',

  use: {
    baseURL: 'https://brightbud.ai',
    headless: false,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }

});