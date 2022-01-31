import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import RouterLink from "../0 - Index/RouterLink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import sr from "../../../Imgs/sr.png";

export default function ListNFT() {
  return (
    <div className="list-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Listingしましょう
        </Typography>

        <Typography variant="h3" color="inherit" component="h3" mt={4}>
          Listingする際のガス代のガイド
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Card
            color="green"
            content={[
              <div>
                ガス代の管理は、出品の際に
                <span className="text-pink-600 font-bold">非常に重要</span>
                です。ここでは、そのための
                <RouterLink link="/sell-nft/gas" title="ガイド"></RouterLink>
                を作成しました。
              </div>,
            ]}
          />

          <div className="mt-8">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              各マーケットプレイスのListingガイド
            </Typography>

            <Card
              color="green"
              content={[
                <div>
                  MakersPlaceでは、クリエイターがNFTに
                  <span className="text-green-600 font-bold">適正な価格</span>
                  を設定するための
                  <Link
                    link="https://makersplace.com/creator-guidelines/"
                    title="ガイド"
                  />
                  を作成しています。
                </div>,
              ]}
            />

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/360063498333-How-do-I-sell-an-NFT-"
                  title="OpenSea (Ethereumメインネット)"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/4404029357587-How-do-I-create-and-sell-NFTs-on-Polygon-"
                  title="OpenSea (Polygonネットワーク)"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://help.foundation.app/en/articles/4742888-a-complete-guide-to-listing-an-nft-for-auction"
                  title="Foundation"
                />
              </li>
              <li className="mb-2">
                MakersPlace{" "}
                <span className="relative bottom-0.5 right-0.5">
                  <ArrowRightAltIcon />
                </span>
                mintした直後からオファーを受けることができる。
              </li>
              <li className="mb-2">
                KnownOrigin{" "}
                <span className="relative bottom-0.5 right-0.5">
                  <ArrowRightAltIcon />
                </span>
                Listingは
                <span className="text-orange-500 font-bold">オフチェーン</span>
                で行われているので
                <span className="text-green-600 font-bold">無料</span>です。
              </li>
              <ul className="list-disc mb-2 ml-6">
                <li>
                  <Link
                    link="https://docs.knownorigin.io/guide/setting-a-minimum-bid/"
                    title="​作品の最低落札価格を設定する。"
                  />
                </li>
                <li>
                  <Link
                    link="https://docs.knownorigin.io/guide/listing-tokens-from-your-collection/"
                    title="​固定販売価格を設定する。"
                  />
                </li>
                <li>
                  <Link
                    link="https://docs.knownorigin.io/guide/creating-editions/#scheduling-sale-date"
                    title="NFTの販売日"
                  />
                  を設定することも可能。
                </li>
              </ul>
              <li className="mb-2">
                SuperRare{" "}
                <span className="relative bottom-0.5 right-0.5">
                  <ArrowRightAltIcon />
                </span>
                mint後すぐにオファーを受け始めることができます。しかし、
                <span className="text-orange-500 font-bold">オークション</span>
                や<span className="text-orange-500 font-bold">固定価格</span>
                での販売を開始したい場合は、
                <span className="text-pink-600 font-bold">下図の箇所</span>
                から利用することができます。
              </li>
              <figure>
                <img src={sr} alt="SuperRare's button" className="rounded" />
                <figcaption className="absolute text-xs -mt-7 text-zinc-700 px-1 ">
                  <div className="bg-slate-500 bg-opacity-25 p-1 rounded">
                    <Link
                      link="https://www.youtube.com/watch?v=hwNmgnO62hI"
                      title="「How To Set Up An Auction On SuperRare」"
                    />
                    からの画像
                  </div>
                </figcaption>
              </figure>
              <li className="my-2">
                ANIFTY (
                <span className="text-teal-600 font-bold">
                  アーティストとして認定された後
                </span>
                、<span className="text-pink-600 font-bold">ガイド</span>
                を受け取ります)。
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=H8LMWDezlPU"
                  title="hic et nunc"
                />
              </li>
              <li className="mb-2">OBJKT</li>
              <ul className="list-disc mb-2 ml-6">
                <li>
                  <Link
                    link="https://www.youtube.com/watch?v=Vpon2AjLRuc"
                    title="​固定販売価格を設定する​。"
                  />
                </li>
                <li>
                  <Link
                    link="https://www.youtube.com/watch?v=wMfn1s_b1Eg"
                    title="OBJEKTのオークションを開始する。​"
                  />
                </li>
              </ul>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=P19_NVrVieo"
                  title="Kalamint"
                />{" "}
                <span className="relative bottom-0.5 right-0.5">
                  <ArrowRightAltIcon />
                </span>
                NFTはmint後自動で掲載されます。
              </li>
            </ul>
          </div>
        </div>
        <NaviButtons
          return="Mintingしましょう"
          returnlink="/sell-nft/mint-nft"
          next="NFTのプロモーション"
          nextlink="/sell-nft/promote-nft"
        />
      </div>
    </div>
  );
}
