import styled from "styled-components";

const HeroInner = styled.div`
  height: 100%;

  .hero-media {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1.5em;
    place-items: center;

    height: 100%;
    width: 90%;
    margin: 0 auto;

    .hero-icon {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      box-shadow: 4px 4px 11px #141414;


      .hero-img {
        width: 100%;
        border-radius: 50%;
        opacity: 0.6;
      }
    }

    .hero-greet {
      /* border-bottom: 1px solid var(--font-color); */
      font-size: 1.2em;
      margin: 0;
      line-height: 1.8;
      padding: 0.5em;
      border-radius: 0.7em;

      
      box-shadow: 4px 4px 11px #141414;
    }

    .hero-text {
      font-size: 1.1rem;
      justify-self: center;
      text-align: center;


    }

    .hero-links {
      padding: 0;
      margin: 0;
      margin-top: 0.5em;
      display: flex;
      width: 11em;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;


      a {
        text-decoration: none;

        &:hover {
          .hero-links__icon {
            transform: scale(1.1);
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
        transition: all 0.3s ease-out;
      }

      .hero-links__icon > img {
        max-width: 100%;
      }

      .hero-links__label {
        opacity: 0;
        text-align: center;
        margin-top: 0.3em;
        color: var(--font-color);
        text-decoration: none;
        transform: translateY(-0.5em);
        transition: opacity 0.3s linear, transform 0.3s linear;
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
        /* font-size: 1.4em; */
        /* padding: .5em 0.8em; */
        justify-self: left;
        margin: 0;
        align-self: center;
        text-align: left;
        grid-column: 2 / 3;
        grid-row: 1 / 2;

      }

      .hero-text {
        /* font-size: 1.2em; */
        justify-self: left;
        align-self: start;
        text-align: left;
        padding: 0.5em;

        grid-column: span 1;
        margin-top: 0;
        border-bottom: 1px solid var(--border-primary);
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

      .hero-greet {
        font-size: 1.3rem;
      }

      .hero-text {
        font-size: 1.1rem;
      }
    }
  }
`;

export default HeroInner;
