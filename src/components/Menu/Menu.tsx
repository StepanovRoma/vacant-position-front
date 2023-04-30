import React, { useState } from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useI18n } from 'hooks/useI18n';
import { useSelector } from 'react-redux';
import { selectMeId, selectRole } from 'ducks/auth/selectors';

import { MENU } from 'constants/routes';

import { MenuBox, VersionText } from './style';

export const Menu = () => {
  const versionTr = useI18n('general');
  const menuTr = useI18n('menuItems');
  const navigate = useNavigate();
  const userId = useSelector(selectMeId);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const role = useSelector(selectRole);
  const isCandidate = role === 'candidate';

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpenMenu(open);
    };

  const menu = MENU.map(menuItem => {
    if (menuItem.pageName === 'myResumes' && !isCandidate) {
      return { ...menuItem, pageName: 'myVacancies' };
    }
    return menuItem;
  });

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={isOpenMenu}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <MenuBox
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menu.map(menuItem => (
              <ListItem key={menuItem.pageName} disablePadding>
                <ListItemButton
                  onClick={() => {
                    if (menuItem.pageName === 'profile') {
                      return navigate(menuItem.route + `/${userId}`);
                    }
                    return navigate(menuItem.route);
                  }}
                >
                  <ListItemText primary={menuTr(menuItem.pageName)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            <ListItem>
              <ListItemText>
                <VersionText>{versionTr('version')}</VersionText>
              </ListItemText>
            </ListItem>
          </List>
        </MenuBox>
      </SwipeableDrawer>
    </>
  );
};
