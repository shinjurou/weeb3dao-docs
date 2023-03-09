import React from "react";

export default function WordExplain(props) {
  return (
    <div className="mb-2">
      <span className="text-green-600 font-bold">
        {props.notReal ? "例:" : "現実世界で例えるなら:"}
      </span>{" "}
      {props.example}
    </div>
  );
}
