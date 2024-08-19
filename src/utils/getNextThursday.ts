export const formatNextThursday = () => {
  const now = new Date();
  const daysUntilThursday = (4 - now.getUTCDay() + 7) % 7 || 7;
  const nextThursday = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + daysUntilThursday,
      0,
      0,
      0
    )
  );

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
    hour12: false,
  };
  const formattedDate = nextThursday
    .toLocaleString("en-US", options)
    .replace(",", "");

  return `Next(${formattedDate.split(" ")[0]}) ${formattedDate.split(" ")[1]} ${
    formattedDate.split(" ")[2]
  } ${formattedDate.split(" ")[3]} ${formattedDate.split(" ")[4]} (${
    formattedDate.split(" ")[5]
  })`;
};
