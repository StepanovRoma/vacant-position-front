import React from 'react';
import { IResume } from 'dtos/resume';
import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { Star } from '@mui/icons-material';
import { useI18n } from 'hooks/useI18n';

import { ROUTES } from 'constants/routes';
import { API_BASE_URL } from 'constants/endpoints';

import {
  ActionContainer,
  AvatarListContainer,
  CardInfoListContainer,
  ContentContainerListCard,
  FavoriteButton,
  Link,
  ListAvatar,
  ListCardContainer,
  ListCustomGrid,
  LongAboutContainer,
  LongWordContainer,
  MoreButton,
  ResumeListCard,
  TagContainer,
} from './style';

interface Props {
  resume: IResume;
  isMy?: boolean;
}

export const ListResumeCard = ({ resume }: Props) => {
  const navigate = useNavigate();
  const isCandidate = resume.role === 'candidate';
  const fullName = !isCandidate
    ? resume.firstName
    : `${resume.firstName} ${resume.lastName}`;
  const tr = useI18n('resume');
  return (
    <ResumeListCard>
      <ListCardContainer>
        <AvatarListContainer>
          <ListAvatar
            variant="square"
            src={
              resume.image ? `${API_BASE_URL}/media/${resume.image}` : undefined
            }
            alt={resume.firstName}
          />
          <Link to={`${ROUTES.USER}/${resume.userId}`}>
            {tr('linkToProfile')}
          </Link>
        </AvatarListContainer>
        <ContentContainerListCard>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <ListCustomGrid spacing={1} container>
              {resume.tags?.map(tag => (
                <Grid key={tag.id} item>
                  <TagContainer>{tag.tag}</TagContainer>
                </Grid>
              ))}
            </ListCustomGrid>
            <Box>{format(new Date(resume.createdAt), 'dd.MM.yyyy')}</Box>
          </Box>

          <CardInfoListContainer>
            <Box>
              <LongWordContainer>{fullName}</LongWordContainer>
              <LongWordContainer>{resume.position}</LongWordContainer>
              <LongWordContainer>{resume.experience}</LongWordContainer>
              <LongWordContainer>{resume.payroll}</LongWordContainer>
            </Box>
            <LongAboutContainer>{resume.about}</LongAboutContainer>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <ActionContainer>
                <MoreButton
                  variant="contained"
                  onClick={() => {
                    navigate(`${ROUTES.RESUME}/${resume.id}`);
                  }}
                >
                  {tr('detail')}
                </MoreButton>
                <FavoriteButton>
                  <Star />
                </FavoriteButton>
              </ActionContainer>
            </Box>
          </CardInfoListContainer>
        </ContentContainerListCard>
      </ListCardContainer>
    </ResumeListCard>
  );
};
