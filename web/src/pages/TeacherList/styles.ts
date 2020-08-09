import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div.attrs({
  id: 'page-teacher-list',
})`
  width: 100vh;
  height: 100vh;

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media screen and (min-width: 700px) {
    width: 100%;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;

export const SearchTeacherForm = styled(Form)`
  margin-top: 3.2rem;
  width: 100%;

  label {
    color: var(--color-text-in-primary);
  }

  button {
    margin-top: 3.2rem;
    width: 100%;
  }

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    .input-field + .input-field {
      margin-top: 0;
    }
  }
`;
