import React from 'react';

import { Container } from './styles';

const TeacherItemSkeleton: React.FC = () => {
  return (
    <Container>
      <header>
        <div className="avatar-loading" />
        <div className="subsection-loading">
          <div className="title-loading" />
          <div className="subtitle-loading" />
        </div>
      </header>

      <div className="bio-loading">
        <div className="bio-loading-row" />
        <div className="bio-loading-row" />
        <div className="bio-loading-row" />
        <div className="bio-loading-row" />
      </div>

      <footer>
        <div className="price-loading" />
        <div className="button-loading" />
      </footer>
    </Container>
  );
};

export default TeacherItemSkeleton;
