import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';

export const Container = styled.View``;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: Poppins_400Regular;
`;

export const SelectContainer = styled.View`
  border-radius: 8px;
  border-width: 1px;
  overflow: hidden;
  border-color: ${({ theme }) => theme.colorLineInWhite};
  margin-top: 4px;
  margin-bottom: 16px;
`;
export const PickerSelect = styled(Picker)`
  height: 54px;
  background-color: #fff;
  padding-horizontal: 16px;
  justify-content: center;
`;
