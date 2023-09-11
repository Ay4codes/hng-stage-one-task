const ms = require('ms')
require('dotenv').config()

const config = {
    APP_NAME: "hng-task-one",
    domain: {
        API: 'https://api.hng-task-one.com',
        WEB: 'https://hng-task-one.com'
    },
    roles: {
        USER: ["user", "admin"],
        ADMIN: ["admin"],
    },
    sentry: {
        DSN: process.env.SENTRY_DSN,
    },
};

// console.log("CONFIGS:", CONFIGS); --->>> to check if config is set
module.exports = config;