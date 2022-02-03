import { Links, Meta } from "./pagination.interfaces";

export interface UsersResponse {
  data: User[];
  links: Links;
  meta: Meta;
}

export interface User {
  id?: number;
  name: string;
  lastName: string;
  surName: string;
  fullName: string;
  rfc: string;
  birthday: string;
  profilePicture?: string;
  profilePicturePath?: string;
  email?: string;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserResponse {
  data: User;
  code?: number;
}
