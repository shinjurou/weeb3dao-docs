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
          Promote your NFT
        </Typography>

        <div className="mb-6"></div>
        <Card
          color="pink"
          title="Highly recommended to only shill your NFT or project under the specified tweets on Twitter or specified channels in Discord Servers."
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
                      Use{" "}
                      <span className="text-orange-500 font-bold">
                        search function
                      </span>{" "}
                      to{" "}
                      <span className="text-pink-600 font-bold">
                        find tweets which allow shilling under them.
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="text-orange-500 font-bold">
                        Examples
                      </span>
                    </li>
                    <ul className="list-disc ml-6">
                      <li className="mt-1">
                        Search words{" "}
                        <Link
                          link="https://twitter.com/search?q=shill%20your%20NFT&src=typed_query"
                          title='"shill your NFT"'
                        />
                      </li>
                      <li className="mt-1">
                        Search words{" "}
                        <Link
                          link="https://twitter.com/search?q=buy%20NFT&src=typed_query&f=top"
                          title='"buy NFT"'
                        />
                      </li>
                      <li className="mt-1">
                        Search words{" "}
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
              title="Do not shill under tweets which are not asking for you to show
              your NFT as this may result in you being blocked by that
              person."
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
                      <span className="text-orange-500 font-bold">Shill</span>{" "}
                      in the{" "}
                      <span className="text-pink-600 font-bold">
                        correct channels
                      </span>
                      . Example:{" "}
                      <span className="text-green-600 font-bold">
                        #nft-drops
                      </span>
                    </li>

                    <li className="mt-1">
                      <span className="text-orange-500 font-bold">Post</span>{" "}
                      your artworks in{" "}
                      <span className="text-pink-600 font-bold">
                        correct channels
                      </span>
                      . Example:{" "}
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
              title="Do not shill in general channels as this may result in you being banned by the server."
            />
            <Card
              color="green"
              title="Discord Servers"
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
                      link="https://discord.gg/pGeAWrP"
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
                      link="https://discord.com/invite/SFfxEsr9"
                      title="hic et Nunc"
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
                  <span className="text-green-600 font-bold">
                    Have genuine engagement with others in the community
                  </span>{" "}
                  and{" "}
                  <span className="text-teal-600">
                    they will go view your artworks on their own accords.
                  </span>
                </div>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="List an NFT"
          returnlink="/sell-nft/list-nft"
          next="Celebration"
          nextlink="/sell-nft/celebration"
        />
      </div>
    </div>
  );
}
