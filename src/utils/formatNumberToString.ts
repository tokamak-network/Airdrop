export const formatNumberToString = (number: number) => {
  return number.toLocaleString("en-US", { minimumFractionDigits: 2 });
};
