import * as React from "react";

import styled from "styled-components";

import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import profilepic from "../../assets/pictures/portfoliopicture.jpg";


import HeroInner from "./HeroInner";

const Hero = () => {
  return (
    <HeroContainer className="hidden">
      <HeroInner>
        <div className="hero-media ">
          <div className="hero-icon">
            <img className="hero-img" src={profilepic} alt="foto"></img>
          </div>
          <h3 className="hero-greet">
            Hi, I'm <b>Braian</b>!
          </h3>

          <div className="hero-text">
            A self-taught developer based in Argentina, driven by the
            curiosity and the ambition to learn, currently looking for a long-term job to
            solidify and expand my knowledge.
          </div>
          <ul className="hero-links">
            <li>
              <a href="https://github.com/braian009" target="_blank" rel="noopener noreferrer">
                <div className="hero-links__icon">
                  <Github />
                </div>
                <div className="hero-links__label">Github</div>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/braian-yanquin" target="_blank" rel="noopener noreferrer">
                <div className="hero-links__icon">
                  <LinkedIn />
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

const HeroContainer = styled.section`
  max-width: 1080px;
  min-height: 400px;
  margin: 0 auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  position: relative;

  background-color: inherit;

  @media (min-width: 40em) {
    box-shadow: 0px 5px 4px -3px var(--green-dark);

    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom: 1px solid var(--gray-primary);
    animation: neon-fade 5s ease-in-out infinite;

    @keyframes neon-fade {
      0% {
        box-shadow: 0px 5px 4px -3px var(--green-dark);
      }
      50% {
        box-shadow: none;
      }
      100% {
        box-shadow: 0px 5px 4px -3px var(--green-dark);
      }
    }
  }
`;

export default Hero;
