import express, {
  json,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import cors from "cors";
import morgan from "morgan";
import { ResponseErrorType } from "../../Types/apiType";
import users from "../../Interfaces/http/api/users";
import container from "../container";

const app = express();
const router = Router();
app.use([cors(), morgan("tiny"), json()]);

app.use("/api/users", users({ router, container }));

// error handler
app.use(
  (
    err: TypeError,
    req: Request,
    res: Response<ResponseErrorType>,
    next: NextFunction,
  ) => {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  },
);

app.all("*", (req, res) => {
  res.status(404).send("not found");
});

export default app;
