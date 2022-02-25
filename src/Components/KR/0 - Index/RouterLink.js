import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function Routerlink(props) {
  return (
    <Link to={props.link}>
      <span
        className={classNames(
          "font-bold text-blue-500 cursor-pointer transition ease-in-out delay-50 hover:text-indigo-500 hover:underline",
          { "font-light": props.light }
        )}
      >
        {props.title}
      </span>
    </Link>
  );
}
