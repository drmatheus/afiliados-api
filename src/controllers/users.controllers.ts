import { Request, Response } from "express";
import { createUserService } from "../services/user/user.create.service";
import { retrieveUserService } from "../services/user/user.retrieve.service";
import { User } from "../entities/user.entity";
import { TUserReturn } from "../interfaces";

export const userCreateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser: TUserReturn = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export const userRetrieveController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await retrieveUserService(res.locals.tokenData.sub);
  return res.status(200).json(user);
};
