# Liquidity Health Dashboard Configuration Repo

Welcome to the Liquidity Health Dashboard Configuration Repo! This repository is dedicated to the manual addition and curation of EVM-compatible projects for accurate listing on ApeSwap's Liquidity Health Dashboard (link coming soon).

We're excited to have you on board as we strive to provide smooth and seamless liquidity health tracking for your project. Let's dive right in!

## Table of Contents

- [Overview](https://github.com/ApeSwapFinance/lhd-config#overview)
- [Getting Started](https://github.com/ApeSwapFinance/lhd-config#getting-started)
- [How to Sumbit a Change?](https://github.com/ApeSwapFinance/lhd-config#how-to-submit-a-change)
- [Deployment Example](https://github.com/ApeSwapFinance/lhd-config#deployment-example)
- [FAQs](https://github.com/ApeSwapFinance/lhd-config#faq)
- [Support](https://github.com/ApeSwapFinance/lhd-config#support)

## Overview

At ApeSwap, we understand the importance of accurate and reliable liquidity tracking for projects. Our platform provides a comprehensive solution for tracking web3 projects' liquidity, ensuring that its team can focus on what matters most: building and growing projects. By following this guide, you'll be able to easily integrate your project with our platform and enjoy all the benefits that come with it.

## Getting Started

Before you dive into submitting a PR, ensure you have the following prerequisites in place:

1.  A Github account to create and submit PRs.

2.  A local environment set up with `Node.js` and `yarn` installed.

3.  Fork our repository into your own Github account.

Now, you're ready to submit your PR!

## How to Submit a Change?

Submitting a PR is as simple as following these steps:

1. **Clone the repository:** Clone your forked repository to your local environment.

2. **Install packages:** Navigate to the project folder and run `yarn` to install all applicable packages.

3. **Edit the `.ts` file:** Locate and edit the applicable `.ts` file inside the `config` folder. Make sure to provide all the necessary information about your project.

4. **Add your logo** Add your token's logo in .svg or .png format. The size of your logo should be 200 x 200 pixels, less than 50 KB and in the form of a circle.

5. **Run configuration:** Run `yarn configure` to convert your TypeScript entry into a consumable JSON file.

6. **Commit and push:** Commit your changes and push them to your forked repository.

7. **Submit a PR:** Create a new pull request in our `staging` repository, targeting the staging branch.

And voilà! Your PR is submitted, and our team will review and merge it as soon as possible.

## Deployment Example

In that example, we'll add our native token, BANANA to the repo! We'll need to go to the `src > constants` folder and open `addresMappingWhitelist.ts`. And you'll notice the skeleton of the code block looks like this:

```typescript
{
    tokenSymbol: '',
    tokenName: '',
    tokenLogoUrl: '',
    tokenAddresses: [
      { address: '', chainId: '' },
      { address: '', chainId: '' },
    ],
    knownOwners: [
      '',
      '',
      '',
    ],
    tags: [''],
    profileLinks: {
      siteUrl: '',
      twitterUrl: '',
      telegramUrl: '',
      discordUrl: '',
      auditUrls: [''],
    },
},
```

Once you finish filling it, it should look like this:

```typescript
 {
    tokenSymbol: 'BANANA',
    tokenName: 'ApeSwap BANANA',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/BANANA.svg',
    tokenAddresses: [
      { address: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95', chainId: '56' },
      { address: '0xd978f8489e1245568704407a479a71fcce2afe8f', chainId: '42161' },
    ],
    knownOwners: [
      '0x944694417a6ca0a70963d644a11d42c10e3af042',
      '0xabd7853b79e488bc1bd9e238a870167b074eb714',
      '0x71c0c1001520e1568e17836cc8a19d0dbdb2bd5f',
    ],
    tags: ['DEX', 'Yield', 'Bond'],
    profileLinks: {
      siteUrl: 'https://apeswap.finance/',
      twitterUrl: 'https://twitter.com/ape_swap',
      telegramUrl: 'https://t.me/ape_swap',
      discordUrl: 'https://discord.com/invite/ape-swap',
      auditUrls: ['https://paladinsec.co/projects/apeswap/', 'https://de.fi/audit-database/ApeSwap%20Finance'],
    },
  },
```

Lastly, upload your logo and locate it in the `logos` folder. Make sure it's at least 200 x 200 pixels, ideally has a size of less than 50 KB, and is in square or circular format. Please name your logo's image with all uppercase letters and update the last part of the  `tokenLogoUrl` parameter.

```typescript
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/YOURLOGONAME.svg',
```

**Be Aware Of Those Important Details:**

`tokenSymbol` has to be always uppercase.

All contract addresses should be lowercase at contract address needed variables such as `tokenAddresses`, `knownOwners`.

`knownOwners` should be a known liquidity holder wallet of the project. That can be a Safe multi-sig, locking contract, or other owned wallet. We will verify these!

Please don't forget to use `Prettier` before comitting your code.

Once you finish the code, run `yarn configure` to convert your TypeScript entry into a consumable JSON file and create a new pull request in our main repository.

And finally, please make sure to add `project-requests` label to your PR for making tracking progrees easier for us.

## FAQ

#### Q: What if I encounter issues during the PR process?

A: Don't worry! Our team is here to help. Feel free to reach out to us via our [Support](https://github.com/efeDaniels/lhd-readme-example#support) channels, and we'll be happy to assist you.

#### Q: How long does it take for my PR to be reviewed and merged?

A: We aim to review and merge PRs as quickly as possible. Please allow our team up to 3 business days to process your request.

#### Q: What happens after my PR is merged?

A: Congratulations! Your project is now integrated with our liquidity tracking product. You can start monitoring your liquidity and leveraging our tools to make informed decisions for your project.

## Q: Where do I find the ApeSwap tags to pick from?

A: You can see a complete list of tags with their definitions in our docs here and also at `src/types/index.ts`!
## Support

We're committed to providing you with the best support possible. If you have any questions, issues, or concerns, feel free to reach out to us through the following channels:

- [Discord](https://discord.com/invite/ApeSwap)

- [Telegram](https://t.me/liquiditymonkey)

Thank you for choosing ApeSwap! We're looking forward to working with you and helping your project thrive.
