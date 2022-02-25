import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Terminologies() {
  return (
    <div className="terminologies">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          커뮤니티 용어집
        </Typography>
        <Card
          color="green"
          content={[
            <div>
              A more extensive list for{" "}
              <span className="text-green-600 font-bold">
                Common Terminologies used in communities
              </span>{" "}
              and{" "}
              <RouterLink
                link="/info-nft/important-terminologies"
                title="not just for selling your NFT."
              />
            </div>,
          ]}
        />
        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="GM" explain="굿모닝 (좋은 아침)." />
          </li>
          <li>
            <WordExplain word="GN" explain="굿나잇 (잘 자)." />
          </li>
          <li>
            <WordExplain word="NGMI" explain="아마 성공 못할거야..." />
          </li>
          <li>
            <WordExplain word="GMI" explain="성공할 수 있어." />
          </li>
          <li>
            <WordExplain word="WAGMI" explain="우리는 모두 성공할 거야!" />
          </li>
          <li>
            <WordExplain word="DYOR" explain="스스로 검색하고 조사해봐라." />
          </li>
          <li>
            <WordExplain
              word="FOMO"
              explain="(매우 좋은 기회를) 놓칠까봐 너무 두려움."
            />
          </li>
          <li>
            <WordExplain
              word="FUD"
              explain="두려움, 불확실성, 의심을 일으키기 위한 가짜 정보."
            />
          </li>
          <li>
            <WordExplain
              word="HODL"
              explain="(HOLD의 오타가 유명해진 경우)절대 팔지 마라."
            />
          </li>
          <li>
            <WordExplain
              word="Rekt"
              explain="좋지 않은 암호화폐 거래로 돈을 크게 잃은 사람."
            />
          </li>
          <li>
            <WordExplain word="PFP" explain="프로필 사진 용 이미지." />
          </li>
          <li>
            <WordExplain
              word="Paper Hands"
              explain="믿음이 없어, 자신이 가진 NFT를 빠르게 파는 사람들."
            />
          </li>
          <li>
            <WordExplain
              word="Diamond Hands"
              explain="강한 믿음을 기반으로, NFT를 장기간동안 들고 있는 사람들."
            />
          </li>
          <li>
            <WordExplain
              word="Whale"
              explain="많은 ETH를 보유하고 크게 크게 돈을 쓰는 사람."
            />
          </li>
          <li>
            <WordExplain word="Bag" explain="보유하고 있는 NFT 자산들." />
          </li>
          <li>
            <WordExplain
              word="Bagholder"
              explain="암호 화폐 자산을 너무 오래 들고 있었다가, 그 가치가 떨어져 큰 손해를 본 투자자"
            />
          </li>
          <li>
            <WordExplain
              word="Shitcoin"
              explain="내재적 가치가 없는 암호화폐."
            />
          </li>
          <li>
            <WordExplain word="Memecoin" explain="밈에서 유래한 암호화폐." />
          </li>
          <li>
            <WordExplain
              word="Apeing In"
              explain="한 프로젝트에 많은 ETH를 쏟아붓는 것."
            />
          </li>
          <li>
            <WordExplain
              word="Pumping"
              explain="NFT 자산의 가격이 빠르게 올라가는 것."
            />
          </li>
          <li>
            <WordExplain
              word="Pump and dump"
              explain="많은 양의 한 프로젝트의 NFT를 구매하며, 가격을 올린 다음 한번에 팔아버려서 가격을 박살내는 행위."
            />
          </li>
          <li>
            <WordExplain
              word="Alpha"
              explain="내부자 정보와 같은, 아직 풀리지 않은 고급 정보."
            />
          </li>
          <li>
            <WordExplain word="Floor" explain="NFT 프로젝트의 현재 최저가." />
          </li>
          <li>
            <WordExplain
              word="Sweep the floor"
              explain="프로젝트의 Floor 가격을 높이기 위해, 최저가에 나온 NFT를 쓸어담는 것."
            />
          </li>
          <li>
            <WordExplain word="Flex" explain="자랑하기." />
          </li>
          <li>
            <WordExplain word="Wen" explain="언제(When)의 줄임말." />
          </li>
          <li>
            <WordExplain
              word="DAO"
              explain="공유된 지갑 주소를 사용하는 탈중앙화된 익명 조직."
            />
          </li>
          <li>
            <WordExplain word="Ser" explain="sir의 은어(높여부르는 존칭)." />
          </li>
          <li>
            <WordExplain
              word="Probably Nothing"
              explain="아마도 아무것도 아닐 것이다(빈정거리는, 비꼬는 말투)."
            />
          </li>
          <li>
            <WordExplain word="Fren" explain="친구(Friend)." />
          </li>
          <li>
            <WordExplain
              word="McDonalds"
              explain="암호 화폐에 미래를 맡긴 사람들이 망했을 때 찾아가는 아르바이트."
            />
          </li>
          <li>
            <WordExplain
              word="Generative Art"
              explain="조합되는 이미지를 준비해서, 알고리즘 조합을 통해서 무작위로 조합한 아트."
            />
          </li>
          <li>
            <WordExplain
              word="Looks Rare"
              explain="레어도가 높아보인다(레어도는 NFT에서 중요한 가치, 가끔 비꼬기 위해 사용합니다.)."
            />
          </li>
          <li>
            <WordExplain word="IRL" explain="현실 인생에서." />
          </li>
          <li>
            <WordExplain
              word="Liquidity"
              explain="NFT들을 사기 위해, 현재 사용할 수 있는 ETH."
            />
          </li>
          <li>
            <WordExplain word="Lambo" explain="부자가 되다." />
          </li>
          <li>
            <WordExplain
              word="Wen Lambo?"
              explain="언제쯤 (프로젝트가 성공해서)우리가 부자가 될까?"
            />
          </li>
          <li>
            <WordExplain
              word="No-coiner"
              explain="코인을 들고 있지 않거나, 암호화폐 자체를 비판적으로 생각하는 사람들."
            />
          </li>
          <li>
            <WordExplain
              word="Noob/Newb"
              explain="NFT나 암호화폐에 경험이 없는 사람들."
            />
          </li>
          <li>
            <WordExplain word="LFG" explain="드가자~" />
          </li>
          <li>
            <WordExplain
              word="Gas wars"
              explain="많은 사람들이 똑같은 컨트렉트에 참가해서 Gas fee가 매우 올라간 상태."
            />
          </li>
          <li>
            <WordExplain word="Ded" explain="죽은(Dead)." />
          </li>
          <li>
            <WordExplain
              word="Rug"
              explain="프로젝트의 제작자들이 프로젝트를 버리고 도망가는 경우."
            />
          </li>
          <li>
            <WordExplain word="Derivative" explain="팬아트." />
          </li>
          <li>
            <WordExplain
              word="OG"
              explain="오리지널 갱스터(프로젝트의 매우 초반부터 참가했던 사람들)."
            />
          </li>
          <li>
            <WordExplain
              word="Seems legit"
              explain="뛰어난 면을 가지고 있음."
            />
          </li>
          <li>
            <WordExplain
              word="NFA"
              explain="재정적 조언이 아니니, 따라하지 마라."
            />
          </li>
          <li>
            <WordExplain
              word="Airdrop"
              explain="NFT의 주인이 다른 사람들에게 무료로 NFT를 보내주는 행위."
            />
          </li>
        </ul>
        <NaviButtons
          return="Community"
          returnlink="/community"
          next="NFT 커뮤니티의 문화"
          nextlink="/community/culture"
        />
      </div>
    </div>
  );
}
