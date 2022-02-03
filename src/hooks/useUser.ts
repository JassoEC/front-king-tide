import { Dispatch } from "react";
import { UsersState } from "../reducers/userReducer";
import { UserActionTypes } from "../types/users.types";
import { backendApi } from "../api/backendApi";
import { UsersResponse } from "../interfaces/user.interfaces";

export interface UseUserProps {
  getUsers: (path: string, params?: object) => void;
}

export const useUser = (
  state: UsersState,
  dispatch: Dispatch<UserActionTypes>
): UseUserProps => {
  const getUsers = async (path: string, params?: object) => {
    try {
      const response = await backendApi.get<UsersResponse>(path, { params });
      dispatch({ type: "getUsersSuccess", payload: response.data });
    } catch (error) {}
  };

  return {
    getUsers,
  };
};
