import React from "react";
import Typography from "@mui/material/Typography";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";

export default function SellNFT() {
  return (
    <div className="sell-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          作品の販売について
        </Typography>
        NFTとして作品を販売するために必要な手続きは以下のとおりです。
        <ol className="list-decimal ml-14 mt-4 text-blue-500 font-bold">
          <li className="my-2">
            <RouterLink
              link="/sell-nft/create-wallet"
              title="デジタルウォレットを作成する"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/sell-nft/choose-blockchain"
              title="ブロックチェーンの選択"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/sell-nft/choose-marketplace"
              title="マーケットプレイスの選択"
            />
          </li>

          <li className="my-2">
            <RouterLink link="/sell-nft/mint-nft" title="Mintingしましょう" />
          </li>

          <li className="my-2">
            <RouterLink link="/sell-nft/list-nft" title="Listingしましょう" />
          </li>

          <li className="my-2">
            <RouterLink
              link="/sell-nft/promote-nft"
              title="NFTのプロモーション"
            />
          </li>

          <li className="my-2">
            <RouterLink link="/sell-nft/celebration" title="NFTを販売した後" />
          </li>

          <li className="my-2">
            <RouterLink
              link="/sell-nft/gas"
              title="ガス代の相場を調べる方法について"
            />
          </li>
        </ol>
        <NaviButtons
          return="重要な用語についての説明"
          returnlink="/info-nft/important-terminologies"
          next="デジタルウォレットを作成する"
          nextlink="/sell-nft/create-wallet"
        />
      </div>
    </div>
  );
}
