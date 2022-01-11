import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";

export default function CryptoExchange() {
  return (
    <div className="crypto-exchange">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Crypto Exchange
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
              Fiat Currency to CryptoCurrency
            </Typography>
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <RouterLink
                  link="/sell-nft/create-wallet"
                  title="FIAT to ETH"
                />
              </li>
              <li className="mb-2">
                <RouterLink
                  link="/sell-nft/create-wallet"
                  title="FIAT to XTZ (TEZ)"
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
              Swap between Cryptocurrencies
            </Typography>
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/1500012881642-How-do-I-transfer-ETH-from-Ethereum-to-Polygon-"
                  title="ETH to Polygon ETH (OpenSea)"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://app.1inch.io/#/137/swap/ETH/MATIC"
                  title="ETH to MATIC"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://app.1inch.io/#/137/swap/MATIC/ETH"
                  title="MATIC to ETH"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=YzJ6xkJpeUk&t=990s"
                  title="XTZ (TEZ) to ETH"
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
              Cryptocurrency to Fiat Currency
            </Typography>
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=BrL4P2wEHbg"
                  title="Using Binance"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=Xg5i7LKsfHg"
                  title="Using Coinbase"
                />
              </li>
            </ul>
          </div>
        </div>
        <NaviButtons
          return="Burn your NFT"
          returnlink="/burn-NFT"
          next="Community"
          nextlink="/community"
        />
      </div>
    </div>
  );
}
