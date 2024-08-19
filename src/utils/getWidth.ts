export const getDeviceWidth = (): number => {
  return window.innerWidth;
};

export const trackDeviceWidth = (
  callback: (width: number) => void
): (() => void) => {
  const updateDeviceWidth = (): void => {
    const width = getDeviceWidth();
    callback(width);
  };

  // Initial width
  updateDeviceWidth();

  // Add event listener for resize
  window.addEventListener("resize", updateDeviceWidth);

  // Return a function to remove the event listener
  return () => {
    window.removeEventListener("resize", updateDeviceWidth);
  };
};
