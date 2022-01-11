import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

import POWPOS from "./POWPOS";

export default function ImportantTerminologies() {
  return (
    <div className="important-terminologies">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Important Terminologies
        </Typography>

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Shill"
              explain="Convince someone to buy something (usually something you own or have vested interest in) - has a bad connotation most of the time."
            />
          </li>
          <li>
            <WordExplain
              word="ATH"
              explain="All time high (highest price sold for an NFT from an artist or project)."
            />
          </li>
          <li>
            <WordExplain
              word="Floor"
              explain="Lowest price of NFT from an artist or project."
            />
          </li>
          <li>
            <WordExplain
              word="Moon"
              explain="An NFT artist or project that has their NFT price and volume go up high."
            />
          </li>
          <li>
            <WordExplain
              word="Bear market"
              explain="NFT market being at its worst and low NFT prices."
            />
          </li>
          <li>
            <WordExplain
              word="Bull market"
              explain="NFT market being at its top form and high NFT prices."
            />
          </li>
          <li>
            <WordExplain
              word="Shill"
              explain="Convince someone to buy something (usually something you own or have vested interest in) - has a bad connotation most of the time."
            />
          </li>
          <li>
            <WordExplain
              word="Blue Chip"
              explain="An NFT artist or project that is considered significant to the community."
            />
          </li>
        </ul>

        <Card
          color="teal"
          content="All the terminologies above are very commonly used in the community."
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="ETH" explain="Ethereum" />
          </li>
          <li>
            <WordExplain word="XTZ/TEZ" explain="Tezos" />
          </li>
          <li>
            <WordExplain word="ETH" explain="Ethereum" />
          </li>
          <li>
            <WordExplain
              word="MATIC"
              explain="The currency for Polygon's blockchain."
            />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            "ETH, XTZ and Polygon are types of blockchains currently available which are used by a lot of current anime NFT artists. There are more information about other blockchains available to read ",
            <Link
              link="https://github.com/memo/eco-nft"
              title="here"
              light={true}
            />,
            ".",
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="Mint" explain="Create an NFT" />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            <div>
              Each digital creation needs to be minted in order to become an
              NFT.
              <div className="ml-16">
                <ul className="list-disc">
                  <li className="mt-1">
                    One mint = One NFT (costs x1 gas fee)
                  </li>
                  <li className="mt-1">
                    Ten mints = Ten NFTs (costs x10 gas fee)
                  </li>
                </ul>
              </div>
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="POW" explain="Proof of Work" />
          </li>
          <li>
            <WordExplain word="POS" explain="Proof of Stake" />
          </li>
          <li>
            <WordExplain
              word="Gas Fee"
              explain="The fee you will need to pay in order for each transaction to be processed on the blockchain."
            />
            <WordExample explain="Paying for your car's gas in order to have it run." />
          </li>
        </ul>

        <Card
          color="teal"
          content="Both POW and POS are the model of mechanisms used by blockchains in order to turn your digital creation into NFT."
        />

        <POWPOS />

        <Card
          color="teal"
          content={[
            <div>
              ETH is currently in development to{" "}
              <span className="text-pink-600 font-bold">
                model ETH after POS
              </span>
              . Their current plan is to{" "}
              <span className="text-green-600 font-bold">
                have ETH2 implemented in 2022
              </span>
              .
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="GWEI" explain="Gigawei" />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            <div>
              GWEI is the measure unit for the gas price for all transactions on
              ETH based blockchains (including Polygon).
              <div className="ml-8">
                <ul className="list-disc">
                  <li className="mt-1">High GWEI = High gas fee</li>
                  <li className="mt-1">Low GWEI = Low gas fee </li>
                </ul>
              </div>
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Smart Contract"
              explain="A program that runs on the blockchain."
            />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            <div>
              Smart contract can let you mint new NFT(s) from a PFP project
              without the need for the team to manually upload each NFT(s) to
              the blockchain.
              <div>
                <span className="text-pink-600 font-bold">
                  You can deploy your own smart contract on Foundation and
                  Manifold for your own collection(s).
                </span>
              </div>
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Dutch auction"
              explain="The price of a NFT starts at a starting price then dropped periodically until it hits the lowest price."
            />
            <WordExample
              notReal={true}
              explain="The NFT starts at 0.2 ETH and drops to 0 ETH after 2 days."
            />
          </li>
          <li>
            <WordExplain
              word="Layer 2 (L2)"
              explain="A solution developing to resolve the issue of high gas fees and slow transaction speeds on ETH blockchain."
            />
          </li>
          <li>
            <WordExplain
              word="Burn"
              explain="Delete your NFT from the blockchain."
            />
          </li>
          <li>
            <WordExplain
              word="WETH"
              explain='You can wrap your ETH token into "Wrapped Ether" to be exchanged with other ETH-based tokens.'
            />
          </li>
          <li>
            <WordExplain
              word="Transaction"
              explain="Any activity of selling, buying or trading occurs on the blockchain."
            />
          </li>
          <li>
            <WordExplain
              word="ENS"
              explain="Ethereum Name Service is a naming system based on the Ethereum blockchain which can replace your wallet address into a shortened registered name."
            />
            <WordExample notReal={true} explain="doraemon.eth" />
          </li>
        </ul>
        <NaviButtons
          return="What is Digital Wallet?"
          returnlink="/info-nft/what-is-digital-wallet"
          next="How to Mint and List your NFT"
          nextlink="/sell-NFT"
        />
      </div>
    </div>
  );
}
