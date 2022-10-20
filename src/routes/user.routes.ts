import express from "express";
import { UserController } from "../controllers/user.controllers";
import { verifyAPIKey } from "../middleware";

export const userRoutes = express.Router();

userRoutes.post("", verifyAPIKey(), new UserController().createUser);
