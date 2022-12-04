import * as React from "react";
import styled from "styled-components";
import foto from "../portfoliopicture.jpg";
import LinkedinLogo from "../linkedin.svg";
import GithubLogo from "../github.svg";

import HeroInner from "./HeroInner";

const Hero = () => {
  return (
    <HeroContainer className='hidden'>
      <HeroInner>
        <div className="hero-media ">
          <div className="hero-icon">
            <img className="hero-img" src={foto} alt="foto"></img>
          </div>
          <h3 className="hero-greet">
            Hi!, I'm <b>Braian.</b>
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

const HeroContainer = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  position: relative;

  background-color: inherit;
  min-height: 400px;

  @media (min-width: 40em) {
    box-shadow: 0px 5px 4px -3px var(--petrol);

    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom: 1px solid var(--border-primary);
    animation: neon-fade 5s ease-in-out infinite;

    @keyframes neon-fade{
      0% {
        box-shadow: 0px 5px 4px -3px var(--petrol);
      }
      50% {
        box-shadow: none;
      }
      100% {
        box-shadow: 0px 5px 4px -3px var(--petrol);
      }
    }
  }
`;


export default Hero;
