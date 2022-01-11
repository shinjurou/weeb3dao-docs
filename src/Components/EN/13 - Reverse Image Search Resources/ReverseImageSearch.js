import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function ReverseImageSearch() {
  return (
    <div className="reverse-image-search">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Reverse Image Search Resources
        </Typography>
        <NaviButtons
          return="Recommended Readings"
          returnlink="/rec-readings"
          next=""
          nextlink=""
        />
      </div>
    </div>
  );
}
