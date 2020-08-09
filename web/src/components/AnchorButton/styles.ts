import styled from 'styled-components';

export const Container = styled.a`
  width: 20rem;
  height: 5.6rem;
  background: var(--color-secondary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.4rem Archivo;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s;
  text-decoration: none;

  &:hover {
    background: var(--color-secondary-dark);
  }
`;
