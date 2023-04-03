import UsersRepository from "../../Domains/users/UsersRepository";
import { IUser } from "../../Domains/users/entities/User";
import { IUserRegisterd } from "../../Domains/users/entities/UserRegistered";
import database from "../database/mongoDB";

export default class UsersRepositoryMongoDB extends UsersRepository {
  private db: typeof database;

  constructor(db: typeof database) {
    super();
    this.db = db;
  }

  async registerUser(payload: IUser): Promise<IUserRegisterd | Error | any> {
    const usersCollection = this.db.collection("users");
    await usersCollection.insertOne(payload);
  }
}
