import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function RecReadings() {
  return (
    <div className="rec-readings">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Recommended Readings
        </Typography>
        <NaviButtons
          return="Environment Controversy"
          returnlink="/environment"
          next="Reverse Image Search Resources"
          nextlink="/reverse-img-search"
        />
      </div>
    </div>
  );
}
