import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

export default function WhatIsBlockchain() {
  return (
    <div className="what-is-blockchain">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Blockchainって何?
        </Typography>

        <Card
          color="pink"
          content={[
            <div>
              詳しい説明は{" "}
              <Link
                link="https://en.wikipedia.org/wiki/Blockchain"
                title="Blockchain Wikipediaのページ"
              />{" "}
              をご覧ください。
            </div>,
          ]}
        />

        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          簡単な説明
        </Typography>

        <WordExplain
          word="Blockchain"
          explain="ブロックチェーンとは、オンラインで起こるすべての活動を記録し、ネットワーク上にすべてを保存するシステムです。"
        />
        <WordExample explain="会社の資金が記載されている財務帳簿、売上高など。" />

        <Card
          color="orange"
          title="知っておくべき重要な事項"
          content={[
            <ul className="list-disc ml-4">
              <li>すべての記録は、誰でも見ることができます。</li>
              <li>
                すべての記録は永久的であり、誰も変更したり削除したりすることはできません。
              </li>
              <li>
                ブロックチェーンは、オンラインで利用可能なすべてのウォレットで、個人の身元を制限することなく、オンラインで起こるすべてのことを記録します。
              </li>
            </ul>,
          ]}
        />

        <Card
          color="green"
          content="ブロックチェーンの性質上、利用可能なすべての口座の透明性を確保することができます。"
        />

        <Card
          color="purple"
          title="なぜそれが重要なの?"
          content={[
            <ul className="list-disc ml-4">
              <li>
                透明性とは、誰も違法行為を隠すことができないことを意味します。
              </li>
              <li>
                これにより、コレクターは疑わしい活動を見つけることができ、アーティストが搾取されるのを防ぐことができるのです。
              </li>
            </ul>,
          ]}
        />
        <NaviButtons
          return="NFTって何?"
          returnlink="/info-nft/what-is-nft"
          next="Digital Walletって何?"
          nextlink="/info-nft/what-is-digital-wallet"
        />
      </div>
    </div>
  );
}
