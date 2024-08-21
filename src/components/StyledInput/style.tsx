import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelBarComp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0px 5px;
`;

export const LabelComp = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.33px;
  color: #304156;
`;

export const InputComp = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
  border: solid 1px #dfe4ee;
  padding: 7px 15px;
  margin: 9px 0px;
  height: 32px;
  outline: none !important;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  line-height: 1.33;
  color: #3e495c;
  &:hover {
    border: solid 1px #c9d1d8;
  }
  &:focus {
    border: solid 1px #2a72e5;
  }
  &:disabled {
    border: solid 1px #dfe4ee;
    background-color: #e9edf1;
  }
  &::placeholder {
    color: #86929d;
  }
`;

export const Error = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  color: red;
`;
