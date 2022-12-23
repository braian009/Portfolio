import styled from "styled-components";

const SkillsInner = styled.div`

width: 90%;
max-width: 890px;

margin: 0 auto;



  .skills-info {
    text-align: center;
    
  }

  .skills-info__text {
    font-size: 0.95em;
    text-align: center;

    @media (min-width: 55em) {
      padding: 0 1.5em;
    }
  }

  .skills-info__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    align-items: center;
    padding: 0.5em;
    gap: 0.5em;
    width: 90%;
    max-width: 580px;
    margin: 0 auto;
    margin-top: 1.5em;
    border-bottom: 1px solid var(--green-dark);
    border-top: 1px solid var(--green-dark);

    
  }
`;

export default SkillsInner;
