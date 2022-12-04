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

  /* border: 1px solid var(--border-primary); */
  background: hsla(182, 44%, 14%, 0.1);
  /* box-shadow: 0px 2px 24px #303030; */
box-shadow:  4px 4px 11px #141414;


  .slider {
    grid-column: span 2;
    grid-row: span 1;

    @media (min-width: 55em) {
      grid-column: 1 / 2;
      grid-row: span 2;
    }
  }

  .projects-info {
    align-self: start;

    grid-column: span 2;
    grid-row: span 1;
    text-align: center;

    @media (min-width: 55em) {
      padding: 0 1.5em;
    }

    * + * {
      margin: 0;
    }

    h4 {
      margin-top: 0;
      margin-bottom: 0.5em;
    }

    .projects-technologies {
      margin-top: 2em;

      .tag-list {
        list-style-type: none;
        padding: 0;
        margin-top: .5em;

        li {
          display: inline-block;
          margin: 0;
          margin-right: 0.5em;

          div {
            display: inline;
            color: black;
            font-size: 0.8rem;
            padding: 0.5em 0.8em;
            background-color: gray;
            border-radius: 0.3em;
            line-height: 2.7;
          }
        }

        li + li {
          /* margin-left: 0.5em; */
        }
      }
    }
  }

  @media (min-width: 55em) {
    max-width: 920px;
    grid-template-columns: 420px 1fr;
    place-items: center;
    justify-content: center;

    .slider {
      grid-column: 1 / 2;
      grid-row: span 2;
    }

    .projects-info {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      text-align: left;
      align-self: start;
    }
  }
`;

export default ProjectsInner;
