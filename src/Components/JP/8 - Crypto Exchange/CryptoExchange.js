import React from "react";
import Typography from "@mui/material/Typography";
import Link from "../0 - Index/Link";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";

export default function CryptoExchange() {
  return (
    <div className="crypto-exchange">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          暗号資産取引所
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div>
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              不換紙幣（現金）から暗号資産へ
            </Typography>
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <RouterLink
                  link="/sell-nft/create-wallet"
                  title="現金からETHへ"
                />
              </li>
              <li className="mb-2">
                <RouterLink
                  link="/sell-nft/create-wallet"
                  title="現金からXTZ (TEZ)へ"
                />
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              暗号資産間のSwap
            </Typography>
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/1500012881642-How-do-I-transfer-ETH-from-Ethereum-to-Polygon-"
                  title="ETHからPolygon ETH (OpenSea)へ"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://app.1inch.io/#/137/swap/ETH/MATIC"
                  title="ETHからMATICへ"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://app.1inch.io/#/137/swap/MATIC/ETH"
                  title="MATICからETHへ"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=YzJ6xkJpeUk&t=990s"
                  title="XTZ(TEZ)からETHへ"
                />
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              暗号資産から不換紙幣（現金）
            </Typography>
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=BrL4P2wEHbg"
                  title="Binanceの使用"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=Xg5i7LKsfHg"
                  title="Coinbaseの使用"
                />
              </li>
            </ul>
          </div>
        </div>
        <NaviButtons
          return="NFTをAirdropする"
          returnlink="/airdrop-NFT"
          next="コミュニティ"
          nextlink="/community"
        />
      </div>
    </div>
  );
}
