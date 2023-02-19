import React from 'react';
import { useI18n } from 'hooks/useI18n';
import { Menu } from 'components/Menu';

import {
  HeaderAvatar,
  HeaderContainer,
  HeaderTitle,
  HeaderToolBar,
} from './style';

export const Header = () => {
  const tr = useI18n('general');
  return (
    <HeaderContainer>
      <HeaderToolBar>
        <Menu />
        <HeaderTitle>{tr('applicationName')}</HeaderTitle>
        {/*todo work with avatar and dd*/}
        <HeaderAvatar />
      </HeaderToolBar>
    </HeaderContainer>
  );
};
