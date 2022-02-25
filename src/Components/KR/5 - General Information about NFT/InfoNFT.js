import React from "react";
import Typography from "@mui/material/Typography";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";

export default function InfoNFT() {
  return (
    <div className="info-NFT">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFT 관련 일반적인 정보
        </Typography>
        인터넷에 수많은 NFT 관련 정보들이 존재하지만, 가장 많이 하는 질문과
        간단한 답변들로 이 글을 구성하였습니다.
        <ol className="list-decimal ml-14 mt-4 text-blue-500 font-bold">
          <li className="my-2">
            <RouterLink
              link="/info-nft/what-is-nft"
              title="NFT는 무엇인가요?'"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/info-nft/what-is-blockchain"
              title="블록체인은 무엇인가요?'"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/info-nft/what-is-digital-wallet"
              title="암호화폐 지갑은 무엇인가요?'"
            />
          </li>

          <li className="my-2">
            <RouterLink
              link="/info-nft/important-terminologies"
              title="다른 중요 용어들에 대한 설명"
            />
          </li>
        </ol>
        <NaviButtons
          return="weeb3dao Mint 지원 프로그램"
          returnlink="/weeb3dao-scholarship"
          next="NFT는 무엇인가요?'"
          nextlink="/info-nft/what-is-nft"
        />
      </div>
    </div>
  );
}
