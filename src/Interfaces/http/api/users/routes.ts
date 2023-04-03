import { Routes } from "../../../../Types/apiType";
import { IUsersHandler } from "./handler";

const routes = ({ router, handler }: Routes<IUsersHandler>) => [
  router.post("/", handler.registerUserHandler),
];

export default routes;
