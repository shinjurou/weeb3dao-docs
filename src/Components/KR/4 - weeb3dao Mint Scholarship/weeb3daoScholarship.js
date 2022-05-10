import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import { Widget } from "@typeform/embed-react";
import ScholarshipList from "./ScholarshipList";
import NaviButtons from "../0 - Index/NaviButtons";

export default function weeb3daoScholarship() {
  return (
    <div className="weeb3dao-scholarship">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          weeb3dao Mint 지원 프로그램
        </Typography>
        <Widget
          id="rifISQzR"
          style={{ width: "100%", height: "900px" }}
          className="my-form"
        />
        
        <Typography variant="h3" color="inherit" component="h3" mt={3} mb={2}>
          Disclaimer
        </Typography>
        <>
          <ul className="list-disc ml-14 mt-4">
            <li className="my-2">
              weeb3dao’s mint scholarship helps artists to get started in NFT. The scholarship is supported by donations and we do not profit from it.  
            </li>
            <li className="my-2">
              We do not judge your art skills or styles and would like to give out opportunities to everyone who can prove that the artworks are of their own creations and not stolen or plagiarized.
            </li>
            <li className="my-2">
              Being accepted is not an endorsement, we are also not responsible for artists who committed acts of plagiarism and copyright infringement after receiving the scholarship. 
            </li>
            <li className="my-2">
              We are in no way accepting acts of plagiarism and copyright infringement. We will give public warning if any offence is committed by scholarship receivers.
            </li>
            <li className="my-2">
              While we would like to give artists second chances as we understand that there are young artists who might not understand the rules of plagiarisms and copyright infringement, we will not accept acts of repeated offence.
            </li>
          </ul>

          <Typography variant="h4" color="inherit" component="h4" mt={3} mb={2}>
            Things that we would like for our scholarship recipients to be cautious of:
          </Typography>
          <ul className="list-disc ml-14 mt-4">
            <li className="my-2">
              Stealing/tracing and heavy referencing (e.g. pose/character designs) should be avoided.
            </li>
            <li className="my-2">
              Art style imitation is debatable and depends more on the artists themselves. If the artist is okay with it then it is fine, but best to be avoided to prevent potential conflicts.
            </li>
            <li className="my-2">
              Tagging or linking artists/artworks that you are using as inspiration for heavy referencing will still not be acceptable, as most artists will not reply in this scenario. If you cannot provide proofs of the artist agreeing to the work being referenced, then heavy referencing should not be done.
            </li>
          </ul>

          <Typography variant="h4" color="inherit" component="h4" mt={3} mb={2}>
            Resolution:
          </Typography>
          <ul className="list-disc ml-14 mt-4">
            <li className="my-2">
              Problematic artworks should be burnt. If collected, then the artist should refund the collectors.
            </li>
          </ul>
        </>
        
        <Typography variant="h3" color="inherit" component="h3" mt={5} mb={2}>
          weeb3dao Mint 지원 프로그램'의 혜택을 받은 아티스트 리스트
        </Typography>
        <Card
          color="green"
          title="아래의 아티스트들은 'weeb3dao'의 Mint 지원 프로그램 혹은 NFT 정착 프로그램을 지원 받았습니다."
        />
        <ScholarshipList />
        <NaviButtons
          return="소개"
          returnlink="/introduction"
          next="NFT 관련 일반적인 정보"
          nextlink="/info-NFT"
        />
      </div>
    </div>
  );
}
