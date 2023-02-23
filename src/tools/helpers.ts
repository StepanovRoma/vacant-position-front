export const getAuthToken = () => {
  return localStorage.getItem('authTokenVacantPosition');
};

export const setAuthToken = (authToken: string) => {
  localStorage.setItem('authTokenVacantPosition', authToken);
};

export const deleteAuthToken = () => {
  localStorage.removeItem('authTokenVacantPosition');
};
