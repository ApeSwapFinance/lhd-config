import { AddressMapping } from '../types'

const exemptedAssets: AddressMapping[] = [
  // XRP, ADA etc. are exempted from the blacklist
  {
    tokenSymbol: 'XRP',
    tokenName: 'Ripple Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XRP.svg',
    tokenAddresses: [
      { address: '0x39fbbabf11738317a448031930706cd3e612e1b9', chainId: '1' },
      { address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe', chainId: '56' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'ADA',
    tokenName: 'Cardano Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ADA.svg',
    tokenAddresses: [
      { address: '0x3611fbfb06ffbcef9afb210f6ace86742e6c14a4', chainId: '106' },
      { address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', chainId: '56' },
      { address: '0x0e517979c2c1c1522ddb0c73905e0d39b3f990c0', chainId: '25' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'SOL',
    tokenName: 'Solana',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/SOL.svg',
    tokenAddresses: [
      { address: '0xd93f7e271cb87c23aaa73edc008a79646d1f9912', chainId: '137' },
      { address: '0xd31a59c85ae9d8edefec411d448f90841571b89c', chainId: '1' },
      { address: '0x570a5d26f7765ecb712c0924e4de545b89fd43df', chainId: '56' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'DOT',
    tokenName: 'Polkadot Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/DOT.svg',
    tokenAddresses: [
      { address: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', chainId: '56' },
      { address: '0x994047fe66406cbd646cd85b990e11d7f5db8fc7', chainId: '25' },
      { address: '0xffffffffffffffffffffffffffffffffffffffff', chainId: '592' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'ATOM',
    tokenName: 'Cosmos Hub',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ATOM.svg',
    tokenAddresses: [
      { address: '0x0eb3a705fc54725037cc9e008bdede697f62f335', chainId: '56' },
      { address: '0xb888d8dd1733d72681b30c00ee76bde93ae7aa93', chainId: '25' },
      { address: '0xc5e00d3b04563950941f7137b5afa3a534f0d6d6', chainId: '9001' },
      { address: '0xeceeefcee421d8062ef8d6b4d814efe4dc898265', chainId: '7700' },
      { address: '', chainId: '' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'XTZ',
    tokenName: 'Tezos Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XTZ.png',
    tokenAddresses: [
      { address: '0x16939ef78684453bfdfb47825f8a5f714f12623a', chainId: '56' },
      { address: '0x2a69655c22eda32ff48d315bb26ed45f150700b4', chainId: '1' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'ALGO',
    tokenName: 'Algorand',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ALGO.svg',
    tokenAddresses: [
      { address: '0x2fefe47989214c2e74a6319076c138d395681407', chainId: '25' },
      { address: '0x99690611d2b5698ebc27cbf51ba89e4c22eb341c', chainId: '56' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'NEAR',
    tokenName: 'Near Protocol',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/NEAR.svg',
    tokenAddresses: [
      { address: '0x85f17cf997934a597031b2e18a9ab6ebd4b9f6a4', chainId: '1' },
      { address: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63', chainId: '56' },
      { address: '0x72bd80445b0db58ebe3e8db056529d4c5faf6f2f', chainId: '137' },
      { address: '0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d', chainId: '1313161554' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'WAVES',
    tokenName: 'Waves',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/425/large/waves.png?1548386117',
    tokenAddresses: [
      { address: '0x1cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a', chainId: '1' },
      { address: '0xfc3e14af0f0c2129a84cc013d48c70d682902874', chainId: '56' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'XLM',
    tokenName: 'Stellar',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XLM.svg',
    tokenAddresses: [
      { address: '0x747d6c858168b8cd6e537160320b5de58fd3367c', chainId: '25' },
      { address: '0x43c934a845205f0b514417d757d7235b8f53f1b9', chainId: '56' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'IOTA',
    tokenName: 'MIOTAC',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/IOTA.png',
    tokenAddresses: [{ address: '0xd944f1d1e9d5f9bb90b62f9d45e447d989580782', chainId: '56' }],
    isExempted: true,
  },
  {
    tokenSymbol: 'TRX',
    tokenName: 'Tron',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/TRX.png',
    tokenAddresses: [
      { address: '0xce7de646e7208a4ef112cb6ed5038fa6cc6b12e3', chainId: '56' },
      { address: '0xedf53026aea60f8f75fca25f8830b7e2d6200662', chainId: '199' },
    ],
    isExempted: true,
  },
]

export default exemptedAssets
