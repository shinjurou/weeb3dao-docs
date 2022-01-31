import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExample from "../0 - Index/WordExample";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import ethgas from "../../../Imgs/ethgas.png";
import ethgaschrome from "../../../Imgs/ethgaschrome.png";
import ethgastable from "../../../Imgs/ethgastable.png";
import blocknative from "../../../Imgs/blocknative.png";
import gasbotgg from "../../../Imgs/gasbotgg.png";
import gasbot from "../../../Imgs/gasbot.png";

export default function Gas() {
  return (
    <div className="gas">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          ガス代の管理方法について
        </Typography>

        <div className="mb-6"></div>
        <Card
          color="teal"
          content={[
            <div>
              <Link
                link="https://decenter.org/en/what-are-gas-gas-limit-and-gas-price-in-the-ethereum-network"
                title="こちら"
              />
              ではgwei、ガス料金、ガス上限について解説した記事を掲載しています。
            </div>,
          ]}
        />
        <Card
          color="green"
          content={[
            <div>
              GWEIが
              <span className="text-pink-600 font-bold">最も低くなる</span>
              曜日と時間帯があります。
              <WordExample
                notReal={true}
                explain={[
                  <>
                    週の最高値が
                    <span className="text-pink-600 font-bold">200GWEI</span>
                    、週の最低値が
                    <span className="text-pink-600 font-bold">30GWEI</span>。
                  </>,
                ]}
              />
              <div className="mt-2">
                GWEIは1時間ごとに変動し、毎週一貫性がありません。もし、ガス代が高くならないようにしたいのであれば、ガス料金を把握するために、以下のツールをチェックしてみてください。
              </div>
            </div>,
          ]}
        />

        <Divider>
          <Chip label="ガス追跡ツール" />
        </Divider>
        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div className="mt-1">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={3}
              mb={1}
            >
              <Link
                link="https://chrome.google.com/webstore/detail/blocknative-eth-gas-estim/ablbagjepecncofimgjmdpnhnfjiecfm"
                title="Chrome用のBlocknativeイーサリアムガス推定器"
                light={true}
              />
            </Typography>

            <img
              src={ethgas}
              alt="How to pin the BlockNative extension in Chrome."
              className="rounded mb-2"
            />
            <div className="mb-3">
              ピンをクリックすると、Chromeにインストールされ、かんたんに確認することができます。
            </div>
            <img
              src={ethgaschrome}
              alt="BlockNative extension pinned in Chrome."
              className="rounded mb-2"
            />
            <div className="mb-3">
              ここに表示されている数値は
              <Link
                link="https://www.blocknative.com/gas-estimator"
                title="BlockNative"
              />
              のものです。
            </div>
            <div className="mb-3">
              アイコンをクリックすると、この画面が表示されます。
            </div>

            <img
              src={ethgastable}
              alt="BlockNative Gas Table."
              className="rounded mt-2"
            />
          </div>

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={3}
              mb={1}
            >
              <Link
                link="https://www.blocknative.com/gas-estimator"
                title="Blocknativeウェブサイト"
                light={true}
              />
            </Typography>
            <div className="mb-3">
              Blocknativeは、UTCタイムゾーンで
              <span className="text-orange-500 font-bold">
                1週間を通して24時間
              </span>
              、GWEI価格の概要をまとめています。
            </div>
            <img
              src={blocknative}
              alt="Blocknative Gas Table"
              className="rounded mb-2"
            />
            <ul className="list-disc  ml-6">
              <li className="mt-1">グラフの右端が今日のGWEIになります。</li>
              <li className="mt-1">逆に左端が7日前のGWEIになります。</li>
              <li className="mt-1">
                濃い紫色になればなるほどガス代は安くなります。
              </li>
              <li className="mt-1">
                最も薄い紫色がその週の最も高いガス代となります。
              </li>
            </ul>
            <Card
              color="green"
              content={[
                <div>
                  <span className="text-green-600 font-bold">週末</span>
                  は他の曜日と比べて利用者が少ないため、GWEIは最も低くなる傾向があります。
                  <span className="text-pink-600 font-bold">
                    ですが、これはあくまで傾向というだけなので、例外もあります。
                  </span>
                </div>,
              ]}
            />
          </div>

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={3}
              mb={1}
            >
              <Link
                link="https://top.gg/bot/631048498002919434"
                title="GasTrackerのDiscordボット"
                light={true}
              />
            </Typography>
            <ul className="list-disc ml-6">
              <li className="mt-1">
                NFT関連のDiscordサーバーには
                <span className="text-pink-600 font-bold">
                  大抵このbotが入っています
                </span>
                。
              </li>
              <li className="mt-1">
                自分のサーバーに招待したい場合、
                <span className="text-pink-600 font-bold">「Invite」</span>
                をクリックして下さい。
              </li>
            </ul>
            <img
              src={gasbotgg}
              alt="MakersPlace Upload Creation button"
              className="rounded my-2"
            />
            <ul className="list-disc ml-6">
              <li className="mt-1">
                ボットはDiscordの
                <span className="text-pink-600 font-bold">右側にあるタブ</span>
                にでてくるようになるので、そこから現在のガス代が確認できるようになります。
              </li>
            </ul>

            <img
              src={gasbot}
              alt="MakersPlace Upload Creation button"
              className="rounded mt-2"
            />
          </div>
        </div>
        <NaviButtons
          return="NFTを販売した後"
          returnlink="/sell-nft/celebration"
          next="NFTをBurnする"
          nextlink="/burn-NFT"
        />
      </div>
    </div>
  );
}
