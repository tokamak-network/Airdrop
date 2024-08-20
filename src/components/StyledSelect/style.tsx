import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
`;

export const LabelBar = styled.div`
  margin: 0px 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.33px;
  color: #304156;
`;

export const Info = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.13px;
  color: #7e8993;
`;

export const Unit = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.13px;
  color: #304156;
`;

export const Option = styled.option``;

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 9px 0px;
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("assets/select-1-arrow-active.svg");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  border: solid 1px #dfe4ee;
  background-color: #fff;
  padding: 7px 15px;
  height: 32px;
  width: 100%;
  outline: none !important;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.23;
  letter-spacing: 0.33px;
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
`;
