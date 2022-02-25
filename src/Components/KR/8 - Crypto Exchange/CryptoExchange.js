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
          암호화폐 거래하기
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
              법정 통화를 통해서 암호화폐 구매하기(한국에선 불가능합니다)
            </Typography>
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <RouterLink
                  link="/sell-nft/create-wallet"
                  title="법정 통화로 ETH 구매하기(한국에선 불가능합니다)"
                />
              </li>
              <li className="mb-2">
                <RouterLink
                  link="/sell-nft/create-wallet"
                  title="법정 통화로 XTZ(TEZ) 구매하기(한국에선 불가능합니다)"
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
              암호화폐끼리 Swap하기
            </Typography>
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://support.opensea.io/hc/en-us/articles/1500012881642-How-do-I-transfer-ETH-from-Ethereum-to-Polygon-"
                  title="ETH를 Polygon ETH(OpeanSea)로 Swap하기"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://app.1inch.io/#/137/swap/ETH/MATIC"
                  title="ETH를 MATIC으로 Swap하기"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://app.1inch.io/#/137/swap/MATIC/ETH"
                  title="MATIC을 ETH로 Swap하기"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=YzJ6xkJpeUk&t=990s"
                  title="XTZ(TEZ)를 ETH로 Swap하기"
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
              암호화폐로 법정 통화 구매하기
            </Typography>
            <ul className="list-disc mt-5 ml-6">
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=BrL4P2wEHbg"
                  title="Binance 이용하기(한국에선 불가능합니다)"
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://www.youtube.com/watch?v=Xg5i7LKsfHg"
                  title="Coinbase 이용하기(한국에선 불가능합니다)"
                />
              </li>
            </ul>
          </div>
        </div>
        <NaviButtons
          return="NFT Airdrop(에어드랍, 선물) 하는 법"
          returnlink="/airdrop-NFT"
          next="NFT 커뮤니티"
          nextlink="/community"
        />
      </div>
    </div>
  );
}
