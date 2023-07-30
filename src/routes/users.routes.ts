import { Router } from "express";
import {
  userCreateController,
  userRetrieveController,
} from "../controllers/users.controllers";
import { userSchema } from "../schemas/users.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateData } from "../middlewares/validateData.middleware";
import { verifyEmailUnique } from "../middlewares/verifyEmailUnique.middleware";
export const userRoutes: Router = Router();

userRoutes.post(
  "",
  verifyEmailUnique,
  validateData(userSchema),
  userCreateController
);
userRoutes.get("", verifyToken, userRetrieveController);
