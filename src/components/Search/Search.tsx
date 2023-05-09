import React from 'react';
import { Box, Button, Checkbox, FormControlLabel } from '@mui/material';
import { InputField } from 'ui/style';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { isEqual } from 'lodash';

import { COLOR_PALETTE } from 'constants/theme';

import { useI18n } from '../../hooks/useI18n';

import { SearchParams } from './types';
import { defaultExtendedSearch } from './helpers';

interface Props {
  handleCloseSearch: () => void;
  setExtendedSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>;
  extendedSearchParams: SearchParams;
}

export const ExtendedSearch = ({
  handleCloseSearch,
  setExtendedSearchParams,
  extendedSearchParams,
}: Props) => {
  const { control, handleSubmit, reset } = useForm<SearchParams>({
    defaultValues: extendedSearchParams,
  });

  const tr = useI18n('search');

  const handleCancelClick = () => {
    handleCloseSearch();
  };

  const handleClearClick = () => {
    setExtendedSearchParams(defaultExtendedSearch);
    reset(defaultExtendedSearch);
  };

  const handleConfirmClick: SubmitHandler<SearchParams> = data => {
    if (!isEqual(data, extendedSearchParams)) {
      setExtendedSearchParams({ ...data });
    }
    handleCloseSearch();
  };

  return (
    <Box
      style={{
        border: `1px solid ${COLOR_PALETTE.lightGrey}`,
        borderRadius: '4px',
        marginBottom: '36px',
        maxWidth: '50wh',
      }}
    >
      <form onSubmit={handleSubmit(handleConfirmClick)}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '24px',
            padding: '16px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('firstName')}
                {...field}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('lastName')}
                {...field}
              />
            )}
          />

          <Controller
            name="payroll"
            control={control}
            render={({ field }) => (
              <InputField autoComplete="off" label={tr('payroll')} {...field} />
            )}
          />

          <Controller
            name="experience"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('experience')}
                {...field}
              />
            )}
          />

          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('position')}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} checked={field.value} />}
                label={tr('resume')}
              />
            )}
            name="resume"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} checked={field.value} />}
                label={tr('vacancy')}
              />
            )}
            name="vacancy"
          />
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Button onClick={handleCancelClick}>{tr('cancel')}</Button>
          <Button onClick={handleClearClick}>{tr('clear')}</Button>
          <Button type="submit">{tr('confirm')}</Button>
        </Box>
      </form>
    </Box>
  );
};
