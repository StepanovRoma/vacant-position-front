import {
  alpha,
  Box,
  Button,
  Divider,
  InputBase,
  styled,
  Typography,
} from '@mui/material';
import BackgroundImage from 'assets/BackgroundImage.svg';
import HomeBackgroundImage from 'assets/HomeBackground.svg';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

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

export const HomePageContainer = styled(Box)`
  height: 250px;
  background-image: url(${HomeBackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledQuote = styled(Typography)`
  padding: 0 50px;
  font-family: Open-sans, sans-serif;
  color: ${COLOR_PALETTE.white};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  @media (max-width: 790px) {
    font-size: 18px;
  }
`;

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.6),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '300px',
    [theme.breakpoints.up('md')]: {
      width: '600px',
    },
  },
}));

export const SearchButtons = styled(Button)`
  border-radius: 10px;
  font-size: 12px;
  background-color: #d9d9d9;
  color: ${COLOR_PALETTE.black};
  :hover {
    background-color: ${COLOR_PALETTE.darkPrimary};
  }
`;

export const StyledDivider = styled(Divider)`
  background-color: #d9d9d9;
  border-width: 1.5px;
`;

export const SearchCityContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 790px) {
    display: none;
  }
`;

export const HomePageLayout = styled(Box)`
  margin: 60px 90px;
  min-height: calc(100vh - 119px - 250px - 120px);
  @media (max-width: 790px) {
    margin: 60px 37.5px;
  }
`;

export const FirstTableView = styled(ViewCompactIcon)``;

export const SecondTableView = styled(ViewHeadlineIcon)``;

export const UserName = styled(Typography)`
  font-size: clamp(16px, 0.4rem + 3.883vw, 60px);
`;
