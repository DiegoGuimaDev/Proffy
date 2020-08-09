import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, TextButton } from './styles';

interface SquareButtonProps extends RectButtonProperties {
  mode: 'primary' | 'secondary';
  text: string;
}

const SquareButton: React.FC<SquareButtonProps> = ({
  children,
  mode,
  text,
  ...rest
}) => {
  return (
    <Container mode={mode} {...rest}>
      {children}
      <TextButton mode={mode}>{text}</TextButton>
    </Container>
  );
};

export default SquareButton;
