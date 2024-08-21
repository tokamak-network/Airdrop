import { getEthereumContract } from "hooks/useWallet";
import * as LockTOSDividendABI from "services/abis/LockTOSDividend.json";

export const setClaimAirdrop = async (address: string) => {
  try {
    const contract = await getEthereumContract(address, LockTOSDividendABI.abi);
    await contract?.claim(address);
  } catch (error) {
    console.error(error);
  }
};
