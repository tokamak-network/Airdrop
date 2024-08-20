import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const Checkbox = styled.div<{ $checked: boolean }>`
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.$checked ? "solid 1px #2a72e5" : "solid 1px #e7ebf2"};
  border-radius: 4px;
  background: ${(props) => (props.$checked ? "#2a72e5" : "white")};
`;
