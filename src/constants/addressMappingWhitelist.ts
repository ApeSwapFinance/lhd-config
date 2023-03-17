import { AddressMapping } from '../types'

const addressMappingWhitelist: AddressMapping[] = [
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
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042', '0x6c905b4108A87499CEd1E0498721F2B831c6Ab13'],
  },
  {
    tokenSymbol: 'BANANA',
    tokenName: 'ApeSwap BANANA',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BANANA.svg',
    tokenAddresses: [{ address: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95', chainId: '56' }],
    knownOwners: [
      '0x944694417a6ca0a70963d644a11d42c10e3af042',
      '0xAbD7853b79e488bC1BD9e238A870167B074eb714',
      '0x71c0c1001520e1568e17836cc8a19d0dbdb2bd5f',
    ],
  },
  {
    tokenSymbol: 'RADAR',
    tokenName: 'DappRadar',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/RADAR.png',
    tokenAddresses: [{ address: '0x489580eb70a50515296ef31e8179ff3e77e24965', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'CGG',
    tokenName: 'ChainGuardians Governance Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/CGG.svg',
    tokenAddresses: [
      { address: '0x1613957159e9b0ac6c80e824f7eea748a32a0ae2', chainId: '56' },
      { address: '0x2ab4f9ac80f33071211729e45cfc346c1f8446d5', chainId: '137' },
    ],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042', '0x60dc928548b92b681beba07fc2551c5e5967a8e6'],
  },
  {
    tokenSymbol: 'LGC',
    tokenName: 'LiveGreen Coin',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/LGC.svg',
    tokenAddresses: [{ address: '0x3496212ec43cc49f5151ec4405efd4975e036f89', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'OATH',
    tokenName: 'Oath Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/OATH.svg',
    tokenAddresses: [{ address: '0xd3c6ceedd1cc7bd4304f72b011d53441d631e662', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'TOKO',
    tokenName: 'Tokoin',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/TOKO.png',
    tokenAddresses: [{ address: '0x45f7967926e95fd161e56ed66b663c9114c5226f', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'CVL',
    tokenName: 'Civilization',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/CVL.svg',
    tokenAddresses: [{ address: '0x9ae0290cd677dc69a5f2a1e435ef002400da70f5', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'TRIVIA',
    tokenName: 'Trivian Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/TRIVIA.svg',
    tokenAddresses: [{ address: '0xb465f3cb6aba6ee375e12918387de1eac2301b05', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'XTAL',
    tokenName: 'XTALToken',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XTAL.png',
    tokenAddresses: [{ address: '0xd23eae3926431c794e2a04e1622a9446d61174a4', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'WCFLT',
    tokenName: 'Wrapped Coinflect',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/WCFLT.svg',
    tokenAddresses: [{ address: '0xc73d9b9616e855df4a0b32c3f1ef2ed5dc9c1990', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'AVAN',
    tokenName: 'AVANA Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/AVAN.png',
    tokenAddresses: [{ address: '0xf84c55e79858b448c3015c3a1a55efed9edf69c7', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'MONSTA',
    tokenName: 'Cake Monster',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/MONSTA.svg',
    tokenAddresses: [{ address: '0x8a5d7fcd4c90421d21d30fcc4435948ac3618b2f', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'LEAP',
    tokenName: 'LEAP',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/LEAP.svg',
    tokenAddresses: [{ address: '0x6eed9140f80f9e989cb23aecbd20b97a29ffc80f', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: '3AIR',
    tokenName: '3AIR',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/3AIR.svg',
    tokenAddresses: [{ address: '0x596834746b5b78f31a089ee7853fa595682824b7', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'CHRP',
    tokenName: 'Chirpley Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/CHRP.svg',
    tokenAddresses: [{ address: '0xed00fc7d48b57b81fe65d1ce71c0985e4cf442cb', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  //SOLD OUT BILLS BNB
  {
    tokenSymbol: 'LIQ',
    tokenName: 'Liquidus',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/LIQ.svg',
    tokenAddresses: [{ address: '0xc7981767f644c7f8e483dabdc413e8a371b83079', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'IHC',
    tokenName: 'Inflation Hedging Coin',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/IHC.png',
    tokenAddresses: [{ address: '0x86a53fcd199212fea44fa7e16eb1f28812be911d', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'PSTN',
    tokenName: 'PISTON',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/PSTN.svg',
    tokenAddresses: [{ address: '0xbfacd29427ff376ff3bc22dffb29866277ca5fb4', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'GQ',
    tokenName: 'Galactic Quadrant',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/GQ.png',
    tokenAddresses: [{ address: '0xf700d4c708c2be1463e355f337603183d20e0808', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'NFTY',
    tokenName: 'NFTY Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/NFTY.png',
    tokenAddresses: [{ address: '0x5774b2fc3e91af89f89141eacf76545e74265982', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'COC',
    tokenName: 'Coin of the champions',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/COC.svg',
    tokenAddresses: [{ address: '0xbdc3b3639f7aa19e623a4d603a3fb7ab20115a91', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'GMR',
    tokenName: 'GAMER',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/GMR.svg',
    tokenAddresses: [{ address: '0xadca52302e0a6c2d5d68edcdb4ac75deb5466884', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'XCUR',
    tokenName: 'Curate',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XCUR.svg',
    tokenAddresses: [{ address: '0xd52669712f253cd6b2fe8a8638f66ed726cb770c', chainId: '56' }],
    knownOwners: ['0x7c138583a199b30693173c3c62f104a658dc5c42'],
  },
  {
    tokenSymbol: 'XWIN',
    tokenName: 'xWIN Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/XWIN.svg',
    tokenAddresses: [{ address: '0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28', chainId: '56' }],
    knownOwners: ['0x7e81f91b2c3ba470c9e603a744cd6d53573b2511'],
  },
  {
    tokenSymbol: 'FROYO',
    tokenName: 'FROYO',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/FROYO.png',
    tokenAddresses: [{ address: '0xe369fec23380f9f14ffd07a1dc4b7c1a9fdd81c9', chainId: '56' }],
    knownOwners: ['0x9ff2db8821bd61ba348975c3ebe04acdefd0ae4b'], //ASK THIS TO OBIE
  },
  {
    tokenSymbol: 'Bolide',
    tokenName: 'BLID',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BLID.svg',
    tokenAddresses: [{ address: '0x766afcf83fd5eaf884b3d529b432ca27a6d84617', chainId: '56' }],
    knownOwners: ['0xc9f833b514825dec2d11d291fb3d960054e0e169'],
  },
  {
    tokenSymbol: 'HEC',
    tokenName: 'Hector',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/HEC.svg',
    tokenAddresses: [{ address: '0x638eebe886b0e9e7c6929e69490064a6c94d204d', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042', '0x11587da834e3d9f25ad14fc28f6dd670e22f08f9'],
  },
  {
    tokenSymbol: 'FLOKI',
    tokenName: 'FLOKI',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/FLOKI.svg',
    tokenAddresses: [{ address: '0xfb5b838b6cfeedc2873ab27866079ac55363d37e', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'STARS',
    tokenName: 'Mogul Stars',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/STARS.svg',
    tokenAddresses: [{ address: '0xbd83010eb60f12112908774998f65761cf9f6f9a', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'CEEK',
    tokenName: 'CEEK',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/CEEK.png',
    tokenAddresses: [{ address: '0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'HOTCROSS',
    tokenName: 'Hot Cross Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/HOTCROSS.svg',
    tokenAddresses: [{ address: '0x4fa7163e153419e0e1064e418dd7a99314ed27b6', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },

  //POLYGON BILLS
  {
    tokenSymbol: 'AXN',
    tokenName: 'Axion',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/AXN.png',
    tokenAddresses: [{ address: '0x839f1a22a59eaaf26c85958712ab32f80fea23d9', chainId: '137' }],
    knownOwners: ['0x60dc928548b92b681beba07fc2551c5e5967a8e6'],
  },
  {
    tokenSymbol: 'TRAXX',
    tokenName: 'TRAXX',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/TRAXX.svg',
    tokenAddresses: [{ address: '0xd43be54c1aedf7ee4099104f2dae4ea88b18a249', chainId: '137' }],
    knownOwners: ['0x60dc928548b92b681beba07fc2551c5e5967a8e6'],
  },
  {
    tokenSymbol: 'DOGIRA',
    tokenName: 'Dogira',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/DOGIRA.svg',
    tokenAddresses: [{ address: '0xdda40cdfe4a0090f42ff49f264a831402adb801a', chainId: '137' }],
    knownOwners: ['0x60dc928548b92b681beba07fc2551c5e5967a8e6'],
  },
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
      {
        address: '0x7400793aad94c8ca801aa036357d10f5fd0ce08f',
        chainId: '324',
      },
      {
        address: '0x7f27352d5f83db87a5a3e00f4b07cc2138d8ee52',
        chainId: '592',
      },
      {
        address: '0x7f27352d5f83db87a5a3e00f4b07cc2138d8ee52',
        chainId: '2001',
      },
      {
        address: '0xbc0990862515f95e01d16c2c1afd1104c279d48d',
        chainId: '2002',
      },
      {
        address: '0x75364d4f779d0bd0facd9a218c67f87dd9aff3b4',
        chainId: '9001',
      },
      {
        address: '0x3795c36e7d12a8c252a20c5a7b455f7c57b60283',
        chainId: '42262',
      },
      {
        address: 'a.231cc0dbbcffc4b7.cebnb.vault',
        chainId: '12340001',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::bnbcoin',
        chainId: '12360001',
      },
      {
        address: '0xc6bc09a723f2314ad22642b6e33ad2ed6bba3c9c',
        chainId: '1313161554',
      },
      {
        address: '0x20865e63b111b2649ef829ec220536c82c58ad7b',
        chainId: '42161',
      },
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
      {
        address: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
        chainId: '1',
      },
      {
        address: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
        chainId: '25',
      },
      {
        address: '0xdfe3a98aa33c3393792e5e53e222f82f0b6482c0',
        chainId: '24734',
      },
      {
        address: '0xada58df0f643d959c2a47c9d4d4c1a4defe3f11c',
        chainId: '137',
      },
      {
        address: '0x8ea3156f834a0dfc78f1a5304fac2cda676f354c',
        chainId: '42161',
      },
    ],
  },
  {
    tokenSymbol: 'WBTC',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/bitcoin.png?v=023',
    tokenName: 'Wrapped Bitcoin',
    tokenAddresses: [
      {
        address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        chainId: '1',
      },
      {
        address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
        chainId: '10',
      },
      {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chainId: '24',
      },
      {
        address: '0x062e66477faf219f25d27dced647bf57c3107d52',
        chainId: '25',
      },
      {
        address: '0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844',
        chainId: '30',
      },
      {
        address: '0xf390830df829cf22c53c8840554b98eafc5dcbc2',
        chainId: '40',
      },
      {
        address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        chainId: '56',
      },
      {
        address: '0xc9baa8cfdde8e328787e29b4b078abf2dadc2055',
        chainId: '57',
      },
      {
        address: '0x332730a4f6e03d9c55829435f10360e13cfa41ff',
        chainId: '61',
      },
      {
        address: '0x54e4622dc504176b3bb432dccaf504569699a7ff',
        chainId: '66',
      },
      {
        address: '0x59676af932247d48755aab7a7b94f8bb4bea2a6e',
        chainId: '100',
      },
      {
        address: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
        chainId: '106',
      },
      {
        address: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
        chainId: '128',
      },
      {
        address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
        chainId: '137',
      },
      {
        address: '0x321162cd933e2be498cd2267a90534a804051b11',
        chainId: '250',
      },
      {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chainId: '269',
      },
      {
        address: '0x218c3c3d49d0e7b37aff0d8bb079de36ae61a4c0',
        chainId: '311',
      },
      {
        address: '0xfa93c12cd345c658bc4644d1d4e1b9615952258c',
        chainId: '321',
      },
      {
        address: '0x922d641a426dcffaef11680e5358f34d97d112e1',
        chainId: '336',
      },
      {
        address: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        chainId: '877',
      },
      {
        address: '0x30bebbc0b6b357945ac30660e025c1532b9c7804',
        chainId: '1024',
      },
      {
        address: '0x1f545487c62e5acfea45dcadd9c627361d1616d8',
        chainId: '1030',
      },
      {
        address: '0x2c78f1b70ccf63cdee49f9233e9faa99d43aa07e',
        chainId: '1111',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '1234',
      },
      {
        address: '0x922d641a426dcffaef11680e5358f34d97d112e1',
        chainId: '1284',
      },
      {
        address: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
        chainId: '1285',
      },
      {
        address: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        chainId: '2000',
      },
      {
        address: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
        chainId: '2001',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '2002',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '2025',
      },
      {
        address: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        chainId: '2109',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '2222',
      },
      {
        address: '0x765277eebeca2e31912c9946eae1021199b39c61',
        chainId: '2611',
      },
      {
        address: '0x332730a4f6e03d9c55829435f10360e13cfa41ff',
        chainId: '9001',
      },
      {
        address: '0x5df101f56ea643e06066392d266e9f4366b9186d',
        chainId: '10001',
      },
      {
        address: '0x67f44cb704884e0eb53c48fec8f1b1e7f8a63729',
        chainId: '24734',
      },
      {
        address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
        chainId: '42161',
      },
      {
        address: '0x338726dd694db9e2230ec2bb8624a2d7f566c96d',
        chainId: '42220',
      },
      {
        address: '0x5d9ab5522c64e1f6ef5e3627eccc093f56167818',
        chainId: '42262',
      },
      {
        address: '0x50b7545627a5162f82a992c33b87adc75187b218',
        chainId: '43114',
      },
      {
        address: '0x8059e671be1e76f8db5155bf4520f86acfdc5561',
        chainId: '47805',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '71402',
      },
      {
        address: '0x5d9ab5522c64e1f6ef5e3627eccc093f56167818',
        chainId: '1666600000',
      },
      {
        address: '0x218c3c3d49d0e7b37aff0d8bb079de36ae61a4c0',
        chainId: '321',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '592',
      },
      {
        address: '0x4384d5a9d7354c65ce3aee411337bd40493ad1bc',
        chainId: '58',
      },
      {
        address: '0xaeb14dec3d7b387997e8f543acac093d5b5d404e',
        chainId: '416',
      },
      {
        address: '0xad543f18cff85c77e140e3e5e3c3392f6ba9d5ca',
        chainId: '592',
      },
      {
        address: '0x7f27352d5f83db87a5a3e00f4b07cc2138d8ee52',
        chainId: '1024',
      },
      {
        address: '0x8a4b4c2acadeaa7206df96f00052e41d74a015ce',
        chainId: '1284',
      },
      {
        address: '0x8d50a024b2f5593605d3ce8183ca8969226fcbf8',
        chainId: '2001',
      },
      {
        address: '0x22d23e80193d7a77ef6177a2d0c79af0f4a68790',
        chainId: '2002',
      },
      {
        address: '0xaea7d9bc694a92ad0effff0f30b700f7c4b23ba6',
        chainId: '2222',
      },
      {
        address: '0x1c428a6539a40ec5bb481631266a51cd19b233b1',
        chainId: '8217',
      },
      {
        address: '0xb98e169c37ce30dd47fdad1f9726fb832191e60b',
        chainId: '9001',
      },
      {
        address: '0x1c428a6539a40ec5bb481631266a51cd19b233b1',
        chainId: '71402',
      },
      {
        address: '0x7f27352d5f83db87a5a3e00f4b07cc2138d8ee52',
        chainId: '210425',
      },
      {
        address: 'a.231cc0dbbcffc4b7.cewbtc.vault',
        chainId: '12340001',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::wbtccoin',
        chainId: '12360001',
      },
      {
        address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
        chainId: '42',
      },
      {
        address: '0x2382a8f65b9120e554d1836a504808ac864e169d',
        chainId: '69',
      },
      {
        address: '0xc04b0d3107736c32e19f1c62b2af67be61d63a05',
        chainId: '5',
      },
      {
        address: '0xe0a592353e81a94db6e3226fd4a99f881751776a',
        chainId: '420',
      },
      {
        address: '0x152b9d0fdc40c096757f570a51e494bd4b943e50',
        chainId: '43114',
      },
    ],
  },
  {
    tokenSymbol: 'ETH',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/ethereum.png?v=023',
    tokenName: 'Ether',
    tokenAddresses: [
      {
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        chainId: '1',
      },
      {
        address: '0x4200000000000000000000000000000000000006',
        chainId: '10',
      },
      {
        address: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        chainId: '24',
      },
      {
        address: '0xe44fd7fcb2b1581822d0c862b68222998a0c299a',
        chainId: '25',
      },
      {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chainId: '30',
      },
      {
        address: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        chainId: '40',
      },
      {
        address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        chainId: '56',
      },
      {
        address: '0x7c598c96d02398d89fbcb9d41eab3df0c16f227d',
        chainId: '57',
      },
      {
        address: '0x218c3c3d49d0e7b37aff0d8bb079de36ae61a4c0',
        chainId: '61',
      },
      {
        address: '0xef71ca2ee68f45b9ad6f72fbdb33d707b872315c',
        chainId: '66',
      },
      {
        address: '0xa1ff8559646a79e47ecdfaca60272f3081998569',
        chainId: '88',
      },
      {
        address: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
        chainId: '106',
      },
      {
        address: '0x765277eebeca2e31912c9946eae1021199b39c61',
        chainId: '122',
      },
      {
        address: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
        chainId: '128',
      },
      {
        address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        chainId: '137',
      },
      {
        address: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
        chainId: '250',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '269',
      },
      {
        address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
        chainId: '288',
      },
      {
        address: '0x2c78f1b70ccf63cdee49f9233e9faa99d43aa07e',
        chainId: '311',
      },
      {
        address: '0xf55af137a98607f7ed2efefa4cd2dfe70e4253b1',
        chainId: '321',
      },
      {
        address: '0x765277eebeca2e31912c9946eae1021199b39c61',
        chainId: '336',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '877',
      },
      {
        address: '0xa1c3767c93e7b51ecb445fdbae1494dfc654e524',
        chainId: '1024',
      },
      {
        address: '0xa47f43de2f9623acb395ca4905746496d2014d57',
        chainId: '1030',
      },
      {
        address: '0x765277eebeca2e31912c9946eae1021199b39c61',
        chainId: '1111',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '1234',
      },
      {
        address: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        chainId: '1284',
      },
      {
        address: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
        chainId: '1285',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '2000',
      },
      {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chainId: '2001',
      },
      {
        address: '0x765277eebeca2e31912c9946eae1021199b39c61',
        chainId: '2002',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '2020',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '2025',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '2109',
      },
      {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chainId: '2222',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '2611',
      },
      {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chainId: '7363',
      },
      {
        address: '0x7c598c96d02398d89fbcb9d41eab3df0c16f227d',
        chainId: '9001',
      },
      {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chainId: '10000',
      },
      {
        address: '0xaf3ccfd9b59b36628cc2f659a09d6440795b2520',
        chainId: '10001',
      },
      {
        address: '0x818938a83036b18a44f2ddf43d47454f6ae49bd6',
        chainId: '24734',
      },
      {
        address: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
        chainId: '32520',
      },
      {
        address: '0x5e12290c7e7eda58d092632a53bbbc717996c732',
        chainId: '32659',
      },
      {
        address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        chainId: '42161',
      },
      {
        address: '0x722e8bdd2ce80a4422e880164f2079488e115365',
        chainId: '42170',
      },
      {
        address: '0x9610b01aaa57ec026001f7ec5cface51bfea0ba6',
        chainId: '42220',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '42262',
      },
      {
        address: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
        chainId: '43114',
      },
      {
        address: '0x7a5313468c1c1a3afb2cf5ec46558a7d0fc2884a',
        chainId: '47805',
      },
      {
        address: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
        chainId: '71402',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '420420',
      },
      {
        address: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
        chainId: '5',
      },
      {
        address: '0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c',
        chainId: '1666600000',
      },
      {
        address: '0xc6bc09a723f2314ad22642b6e33ad2ed6bba3c9c',
        chainId: '58',
      },
      {
        address: '0xa173954cc4b1810c0dbdb007522adbc182dab380',
        chainId: '416',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '592',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '1024',
      },
      {
        address: '0x6959027f7850adf4916ff5fdc898d958819e5375',
        chainId: '1284',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '2001',
      },
      {
        address: '0x592786e04c47844aa3b343b19ef2f50a255a477f',
        chainId: '2002',
      },
      {
        address: '0x9591865d9d4bbd3b5fa8a8e2400fd530d1a16191',
        chainId: '2222',
      },
      {
        address: '0xb66954619363145a05ef835547449eb9050d82f6',
        chainId: '8217',
      },
      {
        address: '0x153a59d48aceabedbdcf7a13f67ae52b434b810b',
        chainId: '9001',
      },
      {
        address: '0x6a2d262d56735dba19dd70682b39f6be9a931d98',
        chainId: '42262',
      },
      {
        address: '0xb66954619363145a05ef835547449eb9050d82f6',
        chainId: '71402',
      },
      {
        address: '0x4bf769b05e832fcdc9053fffbc78ca889acb5e1e',
        chainId: '210425',
      },
      {
        address: 'a.231cc0dbbcffc4b7.ceweth.vault',
        chainId: '12340001',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::wethcoin',
        chainId: '12360001',
      },
      {
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        chainId: '1',
      },
    ],
  },
  {
    tokenSymbol: 'BNB',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/bnb.png?v=023',
    tokenName: 'Binance Coin',
    tokenAddresses: [
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '24',
      },
      {
        address: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        chainId: '25',
      },
      {
        address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        chainId: '56',
      },
      {
        address: '0x0dcb0cb0120d355cde1ce56040be57add0185baa',
        chainId: '61',
      },
      {
        address: '0x60f46cb1c0fa3fcc5943667110de5f1e5fcb8408',
        chainId: '1024',
      },
      {
        address: '0xc1be9a4d5d45beeacae296a7bd5fadbfc14602c4',
        chainId: '1111',
      },
      {
        address: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
        chainId: '1234',
      },
      {
        address: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
        chainId: '2000',
      },
      {
        address: '0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844',
        chainId: '2002',
      },
      {
        address: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
        chainId: '2109',
      },
      {
        address: '0xabd380327fe66724ffda91a87c772fb8d00be488',
        chainId: '2222',
      },
      {
        address: '0x89456efa718884f48b51f4790557b4981ffc0aa2',
        chainId: '24734',
      },
      {
        address: '0x922d641a426dcffaef11680e5358f34d97d112e1',
        chainId: '32520',
      },
      {
        address: '0x2c78f1b70ccf63cdee49f9233e9faa99d43aa07e',
        chainId: '40',
      },
      {
        address: '0xf27ee99622c3c9b264583dacb2cce056e194494f',
        chainId: '57',
      },
      {
        address: '0x65e66a61d0a8f1e686c2d6083ad611a10d84d97a',
        chainId: '106',
      },
      {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        chainId: '288',
      },
      {
        address: '0x94bd7a37d2ce24cc597e158facaa8d601083ffec',
        chainId: '1030',
      },
      {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chainId: '1088',
      },
      {
        address: '0xfbdd194376de19a88118e84e279b977f165d01b8',
        chainId: '2001',
      },
      {
        address: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
        chainId: '42220',
      },
      {
        address: '0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c',
        chainId: '1313161554',
      },
      {
        address: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
        chainId: '30',
      },
      {
        address: '0x218c3c3d49d0e7b37aff0d8bb079de36ae61a4c0',
        chainId: '66',
      },
      {
        address: '0x471e265ab5b8513032721acef0a53b79185ae6f9',
        chainId: '128',
      },
      {
        address: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
        chainId: '137',
      },
      {
        address: '0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454',
        chainId: '250',
      },
      {
        address: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
        chainId: '321',
      },
      {
        address: '0x332730a4f6e03d9c55829435f10360e13cfa41ff',
        chainId: '336',
      },
      {
        address: '0xc9baa8cfdde8e328787e29b4b078abf2dadc2055',
        chainId: '1284',
      },
      {
        address: '0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c',
        chainId: '1285',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '7363',
      },
      {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        chainId: '42262',
      },
      {
        address: '0x264c1383ea520f73dd837f915ef3a732e204a493',
        chainId: '43114',
      },
      {
        address: '0x7f27352d5f83db87a5a3e00f4b07cc2138d8ee52',
        chainId: '592',
      },
      {
        address: '0x7f27352d5f83db87a5a3e00f4b07cc2138d8ee52',
        chainId: '2001',
      },
      {
        address: '0xbc0990862515f95e01d16c2c1afd1104c279d48d',
        chainId: '2002',
      },
      {
        address: '0x75364d4f779d0bd0facd9a218c67f87dd9aff3b4',
        chainId: '9001',
      },
      {
        address: '0x3795c36e7d12a8c252a20c5a7b455f7c57b60283',
        chainId: '42262',
      },
      {
        address: 'a.231cc0dbbcffc4b7.cebnb.vault',
        chainId: '12340001',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::bnbcoin',
        chainId: '12360001',
      },
      {
        address: '0xc6bc09a723f2314ad22642b6e33ad2ed6bba3c9c',
        chainId: '1313161554',
      },
    ],
  },
  {
    tokenSymbol: 'FTM',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/fantom.png?v=023',
    tokenName: 'Fantom',
    tokenAddresses: [
      {
        address: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
        chainId: '1',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '25',
      },
      {
        address: '0xc1be9a4d5d45beeacae296a7bd5fadbfc14602c4',
        chainId: '40',
      },
      {
        address: '0xad29abb318791d579433d831ed122afeaf29dcfe',
        chainId: '56',
      },
      {
        address: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
        chainId: '288',
      },
      {
        address: '0xcf8cfb06a444df78063ce60792100c53167b9382',
        chainId: '1030',
      },
      {
        address: '0xc19281f22a075e0f10351cd5d6ea9f0ac63d4327',
        chainId: '1284',
      },
      {
        address: '0x332730a4f6e03d9c55829435f10360e13cfa41ff',
        chainId: '2001',
      },
      {
        address: '0x218c3c3d49d0e7b37aff0d8bb079de36ae61a4c0',
        chainId: '42220',
      },
      {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        chainId: '1313161554',
      },
      {
        address: '0x735abe48e8782948a37c7765ecb76b98cde97b0f',
        chainId: '1666600000',
      },
      {
        address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
        chainId: '250',
      },
      {
        address: '0xc3fec6f18ddb7583da572374ca8d11c6f0590dae',
        chainId: '2001',
      },
      {
        address: '0x353b7134a88085129cbde051f04b0edb03a3b83b',
        chainId: '2002',
      },
      {
        address: '0x729416b1f442f204989f1c9f0d58321f878808ed',
        chainId: '9001',
      },
      {
        address: '0x7f27352d5f83db87a5a3e00f4b07cc2138d8ee52',
        chainId: '42262',
      },
      {
        address: 'a.231cc0dbbcffc4b7.ceftm.vault',
        chainId: '12340001',
      },
      {
        address: '0x1fe622e91e54d6ad00b01917351ea6081426764a',
        chainId: '1313161554',
      },
      {
        address: '0xc9c1c1c20b3658f8787cc2fd702267791f224ce1',
        chainId: '137',
      },
      {
        address: '0xd42785d323e608b9e99fa542bd8b1000d4c2df37',
        chainId: '42161',
      },
    ],
  },
  {
    tokenSymbol: 'USDT',
    tokenName: 'Tether USD',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/USDT.svg',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      },
      {
        chainId: '137',
        address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      },
      {
        chainId: '128',
        address: '0xa71edc38d189767582c38a3145b5873052c3e47a',
      },
      {
        chainId: '56',
        address: '0x55d398326f99059ff775485246999027b3197955',
      },
      {
        chainId: '42161',
        address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
      },
      {
        chainId: '1285',
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
      },
      {
        chainId: '10',
        address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
      },
      {
        chainId: '1313161554',
        address: '0x4988a896b1227218e4a686fde5eabdcabd91571f',
      },
      {
        chainId: '288',
        address: '0x5de1677344d3cb0d7d465c10b72a8f60699c062d',
      },
      {
        chainId: '1088',
        address: '0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc',
      },
      {
        chainId: '25',
        address: '0x66e428c3f67a68878562e79a0234c1f83c208770',
      },
      {
        chainId: '1666600000',
        address: '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f',
      },
      {
        chainId: '250',
        address: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
      },
      {
        chainId: '1284',
        address: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
      },
      {
        chainId: '40',
        address: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
      },
      {
        chainId: '43114',
        address: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
      },
      {
        chainId: '100',
        address: '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
      },
      {
        address: '0x6a2d262d56735dba19dd70682b39f6be9a931d98',
        chainId: '44',
      },
      {
        address: '0xd85e30c5d372942810c86c4ac9d7b3bb24cc1965',
        chainId: '58',
      },
      {
        address: '0xdc3af65ecbd339309ec55f109cb214e0325c5ed4',
        chainId: '248',
      },
      {
        address: '0x03cc0d20b5ea163aa3c0851235f4653f6fe61017',
        chainId: '416',
      },
      {
        address: '0x3795c36e7d12a8c252a20c5a7b455f7c57b60283',
        chainId: '592',
      },
      {
        address: '0x3795c36e7d12a8c252a20c5a7b455f7c57b60283',
        chainId: '1024',
      },
      {
        address: '0xfe97e85d13abd9c1c33384e796f10b73905637ce',
        chainId: '1030',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '1284',
      },
      {
        address: '0x3795c36e7d12a8c252a20c5a7b455f7c57b60283',
        chainId: '2001',
      },
      {
        address: '0x522b61755b5ff8176b2931da7bf1a5f9414eb710',
        chainId: '2002',
      },
      {
        address: '0xfb1af1bafe108906c0f1f3b36d15919b95ee95bd',
        chainId: '2222',
      },
      {
        address: '0x3c790b38f466514ffcb4230e7b2334e52b64c942',
        chainId: '8217',
      },
      {
        address: '0xb72a7567847aba28a2819b855d7fe679d4f59846',
        chainId: '9001',
      },
      {
        address: '0x4bf769b05e832fcdc9053fffbc78ca889acb5e1e',
        chainId: '42262',
      },
      {
        address: '0x988a631caf24e14bb77ee0f5ca881e8b5dcfcec7',
        chainId: '47805',
      },
      {
        address: '0x3c790b38f466514ffcb4230e7b2334e52b64c942',
        chainId: '71402',
      },
      {
        address: '0x6a2d262d56735dba19dd70682b39f6be9a931d98',
        chainId: '210425',
      },
      {
        address: 'a.231cc0dbbcffc4b7.ceusdt.vault',
        chainId: '12340001',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::usdtcoin',
        chainId: '12360001',
      },
      {
        address: '0xe0bb0d3de8c10976511e5030ca403dbf4c25165b',
        chainId: '42',
      },
      {
        address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
        chainId: '69',
      },
      {
        address: '0xc2c527c0cacf457746bd31b2a698fe89de2b6d49',
        chainId: '5',
      },
      {
        address: '0x853eb4ba5d0ba2b77a0a5329fd2110d5ce149ece',
        chainId: '420',
      },
    ],
  },
  {
    tokenSymbol: 'USDC',
    tokenName: 'USDC',
    tokenLogoUrl: 'https://cryptologos.cc/logos/thumbs/usd-coin.png?v=023',
    tokenAddresses: [
      { address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', chainId: '1' },
      {
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: '1',
      },
      {
        chainId: '100',
        address: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
      },
      {
        chainId: '137',
        address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      },
      {
        chainId: '56',
        address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      },
      {
        chainId: '1284',
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
      },
      {
        chainId: '250',
        address: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
      },
      {
        chainId: '1666600000',
        address: '0x985458e523db3d53125813ed68c274899e9dfab4',
      },
      {
        chainId: '42161',
        address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
      },
      {
        chainId: '288',
        address: '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
      },
      {
        chainId: '25',
        address: '0xc21223249ca28397b4b6541dffaecc539bff0c59',
      },
      {
        chainId: '1313161554',
        address: '0xb12bfca5a55806aaf64e99521918a4bf0fc40802',
      },
      {
        chainId: '10',
        address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      },
      {
        chainId: '1088',
        address: '0xea32a96608495e54156ae48931a7c20f0dcc1a21',
      },
      {
        chainId: '43114',
        address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
      },
      {
        chainId: '40',
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
      },
      {
        chainId: '2000',
        address: '0x765277eebeca2e31912c9946eae1021199b39c61',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '44',
      },
      {
        address: '0x08f7e8a161652d9f2fbfe200b18709540de5ced1',
        chainId: '58',
      },
      {
        address: '0xe1ab220e37ac55a4e2dd5ba148298a9c09fbd716',
        chainId: '248',
      },
      {
        address: '0xe2aa35c2039bd0ff196a6ef99523cc0d3972ae3e',
        chainId: '416',
      },
      {
        address: '0x6a2d262d56735dba19dd70682b39f6be9a931d98',
        chainId: '592',
      },
      {
        address: '0x6a2d262d56735dba19dd70682b39f6be9a931d98',
        chainId: '1024',
      },
      {
        address: '0x6963efed0ab40f6c3d7bda44a05dcf1437c44372',
        chainId: '1030',
      },
      {
        address: '0x6a2d262d56735dba19dd70682b39f6be9a931d98',
        chainId: '1284',
      },
      {
        address: '0x6a2d262d56735dba19dd70682b39f6be9a931d98',
        chainId: '2001',
      },
      {
        address: '0x2421db204968a367cc2c866cd057fa754cb84edf',
        chainId: '2002',
      },
      {
        address: '0x23367bea9b6931690960d8c59f6e708630f24e58',
        chainId: '2222',
      },
      {
        address: '0x53bb26dc8c5efc6c95c37155aca487d1d043436a',
        chainId: '8217',
      },
      {
        address: '0xe46910336479f254723710d57e7b683f3315b22b',
        chainId: '9001',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '42262',
      },
      {
        address: '0x8d5e1225981359e2e09a3ab8f599a51486f53314',
        chainId: '47805',
      },
      {
        address: '0x53bb26dc8c5efc6c95c37155aca487d1d043436a',
        chainId: '71402',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '210425',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::usdccoin',
        chainId: '12360001',
      },
      {
        address: '0x50dc5200082d37d5dd34b4b0691f36e3632fe1a8',
        chainId: '42',
      },
      {
        address: '0x4e62882864fb8ce54affcaf8d899a286762b011b',
        chainId: '69',
      },
      {
        address: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
        chainId: '5',
      },
      {
        address: '0x7e07e15d2a87a24492740d16f5bdf58c16db0c4e',
        chainId: '420',
      },
    ],
  },
  {
    tokenSymbol: 'BUSD',
    tokenName: 'Binance USD',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      },
      {
        chainId: '137',
        address: '0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7',
      },
      {
        chainId: '56',
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      },
      {
        chainId: '1666600000',
        address: '0xe176ebe47d621b984a73036b9da5d834411ef734',
      },
      {
        chainId: '1285',
        address: '0x5d9ab5522c64e1f6ef5e3627eccc093f56167818',
      },
      {
        chainId: '25',
        address: '0xc74d59a548ecf7fc1754bb7810d716e9ac3e3ae5',
      },
      {
        chainId: '1284',
        address: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
      },
      {
        chainId: '100',
        address: '0xdd96b45877d0e8361a4ddb732da741e97f3191ff',
      },
      {
        chainId: '43114',
        address: '0x9c9e5fd8bbc25984b178fdce6117defa39d2db39',
      },
      {
        address: '0x2790a698e9968a6d46a4142e435f72d7d38da1a8',
        chainId: '73',
      },
      {
        address: '0x2039bb4116b4efc145ec4f0e2ea75012d6c0f181',
        chainId: '324',
      },
      {
        address: '0x4bf769b05e832fcdc9053fffbc78ca889acb5e1e',
        chainId: '592',
      },
      {
        address: '0xcb4a7569a61300c50cf80a2be16329ad9f5f8f9e',
        chainId: '1284',
      },
      {
        address: '0x4bf769b05e832fcdc9053fffbc78ca889acb5e1e',
        chainId: '2001',
      },
      {
        address: '0x8dc0dfa2aec0d4410c8c60c5f9cd0cd37b05a06a',
        chainId: '2002',
      },
      {
        address: '0x516e6d96896aea92ce5e78b0348fd997f13802ad',
        chainId: '9001',
      },
      {
        address: '0x02cd448123e3ef625d3a3eb04a30e6aca29c7786',
        chainId: '47805',
      },
      {
        address: '0xcd7bc9fc617a4f82ec1c8359d1c8610b90e3b44c',
        chainId: '71402',
      },
      {
        address: 'a.231cc0dbbcffc4b7.cebusd.vault',
        chainId: '12340001',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::busdcoin',
        chainId: '12360001',
      },
      {
        address: '0x3b40d173b5802733108e047cf538be178646b2e4',
        chainId: '1313161554',
      },
      {
        address: '0x31190254504622cefdfa55a7d3d272e6462629a2',
        chainId: '42161',
      },
    ],
  },
  {
    tokenSymbol: 'DAI',
    tokenName: 'Dai',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      },
      {
        chainId: '137',
        address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      },
      {
        chainId: '56',
        address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      },
      {
        chainId: '10',
        address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      },
      {
        chainId: '1088',
        address: '0x4651b38e7ec14bb3db731369bfe5b08f2466bd0a',
      },
      {
        chainId: '1666600000',
        address: '0xef977d2f931c1978db5f6747666fa1eacb0d0339',
      },
      {
        chainId: '43114',
        address: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
      },
      {
        chainId: '42161',
        address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      },
      {
        chainId: '1285',
        address: '0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844',
      },
      {
        chainId: '1313161554',
        address: '0xe3520349f477a5f6eb06107066048508498a291b',
      },
      {
        chainId: '25',
        address: '0xf2001b145b43032aaf5ee2884e456ccd805f677d',
      },
      {
        chainId: '250',
        address: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
      },
      {
        chainId: '1284',
        address: '0x765277eebeca2e31912c9946eae1021199b39c61',
      },
      {
        chainId: '100',
        address: '0x44fa8e6f47987339850636f88629646662444217',
      },
      {
        address: '0x53813cd4acd7145a716b4686b195511fa93e4cb7',
        chainId: '416',
      },
      {
        address: '0x6de33698e9e9b787e09d3bd7771ef63557e148bb',
        chainId: '592',
      },
      {
        address: '0x6de33698e9e9b787e09d3bd7771ef63557e148bb',
        chainId: '1024',
      },
      {
        address: '0x74eae367d018a5f29be559752e4b67d01cc6b151',
        chainId: '1030',
      },
      {
        address: '0x6de33698e9e9b787e09d3bd7771ef63557e148bb',
        chainId: '2001',
      },
      {
        address: '0x150d2421e09eea31beaa68b7a248700eeceda87a',
        chainId: '2002',
      },
      {
        address: '0x49f2c0add1a345f4c76831c1aa3884fc523ca5fe',
        chainId: '2222',
      },
      {
        address: '0x317f8d18fb16e49a958becd0ea72f8e153d25654',
        chainId: '8217',
      },
      {
        address: '0x940daaba3f713abfabd79cdd991466fe698cbe54',
        chainId: '9001',
      },
      {
        address: '0x5a4ba16c2aeb295822a95280a7c7149e87769e6a',
        chainId: '42262',
      },
      {
        address: '0x0ba85980b122353d77fbb494222a10a46e4fb1f6',
        chainId: '47805',
      },
      {
        address: '0x317f8d18fb16e49a958becd0ea72f8e153d25654',
        chainId: '71402',
      },
      {
        address: '0x3795c36e7d12a8c252a20c5a7b455f7c57b60283',
        chainId: '210425',
      },
      {
        address: 'a.231cc0dbbcffc4b7.cedai.vault',
        chainId: '12340001',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::daicoin',
        chainId: '12360001',
      },
      {
        address: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
        chainId: '42',
      },
      {
        address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        chainId: '69',
      },
      {
        address: '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844',
        chainId: '5',
      },
      {
        address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        chainId: '420',
      },
    ],
  },
  {
    tokenSymbol: 'BTC',
    tokenName: 'Bitcoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      },
      {
        chainId: '137',
        address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      },
      {
        chainId: '250',
        address: '0x321162cd933e2be498cd2267a90534a804051b11',
      },
      {
        chainId: '43114',
        address: '0x50b7545627a5162f82a992c33b87adc75187b218',
      },
      {
        chainId: '1666600000',
        address: '0x3095c7557bcb296ccc6e363de01b760ba031f2d9',
      },
      {
        chainId: '1285',
        address: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
      },
      {
        chainId: '42220',
        address: '0xd629eb00deced2a080b7ec630ef6ac117e614f1b',
      },
      {
        chainId: '288',
        address: '0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b',
      },
      {
        chainId: '25',
        address: '0x062e66477faf219f25d27dced647bf57c3107d52',
      },
      {
        chainId: '1088',
        address: '0xa5b55ab1daf0f8e1efc0eb1931a957fd89b918f4',
      },
      {
        chainId: '1313161554',
        address: '0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
      },
      {
        chainId: '10',
        address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
      },
      {
        chainId: '100',
        address: '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252',
      },
      {
        chainId: '1284',
        address: '0x922d641a426dcffaef11680e5358f34d97d112e1',
      },
      {
        chainId: '40',
        address: '0xf390830df829cf22c53c8840554b98eafc5dcbc2',
      },
      {
        chainId: '42161',
        address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
      },
      {
        address: '0x4384d5a9d7354c65ce3aee411337bd40493ad1bc',
        chainId: '58',
      },
      {
        address: '0xaeb14dec3d7b387997e8f543acac093d5b5d404e',
        chainId: '416',
      },
      {
        address: '0xad543f18cff85c77e140e3e5e3c3392f6ba9d5ca',
        chainId: '592',
      },
      {
        address: '0x7f27352d5f83db87a5a3e00f4b07cc2138d8ee52',
        chainId: '1024',
      },
      {
        address: '0x1f545487c62e5acfea45dcadd9c627361d1616d8',
        chainId: '1030',
      },
      {
        address: '0x8a4b4c2acadeaa7206df96f00052e41d74a015ce',
        chainId: '1284',
      },
      {
        address: '0x8d50a024b2f5593605d3ce8183ca8969226fcbf8',
        chainId: '2001',
      },
      {
        address: '0x22d23e80193d7a77ef6177a2d0c79af0f4a68790',
        chainId: '2002',
      },
      {
        address: '0xaea7d9bc694a92ad0effff0f30b700f7c4b23ba6',
        chainId: '2222',
      },
      {
        address: '0x1c428a6539a40ec5bb481631266a51cd19b233b1',
        chainId: '8217',
      },
      {
        address: '0xb98e169c37ce30dd47fdad1f9726fb832191e60b',
        chainId: '9001',
      },
      {
        address: '0x8059e671be1e76f8db5155bf4520f86acfdc5561',
        chainId: '47805',
      },
      {
        address: '0x1c428a6539a40ec5bb481631266a51cd19b233b1',
        chainId: '71402',
      },
      {
        address: '0x7f27352d5f83db87a5a3e00f4b07cc2138d8ee52',
        chainId: '210425',
      },
      {
        address: 'a.231cc0dbbcffc4b7.cewbtc.vault',
        chainId: '12340001',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::wbtccoin',
        chainId: '12360001',
      },
      {
        address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
        chainId: '42',
      },
      {
        address: '0x2382a8f65b9120e554d1836a504808ac864e169d',
        chainId: '69',
      },
      {
        address: '0xc04b0d3107736c32e19f1c62b2af67be61d63a05',
        chainId: '5',
      },
      {
        address: '0xe0a592353e81a94db6e3226fd4a99f881751776a',
        chainId: '420',
      },
    ],
  },
  {
    tokenSymbol: 'WETH',
    tokenName: 'Wrapped Ether',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ETH.svg',
    tokenAddresses: [
      {
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        chainId: '1',
      },
      {
        address: '0xc6bc09a723f2314ad22642b6e33ad2ed6bba3c9c',
        chainId: '58',
      },
      {
        address: '0xa173954cc4b1810c0dbdb007522adbc182dab380',
        chainId: '416',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '592',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '1024',
      },
      {
        address: '0xa47f43de2f9623acb395ca4905746496d2014d57',
        chainId: '1030',
      },
      {
        address: '0x6959027f7850adf4916ff5fdc898d958819e5375',
        chainId: '1284',
      },
      {
        address: '0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c',
        chainId: '2001',
      },
      {
        address: '0x592786e04c47844aa3b343b19ef2f50a255a477f',
        chainId: '2002',
      },
      {
        address: '0x9591865d9d4bbd3b5fa8a8e2400fd530d1a16191',
        chainId: '2222',
      },
      {
        address: '0xb66954619363145a05ef835547449eb9050d82f6',
        chainId: '8217',
      },
      {
        address: '0x153a59d48aceabedbdcf7a13f67ae52b434b810b',
        chainId: '9001',
      },
      {
        address: '0x6a2d262d56735dba19dd70682b39f6be9a931d98',
        chainId: '42262',
      },
      {
        address: '0x7a5313468c1c1a3afb2cf5ec46558a7d0fc2884a',
        chainId: '47805',
      },
      {
        address: '0xb66954619363145a05ef835547449eb9050d82f6',
        chainId: '71402',
      },
      {
        address: '0x4bf769b05e832fcdc9053fffbc78ca889acb5e1e',
        chainId: '210425',
      },
      {
        address: 'a.231cc0dbbcffc4b7.ceweth.vault',
        chainId: '12340001',
      },
      {
        address: '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::wethcoin',
        chainId: '12360001',
      },
      {
        address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        chainId: '42161',
      },
    ],
  },
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
  {
    tokenSymbol: 'MATIC',
    tokenName: 'Polygon',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
      },
      {
        chainId: '137',
        address: '0x0000000000000000000000000000000000001010',
      },
      {
        chainId: '1666600000',
        address: '0x301259f392b551ca8c592c9f676fcd2f9a0a84c5',
      },
      {
        chainId: '56',
        address: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
      },
      {
        chainId: '1285',
        address: '0x682f81e57eaa716504090c3ecba8595fb54561d8',
      },
      {
        chainId: '1284',
        address: '0x3405a1bd46b85c5c029483fbecf2f3e611026e45',
      },
      {
        address: '0x561877b6b3dd7651313794e5f2894b2f18be0766',
        chainId: '42161',
      },
    ],
  },
  {
    tokenSymbol: 'SOL',
    tokenName: 'SOL (WormHole)',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/SOL.svg',
    tokenAddresses: [
      {
        address: '0xd93f7e271cb87c23aaa73edc008a79646d1f9912',
        chainId: '137',
      },
      {
        address: '0xd31a59c85ae9d8edefec411d448f90841571b89c',
        chainId: '1',
      },
      {
        address: '0x570a5d26f7765ecb712c0924e4de545b89fd43df',
        chainId: '56',
      },
      {
        address: '0xfe6b19286885a4f7f55adad09c3cd1f906d2478f',
        chainId: '43114',
      },
    ],
  },
  {
    tokenSymbol: 'AVAX',
    tokenName: 'Avax Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/AVAX.svg',
    tokenAddresses: [
      {
        address: '0xe7e12f436ae05ce6623efb68b28ca4b83a953600',
        chainId: '25',
      },
      {
        address: '0x85f138bfee4ef8e540890cfb48f620571d67eda3',
        chainId: '1',
      },
      {
        address: '0x511d35c52a3c244e7b8bd92c0c297755fbd89212',
        chainId: '250',
      },
      {
        address: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041',
        chainId: '56',
      },
      {
        address: '0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b',
        chainId: '137',
      },
    ],
  },
  {
    tokenSymbol: 'FRAX',
    tokenName: 'Frax',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13422/large/ethCanonicalFRAX.png?1669277108',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x853d955acef822db058eb8505911ed77f175b99e',
      },
      {
        chainId: '10',
        address: '0x2e3d870790dc77a83dd1d18184acc7439a53f475',
      },
      {
        chainId: '56',
        address: '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
      },
      {
        chainId: '43114',
        address: '0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64',
      },
      {
        chainId: '137',
        address: '0x45c32fa6df82ead1e2ef74d17b76547eddfaff89',
      },
      {
        chainId: '250',
        address: '0xdc301622e621166bd8e82f2ca0a26c13ad0be355',
      },
      {
        chainId: '1666600000',
        address: '0xfa7191d292d5633f702b0bd7e3e3bccc0e633200',
      },
      {
        chainId: '42161',
        address: '0x17fc002b466eec40dae837fc4be5c67993ddbd6f',
      },
      {
        chainId: '1285',
        address: '0x1a93b23281cc1cde4c4741353f3064709a16197d',
      },
      {
        address: '0xea129ae043c4cb73dcb241aaa074f9e667641ba0',
        chainId: '10',
      },
      {
        address: '0xb5df797468e6e8f2cb293cd6e32939366e0f8733',
        chainId: '56',
      },
      {
        address: '0x5427fefa711eff984124bfbb1ab6fbf5e3da1820',
        chainId: '137',
      },
      {
        address: '0xb0d8cf9560ef31b8fe6d9727708d19b31f7c90dc',
        chainId: '250',
      },
      {
        address: '0xb0d8cf9560ef31b8fe6d9727708d19b31f7c90dc',
        chainId: '288',
      },
      {
        address: '0xc5ef662b833de914b9ba7a3532c6bb008a9b23a6',
        chainId: '1284',
      },
      {
        address: '0x8c75adb1d9f38f6c2af54be8120f598b9dba446c',
        chainId: '1285',
      },
      {
        address: '0xf5a178cf150216449630ead9d0fdaee09e06187b',
        chainId: '9001',
      },
      {
        address: '0x330066cf308cea289f74585e85fa001048e8a5c0',
        chainId: '42161',
      },
      {
        address: '0x693b47a7fc3d33ae9ebec15e5f42f2db480066f3',
        chainId: '43114',
      },
      {
        address: '0x22953af8b73f4f876fc09e836a14a1f64b209fef',
        chainId: '1313161554',
      },
      {
        address: '0xa8961be06550c09c1bc14c483f3932b969eff5e0',
        chainId: '1666600000',
      },
      {
        address: '0x7468a5d8e02245b00e8c0217fce021c70bc51305',
        chainId: '42161',
      },
    ],
  },
  {
    tokenSymbol: 'OP',
    tokenName: 'Optimism',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25244/large/Optimism.png?1660904599',
    tokenAddresses: [
      {
        chainId: '10',
        address: '0x4200000000000000000000000000000000000042',
      },
      {
        chainId: '69',
        address: '0x4200000000000000000000000000000000000042',
      },
    ],
  },
]

export default addressMappingWhitelist
