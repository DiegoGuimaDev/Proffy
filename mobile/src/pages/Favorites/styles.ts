import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import { ClassItem } from '../../hooks/Classes';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colorBackground};
  flex: 1;
`;

export const List = styled(FlatList as new () => FlatList<ClassItem>).attrs({
  contentContainerStyle: { paddingHorizontal: 16, paddingBottom: 16 },
})`
  margin-top: -40px;
`;
