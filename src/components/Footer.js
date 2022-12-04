import * as React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className=""></div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  padding: 2.5em;
  opacity: 0.4;
  /* background-image: linear-gradient(to top, #432828, transparent);; */
  margin-top: 3em;

  @media (min-width: 40em) {
    border-top: 1px solid var(--border-primary);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    box-shadow: 0px -5px 6px 3px var(--petrol);


    animation: neon-fade-inverted 5s ease-in-out infinite;

    @keyframes neon-fade-inverted{
      0% {
        box-shadow: 0px -5px 6px -3px var(--petrol);
      }
      50% {
        box-shadow: none;
      }
      100% {
        box-shadow: 0px -5px 6px -3px var(--petrol);
      }
    }
  }
`;

export default Footer;
