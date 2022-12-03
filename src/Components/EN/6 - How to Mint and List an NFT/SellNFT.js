import React from "react";
import Typography from "@mui/material/Typography";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";

export default function SellNFT() {
  return (
    <div className="sell-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          How to Mint and List your NFT
        </Typography>
        Here are the steps you will need to do in order to start selling your
        artwork(s) as NFT(s).
        <ol className="list-decimal ml-14 mt-4 text-blue-500 font-bold">
          <li className="my-2">
            <RouterLink
              link="/sell-nft/create-wallet"
              title="Create your Digital Wallet"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/sell-nft/choose-blockchain"
              title="Choose your Blockchain"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/sell-nft/choose-marketplace"
              title="Choose your Marketplace"
            />
          </li>

          <li className="my-2">
            <RouterLink link="/sell-nft/mint-nft" title="Mint an NFT" />
          </li>

          <li className="my-2">
            <RouterLink link="/sell-nft/list-nft" title="List an NFT" />
          </li>

          <li className="my-2">
            <RouterLink link="/sell-nft/promote-nft" title="Promote your NFT" />
          </li>

          <li className="my-2">
            <RouterLink link="/sell-nft/celebration" title="Celebration" />
          </li>

          <li className="my-2">
            <RouterLink link="/sell-nft/gas" title="How to keep track of Gas" />
          </li>
        </ol>
        <NaviButtons
          return="Crypto Security"
          returnlink="/security"
          next="Create your Digital Wallet"
          nextlink="/sell-nft/create-wallet"
        />
      </div>
    </div>
  );
}
