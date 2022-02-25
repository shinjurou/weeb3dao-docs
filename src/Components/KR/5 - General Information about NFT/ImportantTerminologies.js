import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import WordExample from "../0 - Index/WordExample";

import POWPOS from "./POWPOS";

export default function ImportantTerminologies() {
  return (
    <div className="important-terminologies">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          다른 중요 용어들에 대한 설명
        </Typography>

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Shill"
              explain="자신 또는 다른 사람, 프로젝트를 남에게 홍보하는 행위."
            />
          </li>
          <li>
            <WordExplain
              word="ATH"
              explain="All time high의 약어 (아티스트나 프로젝트 NFT의 역대 최고가)."
            />
          </li>
          <li>
            <WordExplain
              word="Floor"
              explain="아티스트나 프로젝트 NFT의 최저가."
            />
          </li>
          <li>
            <WordExplain
              word="Moon"
              explain="NFT의 가격과 거래량이 높게 올라가는 현상."
            />
          </li>
          <li>
            <WordExplain
              word="Bear market"
              explain="하락장(시장 자체가 전체적으로 하락하는 상태)."
            />
          </li>
          <li>
            <WordExplain
              word="Bull market"
              explain="상승장(시장 자체가 전체적으로 상승하는 상태)."
            />
          </li>
          <li>
            <WordExplain
              word="Blue Chip"
              explain="성장 가능성이 매우 높아 커뮤니티에서 주목받는 아티스트 또는 프로젝트."
            />
          </li>
        </ul>

        <Card
          color="teal"
          content="위에 적힌 용어들은 많은 커뮤니티에서 자주 사용되는 표현들입니다."
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="ETH" explain="이더리움 코인(Ethereum)." />
          </li>
          <li>
            <WordExplain word="XTZ/TEZ" explain="테조스 코인(Tezos)." />
          </li>
          <li>
            <WordExplain
              word="MATIC"
              explain="폴리곤 네트워크의 기축 암호화폐."
            />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            "ETH, XTZ and Polygon are types of blockchains currently available which are used by a lot of current anime NFT artists. There are more information about other blockchains available to read ",
            <Link
              link="https://github.com/memo/eco-nft"
              title="here"
              light={true}
            />,
            ".",
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Mint"
              explain="디지털 창작물을 NFT로 만드는 과정 또는 행위."
            />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            <div>
              Each digital creation needs to be minted in order to become an
              NFT.
              <div className="ml-16">
                <ul className="list-disc">
                  <li className="mt-1">
                    One mint = One NFT (costs x1 gas fee)
                  </li>
                  <li className="mt-1">
                    Ten mints = Ten NFTs (costs x10 gas fee)
                  </li>
                </ul>
              </div>
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="POW" explain="작업 증명." />
          </li>
          <li>
            <WordExplain word="POS" explain="지분 증명." />
          </li>
          <li>
            <WordExplain
              word="Gas Fee"
              explain="블록체인 상에서 구매, 판매, 민트 요청과 같은 행동을 요청할 때, 필요한 비용"
            />
            <WordExample explain=" 자동차를 운행하기 위해서는 기름이 필요한 것과 비슷합니다." />
          </li>
        </ul>

        <Card
          color="teal"
          content="POW와 POS는 블록체인 상에서 디지털 작업물을 NFT로 바꿀 때 사용되는 메커니즘 모델을 말합니다."
        />

        <POWPOS />

        <Card
          color="teal"
          content={[
            <div>
              ETH is currently in development to{" "}
              <span className="text-pink-600 font-bold">
                model ETH after POS
              </span>
              . Their current plan is to{" "}
              <span className="text-green-600 font-bold">
                have ETH2 implemented in 2022
              </span>
              .
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="GWEI" explain="Gigawei." />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            <div>
              GWEI는 블록체인에서 트랜젝션을 보내는데 필요한 가스 비용의
              단위입니다.
              <div className="ml-8">
                <ul className="list-disc">
                  <li className="mt-1">High GWEI = 높은 gas fee</li>
                  <li className="mt-1">Low GWEI = 낮은 gas fee</li>
                </ul>
              </div>
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Smart Contract"
              explain="블록체인 상에서 돌아가는 프로그램."
            />
          </li>
        </ul>

        <Card
          color="teal"
          content={[
            <div>
              Smart contract can let you mint new NFT(s) from a PFP project
              without the need for the team to manually upload each NFT(s) to
              the blockchain.
              <div>
                <span className="text-pink-600 font-bold">
                  You can deploy your own smart contract on Foundation and
                  Manifold for your own collection(s).
                </span>
              </div>
            </div>,
          ]}
        />

        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain
              word="Dutch auction"
              explain="The price of a NFT starts at a starting price then dropped periodically until it hits the lowest price."
            />
            <WordExample
              notReal={true}
              explain="The NFT starts at 0.2 ETH and drops to 0 ETH after 2 days."
            />
          </li>
          <li>
            <WordExplain
              word="Layer 2 (L2)"
              explain="A solution developing to resolve the issue of high gas fees and slow transaction speeds on ETH blockchain."
            />
          </li>
          <li>
            <WordExplain
              word="Burn"
              explain="Delete your NFT from the blockchain."
            />
          </li>
          <li>
            <WordExplain
              word="WETH"
              explain='You can wrap your ETH token into "Wrapped Ether" to be exchanged with other ETH-based tokens.'
            />
          </li>
          <li>
            <WordExplain
              word="Transaction"
              explain="Any activity of selling, buying or trading occurs on the blockchain."
            />
          </li>
          <li>
            <WordExplain
              word="ENS"
              explain="Ethereum Name Service is a naming system based on the Ethereum blockchain which can replace your wallet address into a shortened registered name."
            />
            <WordExample notReal={true} explain="doraemon.eth" />
          </li>
        </ul>
        <NaviButtons
          return="암호화폐 지갑은 무엇인가요?'"
          returnlink="/info-nft/what-is-digital-wallet"
          next="How to Mint and List your NFT"
          nextlink="/sell-NFT"
        />
      </div>
    </div>
  );
}
