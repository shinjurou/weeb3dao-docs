import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Gas() {
  return (
    <div className="gas">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Manifoldの使い方
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Card
            color="green"
            title={[
              <div>
                <Link
                  link="https://twitter.com/PigThePersona"
                  title="ranbuta"
                />
                さんの
                <Link
                  link="https://mirror.xyz/ranbuta.eth/-XVt7Zus8aGyufU__nEIxfVHlUxV0niVSfmZsb-CkB4"
                  title="「Manifoldを使ってNFTコントラクトを作成するチュートリアル」"
                />
                を参照してください。
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
              Claim Pageの使い方
            </Typography>{" "}
            <Card
              color="green"
              title={[
                <div>
                  <Link
                    link="https://twitter.com/PigThePersona"
                    title="ranbuta"
                  />
                  さんの
                  <Link
                    link="https://mirror.xyz/ranbuta.eth/ELLH2mFs2dZnu2CD78WUG62Kw-hOyUJm5kVGULtlxg0"
                    title="「ManifoldのClaim Pageの使い方」"
                  />
                  を参照してください。
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
              Duneダッシュボード
            </Typography>{" "}
            <Card
              color="green"
              title={[
                <div>
                  <Link
                    link="https://twitter.com/PigThePersona"
                    title="ranbuta"
                  />
                  さんは
                  <Link
                    link="https://dune.com/ranbuta/moefold"
                    title="Manifold Claim Pages監視用のDuneダッシュボード"
                  />
                  作りました。
                </div>,
              ]}
            />
            <NaviButtons
              return="Listingしましょう"
              returnlink="/sell-nft/list-nft"
              next="NFTをAirdropする"
              nextlink="/airdrop-NFT"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
