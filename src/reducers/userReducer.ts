import { Links, Meta } from "../interfaces/pagination.interfaces";
import { User } from "../interfaces/user.interfaces";
import { UserActionTypes } from "../types/users.types";

export interface UsersState {
  loading: boolean;
  users: User[];
  links: Links;
  pagination: Meta;
  user: User;
  showDeleteUser: boolean;
  showUserDialog: boolean;
  showImageDialog: boolean;
  image: string | Blob | ArrayBuffer | undefined;
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
  user: {
    name: "",
    lastName: "",
    fullName: "",
    surName: "",
    birthday: "",
    rfc: "",
  },
  showDeleteUser: false,
  showUserDialog: false,
  showImageDialog: false,
  image: "",
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: UserActionTypes
): UsersState => {
  switch (action.type) {
    case "getUsers":
    case "deleteUser":
    case "saveUser":
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
    case "deleteUserSuccess":
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== action.payload.id),
        showDeleteUser: false,
        pagination: {
          ...state.pagination,
          to: state.pagination.to - 1,
          total: state.pagination.total - 1,
        },
      };
    case "showDeleteUser":
      return {
        ...state,
        showDeleteUser: action.payload,
      };
    case "setUSer":
      return {
        ...state,
        user: action.payload,
      };
    case "showUserDialog":
      return {
        ...state,
        showUserDialog: action.payload,
      };
    case "saveUserSuccess":
      return {
        ...state,
        users: [action.payload, ...state.users],
        user: { ...USER_INITIAL_STATE.user },
        showUserDialog: false,
        loading: false,
        pagination: {
          ...state.pagination,
          to: state.pagination.to + 1,
          total: state.pagination.total + 1,
        },
      };
    case "updateUserSuccess":
      return {
        ...state,
        loading: false,
        showUserDialog: false,
        user: { ...USER_INITIAL_STATE.user },
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        showImageDialog: false,
      };
    case "showImageDialog":
      return {
        ...state,
        showImageDialog: action.payload,
      };
    case "setImage":
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};
