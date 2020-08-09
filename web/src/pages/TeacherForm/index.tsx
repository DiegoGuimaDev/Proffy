import React, { useState, useCallback, useRef, useMemo } from 'react';

import { Form } from '@unform/web';
import { FormHandles, Scope } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Container, Content, ScheduleItem } from './styles';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/Textarea';
import Select from '../../components/Select';
import Button from '../../components/Button';
import { useLov } from '../../hooks/Lov';
import { createLesson } from '../../services/classes';

interface Schedule {
  weekDay: string;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [schedules, setSchedules] = useState<Schedule[]>([
    { weekDay: '1', from: '', to: '' },
  ]);

  const addNewSchedule = useCallback(() => {
    setSchedules([...schedules, { weekDay: '', from: '', to: '' }]);
  }, [schedules]);

  const { lessons, weekDays } = useLov();

  const lessonsWithoutAll = useMemo(() => {
    return lessons.filter(l => l.value != '');
  }, [lessons]);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async data => {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Informe seu nome')
          .min(3, 'Nome deve ter pelo menos 3 caracteres')
          .max(200, 'Nome deve ter no máximo 200 caracteres'),
        avatar: Yup.string().required('Informe um link para sua foto'),
        whatsapp: Yup.string()
          .required('Informe seu WhatsApp')
          .min(10, 'WhatsApp inválido'),
        bio: Yup.string()
          .required('Biografia obrigatoria')
          .min(10, 'Biografia deve ter pelo menos 10 caracteres')
          .max(500, 'Biografia deve ter no máximo 500 caracteres'),
        subject: Yup.string().required(),
        cost: Yup.number()
          .required('Qual o valor da sua hora?')
          .positive('Sua hora não vale só isso')
          .moreThan(1, 'Sua hora não vale só isso'),
        schedules: Yup.array().of(
          Yup.object().shape({
            weekDay: Yup.number().required(),
            from: Yup.string().required(),
            to: Yup.string().required(),
          }),
        ),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        await createLesson(data);
        console.log('passou');
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log(err);
        }
      }

      console.log(data);
    },
    [history],
  );

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="WhatsApp" />
            <TextArea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              options={lessonsWithoutAll}
            />
            <Input
              name="cost"
              placeholder="30.00"
              prefix="R$"
              label="Custo da sua hora por aula"
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponiveis
              <button type="button" onClick={addNewSchedule}>
                + Novo horário
              </button>
            </legend>

            {schedules.map((schedule, index) => (
              <Scope path={`schedules[${index}]`} key={schedule.weekDay}>
                <ScheduleItem>
                  <Select name="weekDay" label="Dia" options={weekDays} />
                  <Input name="from" type="time" label="Das" />
                  <Input name="to" type="time" label="Até" />
                </ScheduleItem>
              </Scope>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante!
              <br />
              Prrencha todos os dados
            </p>
            <Button type="submit">Salvar cadastro</Button>
          </footer>
        </Form>
      </Content>
    </Container>
  );
};

export default TeacherForm;
