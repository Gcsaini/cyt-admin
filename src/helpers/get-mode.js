export const getMode = (mode) => {
  if (parseInt(mode) === 1) {
    return "Online";
  }
  if (parseInt(mode) === 2) {
    return "Offline";
  }
  if (parseInt(mode) === 3) {
    return "Both";
  }
};
