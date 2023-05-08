import {
  Box,
  FormLabel,
  Radio,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import { COLOR_PALETTE } from 'constants/theme';

export const PageLayout = styled(Box)`
  min-height: calc(100vh - 119px - 120px);
  margin: 60px 90px;
  @media (max-width: 790px) {
    min-height: calc(100vh - 119px - 60px);
    margin: 20px 30px;
  }
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

export const PageTitle = styled(Typography)`
  width: 100%;
  font-size: 32px;
`;

export const ColoredFormLabel = styled(FormLabel)`
  &.MuiFormLabel-root.Mui-focused {
    color: ${COLOR_PALETTE.darkPrimary};
  }
`;

export const ColoredRadio = styled(Radio)`
  &.MuiRadio-colorPrimary.Mui-checked {
    color: ${COLOR_PALETTE.darkPrimary};
  }
`;
