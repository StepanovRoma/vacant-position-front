import React from 'react';
import { TUser } from 'dtos/user';
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { SettingsValues } from 'ducks/user/types';
import {
  useUpdateUserCredentialsMutation,
  useUpdateUserMutation,
} from 'ducks/user/api';
import { useI18n } from 'hooks/useI18n';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { selectRole } from 'ducks/auth/selectors';

import { ROUTES } from 'constants/routes';

import {
  ButtonContainer,
  ContentContainer,
  InfoBlocksContainer,
  InfoContainer,
  StyledAvatar,
  UserProfileContainer,
} from './style';
import { settingValidationSchema } from './settingValidationSchema';

interface Props {
  user: TUser;
  tags: Tag[];
}

export const UserEditProfile = ({ user, tags }: Props) => {
  const navigate = useNavigate();
  const tr = useI18n('userEdit');
  const errTr = useI18n('userEdit.validation');
  const [updateUser] = useUpdateUserMutation();
  const [updateUserCredentials] = useUpdateUserCredentialsMutation();
  const role = useSelector(selectRole);
  const isCandidate = role === 'candidate';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsValues>({
    defaultValues: {
      firstName: user.firstName,
      lastName: isCandidate ? user.lastName : 'empty',
      city: user.city ?? '',
      experience: user.experience ?? '',
      status: String(user.status),
      image: null,
      about: user.about ?? '',
      tags: user.tags,
      vkontakte: user.vkontakte ?? '',
      telegram: user.telegram ?? '',
      phone: user.phone ?? '',
      whatsapp: user.whatsapp ?? '',
    },
    resolver: yupResolver(settingValidationSchema),
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'tags',
    control,
  });

  const onSubmit: SubmitHandler<SettingsValues> = async data => {
    await updateUser(data);
    await updateUserCredentials({
      firstName: data.firstName,
      lastName: data.lastName,
      id: user.id,
    });
    navigate(ROUTES.USER + `/${user.id}`);
  };

  return (
    <UserProfileContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentContainer>
          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            alignItems="center"
          >
            <StyledAvatar variant="square" />
            <Typography>{tr('changeAvatar')}</Typography>
          </Box>
          <InfoBlocksContainer>
            <InfoContainer>
              <Typography>{tr('privateInfo')}</Typography>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <InputField
                    autoComplete="off"
                    label={tr('name')}
                    variant="outlined"
                    {...field}
                    error={!!errors.firstName?.message}
                    helperText={errTr(errors.firstName?.message)}
                  />
                )}
              />

              {isCandidate && (
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      autoComplete="off"
                      label={tr('lastName')}
                      variant="outlined"
                      {...field}
                      error={!!errors.lastName?.message}
                      helperText={errTr(errors.lastName?.message)}
                    />
                  )}
                />
              )}

              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <InputField
                    autoComplete="off"
                    label={isCandidate ? tr('city') : tr('location')}
                    variant="outlined"
                    {...field}
                    error={!!errors.city?.message}
                    helperText={errTr(errors.city?.message)}
                  />
                )}
              />

              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <InputField
                    autoComplete="off"
                    label={isCandidate ? tr('experience') : tr('existence')}
                    variant="outlined"
                    {...field}
                    error={!!errors.experience?.message}
                    helperText={errTr(errors.experience?.message)}
                  />
                )}
              />

              <FormControl>
                <FormLabel>{tr('status')}</FormLabel>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field} row>
                      <FormControlLabel
                        value="true"
                        control={<Radio />}
                        label={tr('lookingFor')}
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio />}
                        label={tr('notLookingFor')}
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </InfoContainer>

            <InfoContainer>
              <Typography>{tr('contacts')}</Typography>
              <Controller
                name="vkontakte"
                control={control}
                render={({ field }) => (
                  <InputField
                    autoComplete="off"
                    label={tr('vk')}
                    variant="outlined"
                    {...field}
                    error={!!errors.vkontakte?.message}
                    helperText={errTr(errors.vkontakte?.message)}
                  />
                )}
              />
              <Controller
                name="telegram"
                control={control}
                render={({ field }) => (
                  <InputField
                    autoComplete="off"
                    label={tr('telegram')}
                    variant="outlined"
                    {...field}
                    error={!!errors.telegram?.message}
                    helperText={errTr(errors.telegram?.message)}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <InputField
                    autoComplete="off"
                    label={tr('phone')}
                    variant="outlined"
                    {...field}
                    error={!!errors.phone?.message}
                    helperText={errTr(errors.phone?.message)}
                  />
                )}
              />
              <Controller
                name="whatsapp"
                control={control}
                render={({ field }) => (
                  <InputField
                    autoComplete="off"
                    label={tr('whatsapp')}
                    variant="outlined"
                    {...field}
                    error={!!errors.whatsapp?.message}
                    helperText={errTr(errors.whatsapp?.message)}
                  />
                )}
              />
            </InfoContainer>
            <InfoContainer>
              <Typography>{tr('tags')}</Typography>
              <FormControl error={!!errors.tags?.message}>
                <Select
                  multiple
                  input={<OutlinedInput />}
                  value={fields}
                  renderValue={tags => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {tags.map((tag: Tag) => (
                        <Chip key={tag.id} label={tag.tag} />
                      ))}
                    </Box>
                  )}
                >
                  {tags.map(tag => (
                    <MenuItem
                      key={tag.id}
                      value={tag.id}
                      onClick={() => {
                        const id = fields.findIndex(item => {
                          return item.tag === tag.tag;
                        });
                        if (id === -1) {
                          append({ id: tag.id, tag: tag.tag });
                        } else {
                          remove(id);
                        }
                      }}
                    >
                      {tag.tag}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errTr(errors.tags?.message)}</FormHelperText>
              </FormControl>
            </InfoContainer>

            <InfoContainer>
              <Typography>
                {isCandidate ? tr('about') : tr('companyAbout')}
              </Typography>

              <Controller
                name="about"
                control={control}
                render={({ field }) => (
                  <InputField
                    multiline
                    variant="outlined"
                    {...field}
                    error={!!errors.about?.message}
                    helperText={errTr(errors.about?.message)}
                  />
                )}
              />
            </InfoContainer>

            <ButtonContainer>
              <Button onClick={() => navigate(-1)}>{tr('cancel')}</Button>
              <Button type="submit">{tr('save')}</Button>
            </ButtonContainer>
          </InfoBlocksContainer>
        </ContentContainer>
      </form>
    </UserProfileContainer>
  );
};
