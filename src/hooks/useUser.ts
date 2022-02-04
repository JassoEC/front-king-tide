import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { backendApi } from "../api/backendApi";
import { UserResponse, UsersResponse } from "../interfaces/user.interfaces";
import { UsersState } from "../reducers/userReducer";
import { UserActionTypes } from "../types/users.types";
import { ResumeResponse } from "../interfaces/files.interfaces";
import { useNavigate } from "react-router-dom";

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
  handleOpenFileModal: (id: number) => void;
  handleCloseFileModal: () => void;
  handleFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  saveFile: () => void;
  openViewFileModal: (path: string) => void;
  handleCloseViewFileModal: () => void;
  getUser: (id: string) => void;
  navigateToUser: (id: number) => void;
  navigateBack: () => void;
}

export const useUser = (
  state: UsersState,
  dispatch: Dispatch<UserActionTypes>
): UseUserProps => {
  const navigate = useNavigate();
  const [userFile, setUserFile] = useState<File>();

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
      dispatch({ type: "setUser", payload });
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
      type: "setUser",
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
      dispatch({ type: "setUser", payload });
      dispatch({ type: "showUserDialog", payload: true });
    }
  };

  const hanbleOpenImageModal = (id: number) => {
    const payload = state.users.find((user) => user.id === id);
    if (payload) {
      dispatch({ type: "setUser", payload });
      dispatch({ type: "showImageDialog", payload: true });
    }
  };

  const handleOpenFileModal = (id: number) => {
    const payload = state.users.find((user) => user.id === id);
    if (payload) {
      dispatch({ type: "setUser", payload });
      dispatch({ type: "showFileDialog", payload: true });
    } else {
      alert("neñ");
    }
  };

  const handleCloseFileModal = () => {
    dispatch({ type: "showFileDialog", payload: false });
  };

  const handleCloseImgeModal = () => {
    dispatch({ type: "showImageDialog", payload: false });
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setUserFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        if (e.target?.result) {
          dispatch({ type: "setImage", payload: e.target.result });
        }
      };
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setUserFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        if (e.target?.result) {
          dispatch({ type: "setFileName", payload: file.name });
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
        formData.append("image", userFile!);
        const response = await backendApi.post<UserResponse>(
          "/photo",
          formData
        );
        dispatch({ type: "updateUserSuccess", payload: response.data.data });
        setUserFile(undefined);
      }
    } catch (error) {
      dispatch({ type: "httpError" });
    }
  };

  const saveFile = async () => {
    try {
      const formData = new FormData();
      dispatch({ type: "saveFile" });
      if (state.user.id) {
        formData.append("userId", `${state.user.id}`);
        formData.append("resume", userFile!);
        const response = await backendApi.post<ResumeResponse>(
          "/file",
          formData
        );
        dispatch({ type: "saveFileSuccess", payload: response.data.data });

        setUserFile(undefined);
      }
    } catch (error: any) {
      dispatch({
        type: "httpError",
        payload: error?.response?.data?.errors?.resume[0],
      });
    }
  };

  const openViewFileModal = (path: string) => {
    dispatch({ type: "setFilePath", payload: path });
    dispatch({ type: "showViewFileDialog", payload: true });
  };

  const handleCloseViewFileModal = () => {
    dispatch({ type: "setFilePath", payload: "" });
    dispatch({ type: "showViewFileDialog", payload: false });
  };

  const getUser = async (id: string) => {
    try {
      const response = await backendApi.get<UserResponse>(`/user/${id}`);
      dispatch({ type: "setUser", payload: response.data.data });
    } catch (error) {
      dispatch({ type: "httpError" });
    }
  };

  const navigateToUser = (id: number) => {
    navigate(`/users/${id}`);
  };

  const navigateBack = () => {
    navigate(-1);
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
    handleOpenFileModal,
    handleCloseFileModal,
    handleFileUpload,
    saveFile,
    openViewFileModal,
    handleCloseViewFileModal,
    getUser,
    navigateToUser,
    navigateBack,
  };
};
