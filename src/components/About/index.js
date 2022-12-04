import * as React from "react";
import styled from "styled-components";
import StartImg from '../start.svg';
import PresentImg from '../present.svg';
import FutureImg from '../future.svg';

const About = () => {
  return (
    <AboutContainer id="about" className='hidden'>
      <h3 className="about-title">About</h3>

      <AboutInner>
        <div className="about-media">
          <div className="about-media__img">
          <div className="img-start"></div>

          </div>
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
          <div className="about-media__img">
            <div className="img-present"></div>
          </div>
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
          <div className="about-media__img">
            <div className="img-future"></div>

          </div>
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

const AboutContainer = styled.section`
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
    margin-bottom: 1.5em;

    border-bottom: 1px solid var(--border-primary);
    
  }
`;

const AboutInner = styled.div`
  display: grid;
  padding: 0;
  width: 95%;
  max-width: 890px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1em;

  .about-media {
    padding: 0.5em;
    /* border-radius: 0.7em; */
    /* border: 1px solid var(--border-primary); */
    /* background-color: hsla(0, 25%, 21%, 0.4); */
    /* background: hsla(182, 44%, 14%, 0.1); */
    /* background-color: hsla(5, 21%, 21%, 0.4); */
  border-radius: 0.7em;


  background-image: linear-gradient(to right, hsla(5, 21%, 21%, 0.4), transparent);
box-shadow:  4px 4px 11px #141414;

    

  }

  

  .about-media__img {
    display: none;
    
  }

  .about-media__content {
    flex: 1;
    font-size: 0.95rem;
    padding: .5em;

     h4 {
    margin-top: 0;
    margin-bottom: 0.5em;
    letter-spacing: 0.06em;
  }

  }

  

  @media (min-width: 45em) {
    
    .about-media {
      display: flex;
      align-items: center;
      padding: 1em;
    }

    .about-media__img {
      display: block;
      flex: 0 0 210px;
      margin-right: 1em;
      border-radius: 0.7em;
      height: 100%;

    div {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 100%;
    }

    .img-start {
      background-image: url(${StartImg});
    }

    .img-present {
      background-image: url(${PresentImg});
    }

    .img-future {
      background-image: url(${FutureImg});

    }



      img {
      width: 200px;
      }
    }

    .about-media__content {
      margin: 0;
      margin-left: 1em;
    }
  }

  @media (min-width: 50em) {
    .about-media__content {
      overflow: auto;
    }
  }
`;

export default About;
