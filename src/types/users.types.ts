import { UsersResponse, User } from "../interfaces/user.interfaces";
import { Resume } from "../interfaces/files.interfaces";

export type UserActionTypes =
  | { type: "getUsers" }
  | { type: "getUsersSuccess"; payload: UsersResponse }
  | { type: "saveUser" }
  | { type: "saveUserSuccess"; payload: User }
  | { type: "updateUserSuccess"; payload: User }
  | { type: "deleteUser" }
  | { type: "deleteUserSuccess"; payload: User }
  | { type: "setUser"; payload: User }
  | { type: "showDeleteUser"; payload: boolean }
  | { type: "showUserDialog"; payload: boolean }
  | { type: "showImageDialog"; payload: boolean }
  | { type: "showFileDialog"; payload: boolean }
  | { type: "showViewFileDialog"; payload: boolean }
  | { type: "setFileName"; payload: string }
  | { type: "saveFile" }
  | { type: "saveFileSuccess"; payload: Resume }
  | { type: "setImage"; payload: string | Blob | ArrayBuffer | undefined }
  | { type: "setFilePath"; payload: string }
  | { type: "httpError"; payload?: string };
