import React from "react";

import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import ReturnLink from "../0 - Index/ReturnLink";

export default function ListNFT() {
  return (
    <div className="list-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          List an NFT
        </Typography>

        <ReturnLink
          link="/sell-nft"
          title="Return to How to Mint and List your NFT"
        />
      </div>
    </div>
  );
}
