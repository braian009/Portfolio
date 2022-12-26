import * as React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import NavMenu from "./NavMenu";
import BurgerIcon from "./BurguerIcon";

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const menu = document.querySelector(".menu-list");

    if (isActive) {
      menu.style.setProperty("height", `50vh`);
      document.onclick = () => {
        setIsActive(false);
      };
      document.body.style.overflowY = "hidden";
    } else {
      menu.style.setProperty("height", "0px");
      document.body.style.overflowY = "visible";
    }
  }, [isActive]);

  return (
    <header>
      <NavbarContainer>
        <div className="nav-brand">Portfolio</div>
        <NavMenu className="nav-menu">
          <ul className={`menu-list ${isActive ? "is-active" : ""}`}>
            <li>
              <Link to="#about" smooth>
                Journey
              </Link>
            </li>
            <li>
              <Link to="#skills" smooth>
                Skills
              </Link>
            </li>
            <li>
              <Link to="#projects" smooth>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contact" smooth>
                Contact
              </Link>
            </li>
          </ul>
          <BurgerIcon
            id="hamburger"
            className={`hamburger ${isActive ? "is-active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsActive(!isActive);
            }}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </BurgerIcon>
        </NavMenu>
      </NavbarContainer>
    </header>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  position: relative;

  padding: 1.5em 1em;
  z-index: 10;

  .nav-brand {
    font-size: 2.5rem;
    letter-spacing: 0.02em;
  }
`;

export default Navbar;
