import React, {
  useCallback,
  useMemo,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react';
import { Image } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  TotalConnectionsText,
} from './styles';
import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import SquareButton from './components/SquareButton';
import heartIcon from '../../assets/images/icons/heart.png';
import { useConnection } from '../../hooks/Connection';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnection] = useState<number | undefined>(
    undefined,
  );

  const { getTotalConnections } = useConnection();

  // TODO está chamando 2x no primeiro render
  useFocusEffect(() => {
    getTotalConnections().then(setTotalConnection);
  });

  const connections = useMemo(() => {
    return totalConnections || '...';
  }, [totalConnections]);

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses');
  }, [navigate]);

  const handleNavigateToStudy = useCallback(() => {
    navigate('Study');
  }, [navigate]);

  return (
    <Container>
      <Banner source={landingImage} />
      <Title>
        Seja bem vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <SquareButton
          mode="primary"
          onPress={handleNavigateToStudy}
          text="Estudar"
        >
          <Image source={studyIcon} />
        </SquareButton>
        <SquareButton
          mode="secondary"
          text="Dar aulas"
          onPress={handleNavigateToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
        </SquareButton>
      </ButtonsContainer>

      <TotalConnectionsText>
        Total de {connections} conexões já realizadas{' '}
        <Image source={heartIcon} />
      </TotalConnectionsText>
    </Container>
  );
};

export default Landing;
