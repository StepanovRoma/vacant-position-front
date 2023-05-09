import { Tag } from 'dtos/tags';
import { IResume } from 'dtos/resume';

export interface SettingsValues {
  firstName: string;
  lastName: string;
  city: string | null;
  experience: string | null;
  status: string;
  image: string | null;
  about: string | null;
  tags: Tag[] | null;
  vkontakte: string | null;
  telegram: string | null;
  phone: string | null;
  whatsapp: string | null;
  file: FileList;
}

export type TWhichFirst = 'resume' | 'vacancy';

export interface ExtendedSearchParams {
  requiredParameter?: string;
  city?: string;
  firstName?: string;
  lastName?: string;
  payroll?: string;
  experience?: string;
  position?: string;
  tags?: Tag[];
  isNew?: boolean;
  whichFirst: TWhichFirst | TWhichFirst[];
}

export interface ServerSearchResult {
  count: number;
  resume: IResume[];
  vacancy: IResume[];
}
