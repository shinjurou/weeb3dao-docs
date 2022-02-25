import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import cover from "../../../Imgs/weeb3_cover.jpg";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Welcome() {
  return (
    <div className="welcome">
      <img src={cover} alt="cover" />
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          환영합니다!
        </Typography>
        <Typography variant="h3" color="inherit" component="h3" mb={2}>
          <span className="text-orange-500">
            가장 먼저, 'Anime NFT 커뮤니티'에 온 것을 환영합니다!
            <br /> We are so excited to have you here with us!
          </span>
        </Typography>
        <Typography variant="body1" color="inherit" component="div">
          이 웹사이트는 '
          <Link link="https://twitter.com/weeb3dao" title="weeb3dao" />
          에서
          <Link link="https://twitter.com/AnifamNft" title="Anifam" />
          과
          <Link link="https://twitter.com/uwucrewnft" title="uwucrew" />의
          지원을 통해 만들어 졌으며, Anime NFT 커뮤니티에 처음 입문하는 Anime
          아티스트을 위한 안내서로써 활용됩니다.
        </Typography>

        <Card
          color="teal"
          title="왜 'NFT 커뮤니티'가 아닌 'Anime NFT 커뮤니티'라고 부르나요?"
          content="이미 암호화폐에는 수많은 NFT 커뮤니티가 존재하고 있지만, 저희 NFT 커뮤니티는 Anime 스타일을 가진 아티스트와 컬렉터만을 위한 커뮤니티이기 때문입니다."
        />

        <Typography variant="body1" color="inherit" component="div" mb={2}>
          The first NFT was created on May 2014, and while NFT has been around
          for many years now. Anime NFT artists only started to join at the
          start of 2021. This means that those of you who are joining now are{" "}
          <span className="text-green-700">
            very early to the new way of integrating NFT to the anime art world.
          </span>
        </Typography>
        <Typography variant="body1" color="inherit" component="div">
          최근 Anime NFT 커뮤니티는 계속해서 성장하고 있지만, 관련 정보들이 많이
          부족한 편입니다. 또한 명확한 가이드라인도 구축되지 않았으며, NFT
          세계로 입문하려는 Anime 아티스트는 주변에 질문하는 것 말고는 뚜렷한
          방법이 없었습니다. 게다가 각자의 경험이 달랐기 때문에 같은 질문에도
          사람들의 대답은 모두 달랐죠.
        </Typography>

        <Card
          color="green"
          content={[
            "Due to that reason, we have created this website and hope this will be able to ",
            <span className="text-pink-600">
              help you find the information you need much easier.
            </span>,
          ]}
        />
        <NaviButtons
          return=""
          returnlink=""
          next="데이터 베이스 정보"
          nextlink="/database-info"
        />
      </div>
    </div>
  );
}
