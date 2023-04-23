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
import { useI18n } from 'hooks/useI18n';
import { IResume } from 'dtos/resume';
import {
  useDeleteResumeMutation,
  useUpdateResumeMutation,
} from 'ducks/user/api';

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
  resume: IResume;
}

export const EditResume = ({ resume, user }: Props) => {
  const tr = useI18n('resume');
  const errTr = useI18n('resume.error');
  const navigate = useNavigate();
  const {
    position,
    experience,
    payroll,
    tags,
    about,
    preferContact,
    isVisible,
  } = resume;
  const [updateResume] = useUpdateResumeMutation();
  const [deleteResume] = useDeleteResumeMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeValues>({
    defaultValues: {
      position: position ?? '',
      experience: experience ?? '',
      payroll: payroll ?? '',
      tags: tags ?? [],
      about: about ?? '',
      preferContact: preferContact ?? '',
      isVisible: String(isVisible),
    },
    resolver: yupResolver(resumeValidationSchema),
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'tags',
    control,
  });

  const onSubmit: SubmitHandler<ResumeValues> = async data => {
    await updateResume({ resume: data, resumeId: resume.id });
    navigate(-1);
  };

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
                label={tr('payroll')}
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
                label={tr('about')}
                variant="outlined"
                {...field}
                error={!!errors.about?.message}
                helperText={errTr(errors.about?.message)}
              />
            )}
          />
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

          <FormControl>
            <Controller
              name="isVisible"
              control={control}
              render={({ field }) => (
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label={tr('openedResume')}
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label={tr('closedResume')}
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
          <Button
            color="error"
            onClick={async () => {
              await deleteResume(resume.id);
              navigate(-1);
            }}
          >
            {tr('delete')}
          </Button>
          <Button type="submit">{tr('save')}</Button>
        </Box>
      </form>
    </>
  );
};
