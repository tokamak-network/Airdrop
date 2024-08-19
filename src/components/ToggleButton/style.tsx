import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1100px) {
    margin-top: 35px;
  }
`;

export const Button = styled.button<{ $status: boolean }>`
  width: 160px;
  height: 38px;
  border-radius: 4px;
  border: solid 1px #d7d9df;
  font-family: "Rajdhani", sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.15px;
  color: ${(props) => (props.$status === true ? "#fff" : "#3d495d")};
  background-color: ${(props) => (props.$status === true ? "#2a72e5" : "#fff")};
  outline: none !important;
  @media only screen and (max-width: 1100px) {
    width: 110px;
    height: 33px;
    font-size: 14px;
    letter-spacing: 0.35px;
  }
`;
