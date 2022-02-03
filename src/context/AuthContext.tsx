import { createContext, Dispatch, useReducer } from "react";
import { useAuth, UseAuthProps } from "../hooks/useAuth";
import {
  authReducer,
  AuthState,
  AUTH_INITIAL_STATE,
} from "../reducers/authReducer";
import { AuthActionTypes } from "../types/auth.types";

interface ContextProps extends UseAuthProps, AuthState {
  dispatch: Dispatch<AuthActionTypes>;
}

interface Props {
  children: JSX.Element;
}

export const AuthContext = createContext({} as ContextProps);

export const AuhtProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const context = useAuth(dispatch);

  return (
    <AuthContext.Provider value={{ ...state, ...context, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
