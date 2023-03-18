export interface ServerUserBodyResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServerExtendedUser {
  about: null | string;
  city: null | string;
  createdAt: string;
  email: string;
  experience: null | string;
  favourite: null | string;
  firstName: string;
  id: string;
  image: null | string;
  lastName: string;
  phone: null | string;
  status: boolean;
  tags: null | string;
  telegram: null | string;
  updatedAt: string;
  vkontakte: null | string;
  whatsapp: null | string;
}

export type TUser = ServerExtendedUser;
