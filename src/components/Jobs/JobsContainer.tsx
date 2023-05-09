import React, { useEffect } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { useLazyGetExtendedSearchJobsQuery } from 'ducks/user/api';
import { SearchParams } from 'components/Search/types';
import { ListResumeCard, TableResumeCard } from 'components/Resume';

import { getJobSearchRoles } from './helpers';

interface Props {
  isTableView: boolean;
  requiredParameter?: string;
  city?: string;
  extendedSearchParams: SearchParams;
}

export const JobsContainer = ({
  isTableView,
  requiredParameter,
  city,
  extendedSearchParams,
}: Props) => {
  const [getJobs, { data: jobs, isLoading: isLoadingResumes, isSuccess }] =
    useLazyGetExtendedSearchJobsQuery();

  useEffect(() => {
    const {
      resume,
      vacancy,
      lastName,
      firstName,
      payroll,
      position,
      experience,
    } = extendedSearchParams;
    getJobs({
      requiredParameter,
      city,
      whichFirst: getJobSearchRoles(resume, vacancy),
      lastName,
      firstName,
      payroll,
      position,
      experience,
    });
  }, [city, getJobs, requiredParameter, extendedSearchParams]);

  if (!isSuccess || isLoadingResumes || !jobs) {
    return <CircularProgress />;
  }

  const allJobs = [...jobs.resume, ...jobs.vacancy];

  return (
    <Box>
      {isTableView ? (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '48px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {allJobs.map(job => (
            <TableResumeCard resume={job} key={job.id} />
          ))}
        </Box>
      ) : (
        <Grid container spacing={6}>
          {allJobs.map(job => (
            <Grid item key={job.id}>
              <ListResumeCard resume={job} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
