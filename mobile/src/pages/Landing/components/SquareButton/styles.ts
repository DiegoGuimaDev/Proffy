import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  mode: 'primary' | 'secondary';
}

interface TextButtonProps {
  mode: 'primary' | 'secondary';
}

export const Container = styled(RectButton) <ContainerProps>`
  height: 150px;
  width: 48%;
  background-color: ${({ mode, theme }) =>
    mode === 'primary' ? theme.colorPrimaryLight : theme.colorSecondary};
  justify-content: space-between;
  padding: 24px;
  border-radius: 8px;
`;

export const TextButton = styled.Text<TextButtonProps>`
  font-family: Archivo_700Bold;
  color: ${({ theme }) => theme.colorButtonText};
  font-size: 20px;
`;
