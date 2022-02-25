import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import NaviButtons from "../0 - Index/NaviButtons";
import Fee from "./Fee";
import ETHmarket from "./ETHmarket";
import XTZmarket from "./XTZmarket";

export default function ChooseMarketplace() {
  return (
    <div className="choose-marketplace">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFT 마켓플레이스 선택하기
        </Typography>

        <Card
          color="pink"
          content={[
            <div>
              현재, KnownOrigin, SuperRare, Kalamint 와 같은 플랫폼에 대한
              정보는 제한적입니다. 관련 정보들은 Anime NFT 아티스트들이 해당
              플랫폼들은 더 빈번하게 사용하게 되는 경우, 정확한 정보를 수집하여
              제공할 예정입니다.
              <div className="mt-2 text-pink-600 font-bold">
                만약 기재된 정보들 중 누락된 내용이 있다면, Shinjurou에게
                연락해주세요. 정보를 취합하여 향후 업데이트가 이뤄질 것입니다.
              </div>
            </div>,
          ]}
        />

        <div className="mt-8">
          <Typography variant="h2" color="inherit" component="h2" mb={2}>
            플랫폼 간 비교
          </Typography>
        </div>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Fee />

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Ethereum Marketplace
            </Typography>
            <ETHmarket />
          </div>

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Tezos Marketplace
            </Typography>
            <XTZmarket />
          </div>
        </div>
        <NaviButtons
          return="블록체인 네트워크 선택하기"
          returnlink="/sell-nft/choose-blockchain"
          next="여러분들의 작품을 Mint하기"
          nextlink="/sell-nft/mint-nft"
        />
      </div>
    </div>
  );
}
