import React, { useEffect, useState } from "react";
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
import { formatNextThursday } from "utils";
import { getAirdropList } from "utils";
import { DistributeModal } from "components/DistributeModal";

// const tokens = [
//   { address: 0, symbol: "DOCDOC", amount: 1000000 },
//   { address: 1, symbol: "DOCDOC", amount: 1000000 },
//   { address: 2, symbol: "DOCDOC", amount: 1000000 },
//   { address: 3, symbol: "DOCDOC", amount: 1000000 },
//   { address: 4, symbol: "DOCDOC", amount: 1000000 },
//   { address: 5, symbol: "DOCDOC", amount: 1000000 },
//   { address: 6, symbol: "DOCDOC", amount: 1000000 },
// ];

export const DistributeTable: React.FC = () => {
  const [tokens, setTokens] = useState<any[]>([]);
  const [distributeShow, setDistributeShow] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const airdropList = await getAirdropList();
      setTokens(airdropList);
    };
    fetchData();
  }, [getAirdropList]);
  return (
    <Container>
      {distributeShow || (
        <DistributeModal
          onClose={() => setDistributeShow(true)}
          // tokens={tokens}
        />
      )}
      <TokenList>
        <TokenLabel>Token List</TokenLabel>
        <MobileDistributeButton onClick={() => setDistributeShow(false)}>
          Distribute
        </MobileDistributeButton>
      </TokenList>
      <TableController>
        <ScheduleBar>
          <Label>sTOS Holder distribution schedule:</Label>
          <ScheduledTime>{formatNextThursday()}</ScheduledTime>
        </ScheduleBar>
        <DistributeButton onClick={() => setDistributeShow(false)}>
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
                    <TableCell>{token.tokenName}</TableCell>
                    <TableCell>{token.amount}</TableCell>
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
                    <TableCell>{token.tokenName}</TableCell>
                    <TableCell>{token.amount}</TableCell>
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
                  <TableCell>{token.tokenName}</TableCell>
                  <TableCell>{token.amount}</TableCell>
                </TableRow>
              );
            })}
          </Tbody>
        </MobileTable>
      </TableContainer>
    </Container>
  );
};
