import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

export default function WhatIsBlockchain() {
  return (
    <div className="what-is-blockchain">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          What is Blockchain?
        </Typography>

        <Card
          color="pink"
          content={[
            <div>
              Please refer to the{" "}
              <Link
                link="https://en.wikipedia.org/wiki/Blockchain"
                title="Blockchain Wikipedia page"
              />{" "}
              for the full explanation.
            </div>,
          ]}
        />

        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          Simple Explanation
        </Typography>

        <WordExplain
          word="Blockchain"
          explain="This is a
          system that records all activities that happens online and stores
          everything on the network."
        />
        <WordExample
          explain="A
          financial book for a company with listings of their funds, sales, etc."
        />

        <Card
          color="orange"
          title="Important things to know"
          content={[
            <ul className="list-disc ml-4">
              <li>All records are available for everyone to see.</li>
              <li>
                All records are permanent and no one can change or delete it.
              </li>
              <li>
                The Blockchain records everything that happens online in every
                wallet available online with no limitation to the individual's
                identity.
              </li>
            </ul>,
          ]}
        />

        <Card
          color="green"
          content="Due to the Blockchain's nature, this helps ensure transparency for every accounts available."
        />

        <Card
          color="purple"
          title="Why is this important?"
          content={[
            <ul className="list-disc ml-4">
              <li>
                Transparency means no one can hide their illegal activities.
              </li>
              <li>
                This provides collectors the ability to find suspicious
                activities and help artists from being exploited.
              </li>
            </ul>,
          ]}
        />
        <NaviButtons
          return="What is NFT?"
          returnlink="/info-nft/what-is-nft"
          next="What is Digital Wallet?"
          nextlink="/info-nft/what-is-digital-wallet"
        />
      </div>
    </div>
  );
}
