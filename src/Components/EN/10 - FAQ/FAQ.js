import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function FAQ() {
  return (
    <div className="faq">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          FAQ
        </Typography>
        <NaviButtons
          return="Culture"
          returnlink="/community/culture"
          next="Environment Controversy"
          nextlink="/environment"
        />
      </div>
    </div>
  );
}
