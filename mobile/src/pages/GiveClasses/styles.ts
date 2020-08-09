import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colorPrimary};
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: ${({ theme }) => theme.colorTextInPrimary};
  font-size: 16px;
  line-height: 26px;
  font-family: Poppins_400Regular;
  max-width: 240px;
`;
