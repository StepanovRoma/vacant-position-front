import { Tag } from './tags';

export interface IResume {
  firstName: string;
  lastName: string;
  id: string;
  userId: string;
  position: string | null;
  experience: string | null;
  payroll: string | null;
  createdAt: string;
  tags: Tag[] | null;
  about: string | null;
  preferContact: string | null;
  isVisible: boolean;
}

export interface ServerResumesResponse {
  count: number;
  resume: IResume[];
}
