import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function CryptoExchange() {
  return (
    <div className="crypto-exchange">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Crypto Exchange
        </Typography>
        <NaviButtons
          return="Burn your NFT"
          returnlink="/burn-NFT"
          next="Community"
          nextlink="/community"
        />
      </div>
    </div>
  );
}
