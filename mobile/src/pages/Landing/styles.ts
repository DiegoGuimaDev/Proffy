import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colorPrimary};
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colorTitleInPrimary};
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: 'Poppins_400Regular';
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const TotalConnectionsText = styled.Text`
  font-family: Poppins_400Regular;
  color: ${({ theme }) => theme.colorTextInPrimary};
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
