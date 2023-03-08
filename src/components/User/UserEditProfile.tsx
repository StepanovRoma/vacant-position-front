import React from 'react';
import { TUser } from 'dtos/user';
import { InputField } from 'ui/style';
import { Radio, RadioGroup } from '@mui/material';

import { StyledAvatar, UserProfileContainer } from './style';

interface Props {
  user: TUser;
}

export const UserEditProfile = ({ user }: Props) => {
  return (
    <UserProfileContainer>
      <StyledAvatar variant="square" />
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <InputField />
      <RadioGroup>
        <Radio />
        <Radio />
      </RadioGroup>
    </UserProfileContainer>
  );
};
