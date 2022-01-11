import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import Checkbox from "../0 - Index/Checkbox";
import NaviButtons from "../0 - Index/NaviButtons";

export default function DatabaseInfo() {
  return (
    <div className="database-info">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Database Information
        </Typography>

        <Card
          color="orange"
          content={[
            <div>
              All information available on this website were gathered{" "}
              <span className="text-pink-600">from the internet</span> and
              thanks to the{" "}
              <span className="text-pink-600">information provided</span> by{" "}
              <span className="text-orange-500">artists</span> and{" "}
              <span className="text-orange-500">collectors</span> in{" "}
              <Link link="https://discord.gg/vktnAzvyNQ" title="Anifriends" />
            </div>,
          ]}
        />

        <div className="contributors my-12 lg:ml-12 md:ml-6 sm:ml-2">
          <Typography variant="h3" color="inherit" component="h3">
            <span className="text-orange-500">Contributors</span>
          </Typography>
          <ul className="list-disc mt-3 ml-5">
            <li className="my-2 ">
              <span className="bg-red-400 text-gray-800 p-0.5 rounded-sm">
                Author & Website Developer:
              </span>{" "}
              <Link link="https://twitter.com/shinjuroukai" title="Shinjurou" />
            </li>
            <li className="my-2">
              <span className="bg-indigo-400 text-gray-800 p-0.5 rounded-sm">
                Assistant:
              </span>{" "}
              <Link link="https://twitter.com/Feireina" title="Fei" />
            </li>
            <li className="my-2">
              <span className="bg-orange-400 text-gray-800 p-0.5 rounded-sm">
                Proofreaders:
              </span>{" "}
              <Link link="https://twitter.com/blnkart_" title="BL!NK" />,{" "}
              <Link
                link="https://twitter.com/morellostorment"
                title="morello"
              />
              , <Link link="https://twitter.com/ligaratus_" title="ligaratus" />
              ,{" "}
              <Link link="https://twitter.com/PausePLayed" title="PausePlay" />
            </li>
            <li className="my-2">
              <span className="bg-emerald-400 text-gray-800 p-0.5 rounded-sm">
                Japanese Translator:
              </span>{" "}
              <Link
                link="https://twitter.com/0TL_"
                title="どげざちゃん/Dogeza-chan"
              />
            </li>
            <li className="my-2">
              <span className="bg-emerald-400 text-gray-800 p-0.5 rounded-sm">
                Korean Translator:
              </span>{" "}
              <Link link="https://twitter.com/0xARCANE" title="ARCANΞ" />,{" "}
              <Link link="https://twitter.com/poopeetuna" title="Tuna" />
            </li>
          </ul>
        </div>

        <Card
          color="green"
          content={[
            <div>
              If you wish to report any typo, correct an information, provide
              new information or provide translation into another language to be
              added onto the database then{" "}
              <span className="text-pink-600">
                please send a message to Shinjurou via Twitter or Discord.
              </span>
            </div>,
          ]}
        />

        <div className="release-notes mt-7 lg:ml-12 md:ml-6 sm:ml-2">
          <Typography variant="h3" color="inherit" component="h3">
            <span className="text-teal-600">Release Notes</span>
          </Typography>
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-600">8 December 2021</span>,
              " The start of the Database Compilation",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">9 December 2021</span>,
              " Database's Domain Registration",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">17 December 2021</span>,
              " ",
              <span className="text-red-600 font-bold">Version 1.0</span>,
              " English Version is released",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">9 January 2022</span>,
              " Migration start",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">11 January 2022</span>,
              " ",
              <span className="text-red-600 font-bold">Version 2.0</span>,
              " Migrated from Gitbook and rebuilt the Database to become its own individual website",
            ]}
          />
          <Checkbox
            checked={false}
            label={[
              <span className="text-violet-500">(In Progress)</span>,
              " ",
              " Japanese Version is translated",
            ]}
          />
          <Checkbox
            checked={false}
            label={[
              <span className="text-violet-500">(In Progress)</span>,
              " ",
              " Korean Version is translated",
            ]}
          />
        </div>
        <NaviButtons
          return="Welcome"
          returnlink="/"
          next="Introduction"
          nextlink="/introduction"
        />
      </div>
    </div>
  );
}
