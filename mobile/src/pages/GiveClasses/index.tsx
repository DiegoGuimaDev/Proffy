import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import { Container, Background, Title, Description } from './styles';
import Button from '../../components/Button';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Background source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Background>
      <Button onPress={handleNavigateBack} text="Tudo bem" />
    </Container>
  );
};

export default GiveClasses;
