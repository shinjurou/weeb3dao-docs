import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Environment() {
  return (
    <div className="environment">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Environment Controversy
        </Typography>
        <NaviButtons
          return="FAQ"
          returnlink="/faq"
          next="Recommended Readings"
          nextlink="/rec-readings"
        />
      </div>
    </div>
  );
}
