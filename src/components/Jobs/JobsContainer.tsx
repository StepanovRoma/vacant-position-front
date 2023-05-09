import React, { useEffect } from 'react';
import { Box, CircularProgress, Divider, Typography } from '@mui/material';
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

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {jobs.resume.length !== 0 && (
        <>
          <Typography variant="h5">{'Резюме'}</Typography>
          <Divider variant="fullWidth" style={{ width: '100%' }} />
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '48px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {jobs.resume.map(job =>
              isTableView ? (
                <TableResumeCard resume={job} key={job.id} />
              ) : (
                <ListResumeCard resume={job} key={job.id} />
              ),
            )}
          </Box>
        </>
      )}

      {jobs.vacancy.length !== 0 && (
        <>
          <Typography variant="h5">{'Вакансии'}</Typography>
          <Divider variant="fullWidth" style={{ width: '100%' }} />
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '48px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {jobs.vacancy.map(job =>
              isTableView ? (
                <TableResumeCard resume={job} key={job.id} />
              ) : (
                <ListResumeCard resume={job} key={job.id} />
              ),
            )}
          </Box>
        </>
      )}
    </Box>
  );
};
