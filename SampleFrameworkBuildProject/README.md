# Report Generate 

- cypress.config
reporter: 'mochawesome', // Set mochawesome as the reporter
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-report', // Directory to save the report
      overwrite: true, // Whether to overwrite the previous report or not
      html: true, // Generates an HTML report
      json: true, // Generates a JSON report
      timestamp: 'yyyy-mm-dd_HH-MM-ss', // Optional timestamp in the report name
    },

    