import styled from 'styled-components'
import submitbg from '../../utils/images/home/bg-submit.png';

const SubmitContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 80px;
  background-color: #fff;
  color: #000;
  margin: 35px 0;
  padding: 0 20px;
  .cta {
    font-size: 30px;
    font-weight: 300;
  }
  .bgimage {
    background: url(${submitbg});
    background-size: cover;
    background-position: center center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.3;
  }
  button {
    cursor: pointer;
    z-index: 9;
    padding: 10px 37px;
    font-size: 20px;
    color: #333333;
    border: 3px solid #333333;
    display: flex;
    align-items: center;
    height: 53px;
    background: transparent;
  }
`;

export default SubmitContent;