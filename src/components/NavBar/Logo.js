import styled from "styled-components";

import StyledLink from "./Link";

const Brand = styled(StyledLink)`
  margin-right: auto;
  font-size: 32px;
  font-weight: 400;
  padding: 11px 14px;

  &:hover {
    color: #ccc;
  }
`;

export default Brand;
