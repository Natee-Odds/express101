import express from "express";
import { UserController } from "../controllers/user.controllers";

export const userRoutes = express.Router();

userRoutes.post("", new UserController().createUser);
