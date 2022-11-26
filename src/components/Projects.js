import * as React from "react";
import styled from "styled-components";
import IMAGES from "../images";

const Projects = () => {
  const slides = [...IMAGES];

  return (
    <ProjectsContainer id="projects">
      <h3 className="projects-title">Projects</h3>
      <ProjectsInner>
        <ImageSlider slides={slides}></ImageSlider>
        <div className="projects-info">
          <h4>some title</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has
          </p>
          <ul className='tag-list'>
            <li><a href='/'>Code</a></li>
            <li><a href="/">App</a></li>
          </ul>
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
    border-bottom: 1px solid var(--white-pearl);
  }
`;

const ProjectsInner = styled.div`
  align-items: center;
  justify-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;

  .slider {
    width: 75%;
    max-width: 440px;
    height: 16em;
    grid-column: span 2;
    grid-row: span 1;
  }
  .slider-points {
    grid-column: span 2;
    grid-row: span 1;
  }
  .projects-info {
    align-self: start;
    grid-column: span 2;
    grid-row: span 1;
    padding: 0 1em;
    text-align: center;

    h4 {
      margin-top: 0;

    }

    .tag-list {
      list-style-type: none;
      padding: 0;

      li {
        display: inline;

        a {
          text-decoration: none;
          color: black;
          font-size: 0.8rem;
          padding: 0.5em .8em;
          background-color: gray;
          border-radius: 0.3em;
          line-height: 2;
          
        }
      }

      li + li {
        margin-left: .5em;
      }

    }
  }

  @media (min-width: 55em) {
    margin: 0 auto;
    width: 85%;
    max-width: 920px;
    grid-template-columns: 440px 1fr;
    place-items: center;
    justify-content: center;

    .slider {
      width: 90%;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .slider-points {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .projects-info {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      text-align: left;
      align-self: start;

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
    position: relative;
    background-image: url(${slides[currentIndex].url});
    height: 100%;
    max-width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 0.7em;
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

    @media (min-width: 35em) {
      display: none;
    }
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

    @media (min-width: 35em) {
      display: none;
    }
  `;

  const SliderPoints = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;

    div > svg {
      transition: all 0.3s ease-out;
      fill: transparent;
      stroke: var(--font-color);
    }

    div {
      &:hover {
        svg {
          transform: scale(1.1);
        }
      }
    }

    div.active {
      svg {
        fill: var(--petrol);
        transform: scale(1.1);
      }
    }
  `;

  return (
    <>
      <div className="slider">
        <SliderImg>
          <LeftArrow onClick={toThePrevious}>❰</LeftArrow>
          <RightArrow onClick={toTheNext}>❱</RightArrow>
        </SliderImg>
      </div>
      <SliderPoints className="slider-points">
        {slides.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              className={currentIndex === slideIndex ? "active" : ""}
              onClick={() => setCurrentIndex(slideIndex)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-point"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
          );
        })}
      </SliderPoints>
    </>
  );
};

export default Projects;
