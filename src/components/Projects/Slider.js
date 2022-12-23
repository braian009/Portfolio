import * as React from "react";
import styled from "styled-components";

const Slider = ({ projectList, index, onChangeSlider }) => {

  const toThePrevious = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? projectList.length - 1 : index - 1;

    onChangeSlider(newIndex);
  };

  const toTheNext = () => {
    const isLastIndex = index === projectList.length - 1;
    const newIndex = isLastIndex ? 0 : index + 1;

    onChangeSlider(newIndex);
  };

  return (
    <SliderContainer className="slider">
      <SliderImg url={`${projectList[index].image}`}>
        <LeftArrow onClick={toThePrevious}>❰</LeftArrow>
        <RightArrow onClick={toTheNext}>❱</RightArrow>
        <div className="slider-points">
          {projectList.map((project, projectIndex) => {
            return (
              <div
                key={projectIndex}
                className={index === projectIndex ? "active" : ""}
                onClick={() => {
                  onChangeSlider(projectIndex);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-point"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
            );
          })}
        </div>
      </SliderImg>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  height: 18em;
  border-radius: .7em;

  .slider-points {
    position: absolute;
    bottom: 0;
    left: auto;
    right: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;

    div > svg {
      transition: all 0.3s ease-out;
      fill: var(--gray-secondary);
      stroke: none;
      border-radius: 50%;
    }

    div {
      height: 48px;

      &:hover {
        svg {
          transform: scale(1.1);
        }
      }
    }

    div.active {
      svg {
        transform: scale(1.1);
      }
    }
  }
`;

const SliderImg = styled.div`
  position: relative;
  background-image: url(${(props) => props.url});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 0.7em;
  opacity: 0.7;
`;

const LeftArrow = styled.div`
  font-size: 3.5rem;
  position: absolute;
  top: 50%;
  left: 0.3em;
  transform: translate(0, -50%);
  font-weight: bold;
  color: var(--gray-secondary);
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
  color: var(--gray-secondary);
  z-index: 1;
  cursor: pointer;

`;

export default Slider;
