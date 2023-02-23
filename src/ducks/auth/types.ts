export interface AuthState {
  userId: string | null;
  isInit: boolean;
}

export interface LoginValues {
  email: string;
  password: string;
}
