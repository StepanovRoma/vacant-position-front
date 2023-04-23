import { Tag } from './tags';
import { IResume } from './resume';

export interface ServerUserBodyResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  image: null | string;
  role: 'organization' | 'candidate';
}

export interface ServerUserMeResponse {
  user: ServerUserBodyResponse;
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
  tags: Tag[];
  telegram: null | string;
  updatedAt: string;
  vkontakte: null | string;
  whatsapp: null | string;
  resumes: IResume[];
  role: 'candidate' | 'organization';
}

export type TUser = ServerExtendedUser;
