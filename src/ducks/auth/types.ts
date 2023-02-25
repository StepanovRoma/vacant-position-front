import { ServerUserResponse } from 'dtos/user';

export interface AuthState {
  user: ServerUserResponse | null;
  isInit: boolean;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface SignUpValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}
