import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function BurnNFT() {
  return (
    <div className="burn-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Burn your NFT
        </Typography>
        <NaviButtons
          return="How to keep track of Gas"
          returnlink="/sell-nft/gas"
          next="Crypto Exchange"
          nextlink="/crypto-exchange"
        />
      </div>
    </div>
  );
}
