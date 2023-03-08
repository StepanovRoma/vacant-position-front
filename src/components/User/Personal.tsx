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
          <Box>{'Новосибирск'}</Box>
          <Box>{'5 лет завода + водки'}</Box>
          <Box>{user.email}</Box>
          <Box>{'Ищу'}</Box>
          <Box>{format(new Date(user.createdAt), 'dd/MM/yyyy')}</Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">{'Контакты'}</Typography>
        <Box display="flex" flexDirection="row" gap="70px">
          <Box display="flex" flexDirection="column" gap="20px">
            <Box>{tr('vk')}</Box>
            <Box>{tr('telegram')}</Box>
            <Box>{tr('phoneNumber')}</Box>
            <Box>{tr('whatsApp')}</Box>
          </Box>

          <Box display="flex" flexDirection="column" gap="20px">
            <Box>{'https://vk.com/belsanku'}</Box>
            <Box>{'https://t.me/belsanku'}</Box>
            <Box>{'+79516069395'}</Box>
            <Box>{'+79516069395'}</Box>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">{'Теги'}</Typography>
        <Grid container spacing={2}>
          {[
            { id: 1, tag: 'Рома' },
            { id: 2, tag: 'Саша' },
            { id: 3, tag: 'c++' },
            { id: 4, tag: 'Коммуникабельность' },
            { id: 5, tag: 'Server-Side Rendering' },
            { id: 6, tag: 'React' },
            { id: 7, tag: 'tag1' },
            { id: 8, tag: 'tag1' },
            { id: 9, tag: 'tag1' },
            { id: 10, tag: 'tag1' },
            { id: 11, tag: 'tag1' },
            { id: 12, tag: 'tag1' },
            { id: 13, tag: 'tag1' },
          ].map(tag => (
            <Grid key={tag.id} item>
              <TagContainer>{tag.tag}</TagContainer>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">{'О себе'}</Typography>
        <Typography>{'О себе много инфы'}</Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">{'Открытые резюме'}</Typography>
      </Box>
    </Box>
  );
};