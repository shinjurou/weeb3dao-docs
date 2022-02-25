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
