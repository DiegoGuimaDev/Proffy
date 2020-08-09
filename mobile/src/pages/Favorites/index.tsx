import React from 'react';

import { Container, List } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { useFavorites } from '../../hooks/Favorites';
import Empty from '../../components/Empty';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
      {favorites?.length === 0 && (
        <Empty message="Você não tem nenhum Proffy favorito" />
      )}
      <List
        data={favorites}
        keyExtractor={i => i.id}
        renderItem={({ item }) => <TeacherItem lesson={item} />}
      />
    </Container>
  );
};

export default Favorites;
