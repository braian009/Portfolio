import styled from "styled-components";

const HeroInner = styled.div`
  .hero-media {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1.5em;
    place-items: center;

    width: 90%;
    margin: 0 auto;

    .hero-icon {
      width: 250px;
      height: 250px;
      border-radius: 50%;

      border: 2px solid var(--green-dark);
      box-shadow: 0px 0px 44px var(--black-secondary);

      .hero-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        opacity: 0.5;
      }
    }

    .hero-greet {
      line-height: 1.1;
      font-weight: 400;
      font-size: 1.25rem;
      margin: 0;
      padding: 0.5em 0.8em;
      border-radius: 0.7em;
      border: 1px solid var(--green-dark);
      background-image: linear-gradient(
        to right,
        var(--red-dark-softer),
        hsla(182, 54%, 4%, 0.4)
      );
      box-shadow: 0px 0px 22px var(--black-secondary);
    }

    .hero-text {
      font-size: 1.1rem;
      justify-self: center;
      text-align: center;
      padding: 0 0.5em;
    }

    .hero-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      margin: 0;
      margin-top: 0.5em;
      width: 11em;
      list-style-type: none;

      a {
        &:hover {
          .hero-links__icon {
            svg {
              transform: scale(1.1);
            }
          }
          .hero-links__label {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }

      .hero-links__icon {
        margin: 0 auto;
        width: 50px;
        height: 50px;

        svg {
          fill: var(--gray-secondary);
          filter: drop-shadow(0px 0px 44px var(--black-secondary));
          transition: all 0.2s ease-out;
        }
      }

      .hero-links__icon > img {
        width: 100%;
      }

      .hero-links__label {
        opacity: 0;
        text-align: center;
        margin-top: 0.3em;
        color: var(--font-color);
        text-decoration: none;
        transform: translateY(-0.5em);
        transition: opacity 0.2s linear, transform 0.2s ease-out;
      }
    }
  }

  @media (min-width: 40em) {
    .hero-media {
      grid-template-columns: 1fr 2fr;
      grid-auto-rows: auto;
      gap: 0 1em;

      .hero-icon {
        grid-column: span 1;
        grid-row: span 2;
      }

      .hero-greet {
        justify-self: left;
        align-self: center;
        text-align: left;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }

      .hero-text {
        justify-self: left;
        align-self: start;
        grid-column: span 1;
        text-align: left;
        padding-left: 1em;
        padding-top: 0;
        padding-bottom: 0.5em;
        margin-top: 0;
        border-bottom: 1px double var(--green-dark);
      }

      .hero-links {
        grid-column: span 2;
        margin-top: 1em;
      }
    }
  }

  @media (min-width: 55em) {
    .hero-media {
      margin-top: 1.5em;
    }
  }
`;

export default HeroInner;
