import React from 'react';
import { useI18n } from 'hooks/useI18n';
import { Menu } from 'components/Menu';
import { AvatarWithMenu } from 'components/AvatarWithMenu';

import { HeaderContainer, HeaderTitle, HeaderToolBar } from './style';

export const Header = () => {
  const tr = useI18n('general');
  return (
    <HeaderContainer position="sticky">
      <HeaderToolBar>
        <Menu />
        <HeaderTitle>{tr('applicationName')}</HeaderTitle>
        <AvatarWithMenu />
      </HeaderToolBar>
    </HeaderContainer>
  );
};
