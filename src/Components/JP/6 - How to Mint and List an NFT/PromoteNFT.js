import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function PromoteNFT() {
  return (
    <div className="promote-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFTのプロモーション
        </Typography>

        <div className="mb-6"></div>
        <Card
          color="pink"
          title="NFTやプロジェクトの宣伝は、Twitterの特定のツイートや、Discordサーバーの特定のチャンネルのみで行うことを強く推奨します。"
        />

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div className="mt-0">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Twitter
            </Typography>
            <Card
              color="orange"
              content={[
                <div>
                  <ul className="list-disc ml-5">
                    <li className="mt-1">
                      <span className="text-orange-500 font-bold">
                        検索機能
                      </span>
                      を使って、
                      <span className="text-pink-600 font-bold">
                        宣伝が可能なツイートを探してください
                      </span>
                      。
                    </li>

                    <li className="mt-1">
                      <span className="text-orange-500 font-bold">例</span>
                    </li>
                    <ul className="list-disc ml-6">
                      <li className="mt-1">
                        検索ワード{" "}
                        <Link
                          link="https://twitter.com/search?q=shill%20your%20NFT&src=typed_query"
                          title='"shill your NFT"'
                        />
                      </li>
                      <li className="mt-1">
                        検索ワード{" "}
                        <Link
                          link="https://twitter.com/search?q=buy%20NFT&src=typed_query&f=top"
                          title='"buy NFT"'
                        />
                      </li>
                      <li className="mt-1">
                        検索ワード{" "}
                        <Link
                          link="https://twitter.com/search?q=drop%20your%20NFT&src=typed_query&f=top"
                          title='"drop your NFT"'
                        />
                      </li>
                    </ul>
                  </ul>
                </div>,
              ]}
            />
            <Card
              color="red"
              title="NFTの宣伝を求められていないツイートで宣伝をすると、相手からブロックされる可能性があります。"
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
              Discord
            </Typography>
            <Card
              color="orange"
              content={[
                <div>
                  <ul className="list-disc ml-5">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        正しいチャンネル
                      </span>
                      で
                      <span className="text-orange-500 font-bold">
                        宣伝をします
                      </span>
                      。例:{" "}
                      <span className="text-green-600 font-bold">
                        #nft-drops
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        正しいチャンネル
                      </span>
                      で
                      <span className="text-orange-500 font-bold">
                        作品を投稿して下さい
                      </span>
                      。例:{" "}
                      <span className="text-green-600 font-bold">
                        #artshare
                      </span>
                    </li>
                  </ul>
                </div>,
              ]}
            />
            <Card
              color="red"
              title="一般的なチャンネルで宣伝をするとサーバーからBANされる恐れがあるので辞めましょう。"
            />
            <Card
              color="green"
              title="Discordサーバー"
              content={[
                <ul className="list-disc ml-5">
                  <li className="mt-1">
                    <Link
                      link="https://discord.gg/JD8dqyfVpF"
                      title="Anifriends"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://discord.gg/nftasia"
                      title="NFT Asia"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://discord.gg/wxdRVkgv9E"
                      title="Foundation"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://discord.gg/makersplace"
                      title="MakersPlace"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://discord.gg/dyEhwh3"
                      title="KnownOrigin"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://discord.gg/HYB4YKZbga"
                      title="SuperRare"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://discord.gg/jZXRx2TJJq"
                      title="ANIFTY"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://discord.com/invite/US8gMfEkM2"
                      title="Teia"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://discord.gg/x2xZxh5WEX"
                      title="OBJKT"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://t.co/A2K7wHnbhp"
                      title="Kalamint"
                      light={true}
                    />
                  </li>
                </ul>,
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
              Authentic
            </Typography>
            <Card
              color="green"
              content={[
                <div>
                  そのコミュニティに所属している人たちと
                  <span className="text-green-600 font-bold">真の関わり</span>
                  を持つことで、彼らは
                  <span className="text-teal-600 font-bold">
                    自発的にあなたの作品
                  </span>
                  を見に来てくれるでしょう。
                </div>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="Listingしましょう"
          returnlink="/sell-nft/list-nft"
          next="NFTを販売した後"
          nextlink="/sell-nft/celebration"
        />
      </div>
    </div>
  );
}
