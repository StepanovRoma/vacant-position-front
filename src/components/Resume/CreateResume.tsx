import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
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
import React from 'react';
import { Tag } from 'dtos/tags';
import { ServerExtendedUser } from 'dtos/user';
import { useNavigate } from 'react-router-dom';
import { InputField } from 'ui/style';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateResumeMutation } from 'ducks/user/api';
import { useI18n } from 'hooks/useI18n';
import { getSelectedTagsStyles } from 'tools/helpers';

import { ROUTES } from 'constants/routes';

import { resumeValidationSchema } from './resumeValidationSchema';

export interface ResumeValues {
  position: string;
  experience: string;
  payroll: string;
  tags: Tag[];
  about: string;
  preferContact: string;
  isVisible: string;
}

interface Props {
  user: ServerExtendedUser;
}

export const CreateResume = ({ user }: Props) => {
  const tr = useI18n('resume');
  const errTr = useI18n('resume.error');
  const navigate = useNavigate();
  const [createResume] = useCreateResumeMutation();
  const isCandidate = user.role === 'candidate';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeValues>({
    defaultValues: {
      position: '',
      experience: '',
      payroll: '',
      tags: [],
      about: '',
      preferContact:
        user.phone || user.whatsapp || user.telegram || user.vkontakte || '',
      isVisible: String(false),
    },
    resolver: yupResolver(resumeValidationSchema),
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'tags',
    control,
  });

  const onSubmit: SubmitHandler<ResumeValues> = async data => {
    await createResume(data);
    navigate(ROUTES.RESUME);
  };

  const hasContacts =
    !!user.phone || !!user.whatsapp || !!user.telegram || !!user.vkontakte;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap="20px" maxWidth="800px">
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('position')}
                variant="outlined"
                {...field}
                error={!!errors.position?.message}
                helperText={errTr(errors.position?.message)}
              />
            )}
          />

          <Controller
            name="experience"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('experience')}
                variant="outlined"
                {...field}
                error={!!errors.experience?.message}
                helperText={errTr(errors.experience?.message)}
              />
            )}
          />

          <Controller
            name="payroll"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={isCandidate ? tr('payroll') : tr('salary')}
                variant="outlined"
                {...field}
                error={!!errors.payroll?.message}
                helperText={errTr(errors.payroll?.message)}
              />
            )}
          />

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
              MenuProps={{
                disableScrollLock: true,
              }}
            >
              {user?.tags?.map(tag => (
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
                  style={getSelectedTagsStyles(tag.tag, fields)}
                >
                  {tag.tag}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errTr(errors.tags?.message)}</FormHelperText>
          </FormControl>

          <Controller
            name="about"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={isCandidate ? tr('about') : tr('companyAbout')}
                variant="outlined"
                {...field}
                error={!!errors.about?.message}
                helperText={errTr(errors.about?.message)}
              />
            )}
          />

          {hasContacts && (
            <FormControl>
              <FormLabel>{tr('preferContact')}</FormLabel>
              <Controller
                name="preferContact"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field} row>
                    <>
                      {user.phone && (
                        <FormControlLabel
                          value={user.phone}
                          control={<Radio />}
                          label={tr('phone')}
                        />
                      )}
                      {user.vkontakte && (
                        <FormControlLabel
                          value={user.vkontakte}
                          control={<Radio />}
                          label={tr('vk')}
                        />
                      )}
                      {user.telegram && (
                        <FormControlLabel
                          value={user.telegram}
                          control={<Radio />}
                          label={tr('telegram')}
                        />
                      )}
                      {user.whatsapp && (
                        <FormControlLabel
                          value={user.whatsapp}
                          control={<Radio />}
                          label={tr('whatsapp')}
                        />
                      )}
                    </>
                  </RadioGroup>
                )}
              />
            </FormControl>
          )}

          {!hasContacts && (
            <Controller
              name="preferContact"
              control={control}
              render={({ field }) => (
                <InputField
                  autoComplete="off"
                  label={tr('preferContact')}
                  variant="outlined"
                  {...field}
                  error={!!errors.preferContact?.message}
                  helperText={errTr(errors.preferContact?.message)}
                />
              )}
            />
          )}

          <FormControl>
            <Controller
              name="isVisible"
              control={control}
              render={({ field }) => (
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label={
                      isCandidate ? tr('openedResume') : tr('openedVacancy')
                    }
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label={
                      isCandidate ? tr('closedResume') : tr('closedVacancy')
                    }
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          gap="12px"
        >
          <Button onClick={() => navigate(-1)}>{tr('cancel')}</Button>
          <Button type="submit">{tr('create')}</Button>
        </Box>
      </form>
    </>
  );
};
