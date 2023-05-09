import { TWhichFirst } from 'ducks/user/types';

export const getJobSearchRoles = (resume: boolean, vacancy: boolean) => {
  let array: TWhichFirst[] = [];
  if (resume) {
    array.push('resume');
  }
  if (vacancy) {
    array.push('vacancy');
  }
  if (array.length === 0) {
    array = ['resume', 'vacancy'];
  }
  return array;
};
