import { AuthActionTypes } from "../types/auth.types";

export interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
}
export const AUTH_INITIAL_STATE: AuthState = {
  loading: false,
  isAuthenticated: false,
};

export const authReducer = (
  state = AUTH_INITIAL_STATE,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case "login":
    case "logout":
      return {
        ...state,
        loading: true,
      };
    case "loginSuccess":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    case "logoutSuccess":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
