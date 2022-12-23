import * as React from "react";
import styled from "styled-components";
import projectList from "./projectList";

import ProjectsInner from "./ProjectsInner";
import Slider from "./Slider";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  console.log(projectList);

  return (
    <ProjectsContainer id="projects" className="hidden">
      <h3 className="projects-title">Projects</h3>
      <ProjectsInner>
        <Slider
          projectList={projectList}
          index={currentIndex}
          onChangeSlider={setCurrentIndex}
        />
        <div className="projects-info">
          <h4>{projectList[currentIndex].title}</h4>
          <p>{projectList[currentIndex].description}</p>
          <div className="projects-technologies">
            <h4>Technologies</h4>
            <ul className="tag-list">
              {projectList[currentIndex].technologies.map((technology) => {
                return (
                  <li>
                    <div>{technology}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="projects-links">
            {projectList[currentIndex].codeUrl && (
              <div>
                <a href={`${projectList[currentIndex].codeUrl}`} target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            )}
            {projectList[currentIndex].demoUrl && (
              <div>
                <a href={`${projectList[currentIndex].demoUrl}`} target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            )}
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
  position: relative;

  .projects-title {
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

export default Projects;
