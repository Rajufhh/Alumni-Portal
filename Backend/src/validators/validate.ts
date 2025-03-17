import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import APIError from "../utils/APIError";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) return next();

    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.type]: err.msg }));

    throw new APIError(422, "Invalid data received", extractedErrors);
};