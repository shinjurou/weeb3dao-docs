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
          암호화폐 지갑은 무엇인가요?'
        </Typography>

        <Card
          color="pink"
          content={[
            "Please refer to the ",
            <Link
              link="https://en.wikipedia.org/wiki/Digital_wallet"
              title="Digital Wallet Wikipedia page"
            />,
            " for the full explanation.",
          ]}
        />

        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          쉬운 설명
        </Typography>
        <WordExplain
          word="Digital Wallet"
          explain="This is a
          software that can store all your digital assets on the Blockchain."
        />
        <WordExample explain="Your wallet storing your paper money and credit cards." />

        <Card
          color="orange"
          content="암호화폐 지갑에서 발생하는 모든 거래내역들은 블록체인에 기록되고 모두가 볼 수 있습니다."
        />

        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          Hot Wallet(소프트웨어 지갑) vs Cold Wallet(하드웨어 지갑)
        </Typography>
        <HotColdWalletTable />
        <div className="my-4">
          An indepth comparison is available{" "}
          <Link
            link="https://www.gemini.com/cryptopedia/crypto-wallets-hot-cold"
            title="here"
          />{" "}
          for further reading.
        </div>

        <Card
          color="orange"
          title="어떤 암호화폐 지갑을 써야할까요?"
          content={[
            <div>
              Both have its perks so using both would be the most ideal.
              <br />
              <Link
                link="https://www.gemini.com/cryptopedia/crypto-wallets-hot-cold#section-best-of-both-wallet-worlds"
                title="This section have good examples on how to utilize both wallet types"
              />
            </div>,
          ]}
        />

        <Card
          color="green"
          title="추천 암호화폐 지갑"
          content={[
            <ul className="list-disc ml-4">
              <li>
                <span className="font-bold">Hot wallet:</span> The list of
                recommendations for hot wallets are available{" "}
                <RouterLink link="/sell-nft/create-wallet" title="here" />.
              </li>
              <li>
                <span className="font-bold">Cold wallet:</span> The best cold
                wallet is currently{" "}
                <Link
                  link="https://shop.ledger.com/products/ledger-nano-s"
                  title="Ledger Nano S"
                />{" "}
                (Nano X has bluetooth so the chances of being attacked is
                higher) and <Link link="https://trezor.io/" title="Trezor" />.
              </li>
            </ul>,
          ]}
        />
        <NaviButtons
          return="블록체인은 무엇인가요?'"
          returnlink="/info-nft/what-is-blockchain"
          next="다른 중요 용어들에 대한 설명"
          nextlink="/info-nft/important-terminologies"
        />
      </div>
    </div>
  );
}
