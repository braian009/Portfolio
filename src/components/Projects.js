import * as React from "react";
import styled from "styled-components";
import IMAGES from "../images";

const Projects = () => {
  const slides = [...IMAGES];

  return (
    <ProjectsContainer id='projects'>
      <h3 className="projects-title">Projects</h3>
      <div className="slider-wrapper">
        <ImageSlider slides={slides}></ImageSlider>
      </div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 2.5em;
  margin-bottom: 1.5em;


  .projects-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05em;
    padding-bottom: 0.3em;
    border-bottom: 1px solid var(--font-color);
  }

  .slider-wrapper {
    max-width: 80%;
    height: 21em;
    position: relative;
    margin: 0 auto;
  }

  @media (min-width: 40em) {
    .slider-wrapper {
      max-width: calc(60% + 2em);
    }
  }

  @media (min-width: 50em) {
    .slider-wrapper {
      max-width: calc(55% + 2em);
    }
  }
`;

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const toThePrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const toTheNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const SliderImg = styled.div`
    background-image: url(${slides[currentIndex].url});
    height: 100%;
    max-width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 2em;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  `;

  const LeftArrow = styled.div`
    font-size: 3.5rem;
    position: absolute;
    top: 50%;
    left: 0.3em;
    transform: translate(0, -50%);
    font-weight: bold;
    color: black;
    z-index: 1;
    cursor: pointer;
  `;

  const RightArrow = styled.div`
    font-size: 3.5em;

    position: absolute;
    top: 50%;
    right: 0.3em;
    transform: translate(0, -50%);
    font-weight: bold;
    color: black;
    z-index: 1;
    cursor: pointer;
  `;

  return (
    <>
      <LeftArrow onClick={toThePrevious}>❰</LeftArrow>
      <RightArrow onClick={toTheNext}>❱</RightArrow>
      <SliderImg></SliderImg>
    </>
  );
};

export default Projects;
