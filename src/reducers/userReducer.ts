import { Links, Meta } from "../interfaces/pagination.interfaces";
import { User } from "../interfaces/user.interfaces";
import { UserActionTypes } from "../types/users.types";

export interface UsersState {
  loading: boolean;
  users: User[];
  links: Links;
  pagination: Meta;
}

export const USER_INITIAL_STATE: UsersState = {
  loading: false,
  users: [],
  links: {
    first: "",
    last: "",
    prev: "",
    next: "",
  },
  pagination: {
    current_page: 0,
    from: 0,
    last_page: 0,
    links: [],
    path: "",
    per_page: 0,
    to: 0,
    total: 0,
  },
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: UserActionTypes
): UsersState => {
  switch (action.type) {
    case "getUsers":
      return {
        ...state,
        loading: true,
      };
    case "getUsersSuccess":
      return {
        ...state,
        loading: false,
        users: action.payload.data,
        links: action.payload.links,
        pagination: action.payload.meta,
      };
    case "httpError":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
