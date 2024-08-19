import React, { useState } from "react";
import {
  Container,
  Select,
  LabelBar,
  Label,
  Option,
  Info,
  Unit,
} from "./style";

interface StyledSelectProps {
  label: string;
  info: boolean;
  options: string[];
}

export const StyledSelect: React.FC<StyledSelectProps> = ({
  label,
  info,
  options,
}) => {
  const [unit, setUnit] = useState<string>("TON");
  const currentBalance = "0.00";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value);
  };
  return (
    <Container>
      <LabelBar>
        <Label>{label}</Label>
        {info ? (
          <div>
            <Info>Balance</Info>&nbsp;
            <Unit>
              {currentBalance + " "}
              {unit}
            </Unit>
          </div>
        ) : (
          <></>
        )}
      </LabelBar>
      <Select onChange={handleChange}>
        {options.map((option, index) => {
          return (
            <Option value={option} key={index}>
              {option}
            </Option>
          );
        })}
      </Select>
    </Container>
  );
};
