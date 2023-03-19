import React, { useState } from 'react';
import { Box, CircularProgress, Grid, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useI18n } from 'hooks/useI18n';
import { useGetRandomQuoteQuery } from 'ducks/quote/api';

import { placeHolders } from 'constants/placeHolders';

import { ListResumeCard, TableResumeCard } from '../components/Resume';

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
  SwitchViewButton,
} from './style';

export const HomePage = () => {
  const tr = useI18n('home');
  const { data: quote, isLoading } = useGetRandomQuoteQuery();
  const [isTableView, setIsTableView] = useState(true);

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
            <SwitchViewButton
              $view={!isTableView}
              onClick={() => {
                setIsTableView(true);
              }}
            >
              <FirstTableView />
            </SwitchViewButton>
          </Tooltip>
          <Tooltip title={tr('list')} arrow>
            <SwitchViewButton
              $view={isTableView}
              onClick={() => {
                setIsTableView(false);
              }}
            >
              <SecondTableView />
            </SwitchViewButton>
          </Tooltip>
        </Box>
        <Box>
          {isTableView ? (
            <Grid container spacing={6}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                <Grid item key={item}>
                  <TableResumeCard />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={6}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                <Grid item key={item}>
                  <ListResumeCard />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </HomePageLayout>
    </>
  );
};
