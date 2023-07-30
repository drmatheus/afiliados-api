import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

export const verifyEmailUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (email) {
    const emailAlreadyRegistered = await AppDataSource.getRepository(
      User
    ).exist({
      where: { email: email },
    });

    if (emailAlreadyRegistered)
      throw new AppError("Email already registered", 409);
  }

  next();
};
