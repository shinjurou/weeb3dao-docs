import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";

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
          How to Airdrop an NFT
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
                  Please refer to this{" "}
                  <Link link="https://docs.manifold.xyz/" title="link" /> for
                  the Tutorials created by Manifold.
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
                On Opensea, navigate to{" "}
                <span className="text-pink-600 font-bold">My Collections</span>,
                then click{" "}
                <span className="text-green-700 font-bold">
                  Create a collection
                </span>
                .
              </li>
              <img src={img1} alt="img1" className="my-2 rounded" />
              <img src={img2} alt="img2" className="my-2 rounded" />
              <li className="mt-1">
                Submit the required information (Logo Image, Collection Name)
                <Card
                  color="pink"
                  title="Using the word “Airdrop” in your Collection Name may
          cause OpenSea to reject creation of the collection."
                />
                <Card
                  color="green"
                  title="Alternative examples for names that don’t include the word
                  “Airdrop”"
                  content={[
                    <>
                      <ul className="list-disc ml-10">
                        <li>[Name]’s Stamp Collection</li>
                        <li>[Name]’s Thank You Stickers</li>
                        <li>[Name]’s Presents</li>
                      </ul>
                    </>,
                  ]}
                />
              </li>
              <li className="mt-1">
                In <span className="text-pink-600 font-bold">Blockchain</span>,
                click on Ethereum, and switch the blockchain to{" "}
                <span className="text-green-700 font-bold">Polygon</span>
              </li>
              <img src={img3} alt="img3" className="my-2 rounded" />
              <li className="mt-1">
                Click <span className="text-green-700 font-bold">Create</span>{" "}
                {""}
                at the bottom of the page when you are ready to launch your
                collection.
              </li>
              <img src={img4} alt="img4" className="my-2 rounded" />
              If you go back to{" "}
              <span className="text-pink-600 font-bold">My Collections</span>
              , you should be able to see a Polygon symbol on the bottom left of
              the collection instead of the Ethereum icon.
              <img src={img5} alt="img5" className="my-2 rounded" />
              <li className="mt-1">
                Click <span className="text-green-700 font-bold">Add item</span>{" "}
                on your collection page to add an NFT to the collection.
              </li>
              <img src={img6} alt="img6" className="my-2 rounded" />
              <li className="mt-1">
                Fill out the required information for your airdrop as needed.
              </li>
              <li className="mt-1">
                Increase the{" "}
                <span className="text-green-700 font-bold">Supply</span> of the
                Airdrop as needed (ex. number of Bidders on auction)
              </li>
              <img src={img7} alt="img7" className="my-2 rounded" />
              <li className="mt-1">
                <span className="text-green-700 font-bold">Create</span> the
                Item when you are ready to mint the airdrop.
              </li>
              <li className="mt-1">
                Click on the Item you want to airdrop and select{" "}
                <span className="text-green-700 font-bold">Transfer</span>
              </li>
              <img src={img8} alt="img8" className="my-2 rounded" />
              <li className="mt-1">Enter the recipient’s Ethereum address.</li>
              <Card
                color="orange"
                title="See below on how to find wallet addresses."
                content="You can also contact the recipient directly on social media to confirm their address. "
              />
              <ul className="list-none">
                <li className="mt-1">
                  <Typography
                    variant="h4"
                    color="inherit"
                    component="h4"
                    mt={2}
                  >
                    <span className="text-teal-600">
                      For Foundation Auctions
                    </span>
                  </Typography>
                  You can navigate to a bidder’s Foundation profile by clicking
                  on their name in the Provenance section of the nft. Below the
                  user’s avatar there should be an Ethereum address that you can
                  copy.
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
                    <span className="text-teal-600">For Opensea</span>
                  </Typography>
                  Under Item Activity on the NFT’s page, click the buyer’s name.
                  You will easily be able to copy their wallet address or ENS
                  address on their profile page.
                  <img src={img11} alt="img11" className="my-2 rounded" />
                  <img src={img12} alt="img12" className="my-2 rounded" />
                </li>
              </ul>
              <li className="mt-1">
                Once you’ve confirmed the correct address, click{" "}
                <span className="text-green-700 font-bold">Transfer</span>
                <Card
                  color="orange"
                  title="You should be able to verify the quantity you’re transferring if Supply is more than 1"
                />
                <div className="flex">
                  <div className="flex-initial mt-2">
                    <img src={img13} alt="img9" className="my-2 rounded" />
                  </div>
                  <div className="flex-initial ml-2">
                    <img src={img14} alt="img10" className="my-2 rounded" />
                  </div>
                </div>
                Confirm the transfer interaction with Metamask.
                <img src={img15} alt="img15" className="my-2 rounded" />
                <Card
                  color="pink"
                  title="If you receive a prompt to “Switch your RPC to Polygon” please close the prompt, refresh the page and try again. You do not need to Switch if the collection is already on Polygon, this is a bug."
                />
                <img src={img16} alt="img16" className="my-2 rounded" />
                <img src={img17} alt="img17" className="my-2 rounded" />
                Refresh the item page and double check you’ve transferred the
                item to the correct recipient.
                <img src={img18} alt="img18" className="my-2 rounded" />
              </li>
            </ol>
            <Card
              color="green"
              title="Congrats! You’ve successfully airdropped an NFT through Polygon! 🥳"
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
              Planning for Auctions with Airdrops
            </Typography>
            <img src={img19} alt="img19" className="my-2 rounded" />
            <Card
              color="green"
              title={[
                <>
                  Announce the list date & reserve price of the piece ahead of
                  time. <br />
                  Let people know that there will be an airdrop for bidders &
                  provide a preview of the gift.
                </>,
              ]}
              content={[
                <>
                  There are people who like stamps that like to circulate this
                  information with each other, and collectors can plan their
                  funds accordingly if they really want it.
                  <figure>
                    <img src={img20} alt="img20" className="my-2 rounded" />
                    <figcaption className="absolute text-xs -mt-7 text-zinc-700 px-1 ">
                      <div className="bg-slate-500 bg-opacity-25 p-1 rounded">
                        {" "}
                        Art by{" "}
                        <Link
                          link="https://twitter.com/robek_world"
                          title="rwx"
                        />
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
                  <Link
                    link="https://docs.google.com/document/d/1gMAElC2Yfc2eaxIixpauEuwoJpbMeeD8NNGBSa2hZr4/edit?usp=sharing"
                    title="Link to original guide"
                  />{" "}
                  created by{" "}
                  <Link link="https://twitter.com/chionnera" title="Chione" />
                </>,
              ]}
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
