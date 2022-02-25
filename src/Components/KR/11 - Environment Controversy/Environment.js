import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import environmentchart from "../../../Imgs/environmentchart.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Environment() {
  return (
    <div className="environment">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          환경 오염 논란
        </Typography>
        <Card
          color="green"
          title={[
            <>
              The analysis is discussed in depth in{" "}
              <Link
                link="https://sterlingcrispin.blogspot.com/2021/02/crypto-art-sky-is-not-falling.html?m=1"
                title="this blog post."
              />
            </>,
          ]}
        />
        <Card
          color="pink"
          title="Summary from the blog post"
          content={[
            <div>
              The problem of crypto currencies is an unsolved one, but it’s a
              known problem that experts are working on solving. NFT’s need to
              move from Proof of Work to Proof of Stake and Ethereum itself is
              also in that transition. However,{" "}
              <span className="text-pink-600 font-bold">
                if every article written about Bitcoin’s 0.07% negative effects
                instead was about how meat is 15% of our annual CO2 output (24),
                and convinced someone to go vegetarian 3-4 times a week, or was
                instead about ending fossil fuel subsidies, it would have a
                thousand times more positive impact.
              </span>{" "}
              Again, attention is a finite resource, and outrage is a type of
              attention. We should focus our efforts where it actually matters
              and at an appropriate scale.
              <div className="mt-5">
                <span className="text-green-600 font-bold">
                  아티스트와 수집가들에게: 저는 NFT를 판매하는 모든 사람들에게,
                  수익의 5 ~ 10%를 세상을 더 낫게 만드는 자선 단체에 기부하는
                  것을 권장합니다. 환경을 더 낫게 만드는데 노력하고, 어려움을
                  겪고 있는 커뮤니티에 돌려주세요. NFT는 예술품을 사고 파는
                  새로운 시스템이며, 우리가 이미 누리고 있는 시스템보다 더
                  공평하고 자선할 수 있는 기회를 만들어줍니다
                </span>
              </div>
            </div>,
          ]}
        />
        <figure>
          <img
            src={environmentchart}
            alt="Environment Chart"
            className="rounded"
          />
          <figcaption className="absolute text-xs -mt-7 text-zinc-700 px-1 ">
            <div className="bg-slate-500 bg-opacity-25 p-1 rounded">
              {" "}
              Image from{" "}
              <Link
                link="https://sterlingcrispin.blogspot.com/2021/02/crypto-art-sky-is-not-falling.html?m=1"
                title="NFTs and Crypto Art: The Sky is not Falling"
              />
            </div>
          </figcaption>
          <Card
            color="pink"
            content={[
              <div>
                A chart about sources of energy consumptions between
                cryptocurrencies and other areas in 2017.{" "}
                <span className="relative bottom-0.5">
                  <ArrowRightAltIcon />
                </span>{" "}
                <span className="text-pink-600 font-bold">
                  Cryptocurrency energy consumption is not as significant as
                  other areas listed here.
                </span>
              </div>,
            ]}
          />
        </figure>
        <NaviButtons
          return="FAQ"
          returnlink="/faq"
          next="이미지 역 추적 방법"
          nextlink="/reverse-img-search"
        />
      </div>
    </div>
  );
}
