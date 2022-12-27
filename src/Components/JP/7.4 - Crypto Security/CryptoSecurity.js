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
          暗号セキュリティ
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
              セキュリティガイド
            </Typography>
            <Card
              color="green"
              content={[
                <div>
                  <span className="text-pink-600 font-bold">
                    詐欺から自分自身を保護する
                  </span>
                  ために、
                  <Link
                    link="https://mirror.xyz/kiwi.eth/V5wMoTNHWf7diWQYieF5URxqZv4l9hGlly0mMmkiuhM"
                    title="「Kiwi's 暗号資産/NFT 安全ガイド」"
                  />
                  を読むことをお勧めします。
                </div>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="ガス代の相場を調べる方法について"
          returnlink="/gas"
          next="暗号資産取引所"
          nextlink="/crypto-exchange"
        />
      </div>
    </div>
  );
}

/* Placeholder

         <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              NFT Scam Guidebook
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

*/
