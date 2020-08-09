import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  color: ${({ theme }) => theme.colorTextBase};
  font-family: Poppins_400Regular;
  line-height: 24px;
  font-size: 14px;
  width: 280px;
`;
