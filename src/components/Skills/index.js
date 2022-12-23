import * as React from "react";
import styled from "styled-components";
import ReactIcon from "../../assets/icons/react.svg";
import PythonIcon from "../../assets/icons/python.svg";
import JSIcon from "../../assets/icons/javascript.svg";
import DjangoIcon from "../../assets/icons/django.svg";

import ItemsGrid from "./ItemsGrid";
import SkillsInner from "./SkillsInner";

const skillsList = {
  primary: [
    { icon: ReactIcon, name: 'React' },
    { icon: JSIcon, name: 'JavaScript' },
    { icon: PythonIcon, name: 'Python' },
    { icon: DjangoIcon, name: 'Django' },
  ],
  secondary: [
    'Rest Framework',
    'PostgreSQL',
    'PgAdmin',
    'Unittest',
    'Git',
    'Styled Components',
    'Firebase',
    'React Router',
    'HTML5',
    'CSS3',
  ]
}

const Skills = () => {
  return (
    <SkillsContainer id="skills" className="hidden">
      <h3 className="skills-title">Skills</h3>
      <SkillsInner>
        <ItemsGrid>
          {skillsList.primary.map((skill) => {
            return (
              <div className="skills-item">
            <img src={skill.icon} alt={skill.name}></img>
          </div>
            )
          })}
          
        </ItemsGrid>
        <div className="skills-info">
          <div className="skills-info__text">
            Those four, frameworks and their respective languages are the ones
            I'm familiar with. For a moment I've tried Docker and Typescript as
            major tools to implement, but not enough to consider those as
            learned, sot they remain in the must-do list as well as real practice in terms of testing in react with RTL and Jest. Aside of that and in
            addition of the former ones, here are some more tools which I
            complement my skills with:
          </div>
          <div className="skills-info__list">
            {skillsList.secondary.map((skill) => {
              return <div>{skill}</div>
            })}
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
    letter-spacing: 0.08em;
    margin-bottom: 1.5em;
    padding-top: 1.5em;
    
    width: 10em;
    margin: 0 auto;
    margin-bottom: 1.5em;


    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-top: 2px solid var(--green-dark);
  }
`;

export default Skills;
