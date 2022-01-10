import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export default function CustomCheckbox(props) {
  return (
    <div className="custom-checkbox ml-3 my-2">
      {props.checked ? (
        <span className="text-green-600">
          <CheckBoxIcon />
        </span>
      ) : (
        <span className="text-green-600">
          <CheckBoxOutlineBlankIcon />
        </span>
      )}{" "}
      <span className="inline-block align-middle">{props.label}</span>
    </div>
  );
}
