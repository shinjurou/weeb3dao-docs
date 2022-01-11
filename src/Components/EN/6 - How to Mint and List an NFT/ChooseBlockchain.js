import React from "react";

import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import ReturnLink from "../0 - Index/ReturnLink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Blockchains from "./Blockchains";

export default function ChooseBlockchain() {
  return (
    <div className="choose-blockchain">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Choose your Blockchain
        </Typography>

        <ReturnLink
          link="/sell-nft"
          title="Return to How to Mint and List your NFT"
        />

        <div className="mt-5">
          There is a full list of blockchains information available on this{" "}
          <Link
            link="https://github.com/memo/eco-nft"
            title="Github page"
            light={true}
          />
          , but we will only be covering the popular blockchains currently being
          used by anime NFT artists.
        </div>

        <Card
          color="purple"
          title="Why is it important to understand the types of blockchains?"
          content={[
            <ul className="list-disc ml-4">
              <li className="mt-1">
                Each blockchains have their own marketplaces. Currently, most
                marketplaces only have{" "}
                <span className="text-pink-600 font-bold">one</span> blockchain
                integrated on their website (with exception for OpenSea).
              </li>
              <li className="mt-1">
                Choosing the blockchain to mint your NFT(s) on{" "}
                <span className="text-orange-500 font-bold">
                  might have an impact
                </span>{" "}
                on your sales. As your sales will depend on the number of
                collectors who are using said blockchain to purchase your
                artworks. A collector who only uses Ethereum won't be able to
                purchase your works from Tezos if they do not possess Tezos{" "}
                <span className="relative bottom-0.5 right-0.5">
                  <ArrowRightAltIcon />
                </span>
                This will{" "}
                <span className="text-red-600 font-bold">
                  cause inconveniences
                </span>{" "}
                for collectors to purchase your artwork(s).
              </li>
            </ul>,
          ]}
        />
        <Blockchains />
        <div className="mt-8">
          <Typography variant="h2" color="inherit" component="h2" mb={2}>
            Conclusion
          </Typography>

          <Card
            color="purple"
            title="Which blockchain is the best?"
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    There is{" "}
                    <span className="text-orange-500">
                      no "best" blockchain
                    </span>{" "}
                    as each have{" "}
                    <span className="text-purple-700">
                      different functionalities
                    </span>{" "}
                    and <span className="text-purple-700">audiences</span>.
                    There will always be collectors for your works on each
                    blockchain as long as you work hard.
                  </li>
                  <li className="mt-1">
                    The only reason choosing a blockchain is considered to be
                    important is to be able to{" "}
                    <span className="text-orange-500">
                      fulfill your goal(s)
                    </span>{" "}
                    according to your priorities.
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Examples of priorities
                    </span>
                  </li>
                </ul>
                <ul className="list-disc ml-10">
                  <li className="mt-1">
                    Selling <span className="text-orange-500">1/1</span> at a
                    higher price than editions: Ethereum.
                  </li>
                  <li className="mt-1">
                    Selling <span className="text-orange-500">editions</span> in
                    order to have your work(s) collected by many collectors:
                    Tezos.
                  </li>
                  <li className="mt-1">
                    Selling on an eco-friendly{" "}
                    <span className="text-orange-500">blockchain</span>:
                    Polygon, Tezos.
                  </li>
                  <li className="mt-1">
                    Selling your artworks as a{" "}
                    <span className="text-orange-500">collection</span>:
                    Ethereum, Polygon, Tezos.
                  </li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="green"
            content={[
              <div className="ml-9">
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Settling for only one blockchain is unnecessary as you can
                    <span className="text-green-600 font-bold">
                      use multiples at the same time
                    </span>{" "}
                    and use{" "}
                    <span className="text-orange-500">
                      different types of artworks
                    </span>{" "}
                    on each marketplace(s) and each blockchain(s).
                  </li>

                  <li className="mt-1">
                    <span className="text-green-600 font-bold">Example</span>
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      Minting your 1/1 works with high attention to details on
                      Ethereum and simpler versions of artworks on Polygon or
                      Tezos.{" "}
                      <span className="relative bottom-0.5 right-0.5">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      This will require you to use multiple wallets and convert
                      the currencies, but it will help you be able to utilizes
                      all the good points on each blockchain.
                    </li>
                  </ul>

                  <li className="mt-1">
                    <span className="text-pink-600">
                      Conversion between Ethereum and Polygon are easier
                    </span>{" "}
                    compare to converting Tezos to either of the other 2
                    blockchains.{" "}
                    <span className="relative bottom-0.5 right-0.5">
                      <ArrowRightAltIcon />
                    </span>
                    <span className="text-pink-600 font-bold">
                      It is recommended use Ethereum and Polygon if you wish to
                      use multiple blockchains at the same time.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
