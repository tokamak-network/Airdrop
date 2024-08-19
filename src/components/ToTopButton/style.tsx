import styled from "styled-components";

export const Circle = styled.button<{ $display: boolean }>`
  display: ${(props) => (props.$display ? "block" : "none")};
  position: fixed;
  bottom: 82px;
  right: 20px;
  width: 40px;
  height: 40px;
  margin: 270px 20px 10px 10px;
  padding: 13px 10px 14px;
  box-shadow: 0 2px 5px 0 rgba(61, 73, 93, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  outline: none !important;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;
