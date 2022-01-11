import React from "react";

import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import ReturnLink from "../0 - Index/ReturnLink";
import Fee from "./Fee";
import ETHmarket from "./ETHmarket";
import XTZmarket from "./XTZmarket";

export default function ChooseMarketplace() {
  return (
    <div className="choose-marketplace">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Choose your Marketplace
        </Typography>

        <ReturnLink
          link="/sell-nft"
          title="Return to How to Mint and List your NFT"
        />

        <Card
          color="pink"
          content={[
            <div>
              Currently, there is limited information available for some
              platforms (KnownOrigin, SuperRare and Kalamint). Information will
              be updated as more anime NFT artists integrate on said platform
              and we receive more accurate information.{" "}
              <div className="mt-2 text-pink-600 font-bold">
                If you have additional information that are not listed here,
                please contact Shinjurou to provide information and have this
                list updated.
              </div>
            </div>,
          ]}
        />

        <div className="mt-8">
          <Typography variant="h2" color="inherit" component="h2" mb={2}>
            Platform Comparison
          </Typography>
        </div>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Fee />

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Ethereum Marketplace
            </Typography>
            <ETHmarket />
          </div>

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Tezos Marketplace
            </Typography>
            <XTZmarket />
          </div>
        </div>
      </div>
    </div>
  );
}
