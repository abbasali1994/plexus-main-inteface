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
  schedulerFrequency: {
    userBalances: 60 * 1000,
    tokenPrices: 60 * 1000,
  },
  RPCEndpoint: `https://eth-mainnet.alchemyapi.io/v2/7324A2r3y-6SJ905tHqYvnvLr7DBPN_D`,
};
