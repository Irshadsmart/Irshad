import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  reporter: 'html',

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/
    },
    {
      name: 'chromium',
      use: {
        storageState: 'auth.json',
        headless: true
      },
      dependencies: ['setup']
    }
  ]

});