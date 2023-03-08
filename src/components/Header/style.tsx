<<<<<<< Updated upstream
import { AppBar, styled, Toolbar, Typography } from '@mui/material';
=======
import { AppBar, Avatar, styled, Toolbar, Typography } from '@mui/material';
>>>>>>> Stashed changes

import { COLOR_PALETTE } from 'constants/theme';

export const HeaderContainer = styled(AppBar)`
  position: static;
  height: 119px;
  background-color: ${COLOR_PALETTE.primary};
`;

export const HeaderTitle = styled(Typography)`
  color: ${COLOR_PALETTE.deepPurple};
  font-family: 'Gwendolyn', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(36px, 1.3rem + 3.883vw, 96px);
  line-height: 115px;
`;

export const HeaderToolBar = styled(Toolbar)`
  justify-content: space-between;
`;

export const HeaderToolBar = styled(Toolbar)`
  justify-content: space-between;
`;
