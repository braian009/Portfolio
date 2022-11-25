import * as React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer id="about">
      <h3 className="about-title">About</h3>

      <AboutInner>
        <div className="about-media">
          <div className="about-media__img"></div>
          <div className="about-media__content">
            <h4>something</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              eaque, neque dolores blanditiis repellendus totam culpa excepturi
              doloribus reprehenderit nemo. ores blanditiis repellendus totam
              culpa excepturi doloribus reprehenderit nemo. repellendus totam
              culpa excepturi doloribus reprehenderit nemo.
            </p>
          </div>
        </div>
        <div className="about-media">
          <div className="about-media__img"></div>
          <div className="about-media__content">
            <h4>something</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              eaque, neque dolores blanditiis repellendus totam culpa excepturi
              doloribus reprehenderit nemo. ores blanditiis repellendus totam
              culpa excepturi doloribus reprehenderit nemo. repellendus totam
              culpa excepturi doloribus reprehenderit nemo.
            </p>
          </div>
        </div>
        <div className="about-media featured">
          <div className="about-media__img"></div>
          <div className="about-media__content">
            <h4>but... what about ............</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              eaque, neque dolores blanditiis repellendus totam culpa excepturi
              doloribus reprehenderit nemo. ores blanditiis repellendus totam
              culpa excepturi doloribus reprehenderit nemo. repellendus totam
              culpa excepturi doloribus reprehenderit nemo.
            </p>
          </div>
        </div>
      </AboutInner>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 1.5em;

  padding-top: 2em;


  .about-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05em;
    padding-bottom: 0.3em;
    border-bottom: 1px solid var(--font-color);
  }
`;

const AboutInner = styled.div`
  display: grid;
  padding: 0;
  width: 90%;
  max-width: 890px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1em;

  .about-media {
    padding: 0.8em;
    border-radius: 0.7em;
    box-shadow: 0px 4px 22px  var(--petrol);

    background-color: hsla(0, 25%, 21%, 0.3);
  }

  .about-media:hover .about-media__img {
    transform: translateX(0);
  }

  .about-media__img {
    display: none;
    width: 200px;
    height: 150px;
    border-radius: 0.7em;
    transform: translateX(-2em);
    transition: all 0.3s ease-out;
  }

  .about-media__content h4 {
    margin-top: 0;
    margin-bottom: 0.5em;
    letter-spacing: 0.06em;
  }

  @media (min-width: 40em) {
    .about-media__img {
      display: block;
      float: left;
      margin-right: 1em;
      background-color: var(--font-color);
    }

    .about-media__content {
      overflow: auto;
      margin: 0;
    }
  }

  @media (min-width: 50em) {
    .about-media__content {
      overflow: auto;
    }
  }
`;

export default About;
