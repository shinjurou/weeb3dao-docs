import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import { Widget } from "@typeform/embed-react";
import ScholarshipList from "./ScholarshipList";

export default function weeb3daoScholarship() {
  return (
    <div className="weeb3dao-scholarship">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          weeb3dao Mint Scholarship
        </Typography>
        <Widget
          id="rifISQzR"
          style={{ width: "100%", height: "900px" }}
          className="my-form"
        />
        <Typography variant="h3" color="inherit" component="h3" mt={3} mb={2}>
          List of Artists received the weeb3dao's Mint Scholarship
        </Typography>
        <Card
          color="green"
          title="The following artists have received help from weeb3dao, either with the Mint Scholarship or Onboarding Support"
        />
        <ScholarshipList />
      </div>
    </div>
  );
}
