import React from 'react';
import { useI18n } from 'hooks/useI18n';
import { Menu } from 'components/Menu';
<<<<<<< Updated upstream
import { AvatarWithMenu } from 'components/AvatarWithMenu';

import { HeaderContainer, HeaderTitle, HeaderToolBar } from './style';
=======

import {
  HeaderAvatar,
  HeaderContainer,
  HeaderTitle,
  HeaderToolBar,
} from './style';
>>>>>>> Stashed changes

export const Header = () => {
  const tr = useI18n('general');
  return (
    <HeaderContainer>
      <HeaderToolBar>
        <Menu />
        <HeaderTitle>{tr('applicationName')}</HeaderTitle>
<<<<<<< Updated upstream
        <AvatarWithMenu />
=======
        {/*todo work with avatar and dd*/}
        <HeaderAvatar />
>>>>>>> Stashed changes
      </HeaderToolBar>
    </HeaderContainer>
  );
};
