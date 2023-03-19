import { Box } from '@mui/material';
import { TUser } from 'dtos/user';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectMeId } from 'ducks/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useI18n } from 'hooks/useI18n';
import { UserName } from 'pages/style';

import { ROUTES } from 'constants/routes';

import {
  AvatarContainer,
  ContentContainer,
  EditLink,
  StyledAvatar,
  UserProfileContainer,
} from './style';
import { Personal } from './Personal';

interface Props {
  user: TUser;
}

export const UserProfile = ({ user }: Props) => {
  const isMineProfile = useSelector(selectMeId) === user.id;
  const navigate = useNavigate();
  const tr = useI18n('userProfile');
  return (
    <UserProfileContainer>
      <UserName variant="h2">{`${user.firstName} ${user.lastName}`}</UserName>
      <ContentContainer>
        <AvatarContainer>
          <StyledAvatar variant="square" />
          {isMineProfile && (
            <EditLink onClick={() => navigate(`${ROUTES.SETTINGS}`)}>
              {tr('edit')}
            </EditLink>
          )}
        </AvatarContainer>
        <Box minHeight="100%">
          <Personal user={user} />
        </Box>
      </ContentContainer>
    </UserProfileContainer>
  );
};
