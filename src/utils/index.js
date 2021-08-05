export const  formatAddress = (ethAddress) => {
  return ethAddress.substring(0,4).toUpperCase() + '....' + ethAddress.substring(38,42).toUpperCase()
}

export const constants = {
  width: {
    mobile: 1024
  }
}
