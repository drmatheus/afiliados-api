import { Request, Response } from "express";
import { createAffiliatedOperationService } from "../services/operations/affiliatedOperation.create.service";
import { listAffiliatedOperationService } from "../services/operations/affiliatedOperation.list.service";

export const createAffiliatedRegistersController = async (
  req: Request,
  res: Response
) => {
  const operations = await createAffiliatedOperationService(
    res.locals.tokenData.sub,
    req.body
  );

  res.status(201).json(operations);
};

export const listAffiliatedRegistersController = async (
  req: Request,
  res: Response
) => {
  const operations = await listAffiliatedOperationService(
    res.locals.tokenData.sub
  );

  res.status(201).json(operations);
};
