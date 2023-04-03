/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
export interface IUser {
  name: string;
  email: string;
  password: string;
}

export default class User implements IUser {
  public name: string;

  public email: string;

  public password: string;

  constructor(payload: IUser) {
    this.verifyPayload(payload);
    const { name, email, password } = payload;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  verifyPayload(payload: IUser) {
    const { name, email, password } = payload;
    if (!name || !email || !password) {
      throw new Error("USER.NOT_CONTAINT_NEEDED_PAYLOAD");
    }
  }
}
