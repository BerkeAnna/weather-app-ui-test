const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://weather.casrd.de/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
