import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useParams } from "react-router-dom";

export default function Routerlink(props) {
  const { lang } = useParams();

  return (
    <Link to={lang ? "/" + lang + props.link : props.link}>
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
