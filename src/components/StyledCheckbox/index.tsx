import React from "react";
import { Container, CheckboxWrapper, HiddenCheckbox, Checkbox } from "./style";
import { Tick } from "assets";

interface CheckboxProps {
  checked: boolean;
  value?: string;
  name?: string;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledCheckbox: React.FC<CheckboxProps> = ({
  checked,
  value,
  name,
  children,
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
    {children ? children : <></>}
  </Container>
);

export default Checkbox;
