import React from "react";

export default function WordExplain(props) {
  return (
    <div className="mb-2">
      <span className="text-green-600 font-bold">
        {props.notReal ? "Example:" : "Real life example:"}
      </span>{" "}
      {props.example}
    </div>
  );
}
