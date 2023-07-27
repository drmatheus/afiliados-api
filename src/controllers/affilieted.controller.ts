import { Request, Response } from "express";
import { createAffiliatedOperationService } from "../services/affiliatedOperration.create.service";
import { listAffiliatedOperationService } from "../services/affiliatedOperration.list.service";

export const createAffiliatedRegistersController = async (
  req: Request,
  res: Response
) => {
  const operations = await createAffiliatedOperationService(
    res.locals.normalizedData
  );

  res.status(201).json(operations);
};

export const listAffiliatedRegistersController = async (
  req: Request,
  res: Response
) => {
  const operations = await listAffiliatedOperationService();

  res.status(201).json(operations);
};
