import { Router } from "express";
import { uploadDoc } from "../config/multer";
import { normalizeDataMiddleware } from "../middlewares/normalizeData.middleware";
import {
  createAffiliatedRegistersController,
  listAffiliatedRegistersController,
} from "../controllers/affilieted.controller";
import { validateData } from "../middlewares/validateData.middleware";
import { affiliatedOperationArraySchema } from "../schemas/affilietedOperations.schema";

export const affiliatedRouter = Router();

affiliatedRouter.post(
  "/affiliated",
  uploadDoc.single("file"),
  normalizeDataMiddleware,
  validateData(affiliatedOperationArraySchema),
  createAffiliatedRegistersController
);

affiliatedRouter.get("/affiliated", listAffiliatedRegistersController);
