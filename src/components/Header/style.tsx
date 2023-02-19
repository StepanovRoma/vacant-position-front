import { Avatar, Box, styled, Typography } from '@mui/material';

import { COLOR_PALETTE } from 'constants/theme';

export const HeaderContainer = styled(Box)`
  height: 119px;
  background-color: ${COLOR_PALETTE.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 33px;
`;

export const HeaderTitle = styled(Typography)`
  color: ${COLOR_PALETTE.deepPurple};
  font-family: 'Gwendolyn', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 115px;
`;

export const HeaderAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
`;
