import React from "react";

import Card from "@mui/material/Card";
import classNames from "classnames";

import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";

export default function CustomCard(props) {
  return (
    <Card sx={{ minWidth: 275, my: 2 }}>
      <div
        className={classNames(
          "border-l-4",
          "p-4",
          {
            "border-red-600": props.color === "red",
          },
          {
            "border-orange-500": props.color === "orange",
          },
          {
            "border-green-600": props.color === "green",
          },
          {
            "border-teal-700": props.color === "teal",
          },
          {
            "border-purple-700": props.color === "purple",
          },
          {
            "border-pink-600": props.color === "pink",
          }
        )}
        role="alert"
      >
        {props.title ? (
          <>
            <div
              className={classNames(
                "font-bold",
                "mb-1",
                {
                  "text-red-600": props.color === "red",
                },
                {
                  "text-orange-500": props.color === "orange",
                },
                {
                  "text-green-600": props.color === "green",
                },
                {
                  "text-teal-700": props.color === "teal",
                },
                {
                  "text-purple-700": props.color === "purple",
                },
                {
                  "text-pink-600": props.color === "pink",
                }
              )}
            >
              {props.color === "red" ? <HighlightOffOutlinedIcon /> : null}
              {props.color === "orange" ? <ErrorOutlineOutlinedIcon /> : null}
              {props.color === "green" ? (
                <CheckCircleOutlineOutlinedIcon />
              ) : null}
              {props.color === "teal" ? <InfoOutlinedIcon /> : null}
              {props.color === "purple" ? <HelpOutlineOutlinedIcon /> : null}
              {props.color === "pink" ? (
                <CircleNotificationsOutlinedIcon />
              ) : null}
              <span className="ml-2">{props.title}</span>
            </div>

            <div className="ml-8">{props.content}</div>
          </>
        ) : (
          <>
            <span
              className={classNames(
                "font-bold",
                "mb-1",
                "float-left",
                "mr-2",
                {
                  "text-red-600": props.color === "red",
                },
                {
                  "text-orange-500": props.color === "orange",
                },
                {
                  "text-green-600": props.color === "green",
                },
                {
                  "text-teal-700": props.color === "teal",
                },
                {
                  "text-purple-700": props.color === "purple",
                },
                {
                  "text-pink-600": props.color === "pink",
                }
              )}
            >
              {props.color === "red" ? <HighlightOffOutlinedIcon /> : null}
              {props.color === "orange" ? <ErrorOutlineOutlinedIcon /> : null}
              {props.color === "green" ? (
                <CheckCircleOutlineOutlinedIcon />
              ) : null}
              {props.color === "teal" ? <InfoOutlinedIcon /> : null}
              {props.color === "purple" ? <HelpOutlineOutlinedIcon /> : null}
              {props.color === "pink" ? (
                <CircleNotificationsOutlinedIcon />
              ) : null}
            </span>

            <span>{props.content}</span>
          </>
        )}
      </div>
    </Card>
  );
}