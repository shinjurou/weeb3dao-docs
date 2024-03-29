import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import Video from "../0 - Index/Video";

export default function RecReadings() {
  return (
    <div className="rec-readings">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          おすすめの読み物
        </Typography>
        <Card
          color="green"
          title="コミュニティの素晴らしい個人によって作成されたさまざまな参考資料！"
        />
        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div className="mt-0">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              アーティスト向け情報
            </Typography>
            <ul className="list-disc mt-2 ml-6">
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/ranbuta.eth/kHBvXP32ANgDqKP56BKv--1HNopz-O02Qn-Y4orU0Qs"
                  title="アーティストとして思うこと（2022年1月)"
                  light={true}
                />{" "}
                - 著者{" "}
                <Link
                  link="https://twitter.com/shinjuroueth"
                  title="@shinjuroueth"
                  light={true}
                />{" "}
                | 翻訳者{" "}
                <Link
                  link="https://twitter.com/PigThePersona"
                  title="@PigThePersona"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/ranbuta.eth/Bm38FDKr3Yg6XPbprvJhECVTxcl4nYKoGrdTV4pduJI"
                  title="コレクターとして思うこと（2021年11月)"
                  light={true}
                />{" "}
                - 著者{" "}
                <Link
                  link="https://twitter.com/robek_world"
                  title="@robek_world"
                  light={true}
                />{" "}
                | 翻訳者{" "}
                <Link
                  link="https://twitter.com/PigThePersona"
                  title="@PigThePersona"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/nishiyama.eth/I7zlaTr65iJmg34f-Bnbn_93AzPwR4D-mMRdqNh8WkE"
                  title="あなたのNFTを買わない理由"
                  light={true}
                />{" "}
                - 著者{" "}
                <Link
                  link="https://twitter.com/pro_seafood"
                  title="@pro_seafood"
                  light={true}
                />{" "}
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/0TL_/status/1520584560731639808"
                  title="アーティスト向け早いスレッド"
                  light={true}
                />{" "}
                - 著者{" "}
                <Link
                  link="https://twitter.com/shinjuroueth"
                  title="@shinjuroueth"
                  light={true}
                />{" "}
                | 翻訳者{" "}
                <Link
                  link="https://twitter.com/0TL_"
                  title="@0TL_"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/pawwaoart/status/1505847282314641408"
                  title="「Buy Now」と「Auction」の違い"
                  light={true}
                />{" "}
                - 著者{" "}
                <Link
                  link="https://twitter.com/pawwaoart/"
                  title="@pawwaoart"
                  light={true}
                />{" "}
                | 翻訳者{" "}
                <Link
                  link="https://twitter.com/0TL_"
                  title="@0TL_"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/ranbuta.eth/iNjmkCfbqC3JdZu4NU480XA_ZbuZIbavesaT18lDAQE"
                  title="OpenSea Collections (Polygon) コントラクト叩いてNFTを送る方法"
                  light={true}
                />{" "}
                - 著者{" "}
                <Link
                  link="https://twitter.com/PigThePersona"
                  title="@PigThePersona"
                  light={true}
                />
              </li>
            </ul>
            <div className="mb-3">
              <Video
                youtubeId="8Kqz2dnpaKY"
                title="Saito Naoki earned 6 million yen with one illustration"
              />
            </div>
          </div>

          <div className="mt-5">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              セキュリティ
            </Typography>
            <ul className="list-disc mt-2 ml-6">
              <li className="mb-0">
                <Link
                  link="https://twitter.com/0TL_/status/1489110748005810176"
                  title="scamを防ぐために"
                  light={true}
                />{" "}
                - 著者{" "}
                <Link
                  link="https://twitter.com/shinjuroueth"
                  title="@shinjuroueth"
                  light={true}
                />{" "}
                | 翻訳者{" "}
                <Link
                  link="https://twitter.com/0TL_"
                  title="@0TL_"
                  light={true}
                />
              </li>
            </ul>
          </div>
        </div>
        <NaviButtons
          return="NFTの異議"
          returnlink="/controversy"
          next="画像検索システム"
          nextlink="/reverse-img-search"
        />
      </div>
    </div>
  );
}
