import { AddressMapping } from '../types'

// The list of address mappings

const addressMappingWhitelist: AddressMapping[] = [
  {
    tokenSymbol: 'WBNB',
    tokenName: 'Wrapped BNB',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
      },
      {
        address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        chainId: '56',
      },
    ],
  },
  {
    tokenSymbol: 'TLOS',
    tokenName: 'Telos',
    tokenLogoUrl:
      'https://assets-global.website-files.com/60ae1fd65f7b76f18ddd0bec/61044a5f70f5bbeb24b995ea_Symbol%202%402x.png',
    tokenAddresses: [
      { address: '0x7825e833d495f3d1c28872415a4aee339d26ac88', chainId: '1' },
      { address: '0xd102ce6a4db07d247fcc28f366a623df0938ca9e', chainId: '40' },
      { address: '0xb6c53431608e626ac81a9776ac3e999c5556717c', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'UNI',
    tokenName: 'UniSwap',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/uniswap.png?v=023',
    tokenAddresses: [
      { address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', chainId: '1' },
      { address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'APE',
    tokenName: 'ApeCoin',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/apecoin-ape.png?v=023',
    tokenAddresses: [
      { address: '0x4d224452801aced8b2f0aebe155379bb5d594381', chainId: '1' },
      { address: '0xc762043e211571eb34f1ef377e5e8e76914962f9', chainId: '56' },
      { address: '0x0b079b33b6e72311c6be245f9f660cc385029fc3', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'NEAR',
    tokenName: 'Near Protocol',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/near-protocol.png?v=023',
    tokenAddresses: [
      { address: '0x85f17cf997934a597031b2e18a9ab6ebd4b9f6a4', chainId: '1' },
      { address: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63', chainId: '56' },
      { address: '0x72bd80445b0db58ebe3e8db056529d4c5faf6f2f', chainId: '137' },
      {
        address: '0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d',
        chainId: '1313161554',
      },
    ],
  },
  {
    tokenSymbol: 'AAVE',
    tokenName: 'Aave Token',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/aave.png?v=023',
    tokenAddresses: [
      { address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9', chainId: '1' },
      { address: '0xfb6115445bff7b52feb98650c87f44907e58f802', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'WCRO',
    tokenName: 'Wrapped CRO',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/cronos.png?v=023',
    tokenAddresses: [
      { address: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b', chainId: '1' },
      { address: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23', chainId: '25' },
    ],
  },
  {
    tokenSymbol: 'USDC',
    tokenName: 'USDC',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/usd-coin.png?v=023',
    tokenAddresses: [{ address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', chainId: '1' }],
  },
]

export default addressMappingWhitelist
