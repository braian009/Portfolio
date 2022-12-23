import styled from "styled-components";

const ProjectsInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  align-items: center;
  justify-items: center;

  width: 95%;
  max-width: 480px;
  margin: 0 auto;
  padding: 1em;
  border-radius: 0.7em;

  background: hsla(182, 44%, 14%, 0.1);

  border: 1px solid var(--green-dark);
  box-shadow: 0px 0px 22px var(--black-secondary);

  .slider {
    grid-column: span 1;
    grid-row: span 1;
  }

  


  .projects-info {
    align-self: start;

    grid-column: span 1;
    grid-row: span 1;
    text-align: center;
    margin-top: 1em;

    * + * {
      margin: 0;
    }

    h4 {
      font-size: 1.1em;
      margin-top: 0;
      margin-bottom: 0.25em;
    }

    p {
      margin: 0;
      color: var(--font-color);
    }

    .projects-technologies {
      margin-top: 1em;

      .tag-list {
        list-style-type: none;
        padding: 0;
        margin-top: 0.5em;

        li {
          display: inline-block;
          margin: 0;
          margin-right: 0.5em;

          div {
            display: inline;
            line-height: 2.5;
            letter-spacing: 0.01em;
            font-size: 0.85rem;
            font-weight: 500;
            padding: 0.4em 0.7em;
            color: var(--black-primary);
            background-color: var(--gray-secondary);
            border-radius: 0.35em;
          }
        }
      }
    }

    .projects-links {
    display: flex;
    margin: 0 auto;
    margin-top: 1.5em;
    justify-content: center;

    div {
      line-height: 1.2;
      border-radius: 20px;
      border: 2px solid var(--green-dark);
      transition: background-color .2s ease-out;

      &:hover {
        background-color: var(--green-dark);
      }
    }
    * + * {
      margin-left: 1em;
    }

    a {
      display: block;
      font-size: 0.85;
      color: var(--gray-secondary);
      background-color: none;
      padding: 0.4em 0.8em;
      border-radius: 20px;

    }
  }
  }

  @media (min-width: 60em) {
    max-width: 920px;
    grid-template-columns: 420px 1fr;
    place-items: center;

    .slider {
      grid-column: 1 / 2;
      grid-row: span 2;
      background-color: hsla(0, 0%, 0%, 1);
      background-image: linear-gradient(to left);
    }

    .projects-info {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      text-align: left;
      align-self: start;
      padding: 0;
      margin-left: 1em;
      margin-top: 0;

      .projects-links {
      justify-content: flex-start;
    }
    }

    

  }
`;

export default ProjectsInner;
