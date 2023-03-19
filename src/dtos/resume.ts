import { Tag } from './tags';

export interface IResume {
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
