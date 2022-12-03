import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import NaviButtons from "../0 - Index/NaviButtons";

// Importing sections
import Fee from "./Fee";
import ETHmarket from "./ETHmarket";
import XTZmarket from "./XTZmarket";

export default function ChooseMarketplace() {
  return (
    <div className="choose-marketplace">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          マーケットプレイスの選択
        </Typography>

        <Card
          color="pink"
          content={[
            <div>
              現在、一部のプラットフォーム（KnownOrigin、SuperRare、Kalamint）については、入手できる情報が限られています。情報は、より多くのアニメNFTアーティストがそのプラットフォームに統合され、より正確な情報を入手した時点で更新されます。
              <div className="mt-2 text-pink-600 font-bold">
                ここに掲載されていない情報をお持ちの方は、Shinjurouまでご連絡いただければ、リストを更新させていただきます。
              </div>
            </div>,
          ]}
        />

        <div className="mt-8">
          <Typography variant="h3" color="inherit" component="h3" mb={2}>
            プラットフォームごとの料金比較
          </Typography>
        </div>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Fee />

          <div className="mt-8">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              Ethereumマーケットプレイス
            </Typography>
            <ETHmarket />
          </div>

          <div className="mt-8">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              Tezosマーケットプレイス
            </Typography>
            <XTZmarket />
          </div>
        </div>
        <NaviButtons
          return="ブロックチェーンの選択"
          returnlink="/sell-nft/choose-blockchain"
          next="Mintingしましょう"
          nextlink="/sell-nft/mint-nft"
        />
      </div>
    </div>
  );
}
