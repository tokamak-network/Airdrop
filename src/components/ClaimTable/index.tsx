import React, { useEffect, useState } from "react";
import {
  Container,
  TokenList,
  TokenLabel,
  TableController,
  OptionBar,
  Label,
  Options,
  Option,
  Table,
  TableRow,
  Thead,
  Tbody,
  TableHead,
  TableCell,
  ClaimButton,
  ClaimSelectedButton,
  MobileClaimAllButton,
  ColFirst,
  ColSecond,
  ColThird,
  ColForth,
  Dropdownmenu,
} from "./style";
import { formatNumberToString } from "utils";
// import { SourceDropdown } from "components/SourceDropdown";

interface ClaimTableProps {
  confirmClaim: () => void;
}

const tokens = [
  { address: 0, symbol: "DOCDOC", amount: 1000000 },
  { address: 1, symbol: "DOCDOC", amount: 1000000 },
  { address: 2, symbol: "DOCDOC", amount: 1000000 },
  { address: 3, symbol: "DOCDOC", amount: 1000000 },
  { address: 4, symbol: "DOCDOC", amount: 1000000 },
  { address: 5, symbol: "DOCDOC", amount: 1000000 },
  { address: 6, symbol: "DOCDOC", amount: 1000000 },
  { address: 7, symbol: "DOCDOC", amount: 1000000 },
  { address: 8, symbol: "DOCDOC", amount: 1000000 },
  { address: 9, symbol: "DOCDOC", amount: 1000000 },
];

export const ClaimTable: React.FC<ClaimTableProps> = ({ confirmClaim }) => {
  const [source, setSource] = useState<string>("genesis");
  const [claims, setClaims] = useState<number[]>([]);
  const [checkedAll, setCheckedAll] = useState<boolean>(false);

  useEffect(() => {
    if (tokens.length === claims.length) setCheckedAll(true);
    else setCheckedAll(false);
  }, [claims]);

  const handleSourceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSource(e.target.value);
  };

  const handleCheckAll = () => {
    setCheckedAll(!checkedAll);
    if (!checkedAll) {
      setClaims(tokens.map((token) => token.address));
    } else {
      setClaims([]);
    }
  };

  const handleClaimSelected = () => {
    confirmClaim();
  };

  const handleClaimsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setClaims([...claims, parseInt(value)]);
    } else {
      setClaims(claims.filter((e) => e !== parseInt(value)));
    }
  };

  return (
    <Container>
      <TokenList>
        <TokenLabel>Token List</TokenLabel>
        <MobileClaimAllButton onClick={confirmClaim}>
          Claim All
        </MobileClaimAllButton>
      </TokenList>
      <TableController>
        <OptionBar>
          <Label>From:</Label>
          <Options>
            <Option>
              <input
                type="radio"
                name="source"
                value="genesis"
                checked={source === "genesis"}
                onChange={handleSourceChange}
              />{" "}
              Genesis Airdrop
            </Option>
            <Option>
              <input
                type="radio"
                name="source"
                value="dao"
                checked={source === "dao"}
                onChange={handleSourceChange}
              />{" "}
              DAO Airdrop
            </Option>
            <Option>
              <input
                type="radio"
                name="source"
                value="ton"
                checked={source === "ton"}
                onChange={handleSourceChange}
              />{" "}
              TON Staker
            </Option>
          </Options>
          <Dropdownmenu onChange={handleSourceChange}>
            <option value="genesis">Genesis Airdrop</option>
            <option value="dao">DAO Airdrop</option>
            <option value="ton">TON Staker</option>
          </Dropdownmenu>
        </OptionBar>
        <ClaimSelectedButton onClick={handleClaimSelected}>
          Claim Selected
        </ClaimSelectedButton>
      </TableController>
      <Table>
        <colgroup>
          <ColFirst />
          <ColSecond />
          <ColThird />
          <ColForth />
        </colgroup>
        <Thead>
          <TableRow>
            <TableHead>
              <input
                type="checkbox"
                onChange={handleCheckAll}
                checked={checkedAll}
              />
            </TableHead>
            <TableHead>Token Symbol</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </Thead>
        <Tbody>
          {tokens.map((token, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <input
                    type="checkbox"
                    key={index}
                    value={token.address}
                    name="claims"
                    checked={claims.includes(token.address)}
                    onChange={handleClaimsChange}
                  />
                </TableCell>
                <TableCell>{token.symbol}</TableCell>
                <TableCell>{formatNumberToString(token.amount)}</TableCell>
                <TableCell>
                  <ClaimButton key={index}>Claim</ClaimButton>
                </TableCell>
              </TableRow>
            );
          })}
        </Tbody>
      </Table>
    </Container>
  );
};
