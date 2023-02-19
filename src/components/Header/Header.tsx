import React from 'react';
import { useI18n } from 'hooks/useI18n';
import { Box } from '@mui/material';

import { HeaderAvatar, HeaderContainer, HeaderTitle } from './style';

export const Header = () => {
  const tr = useI18n('general');
  return (
    <HeaderContainer>
      {/*todo add menu*/}
      <Box>{'Menu'}</Box>
      <HeaderTitle>{tr('applicationName')}</HeaderTitle>
      {/*todo work with avatar and dd*/}
      <HeaderAvatar />
    </HeaderContainer>
  );
};
