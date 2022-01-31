import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Terminologies() {
  return (
    <div className="terminologies">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          用語解説
        </Typography>
        <Card
          color="green"
          content={[
            <div>
              <RouterLink
                link="/info-nft/important-terminologies"
                title="NFTを販売するためのガイド"
              />
              だけではなく、
              <span className="text-green-600 font-bold">
                コミュニティでよく使用されるスラング
              </span>
              などのリストも充実させました。
            </div>,
          ]}
        />
        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="GM" explain="おはよう。" />
          </li>
          <li>
            <WordExplain word="GN" explain="おやすみ。" />
          </li>
          <li>
            <WordExplain word="NGMI" explain="失敗するでしょう。" />
          </li>
          <li>
            <WordExplain word="GMI" explain="成功するでしょう。" />
          </li>
          <li>
            <WordExplain
              word="WAGMI"
              explain="私たち全員が成功するでしょう。"
            />
          </li>
          <li>
            <WordExplain word="DYOR" explain="自身の研究をしてください。" />
          </li>
          <li>
            <WordExplain
              word="FOMO"
              explain="楽しいことなどを経験しそこなう。"
            />
          </li>
          <li>
            <WordExplain word="FUD" explain="恐れ、不確実性、そして疑い。" />
          </li>
          <li>
            <WordExplain
              word="HODL"
              explain="死ぬまで待って（NFTを売らずに持ち続けること)。"
            />
          </li>
          <li>
            <WordExplain word="Rekt" explain="下手なトレードで大損した人。" />
          </li>
          <li>
            <WordExplain word="PFP" explain="プロフィールのアイコン。" />
          </li>
          <li>
            <WordExplain
              word="Paper Hands"
              explain="NFTをすぐに売ってしまう人たち。"
            />
          </li>
          <li>
            <WordExplain
              word="Diamond Hands"
              explain="プロジェクトのためにNFTを長期的に保有する人たち。"
            />
          </li>
          <li>
            <WordExplain
              word="Whale"
              explain="ETHを大量に持ち、大量のアセットを購入している人たち。"
            />
          </li>
          <li>
            <WordExplain word="Bag" explain="保有するNFT資産。" />
          </li>
          <li>
            <WordExplain
              word="Bagholder"
              explain={[
                <span>
                  長期保有しすぎて資産価値が下がった投資家。
                  <span className="relative bottom-0.5 right-1.5">
                    <ArrowRightAltIcon />
                  </span>
                  巨額の損失
                </span>,
              ]}
            />
          </li>
          <li>
            <WordExplain word="Shitcoin" explain="価値や目的のない暗号通貨。" />
          </li>
          <li>
            <WordExplain
              word="Memecoin"
              explain="ミームをもとにした暗号通貨。"
            />
          </li>
          <li>
            <WordExplain
              word="Apeing In"
              explain="プロジェクトのために多くのETHを使うこと。"
            />
          </li>
          <li>
            <WordExplain
              word="Pumping"
              explain="NFT資産価格を早く引き上げること。"
            />
          </li>
          <li>
            <WordExplain
              word="Pump and dump"
              explain="プロジェクトのNFTを大量に購入して価格をつり上げ、ピーク時に転売して手っ取り早く儲けること。"
            />
          </li>
          <li>
            <WordExplain
              word="Alpha"
              explain="まだ誰も知らない、誰かが持っている情報のこと。"
            />
          </li>
          <li>
            <WordExplain word="Floor" explain="プロジェクト内の最安値。" />
          </li>
          <li>
            <WordExplain
              word="Sweep the floor"
              explain="フロアプライスでNFTを全量買い取り、プロジェクトの価格を引き上げること。"
            />
          </li>
          <li>
            <WordExplain word="Flex" explain="見せびらかすこと。" />
          </li>
          <li>
            <WordExplain word="Wen" explain="いつ。" />
          </li>
          <li>
            <WordExplain
              word="DAO"
              explain="Decentralized autonomous organization = 口座を共有するコミュニティ。"
            />
          </li>
          <li>
            <WordExplain word="Ser" explain="サー。" />
          </li>
          <li>
            <WordExplain
              word="Probably Nothing"
              explain="皮肉を言うときに使います。"
            />
          </li>
          <li>
            <WordExplain word="Fren" explain="友達。" />
          </li>
          <li>
            <WordExplain
              word="McDonalds"
              explain="NGMI時のバックアッププラン。"
            />
          </li>
          <li>
            <WordExplain
              word="Generative Art"
              explain="特定のアセットを使ってmintされたときに、ブロックチェーン上でアルゴリズム的に作成されるアート。"
            />
          </li>
          <li>
            <WordExplain
              word="Looks Rare"
              explain="NFTではレアリティが重要であるという言葉を皮肉った人が言った言葉。"
            />
          </li>
          <li>
            <WordExplain word="IRL" explain="実生活。" />
          </li>
          <li>
            <WordExplain
              word="Liquidity"
              explain="NFTの購入に利用可能なETH。"
            />
          </li>
          <li>
            <WordExplain word="Lambo" explain="金持ちになる。" />
          </li>
          <li>
            <WordExplain word="Wen Lambo?" explain="いつ金持ちになるの？" />
          </li>
          <li>
            <WordExplain
              word="No-coiner"
              explain="暗号資産に懐疑的な人、コインを持っていない人。"
            />
          </li>
          <li>
            <WordExplain word="Noob/Newb" explain="初心者、未経験者。" />
          </li>
          <li>
            <WordExplain word="LFG" explain="行くぞー！" />
          </li>
          <li>
            <WordExplain
              word="Gas wars"
              explain="同一プロジェクトの大量mintによりガスが大幅に増加すること。"
            />
          </li>
          <li>
            <WordExplain word="Ded" explain="死。" />
          </li>
          <li>
            <WordExplain
              word="Rug"
              explain="プロジェクトに逃げ込むクリエイター。"
            />
          </li>
          <li>
            <WordExplain word="Derivative" explain="ファンアート。" />
          </li>
          <li>
            <WordExplain
              word="OG"
              explain={[
                <span>
                  Original gangster{" "}
                  <span className="relative bottom-0.5">
                    <ArrowRightAltIcon />
                  </span>{" "}
                  創立メンバー、元祖。
                </span>,
              ]}
            />
          </li>
          <li>
            <WordExplain word="Seems legit" explain="将来性があること。" />
          </li>
          <li>
            <WordExplain word="NFA" explain="財政的なアドバイスではない。" />
          </li>
          <li>
            <WordExplain
              word="Airdrop"
              explain="オーナーがNFTを無料で贈ること。"
            />
          </li>
        </ul>
        <NaviButtons
          return="コミュニティ"
          returnlink="/community"
          next="カルチャー"
          nextlink="/community/culture"
        />
      </div>
    </div>
  );
}
