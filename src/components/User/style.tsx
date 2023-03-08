import { Avatar, Box, styled, Typography } from '@mui/material';

import { COLOR_PALETTE } from 'constants/theme';

export const StyledAvatar = styled(Avatar)`
  width: 300px;
  height: 300px;
`;

export const AvatarContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const EditLink = styled(Typography)`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: ${COLOR_PALETTE.darkPrimary};
`;

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 90px;
  height: 100%;
  align-items: start;
  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const UserProfileContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 790px) {
    align-items: center;
  }
`;

export const TagContainer = styled(Box)`
  border-radius: 15px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid ${COLOR_PALETTE.darkPrimary};
`;