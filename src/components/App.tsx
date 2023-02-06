import React from 'react';
import { IntlProvider } from 'react-intl';
import ruMessages from 'translations/ru.json';
import { flattenMessages } from 'tools/intl';

import { LOCALES } from 'constants/locales';

import { RoutesContainer } from './RoutesContainer';

export const locales = {
  ru: flattenMessages(ruMessages),
};

export const App = () => {
  return (
    <IntlProvider
      locale={LOCALES['ru']}
      defaultLocale="ru"
      messages={locales.ru}
    >
      <RoutesContainer />
    </IntlProvider>
  );
};
