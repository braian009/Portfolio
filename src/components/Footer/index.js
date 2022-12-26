import * as React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <div>
          Developed by <b>Braian Yanquín</b>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  padding: 2.5em;
  margin-top: 3em;

  div {
    opacity: 0.7;
  }

  @media (min-width: 40em) {
    border-top: 1px solid var(--gray-primary);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    box-shadow: 0px -5px 6px 3px var(--green-dark);

    animation: neon-fade-inverted 5s ease-in-out infinite;

    @keyframes neon-fade-inverted {
      0% {
        box-shadow: 0px -5px 4px -3px var(--green-dark);
      }
      50% {
        box-shadow: none;
      }
      100% {
        box-shadow: 0px -5px 4px -3px var(--green-dark);
      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
  }
`;

export default Footer;
