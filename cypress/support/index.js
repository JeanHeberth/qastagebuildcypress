require('cypress-grep')();

const cypressGrep = require('cypress-grep/src/plugin');

module.exports = (on, config) => {
    cypressGrep(config);
    return config;
};

