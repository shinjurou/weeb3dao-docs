import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

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
          Simple explanation
        </Typography>
        <div className="mb-2">
          <span className="text-pink-600 font-bold">Non-fungible</span> =
          unique, the only one of it's kind and cannot be replaced. <br />
          <span className="text-green-600 font-bold">
            Real life example:
          </span>{" "}
          you as an individual cannot be replaced by your high school math
          teacher.
        </div>
        <div>
          <span className="text-pink-600 font-bold">Token</span> = a virtual
          currency that the holder will be able to trade online through the
          blockchain. <br />
          <span className="text-green-600 font-bold">
            Real life example:
          </span>{" "}
          coins we use everyday representing money to be exchanged for goods
        </div>
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
