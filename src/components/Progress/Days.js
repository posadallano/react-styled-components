import styled from 'styled-components';

const Days = styled.time`
  height: 100%;
  flex: 7.2;
  padding-left: 15px;
  line-height: 50px;
  font-size: 37px;
  background: rgba(256,256,256,0.7);
  color: #464646;
  transform: matrix( 1.04594681823723,0,0,1.02545451173116,0,0);
  clip-path: polygon(0% 0%,100% 0%,100% 99%,0% 100%,0% calc(50% + 5px),5px 50%,0% calc(50% - 5px));
`;

export default Days;
