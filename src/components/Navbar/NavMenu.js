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
    transition: height 0.2s ease-out 0s;

    background: rgba(67, 40, 40, 0.74);
    border-bottom-right-radius: 0.7em;
    border-bottom-left-radius: 0.7em;
    backdrop-filter: blur(10.7px);

    & a {
      font-size: 1.1rem;
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
  }
`;

export default NavMenu;
