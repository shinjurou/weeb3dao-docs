import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

import img1 from "../../../Imgs/PolygonAirdrop/1.png";
import img2 from "../../../Imgs/PolygonAirdrop/2.png";
import img3 from "../../../Imgs/PolygonAirdrop/3.png";
import img4 from "../../../Imgs/PolygonAirdrop/4.png";
import img5 from "../../../Imgs/PolygonAirdrop/5.png";
import img6 from "../../../Imgs/PolygonAirdrop/6.png";
import img7 from "../../../Imgs/PolygonAirdrop/7.png";
import img8 from "../../../Imgs/PolygonAirdrop/8.png";
import img9 from "../../../Imgs/PolygonAirdrop/9.png";
import img10 from "../../../Imgs/PolygonAirdrop/10.png";
import img11 from "../../../Imgs/PolygonAirdrop/11.png";
import img12 from "../../../Imgs/PolygonAirdrop/12.png";
import img13 from "../../../Imgs/PolygonAirdrop/13.png";
import img14 from "../../../Imgs/PolygonAirdrop/14.png";
import img15 from "../../../Imgs/PolygonAirdrop/15.png";
import img16 from "../../../Imgs/PolygonAirdrop/16.png";
import img17 from "../../../Imgs/PolygonAirdrop/17.png";
import img18 from "../../../Imgs/PolygonAirdrop/18.png";
import img19 from "../../../Imgs/PolygonAirdrop/19.png";
import img20 from "../../../Imgs/PolygonAirdrop/20.png";

