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

export const ArrowIcon = styled.img<{ $isFocused: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: ${(props) => (props.$isFocused ? "block" : "none")};
`;
