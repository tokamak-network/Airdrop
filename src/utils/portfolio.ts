import { ethers } from "ethers";
import { getEthereumContract } from "hooks/useWallet";
import { getGlobalState } from "store";
import { convertNumber } from "./number";
import { DEPLOYED_ADDRESS } from "consts";

const account = getGlobalState("connectedAccount");

export const getStakedTONBalance = async (
  address: string,
  abi: ethers.ContractInterface
) => {
  const contract = await getEthereumContract(address, abi);
  if (!contract) {
    return undefined;
  }

  try {
    const amount = await contract["stakeOf(address)"](account);
    return amount || ethers.constants.Zero;
  } catch (error) {
    console.error("Error fetching staked TON balance", error);
    return undefined;
  }
};

export const getStakedTOSBalance = async (
  address: string,
  abi: ethers.ContractInterface
) => {
  try {
    const contract = await getEthereumContract(address, abi);
    const amount = await contract?.balanceOf(account);
    return amount;
  } catch (error) {
    console.error("Error fetching staked TOS balance", error);
    return undefined;
  }
};

export const getSTOSBalance = async (
  address: string,
  abi: ethers.ContractInterface
) => {
  if (!account) return;
  try {
    const contract = await getEthereumContract(address, abi);
    const amount = await contract?.balanceOf(account);
    return amount;
  } catch (error) {
    console.error("Error fetching sTOS balance", error);
    return undefined;
  }
};

export const getBalance = async (
  address: string,
  abi: ethers.ContractInterface
) => {
  const contract = await getEthereumContract(address, abi);
  if (!contract) {
    console.error("Failed to initalize contract");
    return undefined;
  }

  try {
    const amount = await contract.balanceOf(account);
    return address !== DEPLOYED_ADDRESS.WTON_ADDRESS
      ? convertNumber({ amount: amount, localeString: true })
      : convertNumber({ amount: amount, type: "ray" });
  } catch (error) {
    console.error("Error fetching balance", error);
    return undefined;
  }
};
