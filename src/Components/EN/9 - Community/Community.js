import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Community() {
  return (
    <div className="community">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Community
        </Typography>
        <NaviButtons
          return="Crypto Exchange"
          returnlink="/crypto-exchange"
          next="Terminologies"
          nextlink="/community/terminologies"
        />
      </div>
    </div>
  );
}
