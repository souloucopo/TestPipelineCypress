const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    projectId: "593m91",
    experimentalStudio: true,
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
  
});
