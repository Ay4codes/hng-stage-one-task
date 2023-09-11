const ms = require('ms')
require('dotenv').config()

const config = {
    APP_NAME: "hng-task-one",
    domain: {
        URL: 'https://hng-task-one-o5um.onrender.com'
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