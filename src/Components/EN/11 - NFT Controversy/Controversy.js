import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import Video from "../0 - Index/Video";

export default function Environment() {
  return (
    <div className="controversy">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFT Controversy
        </Typography>
        <Card
          color="purple"
          title="Environmental Issue"
          content={[
            <>
              The Ethereum Mainnet now uses{" "}
              <span className="text-orange-500 font-bold">
                Proof-of-Stake (PoS)
              </span>{" "}
              after The Merge on September 15, 2022.
              <br /> The Merge reduced Ethereum's energy consumption by{" "}
              <span className="text-pink-600 font-bold">~99.95%</span>.
              <br />
              <Link
                link="https://ethereum.org/en/upgrades/merge/"
                title="Read more"
              />
            </>,
          ]}
        />

        <Video
          youtubeId="yH2t4ayYGDI"
          title="How Twitter Betrayed Artists and A Defense of NFTs"
        />

        <NaviButtons
          return="FAQ"
          returnlink="/faq"
          next="Recommended Readings"
          nextlink="/rec-readings"
        />
      </div>
    </div>
  );
}
