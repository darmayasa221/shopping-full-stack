/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */

import { IUser } from "./User";

export interface IUserRegisterd extends IUser {
  _id: string;
}

export default class UserRegitered implements IUserRegisterd {
  public _id: string;

  public name: string;

  public email: string;

  public passowrd: string;

  constructor(payload: IUserRegisterd) {
    this.verifyPayload(payload);
    const { _id, name, email, passowrd } = payload;
    this._id = _id;
    this.name = name;
    this.email = email;
    this.passowrd = passowrd;
  }

  verifyPayload(payload: IUserRegisterd) {
    const { _id, name, email, passowrd } = payload;
    if (!_id || !name || !email || !passowrd) {
      throw new Error("USERREGISTERED.NOT_CONTAINT_NEEDED_PAYLOAD");
    }
  }
}
