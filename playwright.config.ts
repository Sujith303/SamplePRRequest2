import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  //grep:/@sanity/,                              //specifying tag by sujith
  //grepInvert:/@regression/,                    //specifying tag by sujith
  //grep:/(?=.*@sanity)(?=.*@regression)/,       //specifying tag by sujith

  //To change the timeout globally for all the tests(default is 30000ms/30sec)....sujith
  //timeout: 60000,

  //To apply a longer wait for all expect conditions (default is 5000ms/5sec).....sujith
  //expect: { timeout: 10000 },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  //Retry locally
  //retries:3,  //.................................done by sujith

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  //workers:1,   //.................................done by sujith
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  //reporter: [[ 'html', {open:'always','outputFolder':'html-report'}]],................done by sujith
             //[['junit', {outputFile:'results.xml'}]],
             //[['json', {outputFile:'results.json'}]],
    //reporter:'allure-playwright',  //Configured allure reporter
    //reporter:[["allure-playwright" , {outputFolder : 'ReportFolderName'}]], //Created allure report folder with name ReportFolderName

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {


    //screenshot:'on',                   //Capture the screenshot......sujith
    //screenshot:'only-on-failure',    
    //video:'on',                        //Record the video...........sujith
    //video:'retain-on-failure',          
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    //viewport: { width: 1280, height: 720 },
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',  //Configured trace for failed test cases
    testIdAttribute: 'data-pw'  //Configured data-testid
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //fullyParallel: true,                       //To run in chromium only & disable firefox & webkit options
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
