// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // Папката со сите тестови
  timeout: 30000,
  reporter: 'list'
});