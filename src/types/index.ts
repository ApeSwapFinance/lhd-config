export interface AddressMapping {
  tokenSymbol: string
  tokenName: string
  tokenLogoUrl: string
  tokenAddresses: TokenAddress[]
  knownOwners?: string[]
  tags?: (
    | 'Marketing_Solution'
    | 'Infrastructure'
    | 'AI'
    | 'NFTs'
    | 'Bridge'
    | 'Launchpad'
    | 'DEX'
    | 'Bond'
    | 'Lending'
    | 'Liquid_Staking'
    | 'Yield'
    | 'Stablecoin'
    | 'Yield_Aggregator'
    | 'Derivatives'
    | 'Synthetics'
    | 'Insurance/Security'
    | 'Metaverse'
    | 'GameFi'
    | 'X-2-Earn'
    | 'Wallet'
    | 'Index'
    | 'NFT_Marketplace'
    | 'Oracle'
    | 'Blockchain'
    | 'Gambling'
    | 'Memecoin'
  )[]
  profileLinks?: TokenProfileLinks
  isHardAsset?: boolean
  isExempted?: boolean
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
