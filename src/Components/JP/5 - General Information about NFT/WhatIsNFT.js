import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

export default function WhatIsNFT() {
  return (
    <div className="what-is-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFTって何?
        </Typography>

        <div className="mt-5">
          NFTとは、
          <span className="text-orange-500">
            Non-fungible tokens（非代替性トークン）
          </span>
          の略称です。
        </div>
        <Card
          color="pink"
          content={[
            <div>
              詳しい説明は{" "}
              <Link
                link="https://en.wikipedia.org/wiki/Non-fungible_token"
                title="NFT Wikipediaのページ"
              />{" "}
              をご覧ください。
            </div>,
          ]}
        />
        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          簡単な説明
        </Typography>
        <WordExplain
          word="Non-fungible"
          explain="唯一無二の存在であり、他の追随を許さない存在。"
        />
        <WordExample example="高校生のあなたは、高校の数学の先生の代わりにはなれない。" />

        <WordExplain
          word="Token"
          explain="ブロックチェーンを通じてオンラインで取引できるようになるデジタルデータです。"
        />
        <WordExample example="私たちが日常的に使っている紙幣はただの紙ですが、商品と交換されるお金という価値が付加されています。" />

        <Card
          color="orange"
          content={[
            <div>
              つまり、一度NFTに変換されたアートワークは、ブロックチェーン上で永遠に利用可能であり、削除や複製は不可能です。
              その後、ブロックチェーンを介して他の人と取引するために使用することができます。
            </div>,
          ]}
        />
        <NaviButtons
          return="NFTについての一般情報"
          returnlink="/info-NFT"
          next="Blockchainって何?"
          nextlink="/info-nft/what-is-blockchain"
        />
      </div>
    </div>
  );
}
