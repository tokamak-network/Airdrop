import styled from "styled-components";

export const Icon = styled.img`
  padding: 8px;
`;

export const StyledLogoIcon = styled.img`
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const StyledMobileLogoIcon = styled.img`
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;
