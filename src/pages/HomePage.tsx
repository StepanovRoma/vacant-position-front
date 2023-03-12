import React from 'react';
import { Box, Button, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useI18n } from 'hooks/useI18n';
import { useGetRandomQuoteQuery } from 'ducks/quote/api';

import { placeHolders } from 'constants/placeHolders';

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
  const { data: quote } = useGetRandomQuoteQuery();
  return (
    <>
      <HomePageContainer>
        <Box
          height="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <StyledQuote>{quote ? quote.quote : placeHolders.quote}</StyledQuote>
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
            <Button sx={{ minWidth: 'fit-content' }}>
              <FirstTableView $selected />
            </Button>
          </Tooltip>
          <Tooltip title={tr('list')} arrow>
            <Button sx={{ minWidth: 'fit-content' }}>
              <SecondTableView $selected={false} />
            </Button>
          </Tooltip>
        </Box>
        <Box>{'Resumes'}</Box>
      </HomePageLayout>
    </>
  );
};
