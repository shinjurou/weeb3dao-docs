import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import RouterLink from "../0 - Index/RouterLink";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

// Importing sections
import HotColdWalletTable from "./HotColdWalletTable";

export default function WhatIsDigitalWallet() {
  return (
    <div className="what-is-digital-wallet">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          What is Digital Wallet?
        </Typography>

        <Card
          color="pink"
          content={[
            "Please refer to the ",
            <Link
              link="https://en.wikipedia.org/wiki/Digital_wallet"
              title="Digital Wallet Wikipedia page"
            />,
            " for the full explanation.",
          ]}
        />

        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          Simple Explanation
        </Typography>
        <WordExplain
          word="Digital Wallet"
          explain="This is a
          software that can store all your digital assets on the Blockchain."
        />
        <WordExample example="Your wallet storing your paper money and credit cards." />

        <Card
          color="orange"
          content="All transactions made in your wallet will be recorded and available for everyone to see on the Blockchain."
        />

        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          Hot Wallet vs. Cold Wallet
        </Typography>
        <HotColdWalletTable />
        <div className="my-4">
          An indepth comparison is available{" "}
          <Link
            link="https://www.gemini.com/cryptopedia/crypto-wallets-hot-cold"
            title="here"
          />{" "}
          for further reading.
        </div>

        <Card
          color="orange"
          title="Which wallet should I use?"
          content={[
            <div>
              Both have its perks so using both would be the most ideal.
              <br />
              <Link
                link="https://www.gemini.com/cryptopedia/crypto-wallets-hot-cold#section-best-of-both-wallet-worlds"
                title="This section have good examples on how to utilize both wallet types"
              />
            </div>,
          ]}
        />

        <Card
          color="green"
          title="Recommended Wallets"
          content={[
            <ul className="list-disc ml-4">
              <li>
                <span className="font-bold">Hot wallet:</span> The list of
                recommendations for hot wallets are available{" "}
                <RouterLink link="/sell-nft/create-wallet" title="here" />.
              </li>
              <li>
                <span className="font-bold">Cold wallet:</span> The best cold
                wallet is currently{" "}
                <Link
                  link="https://shop.ledger.com/products/ledger-nano-s"
                  title="Ledger Nano S"
                />{" "}
                (Nano X has bluetooth so the chances of being attacked is
                higher) and <Link link="https://trezor.io/" title="Trezor" />.
              </li>
            </ul>,
          ]}
        />
        <NaviButtons
          return="What is Blockchain?"
          returnlink="/info-nft/what-is-blockchain"
          next="Important Terminologies"
          nextlink="/info-nft/important-terminologies"
        />
      </div>
    </div>
  );
}
