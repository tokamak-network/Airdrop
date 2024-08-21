import React from "react";
import { Container, InputComp, LabelBarComp, LabelComp, Error } from "./style";

interface StyledSelectProps {
  label: string;
  active: boolean;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledInput: React.FC<StyledSelectProps> = ({
  label,
  active,
  placeholder,
  value,
  readOnly,
  error,
  onChange,
}) => {
  return (
    <Container>
      <LabelBarComp>
        <LabelComp>{label}</LabelComp>
      </LabelBarComp>
      {readOnly ? (
        <InputComp
          type="text"
          onChange={onChange}
          disabled={!active}
          placeholder={placeholder}
          value={value}
          readOnly
        />
      ) : (
        <InputComp
          type="text"
          onChange={onChange}
          disabled={!active}
          placeholder={placeholder}
          value={value}
        />
      )}
      {error && error?.length > 0 ? <Error>{error}</Error> : <></>}
    </Container>
  );
};
