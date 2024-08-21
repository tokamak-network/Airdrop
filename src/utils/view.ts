import { Airdrop_ADDRESS, DEPLOYED_ADDRESS } from "consts";
import { getEthereumContract } from "hooks/useWallet";
import { convertNumber } from "./number";
import * as ERC20 from "services/abis/ERC20.json";
import * as LockTOSDividendABI from "services/abis/LockTOSDividend.json";
import * as AirdropVaultABI from "services/abis/AirdropVault.json";
import { getGlobalState } from "store";

const account = getGlobalState("connectedAccount");

export const getClaimList = async () => {
  try {
    const { LockTOSDividend_ADDRESS } = DEPLOYED_ADDRESS;

    const claimableTokens = [];
    let isError = false;
    let i = 0;

    do {
      try {
        const LOCKTOS_DIVIDEND_CONTRACT = await getEthereumContract(
          LockTOSDividend_ADDRESS,
          LockTOSDividendABI.abi
        );
        const tokenAddress = await LOCKTOS_DIVIDEND_CONTRACT?.distributedTokens(
          i
        );
        claimableTokens.push(tokenAddress);
        i++;
      } catch (e) {
        isError = true;
      }
    } while (isError === false);

    const tokens = claimableTokens;

    //project tokens
    const res = await Promise.all(
      tokens.map(async (tokenAddress: string, index: number) => {
        const ERC20_CONTRACT = await getEthereumContract(
          tokenAddress,
          ERC20.abi
        );
        const tokenSymbol = await ERC20_CONTRACT?.symbol();
        const LOCKTOS_DIVIDEND_CONTRACT = await getEthereumContract(
          LockTOSDividend_ADDRESS,
          LockTOSDividendABI.abi
        );
        const amount = await LOCKTOS_DIVIDEND_CONTRACT?.claimable(
          account,
          tokenAddress
        );

        const claimAmount = convertNumber(amount);
        const obj = {
          name: `#${index + 1}`,
          tokenName: tokenSymbol,
          claimAmount,
          tokenAddress,
        };
        return obj;
      })
    );
    return res;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const fetchAirdropPayload = async (account: string) => {
  const roundInfo: any = [];
  let claimedAmount;
  let unclaimed;
  try {
    const AirdropVault = await getEthereumContract(
      Airdrop_ADDRESS,
      AirdropVaultABI.abi
    );
    const currentRound = await AirdropVault?.currentRound();
    const totalTgeCount = await AirdropVault?.totalTgeCount();
    unclaimed = await AirdropVault?.unclaimedInfos(account);
    const tgeCount =
      Number(currentRound.toString()) > Number(totalTgeCount.toString())
        ? totalTgeCount
        : currentRound;
    if (account) {
      for (let i = 1; i <= tgeCount; i++) {
        const result = await AirdropVault?.getTgeInfos(i);
        let whitelist;
        let airdropInfo;

        whitelist = await AirdropVault?.getWhitelistInfo(i, account);
        if (whitelist[0]) {
          airdropInfo = {
            roundNumber: i,
            allocatedAmount: convertNumber({ amount: result.allocatedAmount }),
            amount: convertNumber({ amount: result.amount }),
            myAmount: convertNumber({ amount: result.amount }),
          };
        } else {
          airdropInfo = {
            roundNumber: i,
            allocatedAmount: convertNumber({ amount: result.allocatedAmount }),
            amount: convertNumber({ amount: result.amount }),
            myAmount: convertNumber({ amount: "0" }),
          };
        }
        roundInfo.push(airdropInfo);
      }
      claimedAmount = await AirdropVault?.userClaimedAmount(account);
    }
  } catch (err) {}
  return {
    roundInfo: roundInfo,
    address: Airdrop_ADDRESS,
    claimedAmount: convertNumber({ amount: claimedAmount }),
    unclaimedAmount: convertNumber({
      amount: unclaimed === undefined ? undefined : unclaimed.amount,
    }),
  };
};
