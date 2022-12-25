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
          NFTの異議
        </Typography>
        <Card
          color="purple"
          title="環境問題"
          content={[
            <>
              Ethereumのメインネットは2022年9月15日のマージの後、
              <span className="text-orange-500 font-bold">
                Proof-of-Stake (PoS)
              </span>
              を使用するようになりました。
              <br /> マージにより、Ethereumのエネルギー消費はおよそ
              <span className="text-pink-600 font-bold">~99.95%</span>
              減少しました。
              <br />
              <Link
                link="https://ethereum.org/ja/upgrades/merge/"
                title="もっと読む"
              />
            </>,
          ]}
        />

        <Video
          youtubeId="yH2t4ayYGDI"
          title="How Twitter Betrayed Artists and A Defense of NFTs"
        />

        <NaviButtons
          return="よくある質問"
          returnlink="/faq"
          next="おすすめの読み物"
          nextlink="/rec-readings"
        />
      </div>
    </div>
  );
}
