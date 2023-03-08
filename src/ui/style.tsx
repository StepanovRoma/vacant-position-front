import { Box, styled } from '@mui/material';

export const PageLayout = styled(Box)`
  min-height: calc(100vh - 119px - 120px);
  margin: 60px 90px;
  @media (max-width: 790px) {
    min-height: calc(100vh - 119px - 60px);
    margin: 20px 30px;
  }
`;
