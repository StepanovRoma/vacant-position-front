export interface ServerUserBodyResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServerUserResponse {
  user: ServerUserBodyResponse;
}

export type TUser = ServerUserBodyResponse;
