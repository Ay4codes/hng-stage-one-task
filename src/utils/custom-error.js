const logger = require('../logger');
const response = require('./response')

class customErr {
    async customResponse (status, message, reason, data) {
        return {
            status: status ? status : true,
            reason: reason,
            message: message,
            data: data
        }
    }

    async customTooManyReqErr (err, req, res, next) {
        if (err instanceof RateLimitError) {
            logger.error(`Too many request`);
            return res.status(429).send(response(false, 'Too many request'));
        }
        next();
    }

    async customErrLogger (message, reason, origin) {
        return {
            message: message,
            reason: reason,
            origin: origin
        }
    }
}

module.exports = new customErr