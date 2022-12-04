import styled from "styled-components";

const ContactInner = styled.div`
  margin: 0 auto;
  display: flex;
  width: 95%;
  max-width: 480px;
  position: relative;
  flex-direction: column;
  /* border: 1px solid var(--border-primary); */

  /* box-shadow: 0px 0px 11px  var(--font-color); */

  border-radius: 0.7em;

  /* box-shadow: 0px 2px 14px #303030; */

  /* border-radius: .7em;
  /* background-color: hsla(182, 25%, 16%, 0.4); */
  /* background-image: linear-gradient(to top, hsla(182, 25%, 16%, 0.4), transparent);
  border: 1px solid var(--teal-blue);
  box-shadow: 0 15px 22px hsla(0, 0%, 0%,0.6); */

  /*   
  background: hsla(0, 0%, 0%, 0.1);
backdrop-filter: blur(14.8px);
-webkit-backdrop-filter: blur(14.8px);
  border-radius: 0.7em; */

  /* background-image: linear-gradient(to bottom, hsla(5, 21%, 21%, 0.3), transparent, hsla(5, 21%, 21%, 0.3)); */
/* box-shadow:  4px 4px 11px #141414; */




  /* background: hsla(182, 34%, 14%, 0.1); */

  /* border-radius: 0.7em; */

  padding: 1.5em;

  background-color: #1c1c1c;
border-radius: 0.7em;
backdrop-filter: blur(24.3px);
border: 1px solid var(--petrol);

  .sending-backdrop {
    position: absolute;
    display: none;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 0.7em;
    background-color: hsla(0, 0%, 0%, 0.9);
    backdrop-filter: blur(20.7px);
    z-index: 50;

    &.visible {
      display: block;
      padding: 11em 0;
    }

    .send-result {
      margin: 0 auto;
      width: 17em;
      p {
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 0.5em;
      }
      div {
        color: var(--font-color);
        padding: 0.5em 0.8em;
        border: 1px solid var(--font-color);
        border-radius: 0.7em;
        background: none;
        width: 5em;
        margin: 0 auto;
        text-align: center;

        &:hover {
          background-color: var(--font-color);
          color: #1c1c1c;
        }
      }
    }
  }

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
      transition: all 0.2s ease-out;

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
      line-height: 0.9;

      &:hover {
  background: hsla(182, 44%, 14%, 0.1);

      }
    }
  }

  .loading-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--font-color);
    margin: 0 auto;
    position: relative;

    &.animated {
      animation: loading 1.5s linear infinite;
    }
  }

  @keyframes loading {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(70px, 0);
    }
    50% {
      transform: translate(0, 0);
    }
    75% {
      transform: translate(-70px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export default ContactInner;
