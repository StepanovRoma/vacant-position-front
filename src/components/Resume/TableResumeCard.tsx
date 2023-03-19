import React from 'react';
import { IResume } from 'dtos/resume';
import { CardContent, Grid, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';

import {
  ActionsContainer,
  AvatarContainer,
  CardContentContainer,
  CustomGrid,
  DateContainer,
  FavoriteButton,
  InfoContainer,
  MoreButton,
  ResumeCard,
  ResumeInfoContainer,
  TagContainer,
} from './style';

interface Props {
  resume?: IResume;
}

export const TableResumeCard = ({ resume }: Props) => {
  return (
    <ResumeCard>
      <CardContent>
        <CardContentContainer>
          <DateContainer>
            <Typography>{resume?.createdAt}</Typography>
          </DateContainer>
          <InfoContainer>
            <AvatarContainer variant="square" />
            <ResumeInfoContainer>
              <Typography>{'Виктор'}</Typography>
              <Typography>{resume?.position}</Typography>
              <Typography>{resume?.experience}</Typography>
              <Typography>{resume?.payroll}</Typography>
            </ResumeInfoContainer>
          </InfoContainer>
          <CustomGrid spacing={1} container>
            {resume?.tags?.map(tag => (
              <Grid key={tag.id} item>
                <TagContainer>{tag.tag}</TagContainer>
              </Grid>
            ))}
          </CustomGrid>
        </CardContentContainer>
      </CardContent>
      <ActionsContainer>
        <MoreButton variant="contained">{'Посмотреть резюме'}</MoreButton>
        <FavoriteButton>
          <Star />
        </FavoriteButton>
      </ActionsContainer>
    </ResumeCard>
  );
};
