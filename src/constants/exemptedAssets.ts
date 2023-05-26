import { AddressMapping } from '../types'

const exemptedAssets: AddressMapping[] = [
  // XRP, ADA etc. are exempted from the blacklist
  {
    tokenSymbol: 'XRP',
    tokenName: 'Ripple Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XRP.svg',
    tokenAddresses: [
      {
        address: '0x39fbbabf11738317a448031930706cd3e612e1b9',
        chainId: '1',
      },
      {
        address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
        chainId: '56',
      },
    ],
  },
]

export default exemptedAssets
