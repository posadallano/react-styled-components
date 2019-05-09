import styled, { css } from "styled-components";
import { desktop } from "../../utils/media";

export const StyledLink = styled.a`
  display: inline-block;
  color: #fff;
  text-align: center;
  padding: 20px 25px 12px 25px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 300;

  ${desktop(css`
    &:hover {
      color: #ccc;
    }`)};
`;
