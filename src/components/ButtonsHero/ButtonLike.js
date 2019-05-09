import styled from 'styled-components'

const Button = styled.button`
  border: none;
  box-sizing: border-box;
  border: 2px solid;
  &:hover {
    opacity: 0.8;
    animation: opacity 3ms linear;
  }
  .like {
    color: white;
    path {
      fill: white;
    }
  }
`;

export default Button;