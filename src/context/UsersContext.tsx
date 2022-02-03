import { createContext, Dispatch, useReducer } from "react";
import { useUser, UseUserProps } from "../hooks/useUser";

import {
  userReducer,
  UsersState,
  USER_INITIAL_STATE,
} from "../reducers/userReducer";
import { UserActionTypes } from "../types/users.types";

interface ContextProps extends UseUserProps, UsersState {
  dispatch: Dispatch<UserActionTypes>;
}

interface Props {
  children: JSX.Element;
}

export const UsersContext = createContext({} as ContextProps);

export const UsersProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

  const context = useUser(state, dispatch);

  return (
    <UsersContext.Provider
      value={{
        dispatch,
        ...state,
        ...context,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
