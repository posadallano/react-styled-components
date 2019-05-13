import styled from 'styled-components';

const Container = styled.div`
  margin: 35px 0;
  background-color: #ebebeb;
  padding: 21px 27px;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  align-items: center;
  grid-template-areas: 'titles icon' 'description';
  svg {
    path {
      fill: #000;
    }
  }
  @media (min-width: 600px) {
    grid-template-areas: 'titles description icon';
    grid-row-gap: 0;
  }
`;

export default Container;
