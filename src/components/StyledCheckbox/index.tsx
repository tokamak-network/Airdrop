import React from "react";
import {
  Container,
  CheckboxWrapper,
  HiddenCheckbox,
  Checkbox,
  Label,
} from "./style";
import { Tick } from "assets";

interface CheckboxProps {
  checked: boolean;
  value?: string;
  name?: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledCheckbox: React.FC<CheckboxProps> = ({
  checked,
  value,
  name,
  label,
  onChange,
}) => (
  <Container>
    <CheckboxWrapper>
      <HiddenCheckbox
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
      />
      <Checkbox $checked={checked}>
        <Tick />
      </Checkbox>
    </CheckboxWrapper>
    {label ? <Label>{label}</Label> : <></>}
  </Container>
);

export default Checkbox;
