import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import Checkbox from "../0 - Index/Checkbox";
import NaviButtons from "../0 - Index/NaviButtons";

export default function DatabaseInfo() {
  return (
    <div className="database-info">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          データベース情報
        </Typography>

        <Card
          color="orange"
          content={[
            <div>
              本サイトに掲載されている情報は、
              <span className="text-pink-600">インターネット</span>や
              <span className="text-teal-500">アニメNFTサークル</span>の
              <span className="text-orange-500">アーティスト</span>並びに
              <span className="text-orange-500">コレクター</span>
              から提供された情報をもとにまとめたものです。
            </div>,
          ]}
        />

        <div className="contributors my-12 lg:ml-12 md:ml-6 sm:ml-2">
          <Typography variant="h3" color="inherit" component="h3">
            <span className="text-orange-500">提供者</span>
          </Typography>
          <ul className="list-disc mt-3 ml-5">
            <li className="my-2 ">
              <span className="bg-indigo-500 text-gray-800 p-0.5 rounded-sm">
                ウェブデベロッパー:
              </span>{" "}
              <Link link="https://twitter.com/shinjuroueth" title="shinjurou" />
              , <Link link="https://twitter.com/ligaratus_" title="ligaratus" />
            </li>
            <li className="my-2 ">
              <span className="bg-red-400 text-gray-800 p-0.5 rounded-sm">
                著者:
              </span>{" "}
              <Link link="https://twitter.com/shinjuroueth" title="shinjurou" />{" "}
              , <Link link="https://twitter.com/chionnera" title="Chione" />
            </li>
            <li className="my-2">
              <span className="bg-emerald-400 text-gray-800 p-0.5 rounded-sm">
                翻訳者:
              </span>{" "}
              <Link link="https://twitter.com/0TL_" title="Dogeza-chan" />{" "}
              (日本語),{" "}
              <Link link="https://twitter.com/0xARCANE" title="ARCANΞ" />{" "}
              (韓国語)
            </li>
            <li className="my-2">
              <span className="bg-orange-400 text-gray-800 p-0.5 rounded-sm">
                校正者:
              </span>{" "}
              <br />
              <div className="mt-1"></div>
              英語版:{" "}
              <Link
                link="https://twitter.com/morellostorment"
                title="morello"
              />
              , <Link link="https://twitter.com/ligaratus_" title="ligaratus" />
              , <Link link="https://twitter.com/Feireina" title="Fei" />,{" "}
              <Link link="https://twitter.com/blnkart_" title="BL!NK" />,{" "}
              <Link link="https://twitter.com/PausePLayed" title="PausePlay" />
              <br />
              日本語版:{" "}
              <Link link="https://twitter.com/0TL_" title="Dogeza-chan" />
              , <Link link="https://twitter.com/piprycto" title="Fao" />,{" "}
              <Link link="https://twitter.com/PigThePersona" title="ranbuta" />,{" "}
              <Link link="https://twitter.com/WakiyamaP" title="WakiyamaP" />
            </li>
            <li className="my-2 ">
              <span className="bg-cyan-500 text-gray-800 p-0.5 rounded-sm">
                奨学金取扱者:
              </span>{" "}
              <Link link="https://twitter.com/shiomueth" title="shiomu" />,{" "}
              <Link link="https://twitter.com/ligaratus_" title="ligaratus" />,{" "}
              <Link link="https://twitter.com/LumenWakuWaku" title="Lumen" />,{" "}
              <Link
                link="https://twitter.com/morellostorment"
                title="morello"
              />
            </li>
            <li className="my-2">
              <span className="bg-violet-500 text-gray-800 p-0.5 rounded-sm">
                ドメインオーナー:
              </span>{" "}
              <Link
                link="https://twitter.com/morellostorment"
                title="morello"
              />
            </li>
          </ul>
        </div>

        <Card
          color="green"
          content={[
            <div>
              誤字脱字の報告、情報の修正、新しい情報の提供、他言語への翻訳をデータベースに追加したい場合は、
              <span className="text-pink-600">
                weeb3daoメンバー にメッセージを送ってください
              </span>
              。
            </div>,
          ]}
        />

        <div className="release-notes mt-7 lg:ml-12 md:ml-6 sm:ml-2">
          <Typography variant="h3" color="inherit" component="h3">
            <span className="text-teal-600">リリース情報</span>
          </Typography>
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-600">2021年12月8日</span>,
              " データベースのコンパイル開始。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2021年12月9日</span>,
              " データベースのドメイン登録。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2021年12月17日</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 1.0</span>,
              " 英語版リリース。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2022年1月9日</span>,
              " ウェブサイトの移行と再構築開始。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2022年1月12日</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 2.0</span>,
              " Gitbookから移行し、データベースを再構築して独自のウェブサイトにしました。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2022年1月19日</span>,
              " ",
              " 日本語版は翻訳されています。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2022年1月30日</span>,
              " ",

              " 日本語版を付け加え開始。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2022年1月31日</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 3.0</span>,
              " 日本語版を追加しました。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2022年2月18日</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 3.1</span>,
              " 「NFTをAirdropする」を追加しました。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2022年5月28日</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 3.2</span>,
              " Ethereumマーケットプレイス情報を更新されました。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2022年12月3日</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 3.3</span>,
              " 「Contribution Guidelines」を追加しました。",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">2022年12月25日</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 4.0</span>,
              " ウェブサイトを更新しました。「マニホールドの使い方」を追加しました。「環境問題」を「NFTの立場」に更新しました。",
            ]}
          />
          <Checkbox
            checked={false}
            label={[
              <span className="text-violet-500">(予定)</span>,
              " ",
              " 韓国語版については現在翻訳中です。",
            ]}
          />
        </div>
        <NaviButtons
          return="ようこそ"
          returnlink="/"
          next="メンバー紹介"
          nextlink="/introduction"
        />
      </div>
    </div>
  );
}
