import * as React from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

import ContactInner from "./ContactInner";

import LinkedinLogo from "../../assets/icons/linkedin.svg";
import WhatsappLogo from "../../assets/icons/whatsapp.svg";

const Contact = () => {
  const formRef = React.useRef();

  const [formContent, setFormContent] = React.useState({
    user_email: "",
    subject: "",
    message: "",
  });

  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);
  const onInputChange = (e) => {
    setFormContent({ ...formContent, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);

    const result = emailjs.sendForm(
      "service_zw09jd9",
      "template_nhrw5qd",
      formRef.current,
      "GlguJwgf6UtPNCY3v"
    );

    result
      .then((result) => {
        console.log(result.text);
        setIsCorrect(true);
      })
      .catch((error) => {
        console.log(error.text);
        setIsError(true);
      });
  };

  return (
    <ContactContainer id="contact" className="hidden">
      <h3 className="contact-title">Contact</h3>
      <ContactInner>
        <div
          className={`sending-backdrop ${
            isCorrect || isError ? "visible" : ""
          }`}
        >
          {isCorrect ? (
            <div className="send-result">
              <p>Email sent correctly :D</p>
              <div
                onClick={() => {
                  setIsSent(false);
                  setIsCorrect(false);
                }}
              >
                Got it
              </div>
            </div>
          ) : (
            <div className="send-result">
              <p>Something went wrong, please try another via.</p>
              <div
                onClick={() => {
                  setIsError(false);
                  setIsSent(false);
                }}
              >
                Got it
              </div>
            </div>
          )}
        </div>
        <ul className="contact-sidebar">
          <li>
            <a
              className="contact-sidebar__link"
              href="https://linkedin.com/in/braian-yanquin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinLogo} alt="react"></img>
            </a>
          </li>
          <li>
            <a
              className="contact-sidebar__link"
              href="https://wa.me/5492944700327"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WhatsappLogo} alt="whatsapp"></img>
            </a>
          </li>
        </ul>
        <form className="contact-form" ref={formRef} onSubmit={onFormSubmit}>
          <h4>Send me an email:</h4>
          <label htmlFor="user_email">email</label>
          <input
            required
            id="user_email"
            type="email"
            name="user_email"
            onChange={onInputChange}
            value={formContent.user_email}
          ></input>
          <label htmlFor="subject">subject</label>
          <input
            required
            id="subject"
            name="subject"
            onChange={onInputChange}
            value={formContent.subject}
          ></input>
          <label htmlFor="message">message</label>
          <textarea
            required
            id="message"
            name="message"
            rows="3"
            onChange={onInputChange}
            value={formContent.message}
          ></textarea>
          <button className="button-send" type="submit">
            {isSent ? (
              <div
                className={`loading-indicator ${
                  isCorrect || isError ? "" : "animated"
                }`}
              ></div>
            ) : (
              "Send"
            )}
          </button>
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

  img {
    width: 100%;
  }

  .contact-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.08em;
    margin-bottom: 1.5em;

    padding-top: 1.5em;

    width: 10em;
    margin: 0 auto;
    margin-bottom: 1.5em;

    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-top: 2px solid var(--green-dark);
  }
`;

export default Contact;
