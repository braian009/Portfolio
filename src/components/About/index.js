import * as React from "react";
import styled from "styled-components";

import StartImg from "../../assets/pictures/start.svg";
import PresentImg from "../../assets/pictures/present.svg";
import FutureImg from "../../assets/pictures/future.svg";

const About = () => {
  return (
    <AboutContainer id="about" className="hidden">
      <h3 className="about-title">My journey</h3>

      <AboutInner>
        <div className="about-media">
          <div className="about-media__img">
            <div className="img-start"></div>
          </div>
          <div className="about-media__content">
            <h4>How it started</h4>
            <p>
              In mid 2021 i decided to learn to code through some python
              books not being aware of the several paths in the field, and
              because of that, my journey was only python as a hobby meanwhile i
              was finishing my carrer. After a couple of months, and after done
              some trivial automations, I decided to learn django and rest
              framework, and along with it, postgres through pgAdmin.
            </p>
          </div>
        </div>
        <div className="about-media">
          <div className="about-media__img">
            <div className="img-present"></div>
          </div>
          <div className="about-media__content">
            <h4>How it goes</h4>
            <p>
              After that 'backend base', and after picking JavaScript in mid 2022,
              I am building projects that help me solidify my knowledge while
              demonstrating it, focused on the frontend through the use of react
              and having a lot of fun trying to gain experience in the
              development and design of the user interface. The learning journey
              must continue and surely i'll came up with tools to complement the
              existing ones
            </p>
          </div>
        </div>
        <div className="about-media featured">
          <div className="about-media__img">
            <div className="img-future"></div>
          </div>
          <div className="about-media__content">
            <h4>Looking forward</h4>
            <p>
              Thinking about the future, I would love to be part of an
              organization in which I can put my knowledge into practice, either in backend or in frontend. That
              is gonna make me grow both professionaly and personally. Being
              part of a group of people who pursue a common goal while being
              constantly learning would be the best case scenario for me.
            </p>
          </div>
        </div>
      </AboutInner>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 1.5em;

  padding-top: 2em;

  .about-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.08em;
    padding-top: 1.5em;
    
    width: 10em;
    margin: 0 auto;
    margin-bottom: 1.5em;

    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-top: 2px solid var(--green-dark);

  }
`;

const AboutInner = styled.div`
  display: grid;
  padding: 0;
  width: 95%;
  max-width: 920px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1em;

  .about-media {
    padding: 1em;
    border-radius: 0.7em;

    background-image: linear-gradient(
      to right,
      var(--red-dark-softer),
      hsla(182, 54%, 4%, 0.4)
    );
    box-shadow: 0px 0px 22px var(--black-secondary);
    border: 1px solid var(--green-dark);
  }

  .about-media__img {
    display: none;
  }

  .about-media__content {
    flex: 1;
    font-size: 0.95em;
    
    h4 {
      font-size: 1.1rem;
      margin-top: 0;
      margin-bottom: 0.5em;
      letter-spacing: 0.06em;
    }

    p {
      margin: 0;
      color: var(--font-color);
    }
  }

  @media (min-width: 50em) {
    .about-media {
      display: flex;
      align-items: center;
      padding: 1em;
    }

    .about-media__img {
      display: block;
      flex: 0 0 210px;
      margin-right: 1em;
      border-radius: 0.7em;
      height: 100%;

      div {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100%;
      }

      .img-start {
        background-image: url(${StartImg});
      }

      .img-present {
        background-image: url(${PresentImg});
      }

      .img-future {
        background-image: url(${FutureImg});
      }

      img {
        width: 200px;
      }
    }

    .about-media__content {
      margin: 0;
      margin-left: 1em;
    }
  }

  @media (min-width: 50em) {
    .about-media__content {
      overflow: auto;
    }
  }
`;

export default About;
