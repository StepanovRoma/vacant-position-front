import { Box, Button, styled, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { COLOR_PALETTE } from 'constants/theme';

export const PageLayout = styled(Box)`
  min-height: calc(100vh - 119px - 120px);
  margin: 60px 90px;
`;

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

export const InputField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${COLOR_PALETTE.primary};
    }
  }
  & .MuiFormLabel-root.Mui-focused {
    color: ${COLOR_PALETTE.primary};
  }
`;
