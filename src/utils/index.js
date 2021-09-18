export const formatAddress = (ethAddress) => {
  if (ethAddress)
    return (
      ethAddress.substring(0, 4).toUpperCase() +
      "...." +
      ethAddress.substring(38, 42).toUpperCase()
    );
  else return "CONNECT WALLET";
};

export const constants = {
  width: {
    mobile: 1024,
  },
};
