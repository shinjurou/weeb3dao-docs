import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import environmentchart from "../../../Imgs/environmentchart.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Environment() {
  return (
    <div className="environment">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          環境問題
        </Typography>
        <Card
          color="green"
          title={[
            <>
              この分析については、
              <Link
                link="https://sterlingcrispin.blogspot.com/2021/02/crypto-art-sky-is-not-falling.html?m=1"
                title="このブログ記事"
              />
              で詳しく解説しています。
            </>,
          ]}
        />
        <Card
          color="pink"
          title="概要 (これは上記のブログ記事から引用しました)"
          content={[
            <div>
              暗号資産の問題は未解決の問題ですが、専門家が解決に向けて取り組んでいる既知の問題でもあります。NFTはProof
              of WorkからProof of
              Stakeに移行する必要があり、Ethereum自体もその移行期にあります。
              <span className="text-pink-600 font-bold">
                もし、ビットコインの0.07%のマイナス効果について書かれた記事のすべてが、肉が私たちの年間CO2排出量の15%を占めていることや、誰かを週に3-4回ベジタリアンするよう説得するもの、化石燃料補助金の終了について書かれていたら、それは千倍以上のプラスの影響を与えるでしょう
              </span>
              。繰り返しになりますが、注意は有限な資源であり、怒りは注意の一種です。私たちは、実際に重要なところに、適切な規模で努力を集中すべきです。
              <div className="mt-5">
                <span className="text-green-600 font-bold">
                  アーティストやコレクターへ:
                  NFTを販売している皆さんには、収入の5％から10％を重要だと思うチャリティーに寄付することをお勧めします。環境に還元したり、困難な状況にある地域社会に還元する。これはアートを売買するための新しいシステムであり、旧来のシステムよりも公平で慈善的な行いをするチャンスです。
                </span>
              </div>
            </div>,
          ]}
        />
        <figure>
          <img
            src={environmentchart}
            alt="SuperRare's button"
            className="rounded"
          />
          <figcaption className="absolute text-xs -mt-7 text-zinc-700 px-1 ">
            <div className="bg-slate-500 bg-opacity-25 p-1 rounded">
              {" "}
              <Link
                link="https://sterlingcrispin.blogspot.com/2021/02/crypto-art-sky-is-not-falling.html?m=1"
                title="「NFTs and Crypto Art: The Sky is not Falling」"
              />
              からの画像
            </div>
          </figcaption>
          <Card
            color="pink"
            content={[
              <div>
                2017年の暗号資産とその他の分野のエネルギー消費源についてのグラフです。
                <span className="relative bottom-0.5">
                  <ArrowRightAltIcon />
                </span>{" "}
                <span className="text-pink-600 font-bold">
                  暗号資産のエネルギー消費は、ここに挙げた他の分野ほど大きくはない。
                </span>
              </div>,
            ]}
          />
        </figure>
        <NaviButtons
          return="FAQ"
          returnlink="/faq"
          next="画像検索システム"
          nextlink="/reverse-img-search"
        />
      </div>
    </div>
  );
}
