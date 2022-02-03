export type AuthActionTypes =
  | { type: "login" }
  | { type: "loginSuccess" }
  | { type: "logout" }
  | { type: "logoutSuccess" };
