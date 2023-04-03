import RegisterUserUseCase from "../Applications/useCase/RegisterUserUseCase";
import database from "./database/mongoDB";
import UsersRepositoryMongoDB from "./repository/UserRepositoryMongoDB";

const db = database;
const userRepository = new UsersRepositoryMongoDB(db);
const registerUserUseCase = new RegisterUserUseCase(userRepository);

const container = {
  registerUserUseCase,
};

export default container;
