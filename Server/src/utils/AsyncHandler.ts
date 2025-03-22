import { NextFunction, Request, Response } from "express";
import APIResponse from "./APIResponse";
import APIError from "./APIError";

type requestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

const asyncHandler = (requestHandler: requestHandler) => {
    return (req: Request, res: Response ,next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch(err => next(err));
    }
}

export default asyncHandler;