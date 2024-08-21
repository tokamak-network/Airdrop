import { getEthereumContract } from "hooks/useWallet";
import * as LockTOSDividendABI from "services/abis/LockTOSDividend.json";
import { DEPLOYED_ADDRESS } from "consts";
import * as ERC20 from "services/abis/ERC20.json";
import { convertNumber, convertToWei } from "utils";
import moment from "moment";

const { LockTOSDividend_ADDRESS } = DEPLOYED_ADDRESS;

export const getAirdropList = async () => {
  let claimableTokens = [];
  let isError = false;
  let i = 0;

  try {
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
        if (tokenAddress === undefined) {
          break;
        }
        i++;
      } catch (e) {
        isError = true;
      }
    } while (isError === false);
  } catch (e) {
    console.log(e);
  }

  if (claimableTokens[0] === undefined) {
    return [];
  }

  const tokens = claimableTokens;
  const nowTimeStamp = moment().unix();
  const result: { tokenName: string; amount: string }[] = await Promise.all(
    tokens.map(async (token: string) => {
      const LOCKTOS_DIVIDEND_CONTRACT = await getEthereumContract(
        LockTOSDividend_ADDRESS,
        LockTOSDividendABI.abi
      );
      const tokenAmount = await LOCKTOS_DIVIDEND_CONTRACT?.tokensPerWeekAt(
        token,
        nowTimeStamp
      );
      const ERC20_CONTRACT = await getEthereumContract(token, ERC20.abi);
      const tokenSymbol = await ERC20_CONTRACT?.symbol();
      const tokenDecimals = await ERC20_CONTRACT?.decimals();

      return {
        tokenName: tokenSymbol,
        amount: convertNumber({
          amount: tokenAmount.toString(),
          localeString: true,
          type: "custom",
          decimalPoints: tokenDecimals,
        }) as string,
      };
    })
  );

  return result.filter((data) => {
    return Number(data.amount.replace(/,/g, "")) > 0;
  });
};

export const distributeTOS = async (amount: string, address: string) => {
  try {
    const contract = await getEthereumContract(
      LockTOSDividend_ADDRESS,
      LockTOSDividendABI.abi
    );
    await contract?.distribute(address, convertToWei(amount));
  } catch (error) {
    console.error(error);
  }
};
