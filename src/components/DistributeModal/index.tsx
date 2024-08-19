import React, { useState } from "react";
import {
  Screen,
  Layout,
  Container,
  FormComp,
  ModalHeader,
  Title,
  Line,
  ControlBar,
  CancelButton,
  ClaimButton,
  CloseButton,
  ModalCloseButton,
} from "./style";
import { ModalCloseIcon, PopupCloseIcon } from "assets";
import { StyledSelect, StyledInput } from "components";
import { contributor, tokens } from "consts";

interface ClaimModalProps {
  onClose: () => void;
}

const date = "2022-04-07 00:00:00 UTC";

export const DistributeModal: React.FC<ClaimModalProps> = ({ onClose }) => {
  const [unit, setUnit] = useState<string>("TON");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUnit(e.target.value);
  };
  const handleCancel = () => {
    onClose();
  };

  const handleClaim = () => {
    onClose();
  };

  return (
    <Screen>
      <Layout>
        <Container>
          <ModalHeader>
            <Title>Airdrop Distribute</Title>
            <ModalCloseButton onClick={onClose}>
              <ModalCloseIcon />
            </ModalCloseButton>
          </ModalHeader>
          <Line />
          <FormComp>
            <StyledSelect
              label="Distribute To"
              info={false}
              options={contributor}
            />
            <StyledSelect
              label="Token Address"
              info={true}
              options={tokens}
              onChange={handleChange}
              unit={unit}
            />
            <StyledInput
              label="Token Amount"
              active={true}
              placeholder="0.00"
            />
            <StyledInput
              label="Token Allowance Amount"
              active={true}
              placeholder="0.00"
            />
            <StyledInput
              label="Distribution Timestamp"
              active={true}
              value={date}
              readOnly={true}
            ></StyledInput>
          </FormComp>
          <Line />
          <ControlBar>
            <ClaimButton onClick={handleClaim}>Approve</ClaimButton>
            <CancelButton onClick={handleCancel}>Distribute</CancelButton>
          </ControlBar>
        </Container>
        <CloseButton onClick={onClose}>
          <PopupCloseIcon />
        </CloseButton>
      </Layout>
    </Screen>
  );
};
