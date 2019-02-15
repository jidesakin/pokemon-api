class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ApiError';
        this.status = 503;
    }
}

module.exports = ApiError;
