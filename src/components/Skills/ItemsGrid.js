import styled from "styled-components";

const ItemsGrid = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 95%;
  max-width: 890px;
  margin: 0 auto;
  margin-bottom: 1.5em;
  gap: 1.5em;
  grid-template-columns: repeat(2, 100px);
  grid-auto-rows: 1fr;

  @media (min-width: 30em) {
  grid-template-columns: repeat(4, 100px);
  gap: 1.5em;
  }

  .skills-item {
    text-align: center;
    width: 100px;
    height: 100px;
    padding-bottom: 0.5em;
    border-radius: 50%;

  }
`;


export default ItemsGrid;