import React, { useRef, useCallback, useState } from 'react';

import useSWR from 'swr';
import { useSpring, animated } from 'react-spring';
import { Container, SearchTeacherForm } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { getClasses } from '../../services/classes';
import { Lesson } from '../../models/Lesson';
import { createNewConnection } from '../../services/connections';
import TeacherItemSkeleton from '../../components/TeacherItemSkeleton';
import { useLov } from '../../hooks/Lov';
import Empty from './components/Empty';

interface SearchParams {
  weekDay: string;
  subject: string;
  time: string;
}

const TeacherList: React.FC = () => {
  const formRef = useRef(null);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    weekDay: '1',
    subject: '',
    time: '08:00',
  });

  const { lessons, weekDays } = useLov();

  const handleSubmit = useCallback((data: SearchParams) => {
    setSearchParams(data);
  }, []);

  const handleOnContactClick = useCallback((lesson: Lesson) => {
    createNewConnection({ idUser: lesson.user.id });
  }, []);

  const { data } = useSWR<Lesson[]>(['classes', searchParams], (_url, search) =>
    getClasses(search),
  );
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeacherForm
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={searchParams}
        >
          <Select name="subject" label="Matéria" options={lessons} />
          <Select name="weekDay" label="Dia da semana" options={weekDays} />
          <Input type="time" name="time" label="Hora" />
          <Button type="submit">Buscar</Button>
        </SearchTeacherForm>
      </PageHeader>

      <animated.main style={fade}>
        {!data && (
          <>
            <TeacherItemSkeleton />
            <TeacherItemSkeleton />
          </>
        )}

        {data &&
          data.map(lesson => (
            <TeacherItem
              onContactClick={handleOnContactClick}
              lesson={lesson}
              key={lesson.id}
            />
          ))}

        {data?.length === 0 && <Empty />}
      </animated.main>
    </Container>
  );
};

export default TeacherList;
