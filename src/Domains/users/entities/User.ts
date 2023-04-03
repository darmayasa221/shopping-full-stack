/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
export interface IUser {
  name: string;
  email: string;
  passowrd: string;
}

export default class User implements IUser {
  public name: string;

  public email: string;

  public passowrd: string;

  constructor(payload: IUser) {
    this.verifyPayload(payload);
    const { name, email, passowrd } = payload;
    this.name = name;
    this.email = email;
    this.passowrd = passowrd;
  }

  verifyPayload(payload: IUser) {
    const { name, email, passowrd } = payload;
    if (!name || !email || !passowrd) {
      throw new Error("USER.NOT_CONTAINT_NEEDED_PAYLOAD");
    }
  }
}
