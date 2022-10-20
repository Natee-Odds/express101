import { NextFunction, Request, Response } from "express";
import { User } from "../generated/client";
import { logger } from "../logger";
import { UserModel } from "../models/user.models";
import { UserServices } from "../services/user.services";

class UserController {
  constructor(private readonly userService = new UserServices()) {}

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.body;
    try {
      const rs = await this.userService.create(user);
      return res.status(201).json(new UserModel(rs).toJson);
    } catch (err) {
      logger.error(err);
      next(err);
    }
  };
}

export { UserController };
