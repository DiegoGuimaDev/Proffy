import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colorBoxBase};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colorLineInWhite};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const ProfileAvatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const ProfileName = styled.Text`
  font-family: Archivo_700Bold;
  color: ${({ theme }) => theme.colorTextTitle};
`;

export const ProfileSubject = styled.Text`
  font-family: Poppins_400Regular;
  color: ${({ theme }) => theme.colorTextBase};
  font-size: 12px;
  margin-top: 4px;
`;

export const Biografia = styled.Text`
  margin-horizontal: 24px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colorTextBase};
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colorBoxFooter};
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

export const FooterPrice = styled.Text`
  font-family: Poppins_400Regular;
  color: ${({ theme }) => theme.colorTextBase};
  font-size: 14px;
`;
export const FooterPriceValue = styled.Text`
  font-family: Archivo_700Bold;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 16px;
`;
export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

interface FavoriteButtonProps {
  isFavorite?: boolean;
}

// TODO: mudar cor para #e33d3d quando não for favoritado
export const FavoriteButton = styled(RectButton) <FavoriteButtonProps>`
  background-color: ${({ theme, isFavorite }) =>
    isFavorite ? '#e33d3d' : theme.colorPrimary};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colorSecondary};
  flex: 1;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  flex-direction: row;
`;

export const ContactButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: ${({ theme }) => theme.colorButtonText};
  font-size: 16px;
  margin-left: 16px;
`;
