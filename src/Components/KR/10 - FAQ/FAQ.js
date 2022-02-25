import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function FAQ() {
  return (
    <div className="faq">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          FAQ
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div className="mt-0">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              Multiple Editions or 1/1?
              <br /> Why is my artwork not selling?
              <br /> How to sell my artwork faster?
              <br /> How to become successful in the NFT space?
            </Typography>
            <Card
              color="green"
              title={[
                <div>
                  Please read the article I have written{" "}
                  <Link
                    link="https://mirror.xyz/shinjurou.eth/uIq__DaPcJ_Y3ku41N8_EGM7fZ8EIe1MwSYA3Q-ZMnA"
                    title="here."
                  />{" "}
                </div>,
              ]}
            />
          </div>
          <div>
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              팬아트를 그릴까요, 아니면 제 자신만의 작품을 그릴까요?
            </Typography>
            <Card
              color="purple"
              content={[
                <div>
                  <div>
                    <span className="text-purple-700 font-bold">결론:</span>{" "}
                    자신만의 작품을 그리세요
                  </div>
                  <div>
                    <span className="text-purple-700 font-bold">긴 답변:</span>{" "}
                  </div>
                  <ul className="list-disc ml-4">
                    <li>
                      Fanart is in{" "}
                      <span className="text-red-600 font-bold">
                        a very grey area
                      </span>
                      . Japanese companies don't usually pursue copyright
                      lawsuits. Due to fanart being a way for the company to
                      promote their copyrighted works while also letting their
                      fans explore their creativity. But there have been cases
                      where{" "}
                      <span className="text-red-600 font-bold">
                        lawsuits happened; when the work got too popular and
                        gained attention from said companies.
                      </span>{" "}
                      <Link
                        link="https://www.comipress.com/news/2007/02/04/1456.html"
                        title="Most notable example is the case of a Doraemon doujinshi
                      which got sued by Shogakukan."
                      />{" "}
                      General rule of thumb would be{" "}
                      <span className="text-red-600 font-bold">
                        as long as the fanart does not obtain a significant
                        amount of profits then it will be safe from copyright
                        lawsuit.
                      </span>{" "}
                      <span className="relative bottom-0.5">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      Which isn't the case for NFT due to the possibility of
                      large amount of profits can be made from a single sale.
                    </li>
                    <li>
                      After the fanart is sold, the artist is free from
                      responsibility if the company only files a lawsuit against
                      the owner of the NFT.{" "}
                      <span className="relative bottom-0.5">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      <span className="text-red-600 font-bold">
                        High chances the NFT will be deleted at the major loss
                        for the collector.
                      </span>
                    </li>
                    <li>
                      <span className="text-pink-600 font-bold">
                        Various collectors within the community have been asked
                        this question to which they haven taken more interest in
                        Original artworks.
                      </span>
                    </li>
                  </ul>
                </div>,
              ]}
            />
            <Card
              color="green"
              title="여러분들의 독창적인 작품들은 여러분과 콜렉터들을 안전하게 지켜주며, 당신만의 독창성과 창의력을 보여줄 수 있습니다."
            />
          </div>
          <div className="mt-8">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              NFT를 만들기 위한 커미션?
            </Typography>
            <Card
              color="red"
              title="커미션을 통해서 작품을 만든 다음, 그것을 원작자의 의견도 묻지 않고 NFT로 만들어 판매하는 것은 매우 잘못된 일이며 비난 받을 일입니다."
            />
            <Card
              color="orange"
              content={[
                <div>
                  <ul className="list-disc ml-4">
                    <li>
                      If you want to sell the commissioned work as NFT then{" "}
                      <span className="text-red-600 font-bold">
                        ask the artist's permission prior to minting said work.
                      </span>
                    </li>
                    <li>
                      Commission works which will be used to be sold as NFTs
                      should be{" "}
                      <span className="text-red-600 font-bold">
                        priced using commercial rates.
                      </span>
                    </li>
                    <li>
                      <span className="text-red-600 font-bold">
                        DO NOT mint an artwork without an artist's permission.
                      </span>
                    </li>
                    <li>
                      Discuss with the artist properly about{" "}
                      <span className="text-pink-600 font-bold">
                        commission price, royalties, artwork rights and
                        permissions, etc.
                      </span>
                    </li>
                    <li>
                      Make sure{" "}
                      <span className="text-pink-600 font-bold">
                        they understand how NFT works
                      </span>{" "}
                      and{" "}
                      <span className="text-red-600 font-bold">
                        not using their lack of knowledge to your advantage.
                      </span>
                    </li>
                  </ul>
                </div>,
              ]}
            />
            <Card
              color="green"
              content={[
                <div>
                  It is better to not use commissioned works as NFTs but the
                  rights to an artwork will{" "}
                  <span className="text-pink-600 font-bold">
                    depend on the agreement between the commissioner and artist.
                  </span>
                  <div>
                    <span className="text-green-600 font-bold">
                      <span className="relative bottom-0.5">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      It is best for both to come to an agreement and discuss
                      carefully about this.
                    </span>
                  </div>
                </div>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="NFT 커뮤니티"
          returnlink="/community/culture"
          next="환경 오염 논란"
          nextlink="/environment"
        />
      </div>
    </div>
  );
}
