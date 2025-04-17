import { NextFunction, Request, Response } from "express";
import ErrorMessage from "./interfaces/ErrorResponse";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({
    status: "error",
    message: "Not Found",
  });
}
export function errorHandler(
  err: Error,
  req: Request,
  res: Response<ErrorMessage>,
  next: NextFunction
) {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: err.message,
    stack: err.stack,
  });
}
