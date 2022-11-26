import * as React from "react";
import styled from "styled-components";
import ReactLogo from "./react.svg";
import PythonLogo from "./python.svg";
import JSLogo from "./javascript.svg";
import DjangoLogo from "./django.svg";
import PostgresLogo from "./postgres.svg";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsInner>
        <h3 className="skills-title">Skills</h3>
        <ItemsGrid>
          <div className="skills-item">
            <img src={ReactLogo} alt="react"></img>
          </div>
          <div className="skills-item">
            <img src={PythonLogo} alt="python"></img>
          </div>
          <div className="skills-item">
            <img src={JSLogo} alt="javascript"></img>
          </div>
          <div className="skills-item">
            <img src={DjangoLogo} alt="django"></img>
          </div>
          <div className="skills-item">
            <img src={PostgresLogo} alt="postgres"></img>
          </div>
        </ItemsGrid>
        <div className="skills-info">
          <div className="skills-info__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className="skills-info__list">
            <div>jejejejeje</div>
            <div>jejejejeje</div>
            <div>jejejejeje</div>
            <div>jejejejeje</div>
            <div>jejejejeje</div>
            <div>jejejejeje</div>
          </div>
        </div>
      </SkillsInner>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  min-height: 400px;
  margin-bottom: 1.5em;

  padding-top: 2em;
`;

const SkillsInner = styled.div`
  .skills-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05em;
    padding-bottom: 0.3em;
    border-bottom: 1px solid var(--white-pearl);
  }

  .skills-info__text {
    text-align: center;
  }

  .skills-info__list {
    background-image: linear-gradient(
      to left,
      hsla(0, 25%, 21%, 0.4),
      transparent,
      hsla(0, 25%, 21%, 0.4)
    );
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    align-items: center;
    padding: 0.5em;
    gap: 0.5em;
    width: 90vw;
    max-width: 580px;
    border-radius: 0.4em;
    margin: 0 auto;
    margin-top: 1.5em;
    border: 1px solid var(--petrol);

    * {
      text-align: center;
      text-decoration: dotted;
    }
  }
`;

const ItemsGrid = styled.div`
  display: grid;
  place-items: center;
  width: 90vw;
  max-width: 890px;
  margin: 0 auto;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-auto-rows: 1fr;
  grid-auto-flow: dense;
  padding: 1.5em 0.5em;

  .skills-item {
    text-align: center;
    width: 120px;
    height: 120px;
    padding-bottom: 0.5em;
    border-radius: 50%;
  }
`;

export default Skills;
