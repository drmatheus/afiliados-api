import { Router } from "express";
import { uploadDoc } from "../config/multer";
import { normalizeDataMiddleware } from "../middlewares/normalizeData.middleware";
import {
  createAffiliatedRegistersController,
  listAffiliatedRegistersController,
} from "../controllers/affilieted.controller";
import { validateData } from "../middlewares/validateData.middleware";
import { affiliatedOperationArraySchema } from "../schemas/affilietedOperations.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const affiliatedRouter = Router();

affiliatedRouter.post(
  "",
  verifyToken,
  uploadDoc.single("file"),
  normalizeDataMiddleware,

  validateData(affiliatedOperationArraySchema),
  createAffiliatedRegistersController
);

affiliatedRouter.get("", verifyToken, listAffiliatedRegistersController);
