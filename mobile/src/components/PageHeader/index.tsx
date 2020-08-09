import React, { useCallback, ReactNode } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { Container, TopBar, BackButton, Title, Header } from './styles';

export interface PageHeaderProps {
  title: string;
  right?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, right, children }) => {
  const { navigate } = useNavigation();

  const handleGoBack = useCallback(() => {
    navigate('Landing');
  }, [navigate]);

  return (
    <Container>
      <TopBar>
        <BackButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BackButton>
        <Image source={logoImg} resizeMode="contain" />
      </TopBar>
      <Header>
        <Title>{title}</Title>
        {right}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
