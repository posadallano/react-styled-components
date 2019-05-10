import styled, { css } from "styled-components";
import { desktop } from "../../utils/media";

const StyledLink = styled.a`
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  display: inline-block;
  text-align: center;
  padding: 20px 25px 12px 25px;
  text-decoration: none;

  ${desktop(css`
    &:hover {
      color: #ccc;
    }`)};
`;

export default StyledLink;