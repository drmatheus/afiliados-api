import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

export const listAffiliatedOperationService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userOperations = await userRepository.findOne({
    where: { id: userId },
    relations: { affiliatedOperations: true },
  });

  if (userOperations) return userOperations.affiliatedOperations;
  return [];
};
