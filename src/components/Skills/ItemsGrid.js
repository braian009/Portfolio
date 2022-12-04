import styled from "styled-components";

const ItemsGrid = styled.div`
  display: grid;
  place-items: center;
  width: 95%;
  max-width: 890px;
  margin: 0 auto;
  margin-bottom: 1.5em;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-auto-rows: 1fr;

  .skills-item {
    text-align: center;
    width: 120px;
    height: 120px;
    padding-bottom: 0.5em;
    border-radius: 50%;
  }
`;


export default ItemsGrid;