import React, { useEffect } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { useLazyGetSearchJobsQuery } from 'ducks/user/api';

import { ListResumeCard, TableResumeCard } from '../Resume';

interface Props {
  isTableView: boolean;
  requiredParameter?: string;
  city?: string;
}

export const JobsContainer = ({
  isTableView,
  requiredParameter,
  city,
}: Props) => {
  const [getJobs, { data: jobs, isLoading: isLoadingResumes, isSuccess }] =
    useLazyGetSearchJobsQuery();

  useEffect(() => {
    getJobs({ requiredParameter, city });
  }, [city, getJobs, requiredParameter]);

  if (!isSuccess || isLoadingResumes || !jobs) {
    return <CircularProgress />;
  }

  const allJobs = [...jobs.resume, ...jobs.vacancy];

  return (
    <Box>
      {isTableView ? (
        <Grid container spacing={6}>
          {allJobs.map(job => (
            <Grid item key={job.id}>
              <TableResumeCard resume={job} />
            </Grid>
          ))}
        </Grid>
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
