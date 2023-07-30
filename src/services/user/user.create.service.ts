import { hashSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { TUserCreate, TUserReturn } from "../../interfaces";
import { userReturnSchema } from "../../schemas/users.schema";

export const createUserService = async (
  data: TUserCreate
): Promise<TUserReturn> => {
  const userRepo = AppDataSource.getRepository(User);
  const userCreate = userRepo.create(data);
  return userReturnSchema.parse(await userRepo.save(userCreate));
};
