import * as React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arrow from "./assets/icons/arrow-up.svg";

import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import "./App.css";

const App = () => {
  const revealComponents = async () => {
    const hiddenElements = await document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
        } else {
          entry.target.classList.remove("shown");
        }
      });
    });

    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  };

  React.useEffect(() => {
    revealArrow();
    revealComponents();
  });

  const revealArrow = () => {
    window.onscroll = () => {
      const arrow = document.querySelector(".arrow-up");
      const secondSection = document.querySelectorAll("section")[1];
      const revealPoint = secondSection.getBoundingClientRect().top + 650;

      if (revealPoint < window.innerHeight) {
        arrow.classList.add("shown");
      } else {
        arrow.classList.remove("shown");
      }
    };
  };

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Link to="#top" smooth>
        <ArrowLink className="arrow-up">
          <img src={Arrow} alt="arrow-up"></img>
        </ArrowLink>
      </Link>
    </>
  );
};

const ArrowLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  height: 45px;
  width: 45px;
  background-color: #432828;
  border-radius: 50%;
  border: 1px solid var(--gray-secondary);
  position: fixed;
  right: 1em;
  bottom: 1.5em;
  transition: all 0.2s linear;
  z-index: 100;
  background-color: var(--red-dark-softer);
  backdrop-filter: blur(14.7px);

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
