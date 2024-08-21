import React from "react";
import {
  Container,
  Card,
  LastCard,
  Label,
  Value,
  Unit,
  FirstCard,
} from "./style";
// import { formatNumberToString } from "utils";
import { convertNumber, shortenAddress } from "utils";
import { getGlobalState } from "store";

interface PortfolioProps {
  portfolio: {
    address: string;
    stakedTON: number;
    stakedTOS: number;
    sTOS: number;
  };
}

export const PortfolioBar: React.FC<PortfolioProps> = ({ portfolio }) => {
  const account = shortenAddress(getGlobalState("connectedAccount"));
  return (
    <Container>
      <FirstCard>
        <Label>Address</Label>
        <Value>{account}</Value>
      </FirstCard>
      <Card>
        <Label>My Staked TON</Label>
        <Value>
          {convertNumber({
            amount: portfolio.stakedTON?.toString(),
            localeString: true,
          })}
          <Unit>TON</Unit>
        </Value>
      </Card>
      <Card>
        <Label>My Staked TOS</Label>
        <Value>
          {convertNumber({
            amount: portfolio.stakedTOS?.toString(),
            localeString: true,
          })}
          <Unit>TOS</Unit>
        </Value>
      </Card>
      <LastCard>
        <Label>My sTOS</Label>
        <Value>
          {convertNumber({
            amount: portfolio.sTOS?.toString(),
            localeString: true,
          })}
          <Unit>sTOS</Unit>
        </Value>
      </LastCard>
    </Container>
  );
};
