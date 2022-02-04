import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Celebration() {
  return (
    <div className="celebration">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFTを販売した後
        </Typography>

        <div className="mb-6"></div>
        <Card
          color="green"
          title="最初に収集したNFTおめでとうございます！コレクターやお世話になった方に感謝の気持ちを持ちましょう!"
          content={[
            <div>
              <ul className="list-disc ml-5">
                <li className="mt-1">
                  💟 売却後、
                  <span className="text-green-600 font-bold">
                    コレクターにお礼のメッセージを送りましょう
                  </span>
                  。
                </li>
                <li className="mt-1">
                  💝{" "}
                  <span className="text-green-600 font-bold">
                    コレクターへのプレゼントを描く
                  </span>
                  と良いですが、
                  <span className="text-teal-600 font-bold">
                    必須ではありません
                  </span>
                  。<span className="text-teal-600 font-bold">健康</span>
                  を優先し、
                  <span className="text-teal-600 font-bold">
                    バランスの取れたスケジュール
                  </span>
                  を組むことの方が重要です。
                </li>
                <li className="mt-1">
                  🙌🎉{" "}
                  <Link
                    link="https://discord.gg/vktnAzvyNQ"
                    title="AnifriendsのDiscordサーバーの「#congratsu」
                    チャネル"
                  />
                  に投稿するとお祝いしてもらえますよ! 💖
                </li>
              </ul>
            </div>,
          ]}
        />
        <NaviButtons
          return="NFTのプロモーション"
          returnlink="/sell-nft/promote-nft"
          next="ガス代の相場を調べる方法について"
          nextlink="/sell-nft/gas"
        />
      </div>
    </div>
  );
}
