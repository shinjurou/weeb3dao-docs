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
        여러분들의 작품을 NFT로 판매하기 위해서는 다음과 같은 과정을 거쳐야
        합니다.
        <ol className="list-decimal ml-14 mt-4 text-blue-500 font-bold">
          <li className="my-2">
            <RouterLink
              link="/sell-nft/create-wallet"
              title="암호화폐 지갑 만들기"
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
          return="Important Terminologies"
          returnlink="/info-nft/important-terminologies"
          next="암호화폐 지갑 만들기"
          nextlink="/sell-nft/create-wallet"
        />
      </div>
    </div>
  );
}
