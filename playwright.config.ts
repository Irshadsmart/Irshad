import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Folder where tests exist
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  // Workers for parallel execution
  workers: process.env.CI ? 2 : undefined,

  // Reporter configuration
  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://brightbud.ai',

    // Headless in CI
    headless: true,

    // Capture debugging artifacts
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    // Default timeout settings
    actionTimeout: 10000,
    navigationTimeout: 30000
  },

  // Multi-browser testing
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]

});