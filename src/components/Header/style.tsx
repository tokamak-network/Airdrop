import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 40px;
  background: none;
  @media only screen and (max-width: 1100px) {
    padding: 20px 10px 0px 20px;
  }
`;

export const WalletButton = styled.button`
  padding: 6px 20px;
  border-radius: 19px;
  border: solid 1px #d7d9df;
  background-color: #fff;
  font-family: "Titillium Web", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #86929d;
  outline: none !important;
`;
