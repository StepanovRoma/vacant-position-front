import { FieldArrayWithId } from 'react-hook-form';
import { SettingsValues } from 'ducks/user/types';

export const getAuthToken = () => {
  return localStorage.getItem('authTokenVacantPosition');
};

export const setAuthToken = (authToken: string) => {
  localStorage.setItem('authTokenVacantPosition', authToken);
};

export const deleteAuthToken = () => {
  localStorage.removeItem('authTokenVacantPosition');
};

export const getSelectedTagsStyles = (
  tagName: string,
  tags: FieldArrayWithId<SettingsValues, 'tags', 'id'>[],
) => {
  const isSelected = tags.find(tempTag => tempTag.tag === tagName);
  return {
    backgroundColor: isSelected ? 'rgba(144, 202, 249, 0.16)' : 'inherit',
  };
};
