import React from "react";
import { Container, Button } from "./style";

interface ToggleButtonProps {
  status: boolean;
  changeStatus: (newStatus: boolean) => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  status,
  changeStatus,
}) => {
  return (
    <Container>
      <Button $status={status} onClick={() => changeStatus(true)}>
        Claim
      </Button>
      <Button $status={!status} onClick={() => changeStatus(false)}>
        Distribute
      </Button>
    </Container>
  );
};
