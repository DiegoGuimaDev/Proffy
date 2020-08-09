import React, { useCallback } from 'react';

import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  HeaderContent,
  Content,
  Title,
  Message,
  Footer,
  IndicatorContainer,
  Indicator,
} from './styles';

const OnBoardingStudy: React.FC = () => {
  const { navigate } = useNavigation();

  const handleGoOnBoardingGiveClassesPage = useCallback(() => {
    navigate('OnBoardingGiveClasses');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Feather name="book-open" size={120} color="#FFF" />
        </HeaderContent>
      </Header>
      <Content>
        <Title>01.</Title>
        <Message>Encontre vários professores para ensinar você</Message>
      </Content>
      <Footer>
        <IndicatorContainer>
          <Indicator mode="primary" />
          <Indicator />
        </IndicatorContainer>
        <TouchableOpacity onPress={handleGoOnBoardingGiveClassesPage}>
          <Feather name="arrow-right" size={26} color="#9C98A6" />
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default OnBoardingStudy;
