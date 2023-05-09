import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useI18n } from 'hooks/useI18n';
import { useGetRandomQuoteQuery } from 'ducks/quote/api';
import { JobsContainer } from 'components/Jobs/JobsContainer';
import { useSelector } from 'react-redux';
import { selectIsAuth, selectUserCity } from 'ducks/auth/selectors';
import { ExtendedSearch } from 'components/Search/Search';
import { SearchParams } from 'components/Search/types';
import { defaultExtendedSearch } from 'components/Search/helpers';

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
  SwitchViewButton,
} from './style';

export const HomePage = () => {
  const tr = useI18n('home');
  const { data: quote, isFetching: isFetchingQuote } = useGetRandomQuoteQuery();
  const [isTableView, setIsTableView] = useState(true);
  const [searchState, setSearchState] = useState<undefined | string>();
  const [requiredParameter, setRequiredParameter] = useState<
    undefined | string
  >();
  const userCity = useSelector(selectUserCity);
  const [city, setCity] = useState<undefined | string>();
  const isAuth = useSelector(selectIsAuth);
  const [isExtendedSearchOpen, setIsExtendedSearchOpen] =
    useState<boolean>(false);
  const [extendedSearchParams, setExtendedSearchParams] =
    useState<SearchParams>(defaultExtendedSearch);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      setSearchState(undefined);
    } else {
      setSearchState(event.target.value);
    }
  };

  const handleClickCity = (city?: string) => {
    if (city !== null) {
      setCity(city);
    }
  };

  const handleToggleExtendedSearch = () => {
    setIsExtendedSearchOpen(prevState => !prevState);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => setRequiredParameter(searchState), 300);
    return () => clearTimeout(timeOutId);
  }, [searchState]);

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
            <StyledInputBase
              placeholder={tr('searchPlaceHolder')}
              onChange={handleSearchChange}
            />
          </Search>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <SearchButtons
              variant="contained"
              onClick={handleToggleExtendedSearch}
            >
              {tr('extendedSearch')}
            </SearchButtons>
            <SearchCityContainer>
              <SearchButtons
                variant="contained"
                onClick={() => handleClickCity()}
              >
                {tr('allCities')}
              </SearchButtons>
              {isAuth && (
                <>
                  <StyledDivider orientation="vertical" flexItem />
                  {userCity && (
                    <SearchButtons
                      variant="contained"
                      value="Новосибирск"
                      onClick={() => handleClickCity(userCity)}
                    >
                      {userCity}
                    </SearchButtons>
                  )}
                  <SearchButtons variant="contained" disabled>
                    {tr('difCity')}
                  </SearchButtons>
                </>
              )}
            </SearchCityContainer>
          </Box>
        </Box>
      </HomePageContainer>
      <HomePageLayout display="flex" flexDirection="column" alignItems="center">
        {isExtendedSearchOpen && (
          <ExtendedSearch
            handleCloseSearch={handleToggleExtendedSearch}
            setExtendedSearchParams={setExtendedSearchParams}
            extendedSearchParams={extendedSearchParams}
          />
        )}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          width="100%"
        >
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
        <JobsContainer
          isTableView={isTableView}
          requiredParameter={requiredParameter}
          city={city}
          extendedSearchParams={extendedSearchParams}
        />
      </HomePageLayout>
    </>
  );
};
