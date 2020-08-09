import React, { useMemo, useCallback, useState, memo } from 'react';
import { Image, Linking } from 'react-native';
import {
  Container,
  ProfileAvatar,
  Profile,
  ProfileInfo,
  ProfileName,
  ProfileSubject,
  Biografia,
  Footer,
  FooterPrice,
  FooterPriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { useFavorites } from '../../hooks/Favorites';
import { useConnection } from '../../hooks/Connection';
import { ClassItem } from '../../hooks/Classes';

export interface TeacherItemProps {
  lesson: ClassItem;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ lesson }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { createConnection } = useConnection();
  const [isMarkedAsFavorite, setIsMarkerAsFavorite] = useState(() =>
    isFavorite(lesson.id),
  );

  const handleFavoriteClick = useCallback(() => {
    const favoriteStatus = toggleFavorite(lesson);
    setIsMarkerAsFavorite(favoriteStatus);
  }, [lesson, toggleFavorite]);

  const handleLinkToWhatsApp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=${lesson.user.whatsapp}`);
    createConnection(lesson.user.id);
  }, [lesson, createConnection]);

  const favoriteIcon = useMemo(() => {
    return isMarkedAsFavorite ? unfavoriteIcon : heartOutlineIcon;
  }, [isMarkedAsFavorite]);

  return (
    <Container>
      <Profile>
        <ProfileAvatar source={{ uri: lesson.user.avatar }} />

        <ProfileInfo>
          <ProfileName>{lesson.user.name}</ProfileName>
          <ProfileSubject>{lesson.subject}</ProfileSubject>
        </ProfileInfo>
      </Profile>

      <Biografia>{lesson.user.bio}</Biografia>

      <Footer>
        <FooterPrice>
          Preço/hora {'   '}
          <FooterPriceValue>R$ {lesson.cost}</FooterPriceValue>
        </FooterPrice>
        <ButtonsContainer>
          <FavoriteButton
            isFavorite={isMarkedAsFavorite}
            onPress={handleFavoriteClick}
          >
            <Image source={favoriteIcon} />
          </FavoriteButton>
          <ContactButton onPress={handleLinkToWhatsApp}>
            <Image source={whatsappIcon} />
            <ContactButtonText>
              Entrar em contato {isMarkedAsFavorite}
            </ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default memo(TeacherItem);