export default function AirdropNFT() {
  return (
    <div className="airdrop-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFTをAirdropする
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Manifold
            </Typography>
            <Card
              color="green"
              title={[
                <>
                  <Link
                    link="https://twitter.com/PigThePersona"
                    title="ranbuta"
                  />
                  の
                  <Link
                    link="https://mirror.xyz/ranbuta.eth/-XVt7Zus8aGyufU__nEIxfVHlUxV0niVSfmZsb-CkB4"
                    title="「Manifoldを使ってNFTコントラクトを作成するチュートリアル」"
                  />
                  を参照してください。
                </>,
              ]}
            />
          </div>
          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Polygon
            </Typography>

            <ol className="list-decimal ml-6">
              <li className="mt-1">
                Openseaの
                <span className="text-green-700 font-bold">Create</span>
                メニューから
                <span className="text-pink-600 font-bold">My Collections</span>
                を選択して,
                <span className="text-green-700 font-bold">
                  Create a collection
                </span>
                をクリックします。
              </li>
              <img src={img1} alt="img1" className="my-2 rounded" />
              <img src={img2} alt="img2" className="my-2 rounded" />
              <li className="mt-1">
                コレクションに必要な情報を入力します。 (ロゴ画像、
                コレクション名)
                <Card
                  color="pink"
                  title="コレクションの名前に「Airdrop」という言葉を使用するとOpenSea側から拒否される場合があるかもしれません。"
                />
                <Card
                  color="green"
                  title="「Airdrop」という言葉を使用しない例"
                  content={[
                    <>
                      <ul className="list-disc ml-10">
                        <li>[〇〇さん]’s Stamp Collection</li>
                        <li>[〇〇さん]’s Thank You Stickers</li>
                        <li>[〇〇さん]’s Presents</li>
                      </ul>
                    </>,
                  ]}
                />
              </li>
              <li className="mt-1">
                <span className="text-pink-600 font-bold">Blockchain</span>
                でEthereumをクリックし、
                <span className="text-green-700 font-bold">Polygon</span>
                に変えてください。
              </li>
              <img src={img3} alt="img3" className="my-2 rounded" />
              <li className="mt-1">
                コレクションの設定が完了した後、
                <span className="text-green-700 font-bold">Create</span>
                をクリックしてください。
              </li>
              <img src={img4} alt="img4" className="my-2 rounded" />
              <span className="text-pink-600 font-bold">My Collections</span>
              の戻ると、コレクションの左下にPolygonのアイコンを確認することができます。（左のアイコンがPolygon、右のアイコンはEthereum）
              <img src={img5} alt="img5" className="my-2 rounded" />
              <li className="mt-1">
                コレクションページに行くと
                <span className="text-green-700 font-bold">Add item</span>
                からNFTを追加することができます。
              </li>
              <img src={img6} alt="img6" className="my-2 rounded" />
              <li className="mt-1">NFTの必要な情報を入力してください。</li>
              <li className="mt-1">
                <span className="text-green-700 font-bold">Supply</span>
                でAirdropを行う数を入力してください。（入札者の数など）
              </li>
              <img src={img7} alt="img7" className="my-2 rounded" />
              <li className="mt-1">
                Supplyの設定が完了した後、
                <span className="text-green-700 font-bold">Create</span>
                をクリックしてください。
              </li>
              <li className="mt-1">
                AirdropしたいNFTを選択し、アイテムページから
                <span className="text-green-700 font-bold">Transfer</span>
                をクリックしてください。
              </li>
              <img src={img8} alt="img8" className="my-2 rounded" />
              <li className="mt-1">
                入力欄にAirdropしたい相手のウォレットアドレスを入力してください。
              </li>
              <Card
                color="orange"
                title="ウォレットアドレスについては以下の方法で確認できます。"
              />
              <ul className="list-none">
                <li className="mt-1">
                  <Typography
                    variant="h4"
                    color="inherit"
                    component="h4"
                    mt={2}
                  >
                    <span className="text-teal-600">Foundationの場合</span>
                  </Typography>
                  NFTのProvenanceから入札者のIDをクリックし、プロフィールに移動します。
                  ユーザーのアイコン下にウォレットアドレスが表示されているので、Copy
                  Addressをクリックすることで簡単にコピーすることができます。
                  <div className="flex flex-wrap">
                    <div className="flex-initial">
                      <img src={img9} alt="img9" className="my-2 rounded" />
                    </div>
                    <div className="flex-initial mt-10 ml-5">
                      <img src={img10} alt="img10" className="my-2 rounded" />
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <Typography
                    variant="h4"
                    color="inherit"
                    component="h4"
                    mt={2}
                  >
                    <span className="text-teal-600">Openseaの場合</span>
                  </Typography>
                  販売したNFTのItem
                  Activityから購入者をクリックし、プロフィールに移動します。ユーザーのアイコン下にウォレットアドレスが表示されているので、
                  ウォレットアドレスをクリックすると簡単にコピーすることができます。
                  <img src={img11} alt="img11" className="my-2 rounded" />
                  <img src={img12} alt="img12" className="my-2 rounded" />
                </li>
              </ul>
              <li className="mt-1">
                正しいウォレットアドレスか確認した後、
                <span className="text-green-700 font-bold">Transfer</span>
                をクリックください。
                <Card
                  color="orange"
                  title="送付する枚数が１枚以上の場合、Transferの数を確認してください。"
                />
                <div className="flex">
                  <div className="flex-initial mt-2">
                    <img src={img13} alt="img9" className="my-2 rounded" />
                  </div>
                  <div className="flex-initial ml-2">
                    <img src={img14} alt="img10" className="my-2 rounded" />
                  </div>
                </div>
                Metamaskに通知が出てくるので、署名をクリックしてください。
                <img src={img15} alt="img15" className="my-2 rounded" />
                <Card
                  color="pink"
                  title="もし「Switch your RPC to Polygon」のポップアップが開いた場合、Transferをキャンセルして、ページを更新してください。バグです。"
                />
                <img src={img16} alt="img16" className="my-2 rounded" />
                <img src={img17} alt="img17" className="my-2 rounded" />
                Airdrop完了後、アイテムページを更新し、きちんと届いたか確認してください。
                <img src={img18} alt="img18" className="my-2 rounded" />
              </li>
            </ol>
            <Card color="green" title="Airdrop 完了です！お疲れ様です! 🥳" />
          </div>
          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Airdropsを使ったオークションの計画
            </Typography>
            <img src={img19} alt="img19" className="my-2 rounded" />
            <Card
              color="green"
              title={[
                <>
                  出品前に出品予定日とリザーププライスをツイートしてください。{" "}
                  <br />
                  入札者にAirdropがあることを事前に知らせ、Airdropのサンプルをツイートしましょう。
                </>,
              ]}
              content={[
                <>
                  Airdropの情報をシェアしあっている方も多く、本当に作品が欲しいコレクターはそれに合わせて資金を事前に準備することができます。
                  <figure>
                    <img src={img20} alt="img20" className="my-2 rounded" />
                    <figcaption className="absolute text-xs -mt-7 text-zinc-700 px-1 ">
                      <div className="bg-slate-500 bg-opacity-25 p-1 rounded">
                        <Link
                          link="https://twitter.com/robek_world"
                          title="rwx"
                        />
                        のイラスト
                      </div>
                    </figcaption>
                  </figure>
                </>,
              ]}
            />
            <Card
              color="green"
              content={[
                <>
                  <Link link="https://twitter.com/chionnera" title="Chione" />
                  さんの作成したガイドのリンクは
                  <Link
                    link="https://docs.google.com/document/d/1gMAElC2Yfc2eaxIixpauEuwoJpbMeeD8NNGBSa2hZr4/edit?usp=sharing"
                    title="こちら"
                  />
                  です。
                </>,
              ]}
            />
            <NaviButtons
              return="Manifoldの使い方"
              returnlink="/manifold"
              next="NFTをBurnする"
              nextlink="/burn-NFT"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<iframe
        src="https://docs.google.com/document/d/1gMAElC2Yfc2eaxIixpauEuwoJpbMeeD8NNGBSa2hZr4/edit?usp=sharing"
        frameborder="0"
        title="Polygon Airdrop NFT Guide"
      />
*/
