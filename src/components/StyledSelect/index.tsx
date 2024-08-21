import React, { useState } from "react";
import {
  Container,
  SelectContainer,
  Select,
  LabelBar,
  Label,
  Option,
  Info,
  Unit,
} from "./style";
import { SelectArrowActive, SelectArrowInactive } from "assets";

interface StyledSelectProps {
  label?: string;
  info?: string;
  options: string[];
  unit?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const currentBalance = "0.00";

export const StyledSelect: React.FC<StyledSelectProps> = ({
  label,
  info,
  options,
  onChange,
  unit,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Container>
      <LabelBar>
        <Label>{label}</Label>
        {info ? (
          <div>
            <Info>Balance</Info>&nbsp;
            <Unit>
              {info + " "}
              {unit}
            </Unit>
          </div>
        ) : (
          <></>
        )}
      </LabelBar>
      <SelectContainer>
        <Select
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {options.map((option, index) => {
            return (
              <Option value={option} key={index}>
                {option}
              </Option>
            );
          })}
        </Select>
        <SelectArrowActive isFocused={isFocused} />
        <SelectArrowInactive isFocused={!isFocused} />
      </SelectContainer>
    </Container>
  );
};
