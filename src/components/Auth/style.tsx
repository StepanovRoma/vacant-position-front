import { Box, Button, styled, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { COLOR_PALETTE } from 'constants/theme';

export const AuthContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 15px;
  min-height: calc(100vh - 119px - 120px);
`;

export const AuthButton = styled(Button)`
  background-color: ${COLOR_PALETTE.primary};
  :hover {
    background-color: ${COLOR_PALETTE.darkPrimary};
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: sans-serif;
`;

export const LinkContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const ErrorText = styled(Typography)`
  font-size: 12px;
  color: ${COLOR_PALETTE.error};
`;
