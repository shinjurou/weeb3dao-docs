# Contribution Guidelines

### Contents

- [About the repository](#about-the-repository)
- [Website and File correlation](#website-and-file-correlation)
- [Components](#components)
- [Text Colors](#text-colors)

## About the repository

The main files for the repository can be located in [/src/Components/](/src/Components/)

Each folder represents the respective language on the website. Example: EN for English version for the website.

##### Available languages:

- [x] EN
- [x] JP
- [ ] KR (in development)

### How to make changes to the website?

1. Go to the folder of the language you want to make changes to.
2. Locate the file you want to edit in [Website and File correlation](#website-and-file-correlation).

### How to add a new language?

1. Duplicate the `EN` folder.
2. Add the language in [/src/utils/locales.js ](/src/utils/locales.js).
3. Edit the files within the newly created folder.

## Website and File correlation

- [Welcome](/src/Components/EN/1%20-%20Welcome/Welcome.js)
- [Database Information](/src/Components/EN/2%20-%20Database%20Information/DatabaseInformation.js)
- [Introduction](/src/Components/EN/3%20-%20Introduction/Introduction.js)
- [weeb3dao Mint Scholarship](/src/Components/EN/4%20-%20weeb3dao%20Mint%20Scholarship/weeb3daoScholarship.js)
- [General Information about NFT](/src/Components/EN/5%20-%20General%20Information%20about%20NFT/InfoNFT.js)
  - [What is NFT?](/src/Components/EN/5%20-%20General%20Information%20about%20NFT/WhatIsNFT.js)
  - [What is Blockchain?](/src/Components/EN/5%20-%20General%20Information%20about%20NFT/WhatIsBlockchain.js)
  - [What is Digital Wallet?](/src/Components/EN/5%20-%20General%20Information%20about%20NFT/WhatIsDigitalWallet.js)
  - [Important Terminologies](/src/Components/EN/5%20-%20General%20Information%20about%20NFT/ImportantTerminologies.js)
- [How to Mint and List your NFT](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/SellNFT.js)
  - [Create your Digital Wallet](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/CreateWallet.js)
  - [Choose your Blockchain](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/ChooseBlockchain.js)
  - [Choose your Marketplace](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/ChooseMarketplace.js)
  - [Mint an NFT](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/MintNFT.js)
  - [List an NFT](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/ListNFT.js)
  - [Promote your NFT](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/PromoteNFT.js)
  - [Celebration](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/Celebration.js)
  - [How to keep track of Gas](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/Gas.js)
- [Burn your NFT](/src/Components/EN/7%20-%20Burn%20your%20NFT/BurnNFT.js)
- [How to Airdrop an NFT](/src/Components/EN/7.1%20-%20How%20to%20Airdrop%20an%20NFT/Airdrop.js)
- [Crypto Exchange](/src/Components/EN/8%20-%20Crypto%20Exchange/CryptoExchange.js)
- [Community](/src/Components/EN/9%20-%20Community/Community.js)
  - [Terminologies](/src/Components/EN/9%20-%20Community/Terminologies.js)
  - [Culture](/src/Components/EN/9%20-%20Community/Culture.js)
- [FAQ](/src/Components/EN/10%20-%20FAQ/FAQ.js)
- [Environment Controversy](/src/Components/EN/11%20-%20Environment%20Controversy/Environment.js)
- [Recommended Readings](/src/Components/EN/12%20-%20Recommended%20Readings/RecReadings.js)
- [Reverse Image Search Resources](/src/Components/EN/13%20-%20Reverse%20Image%20Search%20Resources/ReverseImageSearch.js)

### How to find a specific text to edit?

1. Copy the text from the [main website](<[url](https://docs.weeb3dao.com/en)>).
2. Locate the file you want to edit in [Website and File correlation](#website-and-file-correlation).
3. Use `Crtl + F` to locate the text and edit it.

### Cannot find this text in the file?

Some files are split into smaller sections so you will need to locate the text in those files.

1. Use `Crtl + F` to check if a file has `// Importing sections`.
2. Locate the file. Example:
   - Go to [`ChooseBlockchain.js`](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/ChooseBlockchain.js), use `Crtl + F` to find `// Importing sections`.
   - Underneath the search result, you will find a code line `import Blockchains from "./Blockchains";`.
   - The `.` before `/Blockchains` means the file is in the same folder as the `ChooseBlockchain.js` file we are currently on.
   - Go back to the main folder [`6 - How to Mint and List an NFT`](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT) and you will find the file [`Blockchains.js`](/src/Components/EN/6%20-%20How%20to%20Mint%20and%20List%20an%20NFT/Blockchains.js) there.

> `.` means in the same folder.<br/> > `..` means go back one folder.

## Components

The repository has several pre-made components help to make adding contents to pages easier.

#### Card

#### Link

#### RouterLink

#### NaviButtons

#### Word Example

#### Word Explain

#### Video

#### Checkbox

### How to use components?

## Text Colors

### How to add colors to texts?
