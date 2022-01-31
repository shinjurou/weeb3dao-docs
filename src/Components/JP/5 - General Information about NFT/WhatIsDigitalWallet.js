import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import RouterLink from "../0 - Index/RouterLink";
import HotColdWalletTable from "./HotColdWalletTable";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

export default function WhatIsDigitalWallet() {
  return (
    <div className="what-is-digital-wallet">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Digital Walletって何?
        </Typography>

        <Card
          color="pink"
          content={[
            "詳しい説明は ",
            <Link
              link="https://en.wikipedia.org/wiki/Digital_wallet"
              title="Digital Wallet Wikipediaのページ"
            />,
            " をご覧ください。",
          ]}
        />

        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          簡単な説明
        </Typography>
        <WordExplain
          word="Digital Wallet"
          explain="デジタルウォレットは、ブロックチェーン上にすべてのデジタル資産を保存することができるソフトウェアです。"
        />
        <WordExample explain="あなたの財布には紙幣やクレジットカードが収納されています。" />

        <Card
          color="orange"
          content="あなたのウォレットで行われたすべての取引は、ブロックチェーン上に記録され、誰もが見ることができるようになります。"
        />

        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          Hot Wallet vs. Cold Wallet
        </Typography>
        <HotColdWalletTable />
        <div className="my-4">
          詳細な比較は
          <Link
            link="https://www.gemini.com/cryptopedia/crypto-wallets-hot-cold"
            title="こちら"
          />
          でご覧いただけますので、ご参考にしてください。
        </div>

        <Card
          color="orange"
          title="どのウォレットを使えばいいのですか？"
          content={[
            <div>
              どちらにも利点があるので、両方使うのが一番理想的でしょう。
              <br />
              <Link
                link="https://www.gemini.com/cryptopedia/crypto-wallets-hot-cold#section-best-of-both-wallet-worlds"
                title="こちらに、両方のウォレットを使用する方法についての良い例があります。"
              />
            </div>,
          ]}
        />

        <Card
          color="green"
          title="おすすめのウォレット"
          content={[
            <ul className="list-disc ml-4">
              <li>
                <span className="font-bold">Hot wallet:</span> Hot
                walletのオススメ一覧は
                <RouterLink link="/sell-nft/create-wallet" title="こちら" />。
              </li>
              <li>
                <span className="font-bold">Cold wallet:</span> Cold
                walletは現在{" "}
                <Link
                  link="https://shop.ledger.com/products/ledger-nano-s"
                  title="Ledger Nano S"
                />{" "}
                と <Link link="https://trezor.io/" title="Trezor" />{" "}
                がベストです。
                (NanoXはbluetoothがあるので攻撃される可能性が高い)
              </li>
            </ul>,
          ]}
        />
        <NaviButtons
          return="Blockchainって何?"
          returnlink="/info-nft/what-is-blockchain"
          next="その他の重要な用語についての説明"
          nextlink="/info-nft/important-terminologies"
        />
      </div>
    </div>
  );
}
