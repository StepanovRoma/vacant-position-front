import React from 'react';
import { IResume } from 'dtos/resume';
import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { Star } from '@mui/icons-material';

import { CustomGrid, MoreButton, ResumeCard, TagContainer } from './style';

interface Props {
  resume?: IResume;
}

export const TableResumeCard = ({ resume }: Props) => {
  return (
    <ResumeCard>
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          gap="15px"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography>{resume?.createdAt}</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            gap="15px"
            marginBottom="10px"
          >
            <Avatar variant="square" sx={{ width: '80px', height: '80px' }} />
            <Box display="flex" flexDirection="column" gap="2px">
              <Typography>{'Виктор'}</Typography>
              <Typography>{resume?.position}</Typography>
              <Typography>{resume?.experience}</Typography>
              <Typography>{resume?.payroll}</Typography>
            </Box>
          </Box>
          <CustomGrid spacing={1} container>
            {resume?.tags?.map(tag => (
              <Grid key={tag.id} item>
                <TagContainer>{tag.tag}</TagContainer>
              </Grid>
            ))}
          </CustomGrid>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <MoreButton variant="contained">{'Посмотреть резюме'}</MoreButton>
        <Button
          sx={{
            boxSizing: 'border-box',
            minWidth: 'fit-content',
            color: '#CBA3FF',
          }}
        >
          <Star />
        </Button>
      </CardActions>
    </ResumeCard>
  );
};
