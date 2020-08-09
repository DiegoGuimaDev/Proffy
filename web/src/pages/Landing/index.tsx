import React from 'react';

import { Link } from 'react-router-dom';
import useSWR from 'swr';
import {
  Container,
  ButtonsContainer,
  TotalConnectionsContainer,
  PageLandingContent,
  LogoContainer,
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { getTotalConnections } from '../../services/connections';

const Landing: React.FC = () => {
  const { data } = useSWR('connections', () => getTotalConnections());

  return (
    <Container>
      <PageLandingContent>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <ButtonsContainer>
          <Link to="study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </ButtonsContainer>

        <TotalConnectionsContainer>
          Total de {data ? data.total : '...'} conexões já realizadas
          <img
            src={purpleHeartIcon}
            alt="Total de 200 conexões já realizadas"
          />
        </TotalConnectionsContainer>
      </PageLandingContent>
    </Container>
  );
};

export default Landing;
