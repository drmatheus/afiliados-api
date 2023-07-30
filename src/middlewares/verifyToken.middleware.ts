import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { verify } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    throw new AppError("Missing bearer token", 401);
  }

  const token = req.headers.authorization.split(" ")[1];

  res.locals.tokenData = verify(token, process.env.SECRET_KEY!);

  next();
};
