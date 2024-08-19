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
import { formatNumberToString } from "utils";

interface PortfolioProps {
  portfolio: {
    address: string;
    stakedTON: number;
    stakedTOS: number;
    TOS: number;
  };
}
export const PortfolioBar: React.FC<PortfolioProps> = ({ portfolio }) => {
  return (
    <Container>
      <FirstCard>
        <Label>Address</Label>
        <Value>{portfolio.address}</Value>
      </FirstCard>
      <Card>
        <Label>My Staked TON</Label>
        <Value>
          {formatNumberToString(portfolio.stakedTON, 2)}
          <Unit>TON</Unit>
        </Value>
      </Card>
      <Card>
        <Label>My Staked TOS</Label>
        <Value>
          {formatNumberToString(portfolio.stakedTOS, 2)}
          <Unit>TOS</Unit>
        </Value>
      </Card>
      <LastCard>
        <Label>My sTOS</Label>
        <Value>
          {formatNumberToString(portfolio.TOS, 2)}
          <Unit>sTOS</Unit>
        </Value>
      </LastCard>
    </Container>
  );
};
