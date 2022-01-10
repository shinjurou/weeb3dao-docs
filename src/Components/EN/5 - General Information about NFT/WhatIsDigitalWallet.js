import React from "react";

import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import ReturnLink from "../0 - Index/ReturnLink";
import RouterLink from "../0 - Index/RouterLink";
import HotColdWalletTable from "./HotColdWalletTable";

export default function WhatIsDigitalWallet() {
  return (
    <div className="what-is-digital-wallet">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          What is Digital Wallet?
        </Typography>

        <ReturnLink
          link="/info-nft"
          title="Return to General Information about NFT"
        />

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
          Simple explanation
        </Typography>
        <div className="mb-2">
          <span className="text-pink-600 font-bold">Digital Wallet</span> is a
          software that can store all your digital assets on the Blockchain.{" "}
          <br />
          <span className="text-green-600 font-bold">
            Real life example:
          </span>{" "}
          your wallet storing your paper money and credit cards.
        </div>
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
                light={true}
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
                <RouterLink
                  link="/sell-nft/create-wallet"
                  title="here"
                  light={true}
                />
                .
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
      </div>
    </div>
  );
}
