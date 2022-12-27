import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import ScamBook from "./ScamBook";

export default function CryptoSecurity() {
  return (
    <div className="burn-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Crypto Security
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Safety Guide
            </Typography>
            <Card
              color="green"
              content={[
                <div>
                  It is recommended to read{" "}
                  <Link
                    link="https://mirror.xyz/kiwi.eth/V5wMoTNHWf7diWQYieF5URxqZv4l9hGlly0mMmkiuhM"
                    title="Kiwi’s Crypto/NFT Safety Guide"
                  />
                  <span className="text-pink-600 font-bold"></span> to protect
                  yourself from scam.
                </div>,
              ]}
            />
          </div>

          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              NFT Common Scams Guidebook
            </Typography>

            <ScamBook />

            <Card
              color="green"
              content={[
                <>
                  <Link
                    link="https://github.com/TougeAI/nft-scam-guidebook"
                    title="Link to original guide"
                  />{" "}
                  created by{" "}
                  <Link link="https://twitter.com/tougeAI" title="TougeAI" />
                </>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="How to keep track of Gas"
          returnlink="/gas"
          next="Crypto Exchange"
          nextlink="/crypto-exchange"
        />
      </div>
    </div>
  );
}
