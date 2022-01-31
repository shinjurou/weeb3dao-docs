import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

import POWPOS from "./POWPOS";

export default function ImportantTerminologies() {
  return (
    <div className="important-terminologies">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          その他の重要な用語についての説明
        </Typography>

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Shill"
              explain="誰かに何かを買うように説得すること（通常、自分が所有しているか、既得権益を持っているもの） - ほとんどの場合、悪い意味合いを持つ。"
            />
          </li>
          <li>
            <WordExplain
              word="ATH"
              explain="オールタイムハイ（あるアーティストやプロジェクトのNFTの最高販売価格)。"
            />
          </li>
          <li>
            <WordExplain
              word="Floor"
              explain="アーティストまたはプロジェクトのNFTの最低価格。"
            />
          </li>
          <li>
            <WordExplain
              word="Moon"
              explain="NFTのアーティストやプロジェクトで、そのNFTの価格や出来高が高くなるもの。"
            />
          </li>
          <li>
            <WordExplain
              word="Bear market"
              explain="NFT市場が最悪の状態にあり、NFT価格が低い状態。"
            />
          </li>
          <li>
            <WordExplain
              word="Bull market"
              explain="NFT市場が絶好調で、NFT価格が高い状態。"
            />
          </li>
          <li>
            <WordExplain
              word="Blue Chip"
              explain="NFTのアーティストやプロジェクトで、コミュニティにとって重要だと思われるもの。"
            />
          </li>
        </ul>

        <Card
          color="teal"
          content="上記の用語はすべて、コミュニティでごく普通に使われているものです。"
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="ETH" explain="Ethereum(イーサリアム)。" />
          </li>
          <li>
            <WordExplain word="XTZ/TEZ" explain="Tezos(テゾス)。" />
          </li>
          <li>
            <WordExplain
              word="MATIC"
              explain="Polygonのブロックチェーン用通貨。"
            />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            "ETH、XTZ、Polygonは、現在利用可能なブロックチェーンの一種で、アニメNFTのアーティストが多く利用しているブロックチェーンです。その他のブロックチェーンについては、",
            <Link
              link="https://github.com/memo/eco-nft"
              title="こちら"
              light={true}
            />,
            "で詳しく解説しています。",
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="Mint" explain="NFTを作成すること。" />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            <div>
              NFTにするためには、それぞれの創作物をmintする必要があります。
              <div className="ml-16">
                <ul className="list-disc">
                  <li className="mt-1">
                    One mint = 1 NFT (ガス代が1回分掛かります)
                  </li>
                  <li className="mt-1">
                    Ten mints = 10 NFTs (ガス代が10回分掛かります)
                  </li>
                </ul>
              </div>
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="POW"
              explain="プルーフ・オブ・ワーク(Proof of Work)。"
            />
          </li>
          <li>
            <WordExplain
              word="POS"
              explain="プルーフ・オブ・ステーク(Proof of Stake)。"
            />
          </li>
          <li>
            <WordExplain
              word="Gas Fee"
              explain="ガス代。各取引がブロックチェーン上で処理されるために必要な手数料です。
              "
            />
            <WordExample explain="車を走らせるために、ガソリン代を払うこと。" />
          </li>
        </ul>

        <Card
          color="teal"
          content="POWもPOSも、あなたの創作物をNFTにするために、ブロックチェーンの仕組みの1つです。"
        />

        <POWPOS />

        <Card
          color="teal"
          content={[
            <div>
              ETHは、
              <span className="text-pink-600 font-bold">
                POSをモデルに現在開発中
              </span>
              で、
              <span className="text-green-600 font-bold">
                2022年にはETH2が実装される予定
              </span>
              となっています。
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="GWEI" explain="ギガウェイ(gigawei)。" />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            <div>
              GWEIは、ETHベースのブロックチェーン（Polygonを含む）上のすべてのトランザクションのガス代の測定単位である。
              <div className="ml-8">
                <ul className="list-disc">
                  <li className="mt-1">High GWEI = ガス代が高い</li>
                  <li className="mt-1">Low GWEI = ガス代が安い</li>
                </ul>
              </div>
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Smart Contract"
              explain="ブロックチェーン上で実行されるプログラム。"
            />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            <div>
              スマートコントラクトは、チームが各NFTをブロックチェーンに手動でアップロードしなくても、PFPプロジェクトから新しいNFT（複数可）をミントできるようにすることができます。
              <span className="text-pink-600 font-bold">
                コレクション用に独自のスマートコントラクトをFoundation上に展開することができます。または、Manifoldもスマートコントラクトを展開することができます。
              </span>
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Dutch auction"
              explain="NFTの価格が最高値から最安値になるまで定期的に下げられていくオークション。"
            />
            <WordExample
              notReal={true}
              explain="0.2ETHでオークションが開始し、2日後に0ETHまで下がりした。"
            />
          </li>
          <li>
            <WordExplain
              word="Layer 2 (L2)"
              explain="ETHブロックチェーンにおけるガス代の高さと取引速度の遅さの問題を解決するために開発されたソリューション。"
            />
          </li>
          <li>
            <WordExplain
              word="Burn"
              explain="ブロックチェーンからNFTを削除すること。"
            />
          </li>
          <li>
            <WordExplain
              word="WETH"
              explain="ETHを「Wrapped Ether」にラップして、他のETHベースのトークンと交換することができる。"
            />
          </li>
          <li>
            <WordExplain
              word="Transaction"
              explain="売買や取引のあらゆるやり取り。ブロックチェーン上で売買が行われる。"
            />
          </li>
          <li>
            <WordExplain
              word="ENS"
              explain="Ethereum Name Serviceは、Ethereumブロックチェーンに基づく命名システムで、ウォレットアドレスを短縮された登録名に置き換えることができます。"
            />
            <WordExample notReal={true} explain="doraemon.eth" />
          </li>
        </ul>
        <NaviButtons
          return="Digital Walletって何?"
          returnlink="/info-nft/what-is-digital-wallet"
          next="作品の販売について"
          nextlink="/sell-NFT"
        />
      </div>
    </div>
  );
}
