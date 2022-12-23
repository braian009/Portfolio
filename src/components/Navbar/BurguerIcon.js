import styled from "styled-components";

const BurgerIcon = styled.div`
  position: fixed;
  top: 1.5em;
  right: 1em;
  z-index: 100;

  .line {
    width: 35px;
    height: 5px;
    background-color: var(--gray-secondary);
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

  @media (min-width: 40em) {
    display: none;
  }
`;

export default BurgerIcon;