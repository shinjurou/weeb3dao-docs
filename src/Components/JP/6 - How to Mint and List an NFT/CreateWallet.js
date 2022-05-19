import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import Wallets from "./Wallets";
import Video from "../0 - Index/Video";
import RouterLink from "../0 - Index/RouterLink";

export default function CreateWallet() {
  return (
    <div className="create-wallet">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          デジタルウォレットを作成する
        </Typography>

        <div className="mt-5">
          まず初めにデジタルウォレットを作成する必要があります。ここでは、おすすめのウォレットを紹介します。
        </div>

        <Card
          color="green"
          title="各ブロックチェーンに対応しているオススメのウォレット"
          content={[
            <ul className="list-disc ml-4">
              <li className="mt-1">
                Ethereum: <Link link="https://metamask.io/" title="MetaMask" />
              </li>
              <li className="mt-1">
                Tezos: <Link link="https://wallet.kukai.app/" title="Kukai" />
              </li>
            </ul>,
          ]}
        />

        <Wallets />

        <Card
          color="pink"
          title="知っておきたい大切なこと"
          content={[
            <div>
              <div className="mb-2">
                デジタルソフトという性質上、
                <span className="text-red-600 font-bold">ハッキング</span>
                に遭う可能性が常につきまといます。
              </div>
              <div className="mb-2">
                このため、安全性を確保するために、
                <span className="text-red-600 font-bold">絶対に</span>
                やってはいけないことをいくつか挙げておきます。
              </div>
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  <span className="text-red-600 font-bold">絶対に</span>
                  所有するウォレットのシードフレーズ(リカバリーフレーズとも)や秘密鍵を他人に教えないでください。
                </li>
                <li className="mt-1">
                  <span className="text-red-600 font-bold">絶対に</span>
                  TwitterやDiscordのDMで送られてきたランダムなリンクはクリックしないでください。
                </li>
              </ul>
            </div>,
          ]}
        />
        <Card
          color="green"
          title="おすすめ"
          content={[
            <div>
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  シードフレーズは物理的な方法で保存してください。
                </li>
                <li className="mt-1">
                  知らない人からリンクを送られたら{" "}
                  <Link link="https://discord.gg/vktnAzvyNQ" title="Anifam" />{" "}
                  や{" "}
                  <Link link="https://discord.gg/MSYmemxJt5" title="uwucrew" />{" "}
                  のDiscordサーバーで聞いてみる。
                </li>
                <li className="mt-1">
                  ホットウォレットとコールドウォレットの両方を使用する。ホットウォレットとコールドウォレットに関する情報は、
                  <RouterLink
                    link="/info-nft/what-is-digital-wallet"
                    title="こちら"
                    light={true}
                  />
                  で入手できます。
                </li>
              </ul>
            </div>,
          ]}
        />

        <Card
          color="pink"
          title="アーティストが自分の身を守るためにぜひ見ていただきたいのが、次の動画です。"
          content={[<Video youtubeId="3kcXVEDB64Y" />]}
        />
        <NaviButtons
          return="作品の販売について"
          returnlink="/sell-NFT"
          next="ブロックチェーンの選択"
          nextlink="/sell-nft/choose-blockchain"
        />
      </div>
    </div>
  );
}
