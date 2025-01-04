const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: true,
  e2e: {

    reporter: 'mochawesome', // Set mochawesome as the reporter
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-report', // Directory to save the report
      overwrite: false, // Whether to overwrite the previous report or not
      html: true, // Generates an HTML report
      json: true, // Generates a JSON report
      timestamp: 'yyyy-mm-dd_HH-MM-ss', 
      charts:true,
      embeddedScreenshots:true,
    },


    setupNodeEvents(on, config) {
      // implement node event listeners here
      const mochawesome = require('mochawesome');
      const mochawesomeMerge = require('mochawesome-merge');
      const { createReporter } = require('mochawesome-report-generator');

    },
    
   // defaultCommandTimeout: 10000, 
  },
});
