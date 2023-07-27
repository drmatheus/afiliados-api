import { AppDataSource } from "../data-source";
import { AffiliatedOperations } from "../entities/AffiliatedOperation";

export const listAffiliatedOperationService = async () => {
  const AffiliatedOperationRepository =
    AppDataSource.getRepository(AffiliatedOperations);
  return await AffiliatedOperationRepository.find();
};
