import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

export default function WhatIsNFT() {
  return (
    <div className="what-is-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFT는 무엇인가요?'
        </Typography>

        <div className="mt-5">
          NFT는 '대체 불가능한 토큰(
          <span className="text-orange-500">Non-fungible tokens</span>)'의
          약자입니다.
        </div>
        <Card
          color="pink"
          content={[
            <div>
              Please refer to the{" "}
              <Link
                link="https://en.wikipedia.org/wiki/Non-fungible_token"
                title="NFT Wikipedia page"
              />{" "}
              for the full explanation.
            </div>,
          ]}
        />
        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          쉬운 설명
        </Typography>
        <WordExplain
          word="Non-fungible"
          explain="Unique, the only one of it's kind and cannot be replaced."
        />
        <WordExample
          explain="You as an individual cannot be replaced by your high school math
          teacher."
        />

        <WordExplain
          word="Token"
          explain="A virtual
          currency that the holder will be able to trade online through the
          blockchain."
        />
        <WordExample explain="Coins we use everyday representing money to be exchanged for goods." />

        <Card
          color="orange"
          content={[
            <div>
              즉, 여러분들의 창작물을 NFT로 바꾸는 순간, 블록체인 위에서 영원히
              남게되며, 지우거나 복제할 방법이 없습니다.
              <div className="mt-1">
                NFT로 바꾼 이후, 블록체인 상에서 다른 사람들과 거래를 할 수
                있습니다.
              </div>
            </div>,
          ]}
        />
        <NaviButtons
          return="NFT 관련 일반적인 정보"
          returnlink="/info-NFT"
          next="블록체인은 무엇인가요?'"
          nextlink="/info-nft/what-is-blockchain"
        />
      </div>
    </div>
  );
}
