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
              <Link link="https://discord.gg/vktnAzvyNQ" title="Anifriends" />の
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
              <span className="bg-red-400 text-gray-800 p-0.5 rounded-sm">
                著者とウェブデベロッパー:
              </span>{" "}
              <Link link="https://twitter.com/shinjuroukai" title="Shinjurou" />
            </li>

            <li className="my-2 ">
              <span className="bg-sky-600 text-gray-800 p-0.5 rounded-sm">
                ウェブサイトの提供者:
              </span>{" "}
              <Link link="https://twitter.com/ligaratus_" title="ligaratus" />,{" "}
              <Link link="https://twitter.com/shiomueth" title="Shiomu" />
            </li>
            <li className="my-2">
              <span className="bg-orange-400 text-gray-800 p-0.5 rounded-sm">
                英語版校正者:
              </span>{" "}
              <Link
                link="https://twitter.com/morellostorment"
                title="morello"
              />
              , <Link link="https://twitter.com/ligaratus_" title="ligaratus" />
              , <Link link="https://twitter.com/Feireina" title="Fei" />,{" "}
              <Link link="https://twitter.com/blnkart_" title="BL!NK" />,{" "}
              <Link link="https://twitter.com/PausePLayed" title="PausePlay" />
            </li>
            <li className="my-2">
              <span className="bg-emerald-400 text-gray-800 p-0.5 rounded-sm">
                日本語翻訳者:
              </span>{" "}
              <Link link="https://twitter.com/0TL_" title="どげざちゃん" />
            </li>
            <li className="my-2">
              <span className="bg-orange-400 text-gray-800 p-0.5 rounded-sm">
                日本語版校正者:
              </span>{" "}
              <Link link="https://twitter.com/0TL_" title="どげざちゃん" />
              , <Link link="https://twitter.com/piprycto" title="ファオ" />,{" "}
              <Link link="https://twitter.com/PigThePersona" title="らんぶた" />
              , <Link link="https://twitter.com/WakiyamaP" title="脇P(jinP)" />
            </li>
            <li className="my-2">
              <span className="bg-emerald-400 text-gray-800 p-0.5 rounded-sm">
                韓国語翻訳者:
              </span>{" "}
              <Link link="https://twitter.com/0xARCANE" title="ARCANΞ" />
            </li>
          </ul>
        </div>

        <Card
          color="green"
          content={[
            <div>
              誤字脱字の報告、情報の修正、新しい情報の提供、他言語への翻訳をデータベースに追加したい場合は、
              <span className="text-pink-600">
                TwitterまたはDiscordでShinjurou
              </span>
              にメッセージを送ってください。
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
              <span className="text-violet-600">8 December 2021</span>,
              " データベースのコンパイル開始",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">9 December 2021</span>,
              " データベースのドメイン登録",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">17 December 2021</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 1.0</span>,
              " 英語版リリース",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">9 January 2022</span>,
              " ウェブサイトの移行と再構築開始",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">12 January 2022</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 2.0</span>,
              " Gitbookから移行し、データベースを再構築して独自のウェブサイトにしました",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">19 January 2022</span>,
              " ",
              " 日本語版は翻訳されています",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">30 January 2022</span>,
              " ",

              " 日本語版を付け加え開始",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">31 January 2022</span>,
              " ",
              <span className="text-red-600 font-bold">バージョン 3.0</span>,
              " 日本語版を付け加えました",
            ]}
          />
          <Checkbox
            checked={false}
            label={[
              <span className="text-violet-500">(予定)</span>,
              " ",
              " 韓国語版については現在翻訳中です",
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
