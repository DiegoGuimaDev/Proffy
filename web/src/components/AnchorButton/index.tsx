import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const AnchorButton: React.FC<AnchorButtonProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default AnchorButton;
