import React from "react";
import Typography from "@mui/material/Typography";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";

export default function InfoNFT() {
  return (
    <div className="info-NFT">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFTについての一般情報
        </Typography>
        インターネット上ではNFTに関連する膨大な量の情報が提供されています。そこで、よくあるご質問をわかりやすく解説していきます。
        <ol className="list-decimal ml-14 mt-4 text-blue-500 font-bold">
          <li className="my-2">
            <RouterLink link="/info-nft/what-is-nft" title="NFTって何?" />
          </li>

          <li className="my-2">
            <RouterLink
              link="/info-nft/what-is-blockchain"
              title="Blockchainって何?"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/info-nft/what-is-digital-wallet"
              title="Digital Walletって何?"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/info-nft/important-terminologies"
              title="その他の重要な用語についての説明"
            />
          </li>
        </ol>
        <NaviButtons
          return="weeb3dao Mint 奨学金制度"
          returnlink="/weeb3dao-scholarship"
          next="NFTって何?"
          nextlink="/info-nft/what-is-nft"
        />
      </div>
    </div>
  );
}
