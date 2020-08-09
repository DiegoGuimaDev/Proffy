import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface PageHeaderAttributes {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderAttributes> = ({
  title,
  description,
  children,
}) => {
  return (
    <Container>
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </Container>
  );
};

export default PageHeader;
