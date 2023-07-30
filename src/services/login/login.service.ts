import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { TLogin, TToken } from "../../interfaces";
import { AppError } from "../../error";

export const loginUserService = async (data: TLogin): Promise<TToken> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email: data.email });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const correctPass: boolean = await compare(data.password, user.password);

  if (!correctPass) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: user.id.toString(),
  });

  return { token: token };
};
