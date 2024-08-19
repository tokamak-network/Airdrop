import styled from "styled-components";

export const Container = styled.div`
  width: 1100px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1100px) {
    width: calc(100% - 40px);
    padding: 20px;
  }
`;

export const Label = styled.div`
  height: 60px;
  font-family: "Titillium Web", sans-serif;
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  color: #3d495d;
  margin: 70px 0px 0px 0px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Description = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0.4px;
  text-align: center;
  color: #808992;
  margin: 10px 0px 60px 0px;
  @media only screen and (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    height: 60px;
    margin: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 1px;
  }
`;

export const ClaimAllButton = styled.button`
  width: 100px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #2a72e5;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #2a72e5;
  outline: none !important;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;
