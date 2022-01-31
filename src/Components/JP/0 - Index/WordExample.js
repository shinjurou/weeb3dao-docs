import React from "react";

export default function WordExplain(props) {
  return (
    <div className="mb-2">
      <span className="text-green-600 font-bold">
        {props.notReal ? "例:" : "実例:"}
      </span>{" "}
      {props.explain}
    </div>
  );
}
