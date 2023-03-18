import React from 'react';
import { TUser } from 'dtos/user';
import { Box, Grid, Typography } from '@mui/material';
import { useI18n } from 'hooks/useI18n';
import { format } from 'date-fns';

import { TagContainer } from './style';

interface Props {
  user: TUser;
}

export const Personal = ({ user }: Props) => {
  const tr = useI18n('userProfile');
  return (
    <Box display="flex" flexDirection="column" gap="30px">
      <Box display="flex" flexDirection="row" gap="70px">
        <Box display="flex" flexDirection="column" gap="20px">
          <Box>{tr('livingPlace')}</Box>
          <Box>{tr('workExperience')}</Box>
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
        <Typography variant="h6">{tr('about')}</Typography>
        <Typography>{user.about ? user.about : tr('notSpecified')}</Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">{tr('openСV')}</Typography>
      </Box>
    </Box>
  );
};
