import { BigNumber } from "ethers";

export const formatNumberToString = (number: number, index: number) => {
  const numAmount = BigNumber.from(number);
  return Number(numAmount).toLocaleString("en-US", {
    minimumFractionDigits: index,
  });
};
