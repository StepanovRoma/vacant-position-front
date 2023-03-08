export const ROUTES = {
  HOME: '/',
<<<<<<< Updated upstream
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
=======
  ME: '/me',
  RESUME: '/resume',
  VACANCY: '/vacancy',
};

export const MENU = [
  { pageName: 'profile', route: ROUTES.ME },
>>>>>>> Stashed changes
  { pageName: 'mainPage', route: ROUTES.HOME },
  { pageName: 'myResumes', route: ROUTES.RESUME },
  { pageName: 'myVacancies', route: ROUTES.VACANCY },
];
