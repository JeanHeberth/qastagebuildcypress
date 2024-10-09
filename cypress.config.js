const {defineConfig} = require("cypress");
const {allureCypress} = require("allure-cypress/reporter");

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/e2e.js',
        baseUrl: 'https://qastage.buildbox.one/18/cadastro',
        setupNodeEvents(on, config) {
            allureCypress(on, config);
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


