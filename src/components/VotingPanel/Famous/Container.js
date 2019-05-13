import styled from 'styled-components';

const ContainerFamous = styled.div`
  position: relative;
  background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, 
                    rgba(0,0,0, 0.50) 35%, 
                    rgba(0,0,0,0) 80%), 
                    url(${props => props.image});
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 450px;
  padding: 30px 40px;
  &:nth-of-type(2),
  &:nth-of-type(4) {
    background-position: 100% 50%;
  }
`;

export default ContainerFamous;
