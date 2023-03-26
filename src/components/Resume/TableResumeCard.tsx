import React, { useCallback, useState } from 'react';
import { IResume } from 'dtos/resume';
import {
  IconButton,
  CardContent,
  Grid,
  Typography,
  Box,
  Modal,
  Button,
} from '@mui/material';
import { Delete, Edit, Star } from '@mui/icons-material';
import { useI18n } from 'hooks/useI18n';
import { format } from 'date-fns';
import { useDeleteResumeMutation } from 'ducks/user/api';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import {
  ActionsContainer,
  AvatarContainer,
  CardContentContainer,
  CustomGrid,
  DateContainer,
  FavoriteButton,
  InfoContainer,
  ModalContent,
  ModalText,
  ModalTitle,
  MoreButton,
  ResumeCard,
  ResumeInfoContainer,
  TagContainer,
} from './style';

interface Props {
  resume: IResume;
  isMy?: boolean;
}

export const TableResumeCard = ({ resume, isMy }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteResume] = useDeleteResumeMutation();
  const tr = useI18n('resume');
  const modalTr = useI18n('resume.modal');
  const navigate = useNavigate();

  const handleDelete = useCallback(() => {
    setIsOpenModal(false);
    deleteResume(resume.id);
  }, [deleteResume, resume.id]);

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <ResumeCard>
        <CardContent>
          <CardContentContainer>
            <DateContainer>
              {isMy ? (
                <Box display="flex" flexDirection="row">
                  <IconButton
                    onClick={() => {
                      setIsOpenModal(true);
                    }}
                  >
                    <Delete />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      navigate(`${ROUTES.EDIT_RESUME}/${resume.id}`);
                    }}
                  >
                    <Edit />
                  </IconButton>
                </Box>
              ) : (
                <Box></Box>
              )}
              <Typography>
                {format(new Date(resume.createdAt), 'dd.MM.yyyy')}
              </Typography>
            </DateContainer>
            <InfoContainer>
              <AvatarContainer variant="square" />
              <ResumeInfoContainer>
                <Typography>{`${resume.firstName} ${resume.lastName}`}</Typography>
                <Typography>{resume.position}</Typography>
                <Typography>{resume.experience}</Typography>
                <Typography>{resume.payroll}</Typography>
              </ResumeInfoContainer>
            </InfoContainer>
            <CustomGrid spacing={1} container>
              {resume.tags?.map(tag => (
                <Grid key={tag.id} item>
                  <TagContainer>{tag.tag}</TagContainer>
                </Grid>
              ))}
            </CustomGrid>
          </CardContentContainer>
        </CardContent>
        <ActionsContainer>
          <MoreButton variant="contained">{tr('showResume')}</MoreButton>
          {!isMy && (
            <FavoriteButton>
              <Star />
            </FavoriteButton>
          )}
        </ActionsContainer>
      </ResumeCard>
      <Modal open={isOpenModal} onClose={handleClose}>
        <ModalContent>
          <ModalTitle>{modalTr('modalTitle')}</ModalTitle>
          <ModalText>{modalTr('warningMessage')}</ModalText>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            gap="10px"
          >
            <Button
              variant="contained"
              onClick={handleClose}
              color="info"
              size="small"
            >
              {modalTr('cancel')}
            </Button>
            <Button
              variant="contained"
              onClick={handleDelete}
              color="error"
              size="small"
            >
              {modalTr('delete')}
            </Button>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
