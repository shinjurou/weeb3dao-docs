import React from "react";
import RouterLink from "./RouterLink";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Returnlink(props) {
  return (
    <div className="return-link text-blue-500 ml-2 transition ease-in-out delay-50 hover:text-indigo-500">
      <ArrowBackIosIcon />
      <RouterLink link={props.link} title={props.title} />
    </div>
  );
}
