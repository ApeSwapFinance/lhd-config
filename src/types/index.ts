export interface AddressMapping {
  tokenSymbol: string
  tokenName: string
  tokenLogoUrl: string
  tokenAddresses: TokenAddress[]
  knownOwners?: string[]
  tags?: string[]
  profileLinks?: TokenProfileLinks
  isHardAsset?: boolean
}

export interface TokenAddress {
  address: string // SHOULD ALWAYS BE LOWERCASE
  chainId: string
}

export interface LiquidityOwner {
  ownerAddress: string
  applicableTokens: TokenAddress[]
  notes?: string
}
export class TokenProfileLinks {
  siteUrl?: string
  twitterUrl?: string
  telegramUrl?: string
  discordUrl?: string
  auditUrls?: string[]
}
