import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

export default function WhatIsNFT() {
  return (
    <div className="what-is-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          What is NFT?
        </Typography>

        <div className="mt-5">
          NFT is the abbreviation for{" "}
          <span className="text-orange-500">Non-fungible tokens</span>.
        </div>
        <Card
          color="pink"
          content={[
            <div>
              Please refer to the{" "}
              <Link
                link="https://en.wikipedia.org/wiki/Non-fungible_token"
                title="NFT Wikipedia page"
              />{" "}
              for the full explanation.
            </div>,
          ]}
        />
        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          Simple Explanation
        </Typography>
        <WordExplain
          word="Non-fungible"
          explain="Unique, the only one of it's kind and cannot be replaced."
        />
        <WordExample
          example="You as an individual cannot be replaced by your high school math
          teacher."
        />

        <WordExplain
          word="Token"
          explain="A virtual
          currency that the holder will be able to trade online through the
          blockchain."
        />
        <WordExample example="Coins we use everyday representing money to be exchanged for goods." />

        <Card
          color="orange"
          content={[
            <div>
              This means that once you turn your artwork(s) into NFT(s) then it
              will be available on the blockchain forever with no way of
              deleting or duplicating it.
              <div className="mt-1">
                After that you can use it to trade with others via the
                blockchain.
              </div>
            </div>,
          ]}
        />
        <NaviButtons
          return="General Information about NFT"
          returnlink="/info-NFT"
          next="What is Blockchain?"
          nextlink="/info-nft/what-is-blockchain"
        />
      </div>
    </div>
  );
}
