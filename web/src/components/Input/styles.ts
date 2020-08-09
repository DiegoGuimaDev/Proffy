import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'input-block input-field',
})`
  position: relative;

  & + .input-field {
    margin-top: 1.4rem;
  }

  &:focus-within {
    &::after {
      content: '';
      width: calc(100% - 3.2rem);
      height: 2px;
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }

    p {
      color: var(--color-primary-light);
    }
  }

  p {
    position: absolute;
    top: 47px;
    left: 18px;
    transition: color 0.2s;

    & + input {
      padding-left: 42px;
    }
  }

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

    &::placeholder {
      opacity: 0.3;
    }
  }
`;
