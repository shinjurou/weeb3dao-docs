import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import RouterLink from "../0 - Index/RouterLink";

export default function BurnNFT() {
  return (
    <div className="burn-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFT 소각하기
        </Typography>

        <Card
          color="pink"
          content={[
            <div>
              If you ever want to{" "}
              <span className="text-pink-600 font-bold">
                {" "}
                remove an NFT from any marketplaces
              </span>{" "}
              due to certain reasons: made a typo within the description, you no
              longer want to sell the NFT, you want to keep your works limited.
              You can check our the guides below to help you learn about the
              process of{" "}
              <span className="text-teal-600 font-bold">
                Burning (Deleting) your NFT from the blockchain.
              </span>
            </div>,
          ]}
        />

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Guide for Burning Gas
            </Typography>
            <Card
              color="green"
              content={[
                <div>
                  Burning NFT{" "}
                  <span className="text-pink-600 font-bold">
                    does not cost as much gas as Minting or Listing the artwork
                  </span>
                  , but{" "}
                  <RouterLink
                    link="/gas"
                    title="you can still check our previous guide for
                  reference on how to keep track of gas."
                  />
                </div>,
              ]}
            />
          </div>
          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Burning Guides for each Marketplaces
            </Typography>

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=XvA-EWlv14Q"
                  title="OpenSea (Ethereum Mainnet & Polygon Network)"
                />
              </li>
            </ul>
            <Card
              color="orange"
              content={[
                <div>
                  This is only for NFTs{" "}
                  <span className="text-orange-500 font-bold">
                    minted on OpenSea storefront.
                  </span>{" "}
                  To burn other NFTs on OpenSea, simply{" "}
                  <span className="text-pink-600 font-bold">
                    transfer it to 0x000000000000000000000000000000000000dead.
                  </span>
                </div>,
              ]}
            />
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://help.foundation.app/en/articles/4742850-delete-or-burn-an-nft"
                  title="Foundation"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://docs.knownorigin.io/guide/how-to-delete-burn-tokens/"
                  title="KnownOrigin"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://github.com/hicetnunc2000/hicetnunc/wiki/How-to-burn-%F0%9F%94%A5"
                  title="Teia"
                />
              </li>
            </ul>
            <Card
              color="pink"
              content={[
                <div>
                  Other marketplaces do not have guides available but the
                  process should be simple enough with either a{" "}
                  <span className="text-pink-600 font-bold">"Burn"</span> or{" "}
                  <span className="text-pink-600 font-bold">"Delete"</span>{" "}
                  button in{" "}
                  <span className="text-pink-600 font-bold">
                    their options.
                  </span>
                </div>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="Gas Fee를 모니터링 하는 방법"
          returnlink="/gas"
          next="NFT Airdrop(에어드랍, 선물) 하는 법"
          nextlink="/airdrop-nft"
        />
      </div>
    </div>
  );
}
