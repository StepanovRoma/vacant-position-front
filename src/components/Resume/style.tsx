import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import { COLOR_PALETTE } from 'constants/theme';

export const TagContainer = styled(Box)`
  border-radius: 15px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid ${COLOR_PALETTE.darkPrimary};
  background-color: ${COLOR_PALETTE.white};
`;

export const MoreButton = styled(Button)`
  background-color: ${COLOR_PALETTE.purple};
  width: 100%;
  border-radius: 10px;
  height: 26px;
  color: ${COLOR_PALETTE.black};
  :hover {
    background-color: ${COLOR_PALETTE.darkPurple};
  }
`;

export const CustomGrid = styled(Grid)`
  max-height: 60px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: inherit;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLOR_PALETTE.purple};
    border-radius: 20px;
  }
`;

export const ResumeCard = styled(Card)`
  min-width: 300px;
  width: 300px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLOR_PALETTE.cardPrimary};
`;

export const DateContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 15px;
  justify-content: space-between;
`;

export const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 10px;
  min-height: 100px;
`;

export const AvatarContainer = styled(Avatar)`
  width: 80px;
  height: 80px;
`;

export const ResumeInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ActionsContainer = styled(CardActions)`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export const FavoriteButton = styled(IconButton)`
  box-sizing: border-box;
  min-width: fit-content;
  color: ${COLOR_PALETTE.purple};
`;

export const ResumeListCard = styled(Card)`
  width: calc(100vw - 180px);
  height: 255px;
  background-color: ${COLOR_PALETTE.cardPrimary};
  @media (max-width: 790px) {
    width: calc(100vw - 75px);
  }
`;

export const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: ${COLOR_PALETTE.white};
  padding: 15px;
  min-height: 100px;
`;

export const ModalText = styled(Typography)`
  margin: 0 0 20px 0;
`;

export const ModalTitle = styled(Typography)`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AvatarListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: sans-serif;
`;

export const LongWordContainer = styled(Typography)`
  word-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
  overflow: hidden;
`;

export const ListCardContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  gap: 10px;
`;

export const ListAvatar = styled(Avatar)`
  height: 200px;
  width: 200px;
`;

export const CardInfoListContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  gap: 10px;
  flex-grow: 1;
`;

export const ContentContainerListCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

export const LongAboutContainer = styled(Typography)`
  text-overflow: ellipsis;
  height: 187px;
  overflow: hidden;
`;

export const ActionContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
