import { Request, Response, NextFunction } from "express";

export const catchAsyncAction = (fn: (req: Request, res: Response, next: NextFunction) => Promise<Response>) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch((err: Error) => {
      console.log("ERROR-------", err);
      return res.status(400).json({ error: err.message });
    });
  };
};
