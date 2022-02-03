import { UsersResponse, User } from "../interfaces/user.interfaces";

export type UserActionTypes =
  | { type: "getUsers" }
  | { type: "getUsersSuccess"; payload: UsersResponse }
  | { type: "saveUser" }
  | { type: "saveUserSuccess"; payload: User }
  | { type: "updateUserSuccess"; payload: User }
  | { type: "deleteUser" }
  | { type: "deleteUserSuccess"; payload: User }
  | { type: "setUSer"; payload: User }
  | { type: "showDeleteUser"; payload: boolean }
  | { type: "showUserDialog"; payload: boolean }
  | { type: "showImageDialog"; payload: boolean }
  | { type: "setImage"; payload: string | Blob | ArrayBuffer | undefined }
  | { type: "httpError" };
