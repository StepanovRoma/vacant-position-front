import React, { useState } from 'react';
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material';
import { LoginRounded, Logout, Settings } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useI18n } from 'hooks/useI18n';
import { useLazyGetMeQuery } from 'ducks/auth/api';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'ducks/auth';
import { selectImage, selectIsAuth, selectMeId } from 'ducks/auth/selectors';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import { API_BASE_URL } from 'constants/endpoints';

import { AvatarContainer } from './style';

export const AvatarWithMenu = () => {
  const avatarMenuTr = useI18n('avatarMenuItems');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [logoutMe] = useLazyGetMeQuery();
  const dispatch = useDispatch();
  const hasData = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const userId = useSelector(selectMeId);
  const image = useSelector(selectImage);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
    logoutMe(true);
  };

  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <AvatarContainer
          src={image ? `${API_BASE_URL}/media/${image}` : undefined}
        />
      </IconButton>
      {hasData ? (
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          onClick={handleClose}
        >
          <MenuItem
            onClick={() => {
              navigate(`${ROUTES.USER}/${userId}`);
              handleClose();
            }}
          >
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            {avatarMenuTr('profile')}
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              navigate(`${ROUTES.SETTINGS}`);
              handleClose();
            }}
          >
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            {avatarMenuTr('settings')}
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            {avatarMenuTr('logout')}
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          onClick={handleClose}
        >
          <MenuItem onClick={handleLogin}>
            <ListItemIcon>
              <ListItemIcon>
                <LoginRounded fontSize="small" />
              </ListItemIcon>
              {avatarMenuTr('login')}
            </ListItemIcon>
          </MenuItem>
        </Menu>
      )}
    </>
  );
};
