export const isAvatarFromBack = (avatarUrl: string | null) => {
  if (avatarUrl === null) {
    return true;
  }
  return avatarUrl.includes('http');
};
