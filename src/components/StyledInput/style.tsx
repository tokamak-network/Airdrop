import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelBarComp = styled.div`
  margin: 15px 15px 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LabelComp = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.33px;
  color: #304156;
`;

export const InputComp = styled.input`
  margin: 9px 10px;
  height: 32px;
`;
