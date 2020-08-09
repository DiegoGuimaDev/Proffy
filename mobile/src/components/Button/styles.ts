import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  mode?: 'primary' | 'secondary';
}

export const Container = styled(RectButton) <ContainerProps>`
  margin-vertical: 8px;
  background-color: ${({ mode, theme }) =>
    mode === 'primary' ? theme.colorPrimaryLight : theme.colorSecondary};
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colorButtonText};
  font-size: 16px;
  font-family: Archivo_700Bold;
`;
