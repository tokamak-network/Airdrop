import React, { useState } from "react";
import {
  Screen,
  Layout,
  Container,
  ModalHeader,
  Title,
  Line,
  Amount,
  ValueBar,
  Value,
  Unit,
  AirdropList,
  AirdropBar,
  ValuePerOption,
  OptionLabel,
  ControlBar,
  CancelButton,
  ClaimButton,
  CloseButton,
  ModalCloseButton,
} from "./style";
import { ModalCloseIcon, PopupCloseIcon } from "assets";
import { airdropOptions } from "consts";

interface ClaimModalProps {
  onClose: () => void;
}

const airdrops = [
  { address: "1", amount: 100 },
  { address: "2", amount: 200 },
  { address: "3", amount: 150 },
];

export const ClaimModal: React.FC<ClaimModalProps> = ({ onClose }) => {
  const [value, setValue] = useState<number>(0);
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedOptions([...checkedOptions, e.target.value]);
      setValue(
        value +
          airdrops.filter((airdrop) => e.target.value === airdrop.address)[0]
            .amount
      );
    } else {
      setCheckedOptions(
        checkedOptions.filter((option) => option !== e.target.value)
      );
      setValue(
        value -
          airdrops.filter((airdrop) => e.target.value === airdrop.address)[0]
            .amount
      );
    }
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
            <Title>Airdrop Claim</Title>
            <ModalCloseButton onClick={onClose}>
              <ModalCloseIcon />
            </ModalCloseButton>
          </ModalHeader>
          <Line />
          <Amount>Amount</Amount>
          <ValueBar>
            <Value>{value}</Value>
            <Unit>TOS</Unit>
          </ValueBar>
          <AirdropList>
            {airdropOptions.map((option, index) => {
              return (
                <AirdropBar key={index}>
                  <input
                    type="checkbox"
                    name="airdrops"
                    value={airdrops[index].address}
                    checked={checkedOptions.includes(airdrops[index].address)}
                    onChange={handleChange}
                  />
                  <ValuePerOption>
                    {airdrops[index].amount + " TOS"}
                  </ValuePerOption>
                  &nbsp;
                  <OptionLabel>{"(" + option + ")"}</OptionLabel>
                </AirdropBar>
              );
            })}
          </AirdropList>
          <Line />
          <ControlBar>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            <ClaimButton onClick={handleClaim}>Claim</ClaimButton>
          </ControlBar>
        </Container>
        <CloseButton onClick={onClose}>
          <PopupCloseIcon />
        </CloseButton>
      </Layout>
    </Screen>
  );
};
