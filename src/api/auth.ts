import { Request, Response, NextFunction } from "express";

import UserService from "../services/user";

export default class AuthController {
  static async signup(req: Request, res: Response, next: NextFunction) {
    const service = new UserService();
    const data = await service.signup(req.body);
    res.send(data);
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    // Do something
  }
  static async logout(req: Request, res: Response, next: NextFunction) {
    // Do something
  }
}
