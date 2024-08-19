import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelBar = styled.div`
  margin: 15px 15px 0px 15px;
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

export const Select = styled.select`
  margin: 9px 10px;
  height: 32px;
`;

export const Option = styled.option``;
