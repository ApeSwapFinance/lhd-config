import { AddressMapping } from '../types'

const exemptedAssets: AddressMapping[] = [
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
      { address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', chainId: '56' },
      { address: '0x3611fbfb06ffbcef9afb210f6ace86742e6c14a4', chainId: '106' },
      { address: '0x0e517979c2c1c1522ddb0c73905e0d39b3f990c0', chainId: '25' },
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
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960',
    tokenAddresses: [
      { address: '0x0eb3a705fc54725037cc9e008bdede697f62f335', chainId: '56' },
      { address: '0xb888d8dd1733d72681b30c00ee76bde93ae7aa93', chainId: '25' },
      { address: '0xc5e00d3b04563950941f7137b5afa3a534f0d6d6', chainId: '9001' },
      { address: '0xeceeefcee421d8062ef8d6b4d814efe4dc898265', chainId: '7700' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'XTZ',
    tokenName: 'Tezos Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XTZ.png',
    tokenAddresses: [
      { address: '0x2a69655c22eda32ff48d315bb26ed45f150700b4', chainId: '1' },
      { address: '0x16939ef78684453bfdfb47825f8a5f714f12623a', chainId: '56' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'ALGO',
    tokenName: 'Algorand',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725',
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
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157',
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
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066',
    tokenAddresses: [
      { address: '0xce7de646e7208a4ef112cb6ed5038fa6cc6b12e3', chainId: '56' },
      { address: '0xedf53026aea60f8f75fca25f8830b7e2d6200662', chainId: '199' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'CELO',
    tokenName: 'Celo',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/11090/large/InjXBNx9_400x400.jpg?1674707499',
    tokenAddresses: [{ address: '0x471ece3750da237f93b8e339c536989b8978a438', chainId: '42220' }],
    isExempted: true,
  },
  {
    tokenSymbol: 'ONT',
    tokenName: 'Ontology',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ONT.svg',
    tokenAddresses: [
      { address: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335', chainId: '56' },
      { address: '0xd4814770065f634003a8d8d70b4743e0c3f334ad', chainId: '137' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'QTUM',
    tokenName: 'Qtum',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/684/large/Qtum_Logo_blue_CG.png?1637155875',
    tokenAddresses: [
      { address: '0x32529346958711b3bef92b96507c14821e50c9c8', chainId: '25' },
      { address: '0xafb4942f45a01c67c83d969ea83129926e05f6fe', chainId: '39797' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'XVG',
    tokenName: 'Verge',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/203/large/verge-symbol-color_logo.png?1561543281',
    tokenAddresses: [{ address: '0xc559e9bf45d772d8049577555af4098ca62db03c', chainId: '56' }],
    isExempted: true,
  },
  {
    tokenSymbol: 'XMR',
    tokenName: 'Monero',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729',
    tokenAddresses: [
      { address: '0xf5ff4201b1dfe13bba301e71ccc4880e5c3f96bf', chainId: '369' },
      { address: '0x3451a78205a02fe9df6b5c3bbcff40c4c296f939', chainId: '1116' },
      { address: '0xbc4081a8b192a50bd58ac6c595d766e59a56c37e', chainId: '56' },
      { address: '0x465e07d6028830124be2e4aa551fbe12805db0f5', chainId: '1' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'FIL',
    tokenName: 'Filecoin',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/FIL.png',
    tokenAddresses: [
      { address: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153', chainId: '56' },
      { address: '0x7d7130b0b4733d603cea12628b52067ce8458058', chainId: '25' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'THETA',
    tokenName: 'Theta Network',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png?1548387191',
    tokenAddresses: [
      { address: '0x73b6fcf8ed6daefe3775bc38949f115305047c0d', chainId: '25' },
      { address: '0x6d4a34328263771bfdf80ff19b1b343c2ee6e85f', chainId: '56' },
    ],
    isExempted: true,
  },
  {
    tokenSymbol: 'FLOW',
    tokenName: 'Flow',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/13446/large/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1631696776',
    tokenAddresses: [
      { address: '0x5c147e74d63b1d31aa3fd78eb229b65161983b2b', chainId: '1' },
      { address: '0xc943c5320b9c18c153d1e2d12cc3074bebfb31a2', chainId: '56' },
    ],
    isExempted: true,
  },
]

export default exemptedAssets
