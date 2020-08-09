import React, { useState, useCallback, useEffect, useMemo } from 'react';

import { Feather, FontAwesome } from '@expo/vector-icons';
import { Animated } from 'react-native';
import { useTheme } from 'styled-components';
import useSWR from 'swr';
import {
  Container,
  List,
  OpenFilterButton,
  OpenFilterButtonText,
  OpenFilterButtonContainer,
} from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import SearchForm from './components/SearchForm';
import Error from '../../components/Error';
import { useFavorites } from '../../hooks/Favorites';
import Empty from '../../components/Empty';
import { useClasses, GetClassesParams } from '../../hooks/Classes';

const TeacherList: React.FC = () => {
  const { search } = useClasses();
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const { isFavorite } = useFavorites();

  // Animations Controllers
  const [opacity] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));

  const { colorSecondary } = useTheme();
  const [searchParams, setSearchParams] = useState<GetClassesParams>({
    subject: '',
    weekDay: 2,
    time: '08:00',
  });

  const { data, error } = useSWR(['classes', searchParams], (uri, params) =>
    search(params),
  );

  const classes = useMemo(() => {
    return (data || []).map(dataItem => ({
      ...dataItem,
      isFavorite: isFavorite(dataItem.id),
    }));
  }, [isFavorite, data]);

  const updateSearch = useCallback((params: GetClassesParams) => {
    setIsFiltersVisible(state => !state);
    setSearchParams(params);
  }, []);

  useEffect(() => {
    if (!isFiltersVisible) {
      Animated.parallel([
        Animated.timing(height, {
          toValue: 300,
          useNativeDriver: false,
          duration: 500,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          useNativeDriver: false,
          duration: 500,
        }),
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          useNativeDriver: false,
          duration: 300,
        }),
        Animated.timing(height, {
          toValue: 0,
          useNativeDriver: false,
          duration: 500,
        }),
      ]).start();
    }
  }, [isFiltersVisible, height, opacity]);

  const handleToggleFilter = useCallback(() => {
    setIsFiltersVisible(state => !state);
  }, []);

  return (
    <Container>
      <PageHeader title="Proffys disponíveis">
        <OpenFilterButton onPress={handleToggleFilter}>
          <OpenFilterButtonContainer>
            <Feather name="filter" size={20} color={colorSecondary} />
            <OpenFilterButtonText>
              Filtrar por dia, hora e matéria
            </OpenFilterButtonText>
          </OpenFilterButtonContainer>
          <FontAwesome
            size={12}
            color="#FFF"
            name={isFiltersVisible ? 'chevron-down' : 'chevron-up'}
          />
        </OpenFilterButton>
        <Animated.View style={{ height, opacity }}>
          <SearchForm onSearch={updateSearch} />
        </Animated.View>
      </PageHeader>

      {error && <Error />}

      {data && classes.length === 0 && (
        <Empty message="Nenhum Proffy encontrado :(" />
      )}

      {!error && (
        <List
          data={classes}
          keyExtractor={i => `${i.id}:${i.isFavorite}`}
          renderItem={({ item }) => <TeacherItem lesson={item} />}
        />
      )}
    </Container>
  );
};

export default TeacherList;
