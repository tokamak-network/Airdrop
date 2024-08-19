import React from "react";
import { Container, InputComp, LabelBarComp, LabelComp } from "./style";

interface StyledSelectProps {
  label: string;
  active: boolean;
  placeholder: string;
}

export const StyledInput: React.FC<StyledSelectProps> = ({
  label,
  active,
  placeholder,
}) => {
  const handleChange = () => {};
  return (
    <Container>
      <LabelBarComp>
        <LabelComp>{label}</LabelComp>
      </LabelBarComp>
      <InputComp
        onChange={handleChange}
        disabled={!active}
        placeholder={placeholder}
      />
    </Container>
  );
};
