import * as React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arrow from "./components/arrow-up.svg";

import { HashLink as Link } from 'react-router-hash-link';
import styled from "styled-components";


const App = () => {

  React.useEffect(() => {
    revealArrow();
  });
  const revealArrow = () => {
    window.onscroll = () => {
      const arrow = document.querySelector('.arrow-up');
      const secondSection = document.querySelectorAll('section')[1];
      const revealPoint = secondSection.getBoundingClientRect().top + 650;

      if (revealPoint < window.innerHeight) {
        arrow.classList.add('shown');
      } else {
        arrow.classList.remove('shown');
      }
    }

  }
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Link to='#top' smooth>
      <ArrowLink className="arrow-up">
        <img src={Arrow} alt='arrow-up'></img>
      </ArrowLink>
      </Link>
    </>
      
  );
};

const ArrowLink = styled.div`
  visibility: hidden;
  opacity: 0;
  height: 50px;
  width: 50px;
  background-color: var(--obscure-bordo);
  border-radius: 50%;
  position: fixed;
  right: 1em;
  bottom: 1.5em;
  transition: all .2s linear;
  z-index: 100;

  img {
    max-width: 100%;
    border-radius: 50%;
  }

  &.shown {
    visibility: visible;
    opacity: 1;
  }
`;



export default App;
