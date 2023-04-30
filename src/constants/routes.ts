export const ROUTES = {
  HOME: '/',
  RESUME: '/resume',
  VACANCY: '/vacancy',
  PAGE_404: '*',
  LOGIN: '/login',
  REGISTER: '/register',
  USER: '/user',
  SETTINGS: '/settings',
  CREATE_RESUME: '/resume/create',
  EDIT_RESUME: '/resume/edit',
};

export const MENU = [
  { pageName: 'profile', route: ROUTES.USER },
  { pageName: 'mainPage', route: ROUTES.HOME },
  { pageName: 'myResumes', route: ROUTES.RESUME },
];
