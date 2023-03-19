import React from 'react';
import { IResume } from 'dtos/resume';
import { CardActions, CardContent } from '@mui/material';

import { ResumeListCard } from './style';

interface Props {
  resume?: IResume;
}

export const ListResumeCard = ({ resume }: Props) => {
  return (
    <ResumeListCard>
      <CardContent>{resume?.id}</CardContent>
      <CardActions>{'Sasha'}</CardActions>
    </ResumeListCard>
  );
};
