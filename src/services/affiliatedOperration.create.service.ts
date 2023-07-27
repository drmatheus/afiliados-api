import { AppDataSource } from "../data-source";
import { AffiliatedOperations } from "../entities/AffiliatedOperation";

export const createAffiliatedOperationService = async (
  incomingData: Array<{
    type: string;
    date: string;
    product: string;
    value: string;
    seller: string;
  }>
) => {
  const savedData = [];
  const AffiliatedOperationRepository =
    AppDataSource.getRepository(AffiliatedOperations);

  for (const operation of incomingData) {
    const createdOperation = await AffiliatedOperationRepository.save(
      operation
    );
    savedData.push(createdOperation);
  }

  return savedData;
};
