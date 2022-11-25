import * as React from "react";
import styled from "styled-components";
import LinkedinLogo from "./linkedin.svg";
import WhatsappLogo from "./whatsapp.svg";

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <h3 className="contact-title">Contact</h3>
      <ContactInner>
        <ul className="contact-sidebar">
          <li>
            <a className="contact-sidebar-link" href="/">
              <img src={LinkedinLogo} alt="react"></img>
            </a>
          </li>
          <li>
            <a className="contact-sidebar-link" href="/">
              <img src={WhatsappLogo} alt="whatsapp"></img>
            </a>
          </li>
        </ul>
        <form className="contact-form">
          <h4>Send me an email</h4>
          <label for="email">email</label>
          <input id="email" type="email" name="email"></input>
          <label for="subject">subject</label>
          <input id="subject" name="subject"></input>
          <label for="message">message</label>
          <textarea id="message" name="email" rows="4"></textarea>
          <button type="submit">Send</button>
        </form>
      </ContactInner>
    </ContactContainer>
  );
};
const ContactContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 2.5em;
  margin-bottom: 1.5em;


  min-height: 400px;

  img {
    width: 100%;
  }

  .contact-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05em;
    padding-bottom: 0.3em;
    border-bottom: 1px solid var(--font-color);
  }
`;

const ContactInner = styled.div`
  margin: 0 auto;
  display: flex;
  width: 70%;
  flex-direction: column;
  border-radius: .7em;
  background-color: hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 22px  var(--petrol);


  padding: 1.5em;

  .contact-sidebar {
    width: 10em;
    margin: 0 auto;
    display: flex;
    padding: 0 0 1em 0;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    border-bottom: 1px solid var(--font-color);

    li {
      flex: 0 0 50px;
      height: 50px;
      margin: 0 0.5em;
    }

    a {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }

  .contact-form {
    margin: 0 auto;
    width: 100%;


    * {
      display: block;
    }
    h4 {
      margin-top: 1em;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
    }

    label {
      margin-top: 1em;
    }

    input {
      margin-top: 0.3em;
      width: 100%;
      background: transparent;
      border: 1px solid var(--font-color);
      outline: none;
    }

    textarea {
      width: 100%;
      margin-top: 0.3em;
      background: transparent;
      border: 1px solid var(--font-color);
      outline: none;
    }

    button {
      background-color: inherit;
      border: 1px solid var(--font-color);
      padding: 1em 1.5em;
      color: white;
      border-radius: 0.3em;
      margin: 0 auto;
      margin-top: 1.5em;
      cursor: pointer;
    }
  }

  @media (min-width: 40em) {
    width: 380px;
  }
  @media (min-width: 50em) {
    width: 420px;
  }
`;

export default Contact;
