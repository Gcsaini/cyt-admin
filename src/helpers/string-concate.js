export const truncateString = (str) => {
  if (str.length > 12) {
    return str.slice(0, 12) + "...";
  }
  return str;
};
