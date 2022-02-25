import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import RouterLink from "../0 - Index/RouterLink";

export default function BurnNFT() {
  return (
    <div className="burn-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFTをBurnする
        </Typography>

        <Card
          color="pink"
          content={[
            <div>
              説明文を間違えたり、販売したくなくなったり、作品を限定して保管したいなどの理由で、
              <span className="text-pink-600 font-bold">
                NFTをマーケットプレイスから削除したい場合
              </span>
              は、次のようにします。NFTをブロックチェーンからBurn（削除）する
              <span className="text-teal-600 font-bold">手順</span>
              については、以下のガイドをご覧ください。
            </div>,
          ]}
        />

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Burnする際のガス代について
            </Typography>
            <Card
              color="green"
              content={[
                <div>
                  NFTのバーニングは、
                  <span className="text-pink-600 font-bold">
                    MintやListingの時ほどガス代はかかりません
                  </span>
                  ガス代の把握の仕方については、前回の
                  <RouterLink link="/sell-nft/gas" title="ガイド" />
                  を参考にしてください。
                </div>,
              ]}
            />
          </div>
          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              マーケットプレイスごとのBurnガイド
            </Typography>

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=XvA-EWlv14Q"
                  title="OpenSea (EthereumメインネットとPolygonネットワーク)"
                />
              </li>
            </ul>
            <Card
              color="orange"
              content={[
                <div>
                  <span className="text-orange-500 font-bold">
                    OpenSeaでmintされたNFTのみ
                  </span>
                  が対象です。OpenSeaで他のNFTをBurnするには、
                  <span className="text-pink-600 font-bold">
                    0x000000000000000000000000000000000000deadに転送してください。
                  </span>
                </div>,
              ]}
            />
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://help.foundation.app/en/articles/4742850-delete-or-burn-an-nft"
                  title="Foundation"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://docs.knownorigin.io/guide/how-to-delete-burn-tokens/"
                  title="KnownOrigin"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://github.com/hicetnunc2000/hicetnunc/wiki/How-to-burn-%F0%9F%94%A5"
                  title="Teia"
                />
              </li>
            </ul>
            <Card
              color="pink"
              content={[
                <div>
                  他のマーケットプレイスにはガイドはありませんが、オプションで
                  <span className="text-pink-600 font-bold">「Burn」</span>
                  または
                  <span className="text-pink-600 font-bold">「Delete」</span>
                  ボタンがあるので、手続きは簡単です。
                </div>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="ガス代の相場を調べる方法について"
          returnlink="/sell-nft/gas"
          next="NFTをAirdropする"
          nextlink="/airdrop-nft"
        />
      </div>
    </div>
  );
}
