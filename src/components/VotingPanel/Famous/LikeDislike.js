import styled from 'styled-components';

const LikeDislike = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 12px;
  border: none;
  &.like {
    background-color: #1cbbb4;
  }
  &.dislike {
    background-color: #ffad1d;
    transform: rotate(180deg);
  }
`;

export default LikeDislike;
