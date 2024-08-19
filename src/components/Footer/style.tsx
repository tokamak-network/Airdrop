import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: none;
  margin-top: 30px;
  @media only screen and (max-width: 1100px) {
    justify-content: center;
    margin-top: 15px;
  }
`;

export const Content = styled.span<{ $color: string }>`
  font-family: "Titillium Web", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.$color};
`;

export const RightContent = styled.span<{ $color: string }>`
  font-family: "Titillium Web", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.$color};
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const SocialLinkBar = styled.div`
  margin: 4px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;
