import React, { useEffect, useState } from "react";
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
import { distributeTOS, getBalance } from "utils";
import { DEPLOYED_ADDRESS } from "consts";
import * as TestERC20ABI from "services/abis/TestERC20.json";
import { getGlobalState } from "store";

interface ClaimModalProps {
  // tokens: any[];
  onClose: () => void;
}

const date = "2022-04-07 00:00:00 UTC";

export const DistributeModal: React.FC<ClaimModalProps> = ({
  // tokens,
  onClose,
}) => {
  const [distrbuteOption, setDistributeOption] = useState<string>("TON Holder");
  const [unit, setUnit] = useState<string>("TON");
  const [amount, setAmount] = useState<string>("");
  const [balance, setBalance] = useState<string>("0.00");
  const [error, setError] = useState<string>("");

  const account = getGlobalState("connectedAccount");

  const handleDistributeOptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setDistributeOption(e.target.value);
  };

  const handleTypeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUnit(e.target.value);
  };
  const handleApprove = () => {
    onClose();
  };

  const handleDistribute = () => {
    let tokenAddress = DEPLOYED_ADDRESS.TON_ADDRESS;
    for (let token of tokens) {
      if (token.tokenName === unit) tokenAddress = token.address;
    }
    if (!account) return;
    if (distrbuteOption === "TON Holder") {
      onClose();
    } else if (distrbuteOption === "sTOS Holder") {
      distributeTOS(amount, tokenAddress);
      // onClose();
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberOfBalance = parseInt(
      balance
        .split("")
        .filter((letter) => letter !== ",")
        .join("")
    );
    if (parseFloat(e.target.value) > numberOfBalance)
      setError("Amount shold be less that wallet balance");
    else setError("");
    setAmount(e.target.value);
  };

  useEffect(() => {
    const getTokenBalance = async () => {
      let tokenAddress = DEPLOYED_ADDRESS.TON_ADDRESS;
      for (let token of tokens) {
        if (token.tokenName === unit) tokenAddress = token.address;
      }
      const balance = await getBalance(tokenAddress, TestERC20ABI.abi);
      await setBalance(balance || "0.00");
    };
    getTokenBalance();
  }, [unit]);

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
              options={contributor}
              onChange={handleDistributeOptionChange}
            />
            <StyledSelect
              label="Token Address"
              info={balance}
              options={tokens.map((token) => token.tokenName)}
              onChange={handleTypeChange}
              unit={unit}
            />
            <StyledInput
              label="Token Amount"
              active={true}
              placeholder="0.00"
              value={amount}
              onChange={handleAmountChange}
              error={error}
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
            <ClaimButton onClick={handleApprove}>Approve</ClaimButton>
            <CancelButton onClick={handleDistribute}>Distribute</CancelButton>
          </ControlBar>
        </Container>
        <CloseButton onClick={onClose}>
          <PopupCloseIcon />
        </CloseButton>
      </Layout>
    </Screen>
  );
};
