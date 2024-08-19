import React from "react";
import { Container, InputComp, LabelBarComp, LabelComp } from "./style";

interface StyledSelectProps {
  label: string;
  active: boolean;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
}

export const StyledInput: React.FC<StyledSelectProps> = ({
  label,
  active,
  placeholder,
  value,
  readOnly,
}) => {
  const handleChange = () => {};
  return (
    <Container>
      <LabelBarComp>
        <LabelComp>{label}</LabelComp>
      </LabelBarComp>
      {readOnly ? (
        <InputComp
          type="text"
          onChange={handleChange}
          disabled={!active}
          placeholder={placeholder}
          value={value}
          readOnly
        />
      ) : (
        <InputComp
          type="text"
          onChange={handleChange}
          disabled={!active}
          placeholder={placeholder}
          value={value}
        />
      )}
    </Container>
  );
};
