import styled from "styled-components";

const ContactInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 480px;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;

  border-radius: 0.7em;
  border: 1px solid var(--green-dark);
  box-shadow: 0px 0px 22px var(--black-secondary);

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
    z-index: 10;

    &.visible {
      display: block;
      padding: 11em 0;
    }

    .send-result {
      width: 17em;
      margin: 0 auto;
      
      p {
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 0.5em;
      }
      
      div {
        width: 5em;
        margin: 0 auto;
        padding: 0.5em 0.8em;
        text-align: center;
        background: none;
        color: var(--font-color);
        border-radius: 0.7em;
        border: 1px solid var(--gray-primary);
        box-shadow: 0px 0px 11px var(--gray-primary);
        cursor: pointer;

        transition: all .2s linear;

        &:hover {
          background-color: var(--green-dark);
          box-shadow: none;
        }
      }
    }
  }

  .contact-sidebar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10em;
    padding: 0 0 1em 0;
    margin: 0 auto;
    list-style-type: none;
    border-bottom: 1px solid var(--gray-primamry);

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
    width: 100%;

    * {
      display: block;
    }

    h4 {
      font-size: 1.1em;
      margin-top: 1em;
      text-align: center;
      color: var(--font-color);
    }

    label {
      font-size: 1rem;
      margin-top: 1em;
    }

    input {
      line-height: 1.4;
      font-size: 1.1rem;
      width: 100%;
      margin-top: 0.5em;
      color: var(--font-color);
      background: transparent;
      border: none;
      border-bottom: 1px solid var(--green-dark);
      outline: none;
    }

    textarea {
      line-height: 1.4;
      font-size: 1.1rem;
      width: 100%;
      margin-top: 0.3em;
      background: transparent;
      color: var(--font-color);
      border: none;
      border-bottom: 1px solid var(--green-dark);
      outline: none;
    }

    button {
      line-height: 0.81;
      font-size: 1rem;
      width: 100%;
      padding: 1em 1.5em;
      margin-top: 1.5em;
      background-color: inherit;
      color: var(--font-color);
      border-radius: 20px;
      border: 1px solid var(--green-dark);
      cursor: pointer;

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
