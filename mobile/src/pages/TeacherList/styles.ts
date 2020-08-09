import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import { ClassItem } from '../../hooks/Classes';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colorBackground};
  flex: 1;
`;

export const OpenFilterButton = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 56px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colorPrimaryLight};
  margin-bottom: 16px;
`;

export const OpenFilterButtonContainer = styled.View`
  flex-direction: row;
`;

export const OpenFilterButtonText = styled.Text`
  margin-left: 8px;
  color: ${({ theme }) => theme.colorTextInPrimary};
`;

export const List = styled(FlatList as new () => FlatList<ClassItem>).attrs({
  contentContainerStyle: { paddingHorizontal: 16, paddingBottom: 16 },
})`
  margin-top: -40px;
`;
