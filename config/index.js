var path = require('path')
module.exports = {
    build: {
        // ...
    },
    buildStaging: {
        env: require('./dev-staging.env.js'),
        // ...
    },
    buildProduction: {
        env: require('./prod.env'),
        // ...
    },
    devStaging: {
        env: require('./dev-staging.env'),
        port: 8090,
        // ...
    }
}