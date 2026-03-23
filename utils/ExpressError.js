class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message);   // ✅ pass message here
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;