import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Terminologies() {
  return (
    <div className="terminologies">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Terminologies
        </Typography>
        <NaviButtons
          return="Community"
          returnlink="/community"
          next="Culture"
          nextlink="/community/culture"
        />
      </div>
    </div>
  );
}
