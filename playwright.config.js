// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  timeout : 90 * 1000,
  expect : {
    timeout: 70000
  },

  reporter : 'html',

  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
     trace : 'on'
  }


};


module.exports = config;
