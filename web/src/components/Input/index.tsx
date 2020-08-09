import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ name, label, prefix, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      {prefix && <p>{prefix}</p>}
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        name={name}
        id={name}
        {...rest}
      />
    </Container>
  );
};

export default Input;
