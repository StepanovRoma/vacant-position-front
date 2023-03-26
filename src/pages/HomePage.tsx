import React, { useState } from 'react';
import { Box, CircularProgress, Grid, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useI18n } from 'hooks/useI18n';
import { useGetRandomQuoteQuery } from 'ducks/quote/api';
import { ListResumeCard, TableResumeCard } from 'components/Resume';

import { placeHolders } from 'constants/placeHolders';

import { useGetResumesQuery } from '../ducks/user/api';

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
  const { data: quote, isFetching: isFetchingQuote } = useGetRandomQuoteQuery();
  const [isTableView, setIsTableView] = useState(true);
  const {
    data: resumes,
    isFetching: isFetchingResumes,
    isSuccess,
    isError,
  } = useGetResumesQuery();

  //todo move in separate component
  if (!isSuccess || isFetchingResumes || isError) {
    return <CircularProgress />;
  }

  return (
    <>
      <HomePageContainer>
        <Box
          height="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          {isFetchingQuote ? (
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
          <Tooltip title={isTableView ? tr('table') : tr('list')} arrow>
            <SwitchViewButton
              onClick={() => {
                setIsTableView(prevState => !prevState);
              }}
            >
              {isTableView ? <FirstTableView /> : <SecondTableView />}
            </SwitchViewButton>
          </Tooltip>
        </Box>
        <Box>
          {isTableView ? (
            <Grid container spacing={6}>
              {resumes.resume.map(resume => (
                <Grid item key={resume.id}>
                  <TableResumeCard resume={resume} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={6}>
              {resumes.resume.map(item => (
                <Grid item key={item.id}>
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
