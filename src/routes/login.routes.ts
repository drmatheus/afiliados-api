import { Router } from "express";
import { loginSchema } from "../schemas/login.schema";
import { loginCreateController } from "../controllers/login.controllers";
import { validateData } from "../middlewares/validateData.middleware";

export const loginRoutes: Router = Router();

loginRoutes.post("", validateData(loginSchema), loginCreateController);
