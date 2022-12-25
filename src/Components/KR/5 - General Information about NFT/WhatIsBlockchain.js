import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

export default function WhatIsBlockchain() {
  return (
    <div className="what-is-blockchain">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          블록체인은 무엇인가요?'
        </Typography>

        <Card
          color="pink"
          content={[
            <div>
              Please refer to the{" "}
              <Link
                link="https://en.wikipedia.org/wiki/Blockchain"
                title="Blockchain Wikipedia page"
              />{" "}
              for the full explanation.
            </div>,
          ]}
        />

        <Typography variant="h3" color="inherit" component="h3" mb={2} mt={4}>
          쉬운 설명
        </Typography>

        <WordExplain
          word="Blockchain"
          explain="This is a
          system that records all activities that happens online and stores
          everything on the network."
        />
        <WordExample
          example="A
          financial book for a company with listings of their funds, sales, etc."
        />

        <Card
          color="orange"
          title="블록체인에 대해서 알아야 할 중요한 것들"
          content={[
            <ul className="list-disc ml-4">
              <li>블록체에 작성된 기록은 모두가 볼 수 있습니다</li>
              <li>
                작성된 기록들은 영원히 존재하며, 아무도 지우거나 바꿀 수
                없습니다.
              </li>
              <li>
                블록체인은 접근 제한 없이 온라인에서 접근가능한 모든 암호화폐
                지갑의 활동들을 기록합니다.
              </li>
            </ul>,
          ]}
        />

        <Card
          color="green"
          content="이러한 블록체인의 특성 때문에, 모든 계정들의 투명성을 보장할 수 있습니다."
        />

        <Card
          color="purple"
          title="왜 블록체인의 특성 중요한가요?"
          content={[
            <ul className="list-disc ml-4">
              <li>
                투명성의 보장은 불법적인 행동을 숨길 수 없다는 것을 뜻합니다.
              </li>
              <li>
                블록체인의 투명성은 콜렉터들이 아티스트들에게 가해지는 위협들을
                파악할 수 있고, 위협에서 벗어 날 수 있도록 도울 수 있습니다.
              </li>
            </ul>,
          ]}
        />
        <NaviButtons
          return="NFT는 무엇인가요?'"
          returnlink="/info-nft/what-is-nft"
          next="암호화폐 지갑은 무엇인가요?'"
          nextlink="/info-nft/what-is-digital-wallet"
        />
      </div>
    </div>
  );
}
