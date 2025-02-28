class APIError extends Error {
    private statusCode: number;
    private errors: Error[];
    constructor(statusCode: number, message = "Something went wrong", errors = [], stack = ""){
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;

        if (stack) this.stack = stack;
        else Error.captureStackTrace(this, this.constructor);
    }
}

export default APIError;