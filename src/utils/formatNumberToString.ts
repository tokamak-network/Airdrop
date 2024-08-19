export const formatNumberToString = (number: number, index: number) => {
  return number.toLocaleString("en-US", { minimumFractionDigits: index });
};
