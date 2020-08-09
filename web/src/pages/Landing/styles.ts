import styled from 'styled-components';

export const Container = styled.div.attrs({
  id: 'page-landing',
})`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  .hero-image {
    width: 100%;
  }

  @media (min-width: 1100px) {
    .hero-image {
      grid-area: hero;
      justify-self: end;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  text-align: left;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const PageLandingContent = styled.div.attrs({
  id: 'page-landing-content',
})`
  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const TotalConnectionsContainer = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: 'total';
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;

    img {
      margin-right: 2.4rem;
    }

    &:first-child {
      margin-right: 1.6rem;
    }

    &.study {
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    }

    &.give-classes {
      background: var(--color-secondary);

      &:hover {
        background: var(--color-secondary-dark);
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    a {
      margin: 10px 0 !important;
      width: 100%;
    }
  }
  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`;
