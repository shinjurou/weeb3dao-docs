import React from "react";

import Typography from "@mui/material/Typography";
import RouterLink from "../0 - Index/RouterLink";

export default function InfoNFT() {
  return (
    <div className="info-NFT">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          General Information about NFT
        </Typography>
        There is a large amount of information available online explaining about
        everything relating to NFT. So we have compiled the most common
        questions with simpler explanations here for easier understanding.
        <ol className="list-decimal ml-4 mt-6 text-blue-500 font-bold">
          <li className="my-2">
            <RouterLink link="/info-nft/what-is-nft" title="What is NFT?" />
          </li>

          <li className="my-2">
            <RouterLink
              link="/info-nft/what-is-blockchain"
              title="What is Blockchain?"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/info-nft/what-is-digital-wallet"
              title="What is Digital Wallet?"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/info-nft/important-terminologies"
              title="Explanations for Important Terminologies"
            />
          </li>
        </ol>
      </div>
    </div>
  );
}
