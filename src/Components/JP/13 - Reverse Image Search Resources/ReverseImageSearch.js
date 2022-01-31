import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function ReverseImageSearch() {
  return (
    <div className="reverse-image-search">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          画像検索システム
        </Typography>
        <Card
          color="green"
          content={[
            <div>
              <Link link="https://twitter.com/shiomueth" title="shiomu" />
              は美術品の
              <span className="text-green-600 font-bold">
                を確認するための検索に役立つ様々なリソースを提供しています
              </span>
              。
            </div>,
          ]}
        />
        <Card
          color="red"
          title="これらのサイトの中には、NSFWの検索結果が表示されるものもあります。"
        />

        <ul className="list-disc mt-2 ml-6">
          <li className="mb-2">
            <Link
              link="https://iqdb.org/"
              title="https://iqdb.org/"
              light={true}
            />{" "}
            (アグリゲーター：danbooru、konachan、yande.re、gelbooru、sankaku、
            e-shuushuu、zerochan、anime-pictures)
          </li>
          <li className="mb-2">
            <Link
              link="https://trace.moe/"
              title="https://trace.moe/"
              light={true}
            />{" "}
            (アニメのシーン検索)
          </li>
          <li className="mb-2">
            <Link
              link="https://ascii2d.net/"
              title="https://ascii2d.net/"
              light={true}
            />{" "}
          </li>
          <li className="mb-2">
            <Link
              link="https://saucenao.com/"
              title="https://saucenao.com/"
              light={true}
            />
          </li>
          <li className="mb-2">
            <Link
              link="https://www.google.com/imghp"
              title="https://www.google.com/imghp"
              light={true}
            />{" "}
            (古き良きグーグル逆画像検索)
          </li>
          <li className="mb-2">
            <Link
              link="https://yandex.com/"
              title="https://yandex.com/"
              light={true}
            />{" "}
            (反転やトリミングされた画像に適しています)
          </li>
          <li className="mb-2">
            <Link
              link="https://tineye.com/"
              title="https://tineye.com/"
              light={true}
            />{" "}
          </li>
          <li className="mb-2">
            <Link
              link="https://3d.iqdb.org/"
              title="https://3d.iqdb.org/"
              light={true}
            />{" "}
            (コスプレやアイドル、モデルの検索に)
          </li>
        </ul>
        <Card
          color="teal"
          title="画像検索の方法"
          content={[
            <ol className="list-decimal ml-6">
              <li className="mt-1">手持ちの画像で検索。</li>
              <li className="mt-1">
                他の場所で高解像度や、反転、トリミングされていないものを探す。
              </li>
              <li className="mt-1">実際の出典を検索するために使用する。</li>
            </ol>,
          ]}
        />
        <NaviButtons
          return="環境問題"
          returnlink="/environment"
          next=""
          nextlink=""
        />
      </div>
    </div>
  );
}
