import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import ReturnLink from "../0 - Index/ReturnLink";
import RouterLink from "../0 - Index/RouterLink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import sr from "../../../Imgs/sr.png";

export default function ListNFT() {
  return (
    <div className="list-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          List an NFT
        </Typography>

        <ReturnLink
          link="/sell-nft"
          title="Return to How to Mint and List your NFT"
        />

        <Typography variant="h2" color="inherit" component="h2" mt={4}>
          Guide for Listing Gas
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Card
            color="green"
            content={[
              <div>
                Keeping track of Gas will be{" "}
                <span className="text-pink-600 font-bold">
                  very important for listing
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
              Listing Guides for each Marketplaces
            </Typography>

            <Card
              color="green"
              content={[
                <div>
                  MakersPlace has created a guide to help creators{" "}
                  <span className="text-green-600 font-bold">
                    price their NFTs reasonably
                  </span>{" "}
                  <Link
                    link="https://makersplace.com/creator-guidelines/"
                    title="here"
                  />
                </div>,
              ]}
            />

            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/360063498333-How-do-I-sell-an-NFT-"
                  title="OpenSea (Ethereum Mainnet)"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/4404029357587-How-do-I-create-and-sell-NFTs-on-Polygon-"
                  title="OpenSea (Polygon Network)"
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
                You can start receiving offers right after minting.
              </li>
              <li className="mb-2">
                KnownOrigin{" "}
                <span className="relative bottom-0.5 right-0.5">
                  <ArrowRightAltIcon />
                </span>
                Listing is{" "}
                <span className="text-orange-500">being done off-chain</span> so
                it is <span className="text-green-600 font-bold">free</span>.
              </li>
              <ul className="list-disc mb-2 ml-6">
                <li>
                  <Link
                    link="https://docs.knownorigin.io/guide/setting-a-minimum-bid/"
                    title="Set a minimum bid on your work."
                  />
                </li>
                <li>
                  <Link
                    link="https://docs.knownorigin.io/guide/listing-tokens-from-your-collection/"
                    title='Set a fixed "buy now" price.'
                  />
                </li>
                <li>
                  You can also{" "}
                  <Link
                    link="https://docs.knownorigin.io/guide/creating-editions/#scheduling-sale-date"
                    title="set a scheduled sale date"
                  />{" "}
                  for your NFT.
                </li>
              </ul>
              <li className="mb-2">
                SuperRare{" "}
                <span className="relative bottom-0.5 right-0.5">
                  <ArrowRightAltIcon />
                </span>
                You can start receiving offers right after minting. But if you
                want to{" "}
                <span className="text-orange-500 font-bold">
                  start an auction
                </span>{" "}
                or <span className="text-orange-500 font-bold">buy now</span>{" "}
                options then it is available in the{" "}
                <span className="text-pink-600 font-bold">three dots</span>{" "}
                here.
              </li>
              <figure>
                <img src={sr} alt="SuperRare's button" className="rounded" />
                <figcaption className="absolute text-xs -mt-7 text-zinc-700 px-1 ">
                  <div className="bg-slate-500 bg-opacity-25 p-1 rounded">
                    {" "}
                    Image from{" "}
                    <Link
                      link="https://www.youtube.com/watch?v=hwNmgnO62hI"
                      title="How To Set Up An Auction On SuperRare"
                    />
                  </div>
                </figcaption>
              </figure>
              <li className="my-2">
                ANIFTY (You will{" "}
                <span className="text-pink-600">receive the guide</span>{" "}
                <span className="text-teal-600">
                  after being accepted to become their verified artist)
                </span>
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=H8LMWDezlPU"
                  title="hic et Nunc"
                />
              </li>
              <li className="mb-2">OBJKT</li>
              <ul className="list-disc mb-2 ml-6">
                <li>
                  <Link
                    link="https://www.youtube.com/watch?v=Vpon2AjLRuc"
                    title='Set a fixed "buy now" price.'
                  />
                </li>
                <li>
                  <Link
                    link="https://www.youtube.com/watch?v=wMfn1s_b1Eg"
                    title="Start an auction for your OBJKT"
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
                NFT will automatically be listed after you finished minting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
