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
            <a className="contact-sidebar__link" href="/">
              <img src={LinkedinLogo} alt="react"></img>
            </a>
          </li>
          <li>
            <a className="contact-sidebar__link" href="/">
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
const ContactContainer = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 2em;
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
  width: 80%;
  max-width: 550px;
  flex-direction: column;
  border-radius: .7em;
  /* background-color: hsla(182, 25%, 16%, 0.4); */
  background-image: linear-gradient(to top, hsla(182, 25%, 16%, 0.4), transparent);
  border: 1px solid var(--teal-blue);
  box-shadow: 0 15px 22px hsla(0, 0%, 0%,0.6);




  padding: 1.5em;

  .contact-sidebar {
    width: 10em;
    margin: 0 auto;
    display: flex;
    padding: 0 0 1em 0;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    border-bottom: 1px solid var(--white-pearl);

    li {
      flex: 0 0 45px;
      height: 45px;
      margin: 0 0.5em;
    }

    .contact-sidebar__link {
      display: block;
      max-width: 100%;
      margin: 0 auto;
      transition: all .2s ease-out;

      &:hover {
        transform: scale(1.1);
      }
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
      font-size: 1rem;
      margin-top: 0.3em;
      width: 100%;
      background: transparent;
      color: var(--font-color);
      line-height: 1.5;
      border: none;
      border-bottom: 1px solid var(--font-color);
      outline: none;
    }

    textarea {
      width: 100%;
      margin-top: 0.3em;
      background: transparent;
      color: var(--font-color);
      line-height: 1.5;
      border: none;
      border-bottom: 1px solid var(--font-color);
      outline: none;
    }

    button {
      width: 100%;
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

`;

export default Contact;
