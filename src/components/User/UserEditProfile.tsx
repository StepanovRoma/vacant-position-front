import React from 'react';
import { TUser } from 'dtos/user';
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Tag } from 'dtos/tags';
import { InputField } from 'ui/style';
import { useForm } from 'react-hook-form';
import { SettingsValues } from 'ducks/user/types';

import {
  ButtonContainer,
  ContentContainer,
  InfoBlocksContainer,
  InfoContainer,
  StyledAvatar,
  UserProfileContainer,
} from './style';

interface Props {
  user: TUser;
  tags: Tag[];
}

export const UserEditProfile = ({ user, tags }: Props) => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsValues>({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      city: null,
      experience: null,
      status: false,
      image: null,
      about: null,
      tags: null,
      vkontakte: null,
      telegram: null,
      phone: null,
      whatsapp: null,
    },
    mode: 'onChange',
  });

  console.log(user);

  return (
    <UserProfileContainer>
      <ContentContainer>
        <Box>
          <StyledAvatar variant="square" />
        </Box>
        <InfoBlocksContainer>
          <InfoContainer>
            <Typography>{'Личная информация'}</Typography>
            <InputField label="Имя" />
            <InputField label="Фамилия" />
            <InputField label="Место проживания" />
            <InputField label="Опыт работы" />
            <FormControl>
              <FormLabel>{'Статус поиска'}</FormLabel>
              <RadioGroup row>
                <FormControlLabel value control={<Radio />} label="ищу" />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="не ищу"
                />
              </RadioGroup>
            </FormControl>
          </InfoContainer>

          <InfoContainer>
            <Typography>{'Контакты'}</Typography>
            <InputField label="Вк" />
            <InputField label="Телеграм" />
            <InputField label="Номер телефона" />
            <InputField label="WhatsApp" />
          </InfoContainer>
          <InfoContainer>
            <Typography>{'Теги'}</Typography>
            <Select
              multiple
              input={<OutlinedInput />}
              value={[]}
              renderValue={tags => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {tags.map((tag: Tag) => (
                    <Chip key={tag.id} label={tag.tag} />
                  ))}
                </Box>
              )}
            >
              {tags.map(tag => (
                <MenuItem key={tag.id} value={tag.id}>
                  {tag.tag}
                </MenuItem>
              ))}
            </Select>
          </InfoContainer>

          <InfoContainer>
            <Typography>{'О себе'}</Typography>
            <InputField multiline />
          </InfoContainer>

          <ButtonContainer>
            <Button onClick={() => navigate(-1)}>{'Отмена'}</Button>
            <Button onClick={() => navigate(-1)}>{'Сохранить'}</Button>
          </ButtonContainer>
        </InfoBlocksContainer>
      </ContentContainer>
    </UserProfileContainer>
  );
};
