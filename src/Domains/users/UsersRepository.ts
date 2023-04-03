import { IUser } from "./entities/User";
import { IUserRegisterd } from "./entities/UserRegistered";

export interface IUsersRepository {
  registerUser: (payload: IUser) => Promise<IUserRegisterd | Error | any>;
}

export default abstract class UsersRepository implements IUsersRepository {
  async registerUser(payload: IUser): Promise<IUserRegisterd | Error | any> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}
