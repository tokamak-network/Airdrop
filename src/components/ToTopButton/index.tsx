import React from "react";
import { UpperArrow } from "assets";
import { Circle } from "./style";

interface ToTopButton {
  display: boolean;
  onClick: () => void;
}

export const ToTopButton: React.FC<ToTopButton> = ({ onClick, display }) => {
  return (
    <Circle onClick={onClick} $display={display}>
      <UpperArrow />
    </Circle>
  );
};
