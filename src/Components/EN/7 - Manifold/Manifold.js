import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import Video from "../0 - Index/Video";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Gas() {
  return (
    <div className="gas">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          How to use Manifold
        </Typography>

        <Card
          color="purple"
          title="What is Manifold?"
          content={[
            <div>
              Manifold.xyz is an NFT platform that allows Web3 creators to
              create and sell their own NFTs, keeping ownership and provenance
              of their work, and allowing it to be sold on various NFT
              marketplaces.
              <br />
              <Link
                title="Read more"
                link="https://www.one37pm.com/nft/what-is-manifold-xyz"
              />
            </div>,
          ]}
        />

        <Card
          color="green"
          title="Manifold Studio"
          content={[
            <>
              Please refer to this{" "}
              <Link
                link="https://docs.manifold.xyz/v/manifold-studio/"
                title="link"
              />{" "}
              for the documentation created by Manifold.
            </>,
          ]}
        />

        <Video youtubeId="JVBMg9KSYls" title="How to use Manifold Studio" />

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div></div>
          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Create your own smart contract
            </Typography>{" "}
            <Card
              color="green"
              title={[
                <>
                  Please refer to this{" "}
                  <Link
                    link="https://docs.manifold.xyz/v/manifold-studio/essentials/manifold-101#6.-deploying-a-contract-to-rinkeby-testnet"
                    title="link"
                  />{" "}
                  for the guide created by Manifold.
                </>,
              ]}
            />
            <Video
              youtubeId="oy5TKmhKmbg"
              title="Launch Your Own Smart Contract With Manifold Studio"
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
              Create a Claim Page
            </Typography>{" "}
            <Card
              color="green"
              title={[
                <>
                  Please refer to this{" "}
                  <Link
                    link="https://docs.manifold.xyz/v/manifold-studio/apps/claim-page"
                    title="link"
                  />{" "}
                  for the guide created by Manifold.
                </>,
              ]}
            />
            <Video
              youtubeId="7ILlmi4vlgY"
              title="How To Create a Claim Page with Manifold Studio"
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
              Airdrop Tokens
            </Typography>
            <Card
              color="green"
              title={[
                <>
                  Please refer to this{" "}
                  <Link
                    link="https://docs.manifold.xyz/v/manifold-studio/references/airdrops"
                    title="link"
                  />{" "}
                  for the guide created by Manifold.
                </>,
              ]}
            />
            <Video
              youtubeId="VVnsHPgifvE"
              title="Launch Your Own Smart Contract With Manifold Studio"
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
              Dune Dashboard for Claim Pages
            </Typography>{" "}
            <Card
              color="green"
              title={[
                <div>
                  <Link
                    link="https://twitter.com/PigThePersona"
                    title="ranbuta"
                  />{" "}
                  has created a{" "}
                  <Link
                    link="https://dune.com/ranbuta/moefold"
                    title="Dune Dashboard for Manifold Claim Pages"
                  />
                </div>,
              ]}
            />
            <NaviButtons
              return="List an NFT"
              returnlink="/sell-nft/list-nft"
              next="How to Airdrop an NFT"
              nextlink="/airdrop-NFT"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
