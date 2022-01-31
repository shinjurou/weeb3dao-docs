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
          weeb3dao Mint 奨学金制度
        </Typography>
        <Widget
          id="rifISQzR"
          style={{ width: "100%", height: "900px" }}
          className="my-form"
        />
        <Typography variant="h3" color="inherit" component="h3" mt={3} mb={2}>
          weeb3dao's Mint 奨学金受賞者リスト
        </Typography>
        <Card
          color="green"
          title="以下のアーティストは、ミント・スカラシップまたはオンボーディング・サポートで、weeb3daoの支援を受けています。"
        />
        <ScholarshipList />
        <NaviButtons
          return="メンバー紹介"
          returnlink="/introduction"
          next="NFTについての一般情報"
          nextlink="/info-NFT"
        />
      </div>
    </div>
  );
}
