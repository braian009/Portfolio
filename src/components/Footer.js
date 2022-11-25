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
  background-image: linear-gradient(to top, #432828, transparent);;
  margin-top: 3em;
`;

export default Footer;
