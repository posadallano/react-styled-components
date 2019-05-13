import styled, { css } from "styled-components";
import { desktop, maxTablet } from "../../utils/media";
import pope from '../../utils/images/home/pope.png';

const HeroContent = styled.div`
  background: url(${pope});
  background-size: cover;
  height: 100vh;
  ${maxTablet(css`
    background-position: 60% 0;
  `)};
  .featured {
    background: inherit;
    width: 40%; 
    height: initial;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    ${maxTablet(css`
      width: 70%;
      top: 50%;
      left: 5%;
      transform: translate(0%,-50%);
    `)};
    .content {
      padding: 30px;
      background: rgba(51, 51, 51, 0.5);
      height: 100%;
      color: #fff;
      .pre-title {
        font-size: 16px;
        font-weight: 300;
      }
      .title {
        font-size: 60px;
        line-height: 1;
        margin-bottom: 27px;
        font-weight: 500;
        margin-top: 0;
        letter-spacing: 1px;
        ${maxTablet(css`
          font-size: 35px;
        `)};
      }
      .description {
        line-height: 1.15;
        margin-bottom: 20px;
        font-weight: 300;
        font-size: 21px;
        ${maxTablet(css`
          display: none;
        `)};
      }
      .more-info {
        font-size: 14px;
        color: #fff;
        text-decoration: underline;
        line-height: 1.7;
        font-weight: 300;
        display: inline-block;
        img {
          margin-right: 5px;
        }
      }
      .question {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.2;
        display: block;
        margin-top: 35px;
      }
    }
    .blur {
      background: inherit;
      height: 100vh;
      width: 250%; 
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(
        -10%,
        -20%
      ); 
      filter: blur(20px);
      z-index: -1;
    }
  }
  .buttons-fc {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 100;
    position: relative;
    height: 80px;
    ${maxTablet(css`
      height: 60px;
    `)};
    button {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      border: none;
      ${maxTablet(css`
        svg {
          width: 25px;
          height: 25px;
        }
    `)};
      &:first-of-type {
        background: rgb(28,187,180, 0.9);
      }
      &:last-of-type {
        background: rgb(255,173,29, 0.9);
        transform: rotate(180deg);
      }
    }
  }
`;

export default HeroContent;