import { ServerUserBodyResponse } from 'dtos/user';

export interface AuthState {
  user: ServerUserBodyResponse | null;
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
  role: string;
  password: string;
  confirmPassword: string;
}
