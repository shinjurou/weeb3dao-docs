import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

import img1 from "../../../Imgs/PolygonAirdrop/1.png";
import img2 from "../../../Imgs/PolygonAirdrop/2.png";
import img3 from "../../../Imgs/PolygonAirdrop/3.png";
import img4 from "../../../Imgs/PolygonAirdrop/4.png";
import img5 from "../../../Imgs/PolygonAirdrop/5.png";
import img6 from "../../../Imgs/PolygonAirdrop/6.png";
import img7 from "../../../Imgs/PolygonAirdrop/7.png";
import img8 from "../../../Imgs/PolygonAirdrop/8.png";
import img9 from "../../../Imgs/PolygonAirdrop/9.png";
import img10 from "../../../Imgs/PolygonAirdrop/10.png";
import img11 from "../../../Imgs/PolygonAirdrop/11.png";
import img12 from "../../../Imgs/PolygonAirdrop/12.png";
import img13 from "../../../Imgs/PolygonAirdrop/13.png";
import img14 from "../../../Imgs/PolygonAirdrop/14.png";
import img15 from "../../../Imgs/PolygonAirdrop/15.png";
import img16 from "../../../Imgs/PolygonAirdrop/16.png";
import img17 from "../../../Imgs/PolygonAirdrop/17.png";
import img18 from "../../../Imgs/PolygonAirdrop/18.png";
import img19 from "../../../Imgs/PolygonAirdrop/19.png";
import img20 from "../../../Imgs/PolygonAirdrop/20.png";

