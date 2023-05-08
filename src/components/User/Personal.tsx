import React from 'react';
import { TUser } from 'dtos/user';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useI18n } from 'hooks/useI18n';
import { format } from 'date-fns';
import { TableResumeCard } from 'components/Resume';
import { useSelector } from 'react-redux';
import { selectMeId } from 'ducks/auth/selectors';

import { ROUTES } from 'constants/routes';

import { CreateResumeContainer, Link, TagContainer } from './style';

interface Props {
  user: TUser;
}

export const Personal = ({ user }: Props) => {
  const tr = useI18n('userProfile');
  const resumeTr = useI18n('resume');
  const myId = useSelector(selectMeId);
  const isCandidate = user.role === 'candidate';
  return (
    <Box display="flex" flexDirection="column" gap="30px">
      <Box display="flex" flexDirection="row" gap="70px">
        <Box display="flex" flexDirection="column" gap="20px">
          <Box>{isCandidate ? tr('livingPlace') : tr('location')}</Box>
          <Box>{isCandidate ? tr('workExperience') : tr('existence')}</Box>
          <Box>{tr('email')}</Box>
          <Box>{tr('findingStatus')}</Box>
          <Box>{tr('registerDate')}</Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="20px">
          <Box>{user.city ? user.city : tr('notSpecified')}</Box>
          <Box>{user.experience ? user.experience : tr('notSpecified')}</Box>
          <Box>{user.email}</Box>
          <Box>{user.status ? tr('lookingFor') : tr('notLookingFor')}</Box>
          <Box>{format(new Date(user.createdAt), 'dd/MM/yyyy')}</Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">{tr('contacts')}</Typography>
        <Box display="flex" flexDirection="row" gap="70px">
          <Box display="flex" flexDirection="column" gap="20px">
            <Box>{tr('vk')}</Box>
            <Box>{tr('telegram')}</Box>
            <Box>{tr('phoneNumber')}</Box>
            <Box>{tr('whatsApp')}</Box>
          </Box>

          <Box display="flex" flexDirection="column" gap="20px">
            <Box>{user.vkontakte ? user.vkontakte : tr('notSpecified')}</Box>
            <Box>{user.telegram ? user.telegram : tr('notSpecified')}</Box>
            <Box>{user.phone ? user.phone : tr('notSpecified')}</Box>
            <Box>{user.whatsapp ? user.whatsapp : tr('notSpecified')}</Box>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">{tr('tags')}</Typography>
        <Grid container spacing={2}>
          {user.tags?.map(tag => (
            <Grid key={tag.id} item>
              <TagContainer>{tag.tag}</TagContainer>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">
          {isCandidate ? tr('about') : tr('companyAbout')}
        </Typography>
        <Typography>{user.about ? user.about : tr('notSpecified')}</Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">
          {isCandidate ? tr('openСV') : tr('openVacancy')}
        </Typography>
        {user.resumes.length !== 0 ? (
          <Grid container spacing={6}>
            {user.resumes.map(resume => (
              <Grid item key={resume.id}>
                <TableResumeCard
                  resume={resume}
                  isMy={myId === resume.userId}
                />
              </Grid>
            ))}
            {myId === user.id && (
              <Grid item>
                <CreateResumeContainer>
                  <Link to={ROUTES.CREATE_RESUME}>
                    <Button variant="text">
                      {isCandidate
                        ? resumeTr('createOneMoreResume')
                        : resumeTr('createOneMoreVacancy')}
                    </Button>
                  </Link>
                </CreateResumeContainer>
              </Grid>
            )}
          </Grid>
        ) : (
          <Box display="flex" flexDirection="row" alignItems="center" gap="6px">
            <Typography>
              {isCandidate
                ? resumeTr('noExistsResume')
                : resumeTr('noExistsVacancy')}
            </Typography>
            <Link to={ROUTES.CREATE_RESUME}>{resumeTr('wantCreate')}</Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
