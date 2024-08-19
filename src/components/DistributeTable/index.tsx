import React from "react";
import {
  Container,
  TokenList,
  TokenLabel,
  TableController,
  ScheduleBar,
  Label,
  ScheduledTime,
  DistributeButton,
  MobileDistributeButton,
  TableContainer,
  Table,
  MobileTable,
  TableRow,
  Thead,
  Tbody,
  TableHead,
  TableCell,
} from "./style";
import { formatNumberToString, formatNextThursday } from "utils";

interface DistributeTableProps {
  confirmDistribute: () => void;
}

const tokens = [
  { address: 0, symbol: "DOCDOC", amount: 1000000 },
  { address: 1, symbol: "DOCDOC", amount: 1000000 },
  { address: 2, symbol: "DOCDOC", amount: 1000000 },
  { address: 3, symbol: "DOCDOC", amount: 1000000 },
  { address: 4, symbol: "DOCDOC", amount: 1000000 },
  { address: 5, symbol: "DOCDOC", amount: 1000000 },
  { address: 6, symbol: "DOCDOC", amount: 1000000 },
];

export const DistributeTable: React.FC<DistributeTableProps> = ({
  confirmDistribute,
}) => {
  return (
    <Container>
      <TokenList>
        <TokenLabel>Token List</TokenLabel>
        <MobileDistributeButton onClick={confirmDistribute}>
          Distribute
        </MobileDistributeButton>
      </TokenList>
      <TableController>
        <ScheduleBar>
          <Label>sTOS Holder distribution schedule:</Label>
          <ScheduledTime>{formatNextThursday()}</ScheduledTime>
        </ScheduleBar>
        <DistributeButton onClick={confirmDistribute}>
          Distribute
        </DistributeButton>
      </TableController>
      <TableContainer>
        <Table>
          <colgroup>
            <col width="270px" />
            <col width="270px" />
          </colgroup>
          <Thead>
            <TableRow>
              <TableHead>Token Symbol</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </Thead>
          <Tbody>
            {tokens.map((token, index) => {
              if (!(index % 2)) {
                return (
                  <TableRow key={index}>
                    <TableCell>{token.symbol}</TableCell>
                    <TableCell>{formatNumberToString(token.amount)}</TableCell>
                  </TableRow>
                );
              }
            })}
          </Tbody>
        </Table>
        <Table>
          <colgroup>
            <col width="270px" />
            <col width="270px" />
          </colgroup>
          <Thead>
            <TableRow>
              <TableHead>Token Symbol</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </Thead>
          <Tbody>
            {tokens.map((token, index) => {
              if (index % 2) {
                return (
                  <TableRow key={index}>
                    <TableCell>{token.symbol}</TableCell>
                    <TableCell>{formatNumberToString(token.amount)}</TableCell>
                  </TableRow>
                );
              }
            })}
          </Tbody>
        </Table>
        <MobileTable>
          <colgroup>
            <col width="270px" />
            <col width="270px" />
          </colgroup>
          <Thead>
            <TableRow>
              <TableHead>Token Symbol</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </Thead>
          <Tbody>
            {tokens.map((token, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{token.symbol}</TableCell>
                  <TableCell>{formatNumberToString(token.amount)}</TableCell>
                </TableRow>
              );
            })}
          </Tbody>
        </MobileTable>
      </TableContainer>
    </Container>
  );
};
