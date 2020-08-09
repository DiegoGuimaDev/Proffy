import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div.attrs({
  className: 'select-block input-field',
})`
  position: relative;

  & + .input-field {
    margin-top: 1.4rem;
  }

  &:focus-within::after {
    content: '';
    width: calc(100% - 3.2rem);
    height: 2px;
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  label {
    font-size: 1.4rem;
  }
`;

export const SelectWrapper = styled(ReactSelect).attrs({
  classNamePrefix: 'react-select',
})`
  outline: 0;
  .react-select__control {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    border-color: none;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 0.4rem;
    font: 1.6rem Archivo;
    border-color: var(--color-line-in-white) !important;
    box-shadow: none;
  }
`;
