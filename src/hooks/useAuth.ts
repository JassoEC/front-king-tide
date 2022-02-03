import { Dispatch, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { AuthActionTypes } from "../types/auth.types";

export interface UseAuthProps {
  login: (e: FormEvent<HTMLFormElement>) => void;
  logout: () => void;
  hasToken: () => void;
}

export const useAuth = (dispatch: Dispatch<AuthActionTypes>): UseAuthProps => {
  const navigate = useNavigate();
  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });
    localStorage.setItem("fake_access_token", "fake_access_token_value");
    setTimeout(() => {
      dispatch({ type: "loginSuccess" });
      navigate("home");
    }, 1500);
  };

  const logout = () => {
    dispatch({ type: "logout" });
    setTimeout(() => {
      localStorage.removeItem("fake_access_token");
      dispatch({ type: "logoutSuccess" });
      navigate("login");
    }, 1500);
  };

  const hasToken = () => {
    dispatch({ type: "login" });
    setTimeout(() => {
      dispatch({ type: "loginSuccess" });
    }, 500);
  };

  return {
    login,
    logout,
    hasToken,
  };
};
