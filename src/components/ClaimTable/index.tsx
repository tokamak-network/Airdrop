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
  Radio,
} from "./style";
import { fetchAirdropPayload, convertNumber } from "utils";
import { StyledCheckbox } from "components/StyledCheckbox";
import { StyledSelect } from "components/StyledSelect";
import { trackDeviceWidth } from "utils/getWidth";
import { TokenDividendPoolProxy_ADDRESS } from "consts";
import { getEthereumContract } from "hooks/useWallet";
import * as TokenDividendPoolABI from "services/abis/TokenDividendProxyPool.json";
import * as ERC20 from "services/abis/ERC20.json";
import { getGlobalState } from "store";
import { getClaimList, setClaimAirdrop } from "utils";
import { ClaimModal } from "components";

const airdropOptions = ["Genesis Airdrop", "sTos Holder", "TON Staker"];

export const ClaimTable: React.FC = () => {
  const account = getGlobalState("connectedAccount");
  const [source, setSource] = useState<string>("sTos");
  const [claimShow, setClaimShow] = useState<boolean>(true);
  const [claimList, setClaimList] = useState<any[]>([]);
  const [claims, setClaims] = useState<string[]>([]);
  const [checkSelected, setCheckCSelected] = useState<boolean>(false);
  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);
  const [tonStakerAirdropTokens, setTonStakerAirdropTokens] = useState<any[]>(
    []
  );
  const [daoAirdropTokens, setDaoAirdropTokens] = useState<any[]>([]);
  const [genesisAirdropBalance, setGenesisAirdropBalance] = useState({});

  useEffect(() => {
    const getClaimableAirdropTonAmounts = async () => {
      const TOKEN_DIVIDEND_POOL_PROXY_CONTRACT = await getEthereumContract(
        TokenDividendPoolProxy_ADDRESS,
        TokenDividendPoolABI.abi
      );
      const claimList = await getClaimList();
      const tonRes =
        await TOKEN_DIVIDEND_POOL_PROXY_CONTRACT?.getAvailableClaims(account);

      if (tonRes === undefined && claimList === undefined) {
        return;
      }

      const { claimableAmounts, claimableTokens } = tonRes;

      let claimableArr: any[] = [];
      let tempTonStakerArr: any[] = [];
      let tempDaoAirdropArr: any[] = [];

      if (claimableAmounts.length > 0 && claimableTokens) {
        await Promise.all(
          claimableTokens.map(async (tokenAddress: string, idx: number) => {
            const ERC20_CONTRACT = await getEthereumContract(
              tokenAddress,
              ERC20.abi
            );
            let tokenSymbol = await ERC20_CONTRACT?.symbol();
            claimableArr.push({
              address: tokenAddress,
              amount: claimableAmounts[idx],
              tokenSymbol: tokenSymbol,
              id: idx,
              tonStaker: true,
            });
          })
        );
      }
      if (claimList) {
        if (claimList?.length > 0) {
          await Promise.all(
            claimList?.map((token: any, idx: number) => {
              claimableArr.push({
                address: token?.tokenAddress,
                amount: token?.claimAmount,
                tokenSymbol: token?.tokenName,
                id: idx,
                tosStaker: true,
              });
            })
          );
        }
      }
      if (claimableArr.length > 0) {
        // Push to Ton Staker arr
        await Promise.all(
          claimableArr.map((token: any) => {
            if (token.tonStaker === true && token.amount !== "0.00") {
              tempTonStakerArr.push(token);
            }
          })
        );

        // Push to DAO airdrop arr
        await Promise.all(
          claimableArr.map((token: any) => {
            if (token.tosStaker === true && token.amount !== "0.00") {
              tempDaoAirdropArr.push(token);
            }
          })
        );
      }

      const sortedTonStakerArr = tempTonStakerArr.sort((a, b) => a.id - b.id);
      const sortedDaoAirdropArr = tempDaoAirdropArr.sort((a, b) => a.id - b.id);

      setTonStakerAirdropTokens(
        sortedTonStakerArr.filter((tonStakerData) => {
          if (convertNumber({ amount: tonStakerData.amount }) !== "0.00") {
            return tonStakerData;
          }
        })
      );
      setDaoAirdropTokens(
        sortedDaoAirdropArr.filter((daoAirdropData) => {
          if (daoAirdropData.amount !== "0.00") {
            return daoAirdropData;
          }
        })
      );

      // let filteredAirdropData = claimableArr.filter(
      //   (data) => data.amount !== "0.00"
      // );
      // const sortedArr = filteredAirdropData.sort((a, b) => a.id - b.id);
    };
    if (account) getClaimableAirdropTonAmounts();
  }, [account, source]);

  useEffect(() => {
    async function callAirDropGenesisData() {
      if (account === undefined || account === null) {
        return;
      }
      const res = await fetchAirdropPayload(account);
      if (res === undefined) {
        return;
      }
      const { roundInfo, address, claimedAmount, unclaimedAmount } = res;
      if (roundInfo !== undefined && claimedAmount !== undefined) {
        setGenesisAirdropBalance({ address: address, amount: unclaimedAmount });
      }
    }
    if (account) {
      callAirDropGenesisData();
    }
    /*eslint-disable*/
  }, [account, source]);

  useEffect(() => {
    const stopTracking = trackDeviceWidth(setDeviceWidth);

    return () => {
      stopTracking();
    };
  }, []);

  useEffect(() => {
    if (claimList.length === claims.length) setCheckCSelected(true);
    else setCheckCSelected(false);
  }, [claims]);

  useEffect(() => {
    if (source === "genesis") setClaimList([genesisAirdropBalance]);
    else if (source === "sTos") setClaimList(daoAirdropTokens);
    else setClaimList(tonStakerAirdropTokens);
  }, [source]);

  const handleSourceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSource(e.target.value);
  };

  const handleCheckSelected = () => {
    setCheckCSelected(!checkSelected);
    if (!checkSelected) {
      setClaims(claimList.map((token) => token.address));
    } else {
      setClaims([]);
    }
  };

  const handleClaimSelected = () => {
    setClaimShow(false);
  };

  const handleClaimsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setClaims([...claims, value]);
    } else {
      setClaims(claims.filter((e) => e !== value));
    }
  };

  const handleClaim = (address: string) => {
    setClaimAirdrop(address);
  };

  return (
    <Container>
      {claimShow || <ClaimModal onClose={() => setClaimShow(true)} />}
      <TokenList>
        <TokenLabel>Token List</TokenLabel>
        <MobileClaimAllButton onClick={() => setClaimShow(false)}>
          Claim All
        </MobileClaimAllButton>
      </TokenList>
      <TableController>
        <OptionBar>
          <Label>From:</Label>
          {deviceWidth > 1100 ? (
            <Options>
              <Option>
                <Radio
                  type="radio"
                  name="source"
                  value="genesis"
                  checked={source === "genesis"}
                  onChange={handleSourceChange}
                />{" "}
                Genesis Airdrop
              </Option>
              <Option>
                <Radio
                  type="radio"
                  name="source"
                  value="sTos"
                  checked={source === "sTos"}
                  onChange={handleSourceChange}
                />{" "}
                sTos Holder
              </Option>
              <Option>
                <Radio
                  type="radio"
                  name="source"
                  value="ton"
                  checked={source === "ton"}
                  onChange={handleSourceChange}
                />{" "}
                TON Staker
              </Option>
            </Options>
          ) : (
            <StyledSelect
              options={airdropOptions}
              onChange={handleSourceChange}
            />
          )}
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
              <StyledCheckbox
                onChange={handleCheckSelected}
                checked={checkSelected}
              />
            </TableHead>
            <TableHead>Token Symbol</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </Thead>
        <Tbody>
          {claimList.length > 0 ||
            claimList.map((token, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <StyledCheckbox
                      key={index}
                      value={token.address}
                      name="claims"
                      checked={claims.includes(token.address)}
                      onChange={handleClaimsChange}
                    />
                  </TableCell>
                  <TableCell>{token.symbol}</TableCell>
                  <TableCell>
                    {convertNumber({ amount: token.amount })}
                  </TableCell>
                  <TableCell>
                    <ClaimButton
                      key={index}
                      onClick={() => handleClaim(token.address)}
                    >
                      Claim
                    </ClaimButton>
                  </TableCell>
                </TableRow>
              );
            })}
        </Tbody>
      </Table>
    </Container>
  );
};
