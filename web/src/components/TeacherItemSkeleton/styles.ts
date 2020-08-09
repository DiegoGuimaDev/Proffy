import styled from 'styled-components';

export const Container = styled.article`
  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }

  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  .bio-loading {
    padding: 0 2rem;
    line-height: 2.8rem;
    width: 100%;
    .bio-loading-row {
      background: linear-gradient(
        45deg,
        var(--color-text-complement),
        var(--color-line-in-white)
      );
      background-size: 600% 100%;
      animation: gradient 2s linear infinite;
      animation-direction: alternate;

      & + .bio-loading-row {
        margin-top: 0.4rem;
      }
      height: 1.6rem;

      width: 100%;

      &:last-child {
        width: 70%;
      }
    }
  }

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    .avatar-loading {
      min-width: 8rem;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      background: linear-gradient(
        45deg,
        var(--color-text-complement),
        var(--color-line-in-white)
      );
      background-size: 600% 100%;
      animation: gradient 2s linear infinite;
      animation-direction: alternate;
    }

    .subsection-loading {
      margin-left: 2.4rem;

      .title-loading {
        height: 2.4rem;
        display: block;
        width: 250px;
        background: linear-gradient(
          45deg,
          var(--color-text-complement),
          var(--color-line-in-white)
        );
        background-size: 600% 100%;
        animation: gradient 2s linear infinite;
        animation-direction: alternate;
      }

      .subtitle-loading {
        height: 1.6rem;
        display: block;
        margin-top: 0.4rem;
        width: 100px;
        background: linear-gradient(
          45deg,
          var(--color-text-complement),
          var(--color-line-in-white)
        );
        background-size: 600% 100%;
        animation: gradient 2s linear infinite;
        animation-direction: alternate;
      }
    }
  }

  footer {
    padding: 3.2rem 2rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price-loading {
      background: linear-gradient(
        45deg,
        var(--color-text-complement),
        var(--color-line-in-white)
      );
      background-size: 600% 100%;
      animation: gradient 2s linear infinite;
      animation-direction: alternate;
      width: 20%;
      height: 1.6rem;
      display: block;
    }

    .button-loading {
      width: 20rem;
      height: 5.6rem;
      background: linear-gradient(
        45deg,
        var(--color-text-complement),
        var(--color-line-in-white)
      );
      background-size: 600% 100%;
      animation: gradient 2s linear infinite;
      animation-direction: alternate;
      border: 0;
      border-radius: 0.8rem;
    }
  }

  @media screen and (min-width: 700px) {
    header,
    footer {
      padding: 3.2rem;
    }

    footer {
      .price-loading {
        display: initial;
        margin-left: 1.6rem;
      }

      .button-loading {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
      }
    }

    .bio-loading {
      padding: 0 3.2rem;
    }
  }
`;
