import express from "express";
import { UserZodValidations } from "./user.validation";
import { UserController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(UserZodValidations.createUserValidationSchema),
  UserController.createUser
);

router.post(
  "/login-user",
  validateRequest(UserZodValidations.loginValidationSchema),
  UserController.loginUser
);

export const UserRoutes = router;
