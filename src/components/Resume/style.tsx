import { Box, Button, Card, Grid, styled } from '@mui/material';

import { COLOR_PALETTE } from 'constants/theme';

export const TagContainer = styled(Box)`
  border-radius: 15px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid ${COLOR_PALETTE.darkPrimary};
  background-color: ${COLOR_PALETTE.white};
`;

export const MoreButton = styled(Button)`
  background-color: ${COLOR_PALETTE.purple};
  width: 100%;
  border-radius: 10px;
  height: 26px;
  color: ${COLOR_PALETTE.black};
  :hover {
    background-color: ${COLOR_PALETTE.darkPurple};
  }
`;

export const CustomGrid = styled(Grid)`
  max-height: 88px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: inherit;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLOR_PALETTE.purple};
    border-radius: 20px;
  }
`;

export const ResumeCard = styled(Card)`
  min-width: 300px;
  width: 300px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLOR_PALETTE.cardPrimary};
`;

export const DateContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
