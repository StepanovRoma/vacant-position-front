import { Box, styled, Typography } from '@mui/material';

import { COLOR_PALETTE } from 'constants/theme';

export const MenuBox = styled(Box)`
  width: 250px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const VersionText = styled(Typography)`
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${COLOR_PALETTE.grey};
`;
