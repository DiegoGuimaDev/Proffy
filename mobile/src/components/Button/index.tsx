import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  text?: string;
  mode?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, mode, children, ...rest }) => {
  return (
    <Container mode={mode} {...rest}>
      {children}
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default Button;
