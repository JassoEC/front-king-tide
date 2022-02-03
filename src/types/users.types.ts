import { UsersResponse } from "../interfaces/user.interfaces";

export type UserActionTypes =
  | { type: "getUsers" }
  | { type: "getUsersSuccess"; payload: UsersResponse }
  | { type: "storeUser" }
  | { type: "httpError" };
