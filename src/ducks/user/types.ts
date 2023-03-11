import { Tag } from 'dtos/tags';

export interface SettingsValues {
  firstName: string;
  lastName: string;
  city: string | null;
  experience: string | null;
  status: boolean;
  image: null;
  about: string | null;
  tags: Tag[] | null;
  vkontakte: string | null;
  telegram: string | null;
  phone: string | null;
  whatsapp: string | null;
}
