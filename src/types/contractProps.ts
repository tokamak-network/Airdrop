import { ethers } from "ethers";

export interface contractPropsType {
  address: string;
  abi: ethers.ContractInterface;
}
