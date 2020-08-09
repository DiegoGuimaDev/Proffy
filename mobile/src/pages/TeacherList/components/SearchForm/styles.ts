import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';

export const Container = styled.View`
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: Poppins_400Regular;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#c1bccc',
})`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  padding-horizontal: 16px;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SelectContainer = styled.View`
  border-radius: 8px;
  border-width: 1px;
  overflow: hidden;
  border-color: ${({ theme }) => theme.colorLineInWhite};
  margin-top: 4px;
  margin-bottom: 16px;
`;
export const Select2 = styled(Picker)`
  height: 54px;
  background-color: #fff;
  padding-horizontal: 16px;
  justify-content: center;
`;
