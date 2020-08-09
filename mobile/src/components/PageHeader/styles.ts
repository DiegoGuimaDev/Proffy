import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding-horizontal: 40px;
  padding-bottom: 30px;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.colorPrimary};
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)``;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: ${({ theme }) => theme.colorTitleInPrimary};
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin-vertical: 40px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
