import React from 'react';

import { PickerProps } from '@react-native-community/picker/typings/Picker';
import { Container, Label, SelectContainer, PickerSelect } from './styles';

interface SelectProps extends PickerProps {
  label: string;
  options: Array<{ label: string; value: unknown }>;
}

const Select: React.FC<SelectProps> = ({ label, options, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <SelectContainer>
        <PickerSelect mode="dropdown" {...rest}>
          {options.map(option => (
            <PickerSelect.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </PickerSelect>
      </SelectContainer>
    </Container>
  );
};

export default Select;
