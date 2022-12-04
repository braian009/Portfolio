import * as React from "react";
import styled from "styled-components";
import ReactLogo from "../react.svg";
import PythonLogo from "../python.svg";
import JSLogo from "../javascript.svg";
import DjangoLogo from "../django.svg";
import PostgresLogo from "../postgres.svg";

import ItemsGrid from "./ItemsGrid";
import SkillsInner from "./SkillsInner";

const Skills = () => {
  return (
    <SkillsContainer id="skills" className='hidden'>
        <h3 className="skills-title">Skills</h3>
      <SkillsInner>
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
  margin-bottom: 1.5em;

  padding-top: 2em;

  .skills-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05em;
    padding-bottom: 0.3em;
    margin-bottom: 1.5em;
    border-bottom: 1px solid var(--border-primary);
  }
`;



export default Skills;