export default function AirdropNFT() {
  return (
    <div className="airdrop-nft">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFT Airdrop(에어드랍, 선물) 하는 법
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
              Manifold
            </Typography>
            <Card
              color="green"
              title={[
                <>
                  Please refer to this{" "}
                  <Link link="https://docs.manifold.xyz/" title="link" /> for
                  the Tutorials created by Manifold.
                </>,
              ]}
            />
          </div>
          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              OpenSea Polygon을 통해서
            </Typography>

            <ol className="list-decimal ml-6">
              <li className="mt-1">
                Opensea에서,{" "}
                <span className="text-pink-600 font-bold">My Collections</span>{" "}
                을 선택하고{" "}
                <span className="text-green-700 font-bold">
                  Create a collection
                </span>{" "}
                에 들어갑니다.
              </li>
              <img src={img1} alt="img1" className="my-2 rounded" />
              <img src={img2} alt="img2" className="my-2 rounded" />
              <li className="mt-1">
                콜렉션을 만드는데 필요한 정보를 입력해주세요 (로고 이미지,
                컬렉션 이름).
                <Card
                  color="pink"
                  title="콜렉션 이름에 “Airdrop” 을 사용하면 OpenSea에서 거절될 수 있으니 피하세요!"
                />
                <Card
                  color="green"
                  title="“Airdrop” 을 사용하지 않은 이름의 예제"
                  content={[
                    <>
                      <ul className="list-disc ml-10">
                        <li>[누구누구]’s Stamp Collection</li>
                        <li>[누구누구]’s Thank You Stickers</li>
                        <li>[누구누구]’s Presents</li>
                      </ul>
                    </>,
                  ]}
                />
              </li>
              <li className="mt-1">
                <span className="text-pink-600 font-bold">Blockchain</span>,
                에서, Ethereum을 누른 후,
                <span className="text-green-700 font-bold">Polygon 체인</span>
                으로 바꿔주세요.
              </li>
              <img src={img3} alt="img3" className="my-2 rounded" />
              <li className="mt-1">
                컬렉션 정보를 모두 채운 후에,{" "}
                <span className="text-green-700 font-bold">Create</span> {""}를
                눌러주세요.
              </li>
              <img src={img4} alt="img4" className="my-2 rounded" />
              <span className="text-pink-600 font-bold">My Collections</span>
              으로 돌아가면, 왼쪽 밑에 Polygon 아이콘이 보일 겁니다.(왼쪽
              Polygon 체인을 이용한 NFT, 오른쪽 Ethereum 체인을 이용한 NFT)
              <img src={img5} alt="img5" className="my-2 rounded" />
              <li className="mt-1">
                콜렉션을 완성했습니다! 이제 컬렉션 페이지에서{" "}
                <span className="text-green-700 font-bold">Add item</span> 을
                눌러 주세요.
              </li>
              <img src={img6} alt="img6" className="my-2 rounded" />
              <li className="mt-1">작품에 필요한 정보를 모두 입력해주세요.</li>
              <li className="mt-1">
                <span className="text-green-700 font-bold">Supply</span> 에서
                Airdrop에 필요한 개수를 입력해주세요 (경매에 참가한 bidder의
                숫자)
              </li>
              <img src={img7} alt="img7" className="my-2 rounded" />
              <li className="mt-1">
                Airdrop의 정보가 모두 채워졌으면,{" "}
                <span className="text-green-700 font-bold">Create</span> 를 눌러
                주세요.
              </li>
              <li className="mt-1">
                Airdrop으로 보내고 싶은 NFT를 선택하고,{" "}
                <span className="text-green-700 font-bold">Transfer</span> 를
                눌러 주세요.
              </li>
              <img src={img8} alt="img8" className="my-2 rounded" />
              <li className="mt-1">받는 사람의 Ethereum주소를 입력해줍시다!</li>
              <Card
                color="orange"
                title="See below on how to find wallet addresses."
                content="You can also contact the recipient directly on social media to confirm their address. "
              />
              <ul className="list-none">
                <li className="mt-1">
                  <Typography
                    variant="h4"
                    color="inherit"
                    component="h4"
                    mt={2}
                  >
                    <span className="text-teal-600">Foundation의 경우</span>
                  </Typography>
                  NFT Provenance 탭에서 bidder의 이름을 눌러주시면, 프로필
                  페이지가 열립니다. 유저 사진 밑에서 bidder의 Ethereum 주소를
                  쉽게 복사 할 수 있습니다.
                  <div className="flex flex-wrap">
                    <div className="flex-initial">
                      <img src={img9} alt="img9" className="my-2 rounded" />
                    </div>
                    <div className="flex-initial mt-10 ml-5">
                      <img src={img10} alt="img10" className="my-2 rounded" />
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <Typography
                    variant="h4"
                    color="inherit"
                    component="h4"
                    mt={2}
                  >
                    <span className="text-teal-600">Opensea의 경우</span>
                  </Typography>
                  이미 판매 된 NFT의 ‘Item Activity’에서 구매자의 이름을
                  눌러주세요. 프로필 이름 밑에 있는 Ethereum 주소를 쉽게 복사 할
                  수 있습니다.
                  <img src={img11} alt="img11" className="my-2 rounded" />
                  <img src={img12} alt="img12" className="my-2 rounded" />
                </li>
              </ul>
              <li className="mt-1">
                맞는 주소인지 꼭 확인한 후,{" "}
                <span className="text-green-700 font-bold">Transfer</span>를
                눌러 전송해주세요!
                <Card
                  color="orange"
                  title="보낼 개수가 1장 보다 많을 경우엔, 꼭 보내는 개수를 확인해주세요!"
                />
                <div className="flex">
                  <div className="flex-initial mt-2">
                    <img src={img13} alt="img9" className="my-2 rounded" />
                  </div>
                  <div className="flex-initial ml-2">
                    <img src={img14} alt="img10" className="my-2 rounded" />
                  </div>
                </div>
                Metamask 에서 Transfer를 확인해주세요
                <img src={img15} alt="img15" className="my-2 rounded" />
                <Card
                  color="pink"
                  title="만약 ‘“Switch your RPC to Polygon”라는 문구가 등장할 경우, 페이지를 새로고침 한 후 다시 시도해보세요! 원래는 이런 문구가 뜨지 않습니다. 대부분은 버그입니다."
                />
                <img src={img16} alt="img16" className="my-2 rounded" />
                <img src={img17} alt="img17" className="my-2 rounded" />
                아이템 페이지를 새로 고침한 후, 받는 주소로 제대로 보낸건지
                확인해주세요!
                <img src={img18} alt="img18" className="my-2 rounded" />
              </li>
            </ol>
            <Card
              color="green"
              title="축하합니다! Polygon 네트워크를 이용해서 NFT를 전송하는데 성공했습니다! 🥳"
            />
          </div>
          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              ‘선물’을 포함한 옥션 기획하기
            </Typography>
            <img src={img19} alt="img19" className="my-2 rounded" />
            <Card
              color="green"
              title={[
                <>
                  List를 할 시간과 최소 입찰 가격을 포함한 공지를 작성합니다.
                  <br />
                  그리고 모든 입찰자 분들에게 선물이 있을 것이라는 내용을
                  잊지말고 함께 써줍시다!
                </>,
              ]}
              content={[
                <>
                  이렇게 할 경우, ‘선물’을 받고 싶어하는 사람들끼리 정보가
                  공유될 것이며, 콜렉터들도 bidding을 위한 그들의 예산을
                  배정하는데 도움이 될 것입니다!
                  <figure>
                    <img src={img20} alt="img20" className="my-2 rounded" />
                    <figcaption className="absolute text-xs -mt-7 text-zinc-700 px-1 ">
                      <div className="bg-slate-500 bg-opacity-25 p-1 rounded">
                        {" "}
                        Art by{" "}
                        <Link
                          link="https://twitter.com/robek_world"
                          title="rwx"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </>,
              ]}
            />
            <Card
              color="green"
              content={[
                <>
                  <Link
                    link="https://docs.google.com/document/d/1DrI34EwGTPpKCgFWr36rx1N18GJhyP4OiDBDw0Zn-x0/edit?usp=sharing"
                    title="Link to original guide"
                  />{" "}
                  created by{" "}
                  <Link link="https://twitter.com/chionnera" title="Chione" />
                </>,
              ]}
            />
            <NaviButtons
              return="NFT 소각하기"
              returnlink="/burn-nft"
              next="암호화폐 거래하기"
              nextlink="/crypto-exchange"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<iframe
        src="https://docs.google.com/document/d/1gMAElC2Yfc2eaxIixpauEuwoJpbMeeD8NNGBSa2hZr4/edit?usp=sharing"
        frameborder="0"
        title="Polygon Airdrop NFT Guide"
      />
*/
