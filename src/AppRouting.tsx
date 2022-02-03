import { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { LoginView } from "./views/auth/LoginView";
import { UsersView } from "./views/users/UsersView";

export const AppRouting = () => {
  const { isAuthenticated, dispatch } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("fake_access_token")) {
      dispatch({ type: "loginSuccess" });
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route element={<LoginView />} path="/login" />
        <Route element={<Navigate to="/login" />} path="*" />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<UsersView />} path="/users" />
      <Route element={<Navigate to="/users" />} path="*" />
    </Routes>
  );
};
