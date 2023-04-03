import { NextFunction, Request, Response } from "express";
import container from "../../../../Infrastructures/container";

export interface IUsersHandler {
  registerUserHandler(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any>;
}
export default class UsersHandler implements IUsersHandler {
  private useCase: typeof container;

  constructor(useCase: typeof container) {
    this.useCase = useCase;
    this.registerUserHandler = this.registerUserHandler.bind(this);
  }

  async registerUserHandler(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const user = await this.useCase.registerUserUseCase.execute(req.body);
    console.log(user);
    if (user instanceof Error) {
      next(user);
    } else {
      res.status(201).json({
        status: "success",
        message: "register success",
      });
    }
  }
}
