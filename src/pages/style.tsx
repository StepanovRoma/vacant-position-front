import { Box, Button, styled, Typography } from '@mui/material';
import BackgroundImage from 'assets/BackgroundImage.svg';

import { COLOR_PALETTE } from 'constants/theme';

export const PageLayout = styled(Box)`
  min-height: calc(100vh - 119px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

export const HomeButton = styled(Button)`
  background-color: ${COLOR_PALETTE.primary};
  :hover {
    background-color: ${COLOR_PALETTE.darkPrimary};
  }
`;

export const NotFoundInfo = styled(Typography)`
  color: ${COLOR_PALETTE.deepPurple};
`;
