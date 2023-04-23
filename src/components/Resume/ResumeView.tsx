import React from 'react';
import { IResume } from 'dtos/resume';
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { Link } from 'components/User/style';
import { useI18n } from 'hooks/useI18n';
import { useSelector } from 'react-redux';

import { ROUTES } from 'constants/routes';

import { selectRole } from '../../ducks/auth/selectors';

import { TagContainer } from './style';

interface Props {
  resume: IResume;
}

export const ResumeView = ({ resume }: Props) => {
  const {
    position,
    experience,
    payroll,
    tags,
    about,
    preferContact,
    lastName,
    firstName,
    userId,
    createdAt,
  } = resume;
  const resumeTr = useI18n('resume');
  const role = useSelector(selectRole);
  const fullName =
    role === 'organization' ? firstName : `${firstName} ${lastName}`;
  return (
    <Box display="flex" flexDirection="column" gap="30px">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{resumeTr('user')}</TableCell>
            <TableCell>
              <Tooltip title={resumeTr('linkToUser')}>
                <Link to={`${ROUTES.USER}/${userId}`}>{fullName}</Link>
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{resumeTr('position')}</TableCell>
            <TableCell>{position}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{resumeTr('experience')}</TableCell>
            <TableCell>{experience}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{resumeTr('payroll')}</TableCell>
            <TableCell>{payroll}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{resumeTr('contact')}</TableCell>
            <TableCell>{preferContact}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{resumeTr('createdDate')}</TableCell>
            <TableCell>{format(new Date(createdAt), 'dd/MM/yyyy')}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {tags !== null && (
        <Box display="flex" flexDirection="column" gap="20px">
          <Typography variant="h6">{resumeTr('tags')}</Typography>
          <Grid container spacing={2}>
            {tags.map(tag => (
              <Grid key={tag.id} item>
                <TagContainer>{tag.tag}</TagContainer>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h6">{resumeTr('about')}</Typography>
        <Typography style={{ wordWrap: 'break-word' }}>{about}</Typography>
      </Box>
    </Box>
  );
};
