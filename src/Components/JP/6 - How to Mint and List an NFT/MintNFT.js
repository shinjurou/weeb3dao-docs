import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import mp1 from "../../../Imgs/mp1.png";
import mp2 from "../../../Imgs/mp2.png";

export default function MintNFT() {
  return (
    <div className="mint-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Mintingしましょう
        </Typography>

        <Typography variant="h3" color="inherit" component="h2" mt={4}>
          Mintingの際に発生するガス代のガイド
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Card
            color="green"
            content={[
              <div>
                mintした際のガス代を記録しておくことは、
                <span className="text-pink-600 font-bold">とても重要</span>
                なことです。ですので、
                <RouterLink
                  link="/sell-nft/gas"
                  title="ここではそのためのガイドを作成しました。"
                ></RouterLink>
              </div>,
            ]}
          />

          <div className="mt-8">
            <Typography
              variant="h3"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              各マーケットプレイスにおけるMintingガイド
            </Typography>

            <Card
              color="pink"
              content={[
                <RouterLink
                  link="/weeb3dao-scholarship"
                  title="初めてmintを行う場合、weeb3dao Mint Scholarshipに応募することを忘れないようにして下さい。"
                />,
              ]}
            />

            <Card
              color="red"
              title="重要なこと"
              content={[
                <>
                  <ul className="list-disc ml-4">
                    <li className="mt-1">
                      <span className="text-red-600">
                        <span className="font-bold">同じ作品</span>
                        を異なるブロックチェーン、あるいは異なるマーケットプレイスでmintしないでください。
                      </span>
                    </li>
                    <li className="mt-1">
                      どうしてもコンバートしたい場合は、
                      <span className="text-red-600">まず作品をburnした上</span>
                      で(まだ売れていない場合)、
                      <span className="text-orange-500">
                        新しいマーケットプレイスやブロックチェーンで再びmintすることができます。
                      </span>
                    </li>
                  </ul>
                </>,
              ]}
            />

            <Card
              color="green"
              content={[
                <div>
                  MakersPlaceが作成したクリエイターガイドラインを読むと、
                  <span className="text-green-600 font-bold">作品を選ぶ際</span>
                  の
                  <Link
                    link="https://makersplace.com/creator-guidelines/"
                    title="最善の方法"
                  />
                  を知ることができます。
                </div>,
              ]}
            />
            <div>
              各マーケットプレイスでは、それぞれ独自のシステム、方法でMintingを行っています。それぞれのガイドページは以下の通りです。
            </div>
            <Card
              color="pink"
              content={[
                <div>
                  OpenSeaの
                  <span className="text-red-600 font-bold">初期ガス代</span>
                  は、
                  <span className="text-orange-500 font-bold">
                    取引時に発生する
                  </span>
                  <span className="text-red-600 font-bold">
                    ガス代の2倍程度
                  </span>
                  と覚えておきましょう。
                </div>,
              ]}
            />

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/360063498313-How-do-I-create-an-NFT-"
                  title="OpenSea (Ethereumメインネット)"
                />
              </li>
              <ul className="list-disc mb-2 ml-6">
                <li>
                  <Link
                    link="https://www.youtube.com/watch?v=NrDnEiadkTk"
                    title="NFTのエディションを作成します。"
                  />
                </li>
              </ul>
            </ul>

            <Card
              color="purple"
              title="OpenSeaではガス代が無料なのに、他のマーケットプレイスでは無料ではないのか？"
              content={[
                <div>
                  OpenSeaでのミンティングのプロセスは
                  <Link
                    link="https://opensea.io/blog/announcements/introducing-the-collection-manager/"
                    title="「Lazy Minting」"
                  />
                  と呼ばれています。
                  <span className="relative bottom-0.5 right-1">
                    <ArrowRightAltIcon />
                  </span>
                  NFTは<span className="text-red-600 font-bold">購入</span>
                  されるか、他のウォレットに
                  <span className="text-red-600 font-bold">転送</span>
                  された後にのみ
                  <span className="text-teal-600 font-bold">
                    ブロックチェーン上
                  </span>
                  にmintされる仕組み。
                </div>,
              ]}
            />

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/4404029357587-How-do-I-create-and-sell-NFTs-on-Polygon-"
                  title="OpenSea (Polygonネットワーク)"
                />
              </li>
            </ul>

            <Card
              color="green"
              content={[
                <div>
                  <span className="text-teal-600 font-bold">
                    ポリゴンネットワークでのmint
                  </span>
                  は<span className="text-green-600 font-bold">完全に無料</span>
                  であり、
                  <span className="text-orange-500 font-bold">
                    すべての取引
                  </span>
                  は
                  <span className="text-green-600 font-bold">
                    ガス代が掛かりません
                  </span>
                  。
                </div>,
              ]}
            />

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://help.foundation.app/en/articles/4742869-a-complete-guide-to-minting-an-nft"
                  title="Foundation"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://docs.knownorigin.io/guide/creating-editions/#scheduling-sale-date"
                  title="KnownOrigin"
                />{" "}
                (
                <Link
                  link="https://docs.knownorigin.io/guide/unlockable-content/"
                  title="「アンロック可能なコンテンツ」"
                />
                を追加する)
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=z7xJcPwkUOU"
                  title="SuperRare"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://anifty-jp.medium.com/a-complete-guide-to-list-your-nft-on-anifty-marketplace-13a03507acda"
                  title="ANIFTY"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=MdnpVQJ-vdk&t=2m37s"
                  title="hic et nunc"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=l-WWfrAnwD4&t=480s"
                  title="OBJKT"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=P19_NVrVieo&t=109s"
                  title="Kalamint"
                />
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              MakersPlaceでMintするためのガイド
            </Typography>
            <Card
              color="orange"
              content={[
                <div>
                  MakersPlaceではmintするためのガイドは
                  <span className="text-red-600 font-bold">ありません</span>が、
                  <span className="text-green-600 font-bold">
                    mintする際のページは非常にわかりやすく使いやすい仕様になっています。
                  </span>
                </div>,
              ]}
            />
            <Card
              color="pink"
              content={[
                <div>
                  新規アーティストにとって、セットアップのプロセスがわからなくなる場合がありますが、
                  <span className="text-pink-600 font-bold">
                    もし何かあれば、MakersPlaceのサポートに連絡するか、
                    <Link
                      link="https://discord.gg/vktnAzvyNQ"
                      title="AnifriendsのDiscordサーバー"
                    />
                    のShinjurouにメッセージを送ってサポートを求めてください。
                  </span>
                </div>,
              ]}
            />

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                ログイン後、ページ上部の
                <span className="text-orange-500 font-bold">
                  「Upload Creation」
                </span>
                を選択します。
              </li>
              <img
                src={mp1}
                alt="MakersPlace Upload Creation button"
                className="rounded"
              />
              <li className="my-2">
                作品をアップロードして
                <span className="text-orange-500 font-bold">「Publish」</span>
                をクリックし、ポップアップするガス代を支払えば完了です。
              </li>
              <img
                src={mp2}
                alt="MakersPlace Publish button"
                className="rounded"
              />
            </ul>
          </div>
        </div>
        <NaviButtons
          return="マーケットプレイスの選択"
          returnlink="/sell-nft/choose-marketplace"
          next="Listingしましょう"
          nextlink="/sell-nft/list-nft"
        />
      </div>
    </div>
  );
}
