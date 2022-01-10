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
            <RouterLink link="/what-is-nft" title="What is NFT?"></RouterLink>
          </li>

          <li className="my-2">
            <RouterLink
              link="/what-is-blockchain"
              title="What is Blockchain?"
            ></RouterLink>
          </li>

          <li className="my-2">
            <RouterLink
              link="/what-is-digital-wallet"
              title="What is Digital Wallet?"
            ></RouterLink>
          </li>

          <li className="my-2">
            <RouterLink
              link="/important-terminologies"
              title="Explanations for Important Terminologies"
            ></RouterLink>
          </li>
        </ol>
      </div>
    </div>
  );
}
