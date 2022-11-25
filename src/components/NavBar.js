import * as React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const menu = document.querySelector(".nav-menu");
    const height = menu.scrollHeight;

    console.log(height);

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
      <NavBarContainer>
        <div className="page-title">Portfolio</div>
        <MenuWrapper>
          <NavMenu className={`nav-menu ${isActive ? "is-active" : ""}`}>
            <li>
              <Link to="#about" smooth>
                About
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
          </NavMenu>
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
        </MenuWrapper>
      </NavBarContainer>
    </header>
  );
};

const NavBarContainer = styled.nav`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, #432828, transparent);
  padding: 1.5em 1em;
  z-index: 10;

  .page-title {
    font-size: 2.5rem;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu = styled.ul`
  position: fixed;
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 0;
  list-style-type: none;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  overflow: hidden;
  transition: height 0.2s ease-out 0s;

  background: rgba(67, 40, 40, 0.74);
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.7px);

  & a {
    font-size: 1rem;
    color: var(--font-size);
    display: block;
    text-align: center;
    padding: 1em 1em;
    text-decoration: none;
    transition: transform 0.3s ease-out 0s;
  }

  & a:hover {
    transform: scale(1.2);
  }

  @media (max-width: 35em) {
    li + li {
      margin-top: 1em;
    }
  }

  @media (min-width: 35em) {
    flex-direction: row;
    justify-content: space-between;
    position: static;
    height: initial !important;
    background-color: inherit;
    background-image: none;
    box-shadow: none;

    & a {
      background-color: inherit;
    }
  }
`;

const BurgerIcon = styled.div`
  position: fixed;
  top: 1.5em;
  right: 1em;

  z-index: 100;
  .line {
    width: 35px;
    height: 5px;
    background-color: var(--font-color);
    display: block;
    margin: 8px auto;
    transition: all 0.3s ease-in-out;
    border-radius: 0.5em;
  }

  &:hover {
    cursor: pointer;
  }

  &.is-active .line:nth-child(2) {
    opacity: 0;
  }

  &.is-active .line:nth-child(1) {
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }

  &.is-active .line:nth-child(3) {
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }

  @media (min-width: 35em) {
    display: none;
  }
`;

export default NavBar;
