import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { backendApi } from "../api/backendApi";
import { UserResponse, UsersResponse } from "../interfaces/user.interfaces";
import { UsersState } from "../reducers/userReducer";
import { UserActionTypes } from "../types/users.types";

export interface UseUserProps {
  getUsers: (path: string, params?: Object) => void;
  deleteUser: (id: number) => void;
  handleOpenDeleteUser: (id: number) => void;
  handleCloseDeleteUser: () => void;
  handleOpenCreateUser: () => void;
  handleClosUserDialog: () => void;
  onChangeUser: (e: ChangeEvent<{ name?: string; value: unknown }>) => void;
  saveUser: (e: FormEvent<HTMLFormElement>) => void;
  handleShowUpdateUser: (id: number) => void;
  hanbleOpenImageModal: (id: number) => void;
  handleCloseImgeModal: () => void;
  handleUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  saveImage: () => void;
}

export const useUser = (
  state: UsersState,
  dispatch: Dispatch<UserActionTypes>
): UseUserProps => {
  const [imageFile, setImageFile] = useState<File>();
  const getUsers = async (path: string, params?: Object) => {
    try {
      dispatch({ type: "getUsers" });
      const response = await backendApi.get<UsersResponse>(path, { params });
      dispatch({ type: "getUsersSuccess", payload: response.data });
    } catch (error) {
      dispatch({ type: "httpError" });
    }
  };

  const deleteUser = async (id: number) => {
    try {
      dispatch({ type: "deleteUser" });
      const response = await backendApi.delete<UserResponse>(`/user/${id}`);
      dispatch({ type: "deleteUserSuccess", payload: response.data.data });
    } catch (error) {
      dispatch({ type: "httpError" });
    }
  };

  const handleOpenDeleteUser = (id: number) => {
    const payload = state.users.find((user) => user.id === id);

    if (payload) {
      dispatch({ type: "setUSer", payload });
      dispatch({ type: "showDeleteUser", payload: true });
    }
  };

  const handleCloseDeleteUser = () => {
    dispatch({ type: "showDeleteUser", payload: false });
  };

  const handleClosUserDialog = () => {
    dispatch({ type: "showUserDialog", payload: false });
  };

  const handleOpenCreateUser = () => {
    dispatch({ type: "showUserDialog", payload: true });
  };

  const onChangeUser = (e: ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    dispatch({
      type: "setUSer",
      payload: { ...state.user, [name!]: `${value}` },
    });
  };

  const saveUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { user } = state;
      dispatch({ type: "saveUser" });

      if (user.id) {
        const response = await backendApi.put<UserResponse>(
          `/user/${user.id}`,
          user
        );
        dispatch({ type: "updateUserSuccess", payload: response.data.data });
      } else {
        const response = await backendApi.post<UserResponse>("/user", user);
        dispatch({ type: "saveUserSuccess", payload: response.data.data });
      }
    } catch (error) {
      dispatch({ type: "httpError" });
    }
  };

  const handleShowUpdateUser = async (id: number) => {
    const payload = state.users.find((user) => user.id === id);
    if (payload) {
      dispatch({ type: "setUSer", payload });
      dispatch({ type: "showUserDialog", payload: true });
    }
  };

  const hanbleOpenImageModal = (id: number) => {
    const payload = state.users.find((user) => user.id === id);
    if (payload) {
      dispatch({ type: "setUSer", payload });
      dispatch({ type: "showImageDialog", payload: true });
    }
  };

  const handleCloseImgeModal = () => {
    dispatch({ type: "showImageDialog", payload: false });
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        if (e.target?.result) {
          dispatch({ type: "setImage", payload: e.target.result });
        }
      };
    }
  };

  const saveImage = async () => {
    try {
      const formData = new FormData();
      dispatch({ type: "saveUser" });
      if (state.user.id) {
        formData.append("userId", `${state.user.id}`);
        formData.append("image", imageFile!);
        const response = await backendApi.post<UserResponse>(
          "/photo",
          formData
        );
        dispatch({ type: "updateUserSuccess", payload: response.data.data });
      }
    } catch (error) {
      dispatch({ type: "httpError" });
    }
  };

  return {
    getUsers,
    deleteUser,
    handleOpenDeleteUser,
    handleCloseDeleteUser,
    handleOpenCreateUser,
    handleClosUserDialog,
    onChangeUser,
    saveUser,
    handleShowUpdateUser,
    hanbleOpenImageModal,
    handleCloseImgeModal,
    handleUpload,
    saveImage,
  };
};
