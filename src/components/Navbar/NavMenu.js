import styled from "styled-components";

const NavMenu = styled.nav`
  position: relative;

  .menu-list {
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
    transition: height 0.2s ease-out;

    background-color: hsla(5, 21%, 14%, 0.8);
    backdrop-filter: blur(14.7px);
    border-bottom-right-radius: 0.7em;
    border-bottom-left-radius: 0.7em;

    li {
      width: 100%;
    }

    a {
      font-size: 1.1rem;
      color: var(--font-size);
      display: block;
      text-align: center;
      padding: 1.25em 1.25em;
      text-decoration: none;
      transition: transform 0.2s ease-out;
    }

    a:hover {
      transform: scale(1.1);
    }

    @media (max-width: 40em) {
      li + li {
        margin-top: 1em;
      }
    }

    @media (min-width: 40em) {
      
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
  }
`;

export default NavMenu;
