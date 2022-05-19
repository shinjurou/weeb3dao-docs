import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import Wallets from "./Wallets";
import Video from "../0 - Index/Video";
import RouterLink from "../0 - Index/RouterLink";

export default function CreateWallet() {
  return (
    <div className="create-wallet">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Create your Digital Wallet
        </Typography>

        <div className="mt-5">
          First of all you will need to create a digital wallet. Here is a list
          of recommended wallets.
        </div>

        <Card
          color="green"
          title="Recommended wallets for each Blockchains"
          content={[
            <ul className="list-disc ml-4">
              <li className="mt-1">
                Ethereum: <Link link="https://metamask.io/" title="MetaMask" />
              </li>
              <li className="mt-1">
                Tezos: <Link link="https://wallet.kukai.app/" title="Kukai" />
              </li>
            </ul>,
          ]}
        />

        <Wallets />

        <Card
          color="pink"
          title="Very Important things to know"
          content={[
            <div>
              <div className="mb-2">
                Due to its nature of being a digital software, this means{" "}
                <span className="text-red-600 font-bold">hacking</span> is
                highly possible.
              </div>
              <div className="mb-2">
                Because of this, here are a few things to{" "}
                <span className="text-red-600 font-bold">NEVER</span> do in
                order to ensure your safety:
              </div>
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  <span className="text-red-600 font-bold">NEVER</span> tells
                  anyone your seed phrase for wallet(s) you own.
                </li>
                <li className="mt-1">
                  <span className="text-red-600 font-bold">NEVER</span> click on
                  any random links sent to you via Twitter or Discord DM.
                </li>
              </ul>
            </div>,
          ]}
        />
        <Card
          color="green"
          title="Recommendations"
          content={[
            <div>
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  Store your seed phrase in a physical method.
                </li>
                <li className="mt-1">
                  Ask in{" "}
                  <Link link="https://discord.gg/vktnAzvyNQ" title="Anifam" />{" "}
                  or{" "}
                  <Link link="https://discord.gg/MSYmemxJt5" title="uwucrew" />{" "}
                  discord servers if you are sent a link by someone you don't
                  know.
                </li>
                <li className="mt-1">
                  Use both a hot wallet and cold wallet. Information about both
                  are available{" "}
                  <RouterLink
                    link="/info-nft/what-is-digital-wallet"
                    title="here"
                    light={true}
                  />
                  .
                </li>
              </ul>
            </div>,
          ]}
        />

        <Card
          color="pink"
          title="The following video is highly recommended for artists to watch to protect themselves."
          content={[<Video youtubeId="3kcXVEDB64Y" />]}
        />
        <NaviButtons
          return="How to Mint and List your NFT"
          returnlink="/sell-NFT"
          next="Choose your Blockchain"
          nextlink="/sell-nft/choose-blockchain"
        />
      </div>
    </div>
  );
}
