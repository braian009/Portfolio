import * as React from "react";
import styled from "styled-components";

const Slider = ({ slides }) => {
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

  return (
    <>
      <SliderContainer className="slider">
        <div className="slider-img">
          <SliderImg url={`${slides[currentIndex].url}`}>
            <LeftArrow onClick={toThePrevious}>❰</LeftArrow>
            <RightArrow onClick={toTheNext}>❱</RightArrow>
          </SliderImg>
        </div>

        <div className="slider-points">
          {slides.map((slide, slideIndex) => {
            return (
              <div
                key={slideIndex}
                className={currentIndex === slideIndex ? "active" : ""}
                onClick={() => setCurrentIndex(slideIndex)}
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
      </SliderContainer>
    </>
  );
};

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .slider-img {
    width: 100%;
    height: 18em;
  }

  .slider-points {
    margin-top: 0.5em;

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
          border-radius: 50%;
        }
      }
    }

    div.active {
      svg {
        fill: var(--petrol);
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

export default Slider;
