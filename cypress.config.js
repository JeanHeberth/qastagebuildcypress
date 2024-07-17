const {defineConfig} = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
        // supportFile: 'cypress/support/e2e.js',
        // baseUrl: 'http://localhost:3000',
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
    },

    "video": true,
    "videosFolder": "cypress/videos",
    "screenshotsFolder": "cypress/screenshots",
    "viewportWidth": 1280,
    "viewportHeight": 720,
    "defaultCommandTimeout": 1000

});


