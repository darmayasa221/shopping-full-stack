import { IUsersRepository } from "../../Domains/users/UsersRepository";
import User, { IUser } from "../../Domains/users/entities/User";

export default class RegisterUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload: IUser) {
    const user = new User(payload);
    return this.usersRepository.registerUser(user);
  }
}
