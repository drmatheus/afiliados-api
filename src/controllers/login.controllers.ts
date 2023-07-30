import { Request, Response } from "express";
import { loginUserService } from "../services/login/login.service";
import { TToken } from "../interfaces";

export const loginCreateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: TToken = await loginUserService(req.body);

  return res.status(200).json(token);
};
