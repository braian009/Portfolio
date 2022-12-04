import * as React from "react";
import styled from "styled-components";
import IMAGES from "../../images";

import ProjectsInner from "./ProjectsInner";
import Slider from "./Slider";

const Projects = () => {
  const slides = [...IMAGES];

  return (
    <ProjectsContainer id="projects" className="hidden">
      <h3 className="projects-title">Projects</h3>
      <ProjectsInner>
        <Slider slides={slides} />
        <div className="projects-info">
          <h4>Some title</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has
          </p>
          <div className="projects-technologies">
            <h4>Technologies</h4>
            <ul className="tag-list">
              <li>
                <div >React</div>
              </li>
              <li>
                <div>Django</div>
              </li>
              <li>
                <div >Django rest framework</div>
              </li>
              <li>
                <div>firebase</div>
              </li>
              <li>
                <div >something else</div>
              </li>
            </ul>
          </div>
        </div>
      </ProjectsInner>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 2em;
  margin-bottom: 1.5em;

  .projects-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05em;
    padding-bottom: 0.3em;
    margin-bottom: 1.5em;
    border-bottom: 1px solid var(--border-primary);
  }
`;

export default Projects;
