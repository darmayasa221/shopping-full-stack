import { Router } from "express";
import container from "../Infrastructures/container";

export type ResponseErrorType = {
  status: string;
  message: string;
};

export type Options = {
  router: Router;
  container: typeof container;
};

export type Routes<T> = Pick<Options, "router"> & {
  handler: T;
};
