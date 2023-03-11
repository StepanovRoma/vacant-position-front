export const ROUTES = {
  HOME: '/',
  RESUME: '/resume',
  VACANCY: '/vacancy',
  PAGE_404: '*',
  LOGIN: '/login',
  REGISTER: '/register',
  USER: '/user',
  SETTINGS: '/settings',
};

export const MENU = [
  { pageName: 'profile', route: ROUTES.USER },
  { pageName: 'mainPage', route: ROUTES.HOME },
  { pageName: 'myResumes', route: ROUTES.RESUME },
  { pageName: 'myVacancies', route: ROUTES.VACANCY },
];
