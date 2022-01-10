import React from "react";

export default function CustomHyperlink(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="font-bold text-blue-500 cursor-pointer transition ease-in-out delay-50 hover:text-indigo-500 hover:underline"
    >
      {props.title}
    </a>
  );
}
