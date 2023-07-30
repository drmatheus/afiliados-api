import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { userReturnSchema } from "../../schemas/users.schema";

export const retrieveUserService = async (userId: string) => {
  const userRepo = AppDataSource.getRepository(User);

  console.log(
    await userRepo.findOne({
      where: { id: userId },
      relations: {
        affiliatedOperations: true,
      },
    })
  );

  return userReturnSchema.parse(
    await userRepo.findOne({
      where: { id: userId },
      relations: {
        affiliatedOperations: true,
      },
    })
  );
};
