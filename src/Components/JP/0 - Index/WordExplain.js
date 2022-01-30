import React from "react";

export default function WordExplain(props) {
  return (
    <div className="mb-2">
      <span className="text-pink-600 font-bold">{props.word}: </span>
      {props.explain}
    </div>
  );
}
