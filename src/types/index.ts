export interface AddressMapping {
  tokenSymbol: string
  tokenName: string
  tokenLogoUrl: string
  tokenAddresses: TokenAddress[]
  knownOwners?: string[]
  tags?: (
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
    | 'GameFi_(Play_to_Earn)'
    | 'X-2-Earn'
    | 'Wallets'
    | 'Indexes'
    | 'NFT_Marketplace'
    | 'Oracle'
    | 'Blockchains'
    | 'Gambling'
    | 'Memecoins'
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
