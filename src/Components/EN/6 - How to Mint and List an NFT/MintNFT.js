import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import RouterLink from "../0 - Index/RouterLink";
import ReturnLink from "../0 - Index/ReturnLink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import mp1 from "../../../Imgs/mp1.png";
import mp2 from "../../../Imgs/mp2.png";

export default function MintNFT() {
  return (
    <div className="mint-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Mint an NFT
        </Typography>

        <ReturnLink
          link="/sell-nft"
          title="Return to How to Mint and List your NFT"
        />

        <Typography variant="h2" color="inherit" component="h2" mt={4}>
          Guide for Minting Gas
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Card
            color="green"
            content={[
              <div>
                Keeping track of Gas will be{" "}
                <span className="text-pink-600 font-bold">
                  very important for minting
                </span>{" "}
                and we have{" "}
                <RouterLink
                  link="/sell-nft/gas"
                  title="created a guide here to help."
                ></RouterLink>
              </div>,
            ]}
          />

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Minting Guides for each Marketplaces
            </Typography>

            <Card
              color="pink"
              content={[
                <RouterLink
                  link="/weeb3dao-scholarship"
                  title="Remember to apply for weeb3dao Mint Scholarship if it is your first time minting."
                />,
              ]}
            />

            <Card
              color="red"
              title="IMPORTANT"
              content={[
                <>
                  <ul className="list-disc ml-4">
                    <li className="mt-1">
                      <span className="text-red-600">
                        <span className="font-bold">DON'T</span> mint the same
                        piece of work on different blockchains or even different
                        marketplaces.
                      </span>
                    </li>
                    <li className="mt-1">
                      If you must convert, you can{" "}
                      <span className="text-red-600">burn the piece first</span>{" "}
                      (assuming it hasn't already sold), and then{" "}
                      <span className="text-orange-500">
                        remint it on the new marketplace or blockchain.
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
                  MakersPlace has created a good creator guidelines{" "}
                  <Link
                    link="https://makersplace.com/creator-guidelines/"
                    title="here"
                  />{" "}
                  which you can read to know the best practices for{" "}
                  <span className="text-green-600 font-bold">
                    choosing artworks to mint.
                  </span>
                </div>,
              ]}
            />
            <div>
              Each Marketplace have their own system and methods for Minting.
              You can check out the individual guide pages here.
            </div>
            <Card
              color="pink"
              content={[
                <div>
                  Remember that the{" "}
                  <span className="text-red-600 font-bold">
                    initial gas fee
                  </span>{" "}
                  for OpenSea is{" "}
                  <span className="text-red-600 font-bold">
                    approximately x2 GWEI gas price
                  </span>{" "}
                  <span className="text-orange-500 font-bold">
                    at the time of transaction.
                  </span>
                </div>,
              ]}
            />

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/360063498313-How-do-I-create-an-NFT-"
                  title="OpenSea (Ethereum Mainnet)"
                />
              </li>
              <ul className="list-disc mb-2 ml-6">
                <li>
                  <Link
                    link="https://www.youtube.com/watch?v=NrDnEiadkTk"
                    title="Creates multiple copies of your NFT"
                  />
                </li>
              </ul>
            </ul>

            <Card
              color="purple"
              title="Why is minting on Ethereum Network (after the initial gas fee)
            is free on OpenSea but not the other marketplaces?"
              content={[
                <div>
                  The process of minting on OpenSea is called{" "}
                  <Link
                    link="https://opensea.io/blog/announcements/introducing-the-collection-manager/"
                    title='"Lazy Minting"'
                  />
                  .{" "}
                  <span className="relative bottom-0.5 right-0.5">
                    <ArrowRightAltIcon />
                  </span>
                  The NFT{" "}
                  <span className="text-teal-600 font-bold">
                    will only be minted onto the blockchain
                  </span>{" "}
                  <span className="text-red-600 font-bold">
                    after they are purchased or transferred to another wallet.
                  </span>
                </div>,
              ]}
            />

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/4404029357587-How-do-I-create-and-sell-NFTs-on-Polygon-"
                  title="OpenSea (Polygon Network)"
                />
              </li>
            </ul>

            <Card
              color="green"
              content={[
                <div>
                  <span className="text-teal-600">
                    Minting on the Polygon Network
                  </span>{" "}
                  is{" "}
                  <span className="text-green-600 font-bold">
                    completely free
                  </span>{" "}
                  and{" "}
                  <span className="text-orange-500 font-bold">
                    all transactions
                  </span>{" "}
                  are <span className="text-green-600 font-bold">gasless</span>.
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
                (Includes{" "}
                <Link
                  link="https://docs.knownorigin.io/guide/unlockable-content/"
                  title="Unlockable Content"
                />
                )
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
              Minting Guide for MakersPlace
            </Typography>
            <Card
              color="orange"
              content={[
                <div>
                  MakersPlace currently{" "}
                  <span className="text-red-600 font-bold">does not</span> have
                  a guide for their minting process but{" "}
                  <span className="text-green-600 font-bold">
                    their minting page is very straightforward and easy to use.
                  </span>
                </div>,
              ]}
            />
            <Card
              color="pink"
              content={[
                <div>
                  The process of setting up can be confusing for new artists. So
                  if you have any problems{" "}
                  <span className="text-pink-600 font-bold">
                    please either contact MakersPlace's support or send a
                    message to Shinjurou in the{" "}
                    <Link
                      link="https://discord.gg/vktnAzvyNQ"
                      title="Anifriends Discord Server"
                    />{" "}
                    for support.
                  </span>
                </div>,
              ]}
            />

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                Select{" "}
                <span className="text-orange-500 font-bold">
                  "Upload Creation"
                </span>{" "}
                at the top of the webpage after you logged in.
              </li>
              <img
                src={mp1}
                alt="MakersPlace Upload Creation button"
                className="rounded"
              />
              <li className="my-2">
                Upload your creation and click{" "}
                <span className="text-orange-500 font-bold">"Publish"</span> and
                just pay the gas fee that pops up and you're done!
              </li>
              <img
                src={mp2}
                alt="MakersPlace Publish button"
                className="rounded"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
