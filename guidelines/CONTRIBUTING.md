# Contribution Guidelines
Guides and tips for making contributions (adding new pages, articles, language translations etc.) to the doc.

### Contents

- [Start here](#start-here)
- [About the repository](#about-the-repository)
- [Language Translation](#language-translation)
- [Website and File correlation](#website-and-file-correlation)
- [Components](#components)
  - [Card](#card)
  - [Link](#link)
  - [RouterLink](#routerlink)
  - [NaviButtons](#navigation-buttons)
  - [Word Example](#word-example)
  - [Word Explain](#word-explain)
  - [Video](#video)
  - [Checkbox](#checkbox)
- [Text Colors](#text-colors)
- [Add Image](#add-image)

## Start here

You can create a pull request by making direct changes on github or your local environment.

### How to set up local environment for the repository
1. Follow this [guide](https://javascript.plainenglish.io/how-to-clone-an-app-from-github-446541a0302d).
2. Run `npm start` or `yarn start` in your terminal to start the app.

## About the repository

The main files for the repository can be located in [/src/Components/](/src/Components/).

### How to make changes to the website?
1. Go to the folder of the language you want to make changes to.
2. Locate the file you want to edit in [Website and File correlation](#website-and-file-correlation).

### How to add a new page?
1. Go to [/src/Components/EN/](/src/Components/EN/) and create a `new folder`. **Example:** `5.1 - Crypto Security`
2. Create a new `.js` file within the new folder. The name should not have any space in it. **Example:** `CryptoSecurity.js`
4. Add the new page's link in [/src/routes.js ](/src/routes.js). **Example:** `"/security",`
5. Add the `Route path` for the new page in [`Index.js`](/src/Components/EN/0%20-%20Index/Index.js).
    - Add the importation code line below the `// Importing Router Elements` section. **Example:** `import CryptoSecurity from "../5.1 - Crypto Security/CryptoSecurity";`
    - Navigate to the `<Routes> ... </Routes>` section.
    - Add in the path and element. **Example:** `<Route path="/security" element={<CryptoSecurity />} />`
6. Add the new page's link for the **Navigation Bar** in [`Index.js`](/src/Components/EN/0%20-%20Index/Index.js).
    - Copy the [**Full Code Paragraph**](/src/Components/EN/0%20-%20Index/Index.js#L268) `<Link to="database-info"> <ListItem button> ... </ListItem> </Link>`.
    - Input the new page's link in between the 2 `Double Quotation Marks (" ")` in `<Link to="">`. <br/>**Example**: `<Link to="security">`
    - Input the new page's title in between the 2 `Double Quotation Marks (" ")` in `<ListItemText primary="" />`. <br/>**Example**: `<ListItemText primary="Crypto Security">`

>The name of the folder should have the number close to the folder it is close to. **Example:** If the folder is beneath `6 - How to Mint and List an NFT` then the folder should be named `6.1 - A New Page`.<br/>
>The new page should be placed in the same numerology as the its corresponding order in **Navigation Bar**.

## Language Translation
Each folder represents the respective language translation on the website. Example: EN for English version for the website.

##### Available languages:

- [x] EN
- [x] JP
- [ ] KR (in development)

### How to add a new language translation?

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

> `.` means in the same folder.<br/>
> `..` means go back one folder.

## Components

The repository has several pre-made components to help make adding contents to pages easier.

### Card
`Card` is used to highlight a specific section of information.
<br/>There are a total of 6 types of cards available:
  - **Red:** Strong warning against negative information
  ![Red Card](/guidelines/images/CardRed.jpg)
  - **Orange:** Alert the reader with information
  ![Orange Card](/guidelines/images/CardOrange.jpg)
  - **Green:** Highlight a positive information
  ![Green Card](/guidelines/images/CardGreen.jpg)
  - **Teal:** Inform the reader of an information
  ![Teal Card](/guidelines/images/CardTeal.jpg)
  - **Purple:** Answer a question for the reader
  ![Purple Card](/guidelines/images/CardPurple.jpg)
  - **Pink:** Strong attention to an important information
  ![Pink Card](/guidelines/images/CardPink.jpg)
  
#### How to use?
1. Add `import Card from "../0 - Index/Card";` to the top of the file.
2. Write `<Card />` within the code to use the component.
3. Add attributes for the Card: `color`, `title`, `content`
    - `color`: Select between these options `red`, `orange`, `green`, `teal`, `purple`, `pink`. <br/>Example: `color="purple"`.
    - `title`, `content`: Write the title and content for the card.
      -  For single sentence: Write within 2 `Double Quotation Marks (" ")` or `Single Quotation Marks (' ')`.<br/> **Example:** `"Due to the Blockchain's nature, this helps ensure transparency for every accounts available."`
      -  For long paragraphs: Write the paragraph within a `HTML tag` (div, ul, etc.) that is enclosed within 2 `Brackets [ ]` and two `Parentheses ( )`.<br/> **Example:** `{[<div> <ul> <li>Transparency means no one can hide their illegal activities.</li> <li>This provides collectors the ability to find suspicious
                activities and help artists from being exploited.</li> </ul> </div>]}`
> You do not need to include all 3 attributes. You can select to only include either `title` or `content`. [Example](/src/Components/EN/5%20-%20General%20Information%20about%20NFT/WhatIsBlockchain.js#L17)


### Link

`Link` is used to add links to external website. If you want to link to a different page or section within the current website then use [RouterLink](#routerlink) instead.


#### How to use?
1. Add `import Link from "../0 - Index/Link";` to the top of the file.
2. Add attributes for the Link: `link`, `title`, `light`.<br/>
**Example:** Write `<Link link="https://twitter.com/weeb3dao" title="weeb3dao" />` to add a link to the weeb3dao's Twitter.
> All links automatically have bold text stylization. To remove the bold text, you can include `light={true}` to the attribute. <br/>**Example:** `<Link link="https://twitter.com/weeb3dao" title="weeb3dao" light={true}/>`

### RouterLink

`RouterLink` is used to add links to pages within the [weeb3dao website](https://docs.weeb3dao.com/).

#### How to use?
1. Add `import RouterLink from "../0 - Index/RouterLink";` to the top of the file.
2. Add attributes for the RouterLink: `link`, `title`, `light`.<br/>
**Example:** Write `<RouterLink link="/weeb3dao-scholarship" title="click this link and apply for the program"/>` to add a link to the **weeb3dao's Mint Scholarship** page.
> All links automatically have bold text stylization. To remove the bold text, you can include `light={true}` to the attribute. <br/>**Example:** `<RouterLink link="/weeb3dao-scholarship" title="click this link and apply for the program" light={true}/>`

### Navigation Buttons

`NaviButtons` is used to add navigation buttons at the bottom of the pages to go back and forth between pages within the [weeb3dao website](https://docs.weeb3dao.com/).

![NaviButtons](/guidelines/images/NaviButtons.jpg)

#### How to use?
1. Add `import NaviButtons from "../0 - Index/NaviButtons";` to the top of the file.
2. Add attributes for the NaviButtons: `return`, `returnlink`, `next`, `nextlink`. **[Example](/src/Components/EN/2%20-%20Database%20Information/DatabaseInformation.js#L215)**
> You can leave the attribute empty in between the 2 `Double Quotation Marks (" ")` if there is no page available. [**Example**](/src/Components/EN/1%20-%20Welcome/Welcome.js#L63)<br/>
> You can find the list of links for all pages in [/src/routes.js ](/src/routes.js).

### Word Explain

`WordExplain` is used to explain a crypto terminology.

![WordExplain](/guidelines/images/WordExplain.jpg)

#### How to use?
1. Add `import WordExplain from "../0 - Index/WordExplain";` to the top of the file.
2. Add attributes for the WordExplain: `word`, `explain`.<br/>
**Example:** `<WordExplain word="Floor" explain="Lowest price of NFT from an artist or project." />`

### Word Example

`WordExample` is used to give example to a crypto terminology.

![WordExample](/guidelines/images/WordExample.jpg)

#### How to use?
1. Add `import WordExample from "../0 - Index/WordExample";` to the top of the file.
2. Add attributes for the WordExample: `notReal`, `example`.<br/>
**Example:** `<WordExample example="A financial book for a company with listings of their funds, sales, etc."/>`
> You can remove the words "Real life" from "Real life example" by adding `notReal={true}` to the attribute. <br/>**Example:** `<WordExample notReal={true} example="doraemon.eth" />`

### Video

`WordExample` is used to add a youtube video. The video will have responsive size and automatically resize to fit screen size.

![Video](/guidelines/images/Video.jpg)

#### How to use?
1. Add `import Video from "../0 - Index/Video";` to the top of the file.
2. Add attributes for the Video: `youtubeId`, `title`.<br/>
**Example:** `<Video youtubeId="aUBid1zJC-U" title="Safest Way To Store Your Crypto"/>`

### Checkbox

`Checkbox` is used for **Release Notes** in [Database Information](https://docs.weeb3dao.com/en/database-info)

#### How to use?
1. Add `import Checkbox from "../0 - Index/Checkbox";` to the top of the file.
2. Add attributes for the Checkbox: `checked`, `label`.<br/>
**Example:** ` <Checkbox checked={true} label={[<span className="text-violet-600">8 December 2021</span>," The start of the Database Compilation",]}/>`

## Text Colors

The repository has 6 prepicked colors to help texts be read easier.
<br/> The 6 availble colors are similar to the available [Card](#card)'s colors.

### How to add colors to texts?
1. Add `<span className="">` to the front and `</span>` at the end of the text.
2. Add color for the span tag: Select between these options `text-red-600`, `text-orange-500`, `text-green-600`, `text-teal-600`, `text-purple-700`, `text-pink-600`.<br/>
**Example:** `<span className="text-orange-500">Hello</span>`
> You can add `font-bold` to include bold text stylization.<br/>
> Color meanings for text stylization is similar to the meaning for [Card](#card)'s colors.
> 
**Note:** You can use an alternatetive color which has a similar meaning if a color is used too many times within the same paragraph.

## Add Image
1. Add image to [/src/Imgs/](/src/Imgs/).
2. Add import code line to the top of the file.<br/>**Example**: `import coverImgSrc from "../../../Imgs/cover.png";`
3. Write the `image path` you have just imported into `src` for image. **Example**: `<img src={coverImgSrc} alt="Cover Image" />`.
4. Write the image's description into `alt`

> `.` means in the same folder.<br/>
> `..` means go back one folder.<br/>
> You can add in `height` or `width` attribute if you want to change the image's size.

**Important Note:** Each `image path` imported needs to have a different name.
