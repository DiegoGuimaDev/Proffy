import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
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

const OnBoardingGiveClasses: React.FC = () => {
  const { reset } = useNavigation();

  const handleGoLandingPage = useCallback(() => {
    reset({
      routes: [{ name: 'Landing' }],
      index: 0,
    });
  }, [reset]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Ionicons name="ios-easel" size={120} color="#FFF" />
        </HeaderContent>
      </Header>
      <Content>
        <Title>02.</Title>
        <Message>Ou dê aulas sobre o que você mais conhece</Message>
      </Content>
      <Footer>
        <IndicatorContainer>
          <Indicator />
          <Indicator mode="secondary" />
        </IndicatorContainer>
        <TouchableOpacity onPress={handleGoLandingPage}>
          <Feather name="arrow-right" size={26} color="#9C98A6" />
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default OnBoardingGiveClasses;
