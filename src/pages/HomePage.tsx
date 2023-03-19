import React from 'react';
import { Box, Button, CircularProgress, Grid, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useI18n } from 'hooks/useI18n';
import { useGetRandomQuoteQuery } from 'ducks/quote/api';

import { placeHolders } from 'constants/placeHolders';
import { COLOR_PALETTE } from 'constants/theme';

import { TableResumeCard } from '../components/Resume';

import {
  FirstTableView,
  HomePageContainer,
  HomePageLayout,
  Search,
  SearchButtons,
  SearchCityContainer,
  SearchIconWrapper,
  SecondTableView,
  StyledDivider,
  StyledInputBase,
  StyledQuote,
} from './style';

export const HomePage = () => {
  const tr = useI18n('home');
  const { data: quote, isLoading } = useGetRandomQuoteQuery();

  return (
    <>
      <HomePageContainer>
        <Box
          height="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <StyledQuote>
              {quote ? quote.quote : placeHolders.quote}
            </StyledQuote>
          )}
        </Box>
        <Box display="flex" flexDirection="column" gap="10px">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder={tr('searchPlaceHolder')} />
          </Search>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <SearchButtons variant="contained">
              {tr('extendedSearch')}
            </SearchButtons>
            <SearchCityContainer>
              <SearchButtons variant="contained">
                {tr('allCities')}
              </SearchButtons>
              <StyledDivider orientation="vertical" flexItem />
              <SearchButtons variant="contained">{'Новосибирск'}</SearchButtons>
              <SearchButtons variant="contained">{tr('difCity')}</SearchButtons>
            </SearchCityContainer>
          </Box>
        </Box>
      </HomePageContainer>
      <HomePageLayout display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" justifyContent="flex-end">
          <Tooltip title={tr('table')} arrow>
            <Button sx={{ minWidth: 'fit-content', color: `grey` }}>
              <FirstTableView />
            </Button>
          </Tooltip>
          <Tooltip title={tr('list')} arrow>
            <Button
              sx={{
                minWidth: 'fit-content',
                color: `${COLOR_PALETTE.darkPrimary}`,
              }}
            >
              <SecondTableView />
            </Button>
          </Tooltip>
        </Box>
        <Box>
          <Grid container spacing={6}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <Grid item key={item}>
                <TableResumeCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </HomePageLayout>
    </>
  );
};
