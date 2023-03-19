import React from 'react';
import { IResume } from 'dtos/resume';

interface Props {
  resume: IResume;
}

export const ListResumeCard = ({ resume }: Props) => {
  return <>{resume.id}</>;
};
