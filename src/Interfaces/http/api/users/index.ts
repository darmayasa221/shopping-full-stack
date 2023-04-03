import { NextFunction, Request, Response } from "express";
import { Options } from "../../../../Types/apiType";
import routes from "./routes";
import UsersHandler from "./handler";

export default ({ router, container }: Options) => {
  return router.use((req: Request, res: Response, next: NextFunction) => {
    const usersHandler = new UsersHandler(container);
    routes({ router, handler: usersHandler });
    next();
  });
};
