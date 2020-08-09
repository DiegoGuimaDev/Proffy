import React from 'react';

import { Container } from './styles';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { Lesson } from '../../models/Lesson';
import AnchorButton from '../AnchorButton';

export interface TeacherItemProps {
  lesson: Lesson;
  onContactClick(lesson: Lesson): void;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  lesson,
  onContactClick,
}) => {
  return (
    <Container>
      <header>
        <img src={lesson.user.avatar} alt={lesson.user.name} />
        <div>
          <strong>{lesson.user.name}</strong>
          <span>{lesson.subject}</span>
        </div>
      </header>

      <p>{lesson.user.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {lesson.cost}</strong>
        </p>
        <AnchorButton
          onClick={() => onContactClick(lesson)}
          href={`https://wa.me/${lesson.user.whatsapp}`}
          target="_blank"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </AnchorButton>
      </footer>
    </Container>
  );
};

export default TeacherItem;
