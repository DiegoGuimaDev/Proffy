import React, { useRef, useEffect } from 'react';
import { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';
import { Container, SelectWrapper } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  label: string;
  options: OptionTypeBase[];
}

const Select: React.FC<Props> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <SelectWrapper
        defaultValue={options.find(option => option.value === defaultValue)}
        ref={selectRef}
        options={options}
        {...rest}
      />
    </Container>
  );
};

export default Select;
