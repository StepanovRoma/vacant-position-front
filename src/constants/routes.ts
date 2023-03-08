export const ROUTES = {
  HOME: '/',
  ME: '/me',
  RESUME: '/resume',
  VACANCY: '/vacancy',
  PAGE_404: '*',
  LOGIN: '/login',
  REGISTER: '/register',
  USER: '/user',
  SETTINGS: '/settings',
};

export const MENU = [
  { pageName: 'profile', route: ROUTES.ME },
  { pageName: 'mainPage', route: ROUTES.HOME },
  { pageName: 'myResumes', route: ROUTES.RESUME },
  { pageName: 'myVacancies', route: ROUTES.VACANCY },
];
