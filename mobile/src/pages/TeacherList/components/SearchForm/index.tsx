import React, { useCallback, useState, useMemo } from 'react';

import { Picker } from '@react-native-community/picker';
import {
  Container,
  Label,
  InputGroup,
  InputBlock,
  Select2,
  SelectContainer,
} from './styles';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';

interface SearchFormProps {
  onSearch(params: { subject: string; weekDay: number; time: string }): void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState(2);
  const [time, setTime] = useState('08:00');

  const searchParams = useMemo(() => {
    return {
      subject,
      weekDay,
      time,
    };
  }, [subject, weekDay, time]);

  const submitSearch = useCallback(() => {
    onSearch(searchParams);
  }, [onSearch, searchParams]);

  const subjects = useMemo(() => {
    return [
      { label: 'Todas', value: '' },
      { label: 'Matématica', value: '1' },
      { label: 'Matématica', value: '2' },
      { label: 'Matématica', value: '3' },
      { label: 'Matématica', value: '4' },
      { label: 'Matématica', value: '5' },
    ];
  }, []);

  const weekDays = useMemo(() => {
    return [
      { label: 'Segunda-feira', value: 1 },
      { label: 'Terça-feira', value: 2 },
      { label: 'Quarta-feira', value: 3 },
      { label: 'Quinta-feira', value: 4 },
      { label: 'Sexta-feira', value: 5 },
      { label: 'Sabado', value: 6 },
      { label: 'Domingo', value: 0 },
    ];
  }, []);

  const times = useMemo(() => {
    const data = [];
    for (let index = 1; index <= 24; index += 1) {
      const timeString = `${index < 10 ? `0${index}` : index}:00`;
      data.push({ label: timeString, value: timeString });
    }
    return data;
  }, []);

  return (
    <Container>
      <Select
        label="Matéria"
        selectedValue={subject}
        onValueChange={itemValue => setSubject(itemValue.toString())}
        options={subjects}
      />

      <InputGroup>
        <InputBlock>
          <Select
            label="Dia da semana"
            selectedValue={weekDay}
            onValueChange={itemValue => setWeekDay(Number(itemValue))}
            options={weekDays}
          />
        </InputBlock>
        <InputBlock>
          <Select
            label="Horário"
            selectedValue={time}
            onValueChange={itemValue => setTime(itemValue.toString())}
            options={times}
          />
        </InputBlock>
      </InputGroup>
      <Button text="Filtrar" onPress={submitSearch} />
    </Container>
  );
};

export default SearchForm;
