export interface AddressMapping {
  tokenSymbol: string;
  tokenAddresses: TokenAddress[];
  tokenName: string;
  tokenLogoUrl: string;
}

export interface TokenAddress {
  address: string; // SHOULD ALWAYS BE LOWERCASE
  chainId: string;
}
