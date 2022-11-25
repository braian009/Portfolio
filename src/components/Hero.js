import * as React from "react";
import styled from "styled-components";
import foto from "./portfoliopicture.jpg";
import LinkedinLogo from "./linkedin.svg";
import GithubLogo from "./github.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroInner>
        <div className="hero-media">
          <div className="hero-icon">
            <img className="hero-img" src={foto} alt="foto"></img>
          </div>
          <h3 className="hero-greet">
            Hi!, I'm <b>....</b>, A self-taught developer based in ....
            ..........
          </h3>

          <div className="hero-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            necessitatibus inventore corrupti consequuntur aspernatur rerum
            dignissimos est voluptates itaque nesciunt natus repellendus modi,
            nemo iste dicta nobis animi similique maxime.
          </div>
          <ul className="hero-links">
            <li>
              <a href="/">
                <div className="hero-links__icon">
                  <img src={GithubLogo} alt="github"></img>
                </div>
                <div className="hero-links__label">Github</div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="hero-links__icon">
                  <img src={LinkedinLogo} alt="linkedin"></img>
                </div>
                <div className="hero-links__label">Linkedin</div>
              </a>
            </li>
          </ul>
        </div>
      </HeroInner>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  position: relative;

  background-color: inherit;
  min-height: 400px;

  @media (min-width: 40em) {
    box-shadow: 0px 4px 4px var(--petrol);

    border-bottom: 1px solid var(--font-color);
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    animation: neon-fade 5s ease-in-out infinite;

    @keyframes neon-fade {
      0% {
        box-shadow: 0px 4px 3px var(--petrol);
      }
      50% {
        box-shadow: none;
      }
      100% {
        box-shadow: 0px 4px 3px var(--petrol);
      }
    }
  }
`;

const HeroInner = styled.div`
  height: 100%;

  .hero-media {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1em;
    place-items: center;

    padding: 0.5em;
    height: 100%;
    width: 100%;

    .hero-icon {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);

      .hero-img {
        width: 100%;
        border-radius: 50%;
        opacity: 0.6;
      }
      .hero-greet {
        border-bottom: 1px solid var(--font-color);
        margin-bottom: 0;
        padding-bottom: 0.3em;
      }

      .hero-text {
        border-radius: 0.5em;
      }
    }

    .hero-links {
      margin: 0;
      padding: 0.5em;
      display: flex;
      width: 10em;
      justify-content: space-between;
      list-style-type: none;

      a {
        text-decoration: none;

        &:hover {
          .hero-links__icon {
            transform: scale(1.2);
          }
          .hero-links__label{
            opacity: 0;
            transform: translateY(-0.5em);
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
        text-align: center;
        margin-top: 0.3em;
        color: var(--font-color);
        text-decoration: none;
        transition: all 0.3s ease-out;
      }
    }
  }

  @media (min-width: 40em) {
    .hero-media {
      margin-top: 0.5em;
      grid-template-columns: 1fr 2fr;
      grid-auto-rows: auto;
      gap: 0 1em;

      .hero-icon {
        grid-column: span 1;
        grid-row: span 2;
      }

      .hero-greet {
        justify-self: left;
        margin: 0;
        align-self: center;
        text-align: left;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }

      .hero-text {
        justify-self: left;
        align-self: start;

        grid-column: span 1;
        margin-top: 0;
      }

      .hero-links {
        grid-column: span 2;
        width: 11em;
      }
    }

    @media (min-width: 50em) {
      .hero-media {
        margin-top: 1.5em;
      }
    }
  }
`;

export default Hero;
