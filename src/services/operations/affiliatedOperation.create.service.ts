import { AppDataSource } from "../../data-source";
import { AffiliatedOperations } from "../../entities/AffiliatedOperation";
import { User } from "../../entities/user.entity";

export const createAffiliatedOperationService = async (
  userId: string,
  incomingData: Array<{
    type: string;
    date: string;
    product: string;
    value: string;
    seller: string;
  }>
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user: User = await userRepository.findOneByOrFail({ id: userId });
  const savedData = [];
  const AffiliatedOperationRepository =
    AppDataSource.getRepository(AffiliatedOperations);

  for (const operation of incomingData) {
    const createdOperation: AffiliatedOperations =
      await AffiliatedOperationRepository.save({
        ...operation,
        user: user,
      });
    const { user: userData, ...newOp } = createdOperation;
    savedData.push(newOp);
  }

  return savedData;
};
