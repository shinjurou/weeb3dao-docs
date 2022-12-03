import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Importing sections
import Blockchains from "./Blockchains";

export default function ChooseBlockchain() {
  return (
    <div className="choose-blockchain">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          ブロックチェーンの選択
        </Typography>

        <div className="mt-5">
          ブロックチェーンの情報はこちらの
          <Link
            link="https://github.com/memo/eco-nft"
            title="Github ページ"
            light={true}
          />
          から一覧を確認できるようになっていますが、ここでは現在アニメNFTのアーティストが利用している人気のブロックチェーンだけを取り上げます。
        </div>

        <Card
          color="purple"
          title="なぜブロックチェーンの種類を理解することが重要なのか？"
          content={[
            <ul className="list-disc ml-4">
              <li className="mt-1">
                各ブロックチェーンにはそれぞれいくつかのNFTマーケットプレイスがあります。現在、ほとんどのマーケットプレイスは、
                <span className="text-pink-600 font-bold">1つ</span>
                のブロックチェーンにしか対応していません。（OpenSeaは例外）
              </li>
              <li className="mt-1">
                NFTをmintするブロックチェーンの選択が、
                <span className="text-orange-500 font-bold">
                  売上に影響を及ぼす可能性があります
                </span>
                。なぜなら、NFTの売上は、そのブロックチェーンを使用してアート作品を購入するコレクターの数に影響されるからです。例えば、コレクターがEthereumしか使用しておらずTezosを持っていない場合、Tezosで出品されている作品を購入しようとはしないでしょう。{" "}
                <span className="relative bottom-0.5 right-0.5">
                  <ArrowRightAltIcon />
                </span>
                コレクターが作品を購入しようとしても、
                <span className="text-red-600 font-bold">
                  とても不便に感じてしまうからです
                </span>
                。
              </li>
            </ul>,
          ]}
        />
        <Blockchains />
        <div className="mt-8">
          <Typography variant="h3" color="inherit" component="h3" mb={2}>
            まとめ
          </Typography>

          <Card
            color="purple"
            title="どのブロックチェーンが一番いいのか?"
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    ブロックチェーンはそれぞれ
                    <span className="text-purple-700">
                      機能性や利用者が異なる
                    </span>
                    ため、
                    <span className="text-orange-500">「一番いい」</span>
                    というものはありません。あなたが努力する限り、各ブロックチェーンにあなたの作品のコレクターが必ず存在します。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500">あなたの目的</span>
                    を達成できるようにするためには、優先順位に従ってブロックチェーンを選ぶことがとても重要です。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      優先順位の例
                    </span>
                  </li>
                </ul>
                <ul className="list-disc ml-10">
                  <li className="mt-1">
                    <span className="text-orange-500">一点ものの作品(1/1)</span>
                    を複数のエディションがある作品より高く売る: Ethereum
                  </li>
                  <li className="mt-1">
                    多くのコレクターに購入してもらうため、
                    <span className="text-orange-500">複数のエディション</span>
                    を販売する: Polygon、Tezos
                  </li>
                  <li className="mt-1">
                    環境に優しい
                    <span className="text-orange-500">ブロックチェーン</span>
                    で販売する: Polygon、Tezos
                  </li>
                  <li className="mt-1">
                    作品を
                    <span className="text-orange-500">コレクション</span>
                    として販売する: Ethereum、Polygon、Tezos
                  </li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="green"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  異なるブロックチェーンをいくつか
                  <span className="text-green-600 font-bold">
                    同時並行で使うことができます
                  </span>
                  し、ブロックチェーンごと、NFTマーケットプレイスごとに、
                  <span className="text-orange-500">異なるタイプの作品</span>
                  を発行して販売することもできるため、一つのブロックチェーンだけで活動する必要はありません。
                </li>

                <li className="mt-1">
                  <span className="text-green-600 font-bold">例</span>
                </li>

                <ul className="list-disc ml-6">
                  <li className="mt-1">
                    Ethereumでは細部にまでこだわった1/1の作品を、PolygonやTezosではよりシンプルな作品を造形する。
                    <span className="relative bottom-0.5 right-1">
                      <ArrowRightAltIcon />
                    </span>
                    この場合、複数のウォレットを使い、通貨を変換する必要がありますが、各ブロックチェーンの良いところを全て活用することができるようになります。
                  </li>
                </ul>

                <li className="mt-1">
                  <span className="text-pink-600">
                    イーサリアムとポリゴンの変換は、
                  </span>
                  テゾスと他の2つのブロックチェーンの変換に比べて
                  <span className="text-pink-600 font-bold">簡単</span>です。
                  <span className="relative bottom-0.5 right-1.5">
                    <ArrowRightAltIcon />
                  </span>
                  <span className="text-pink-600 font-bold">
                    複数のブロックチェーンを同時に利用する場合は、イーサリアムとポリゴンの利用を推奨します。
                  </span>
                </li>
              </ul>,
            ]}
          />
        </div>
        <NaviButtons
          return="デジタルウォレットを作成する"
          returnlink="/sell-nft/create-wallet"
          next="マーケットプレイスの選択"
          nextlink="/sell-nft/choose-marketplace"
        />
      </div>
    </div>
  );
}
