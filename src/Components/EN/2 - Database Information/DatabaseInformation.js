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
              <Link link="https://discord.gg/vktnAzvyNQ" title="Anifriends" />.
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
                Main author & Website Developer:
              </span>{" "}
              <Link link="https://twitter.com/shinjuroukai" title="shinjurou" />
            </li>
            <li className="my-2 ">
              <span className="bg-sky-600 text-gray-800 p-0.5 rounded-sm">
                Website Collaborators:
              </span>{" "}
              <Link link="https://twitter.com/ligaratus_" title="ligaratus" />,{" "}
              <Link link="https://twitter.com/shiomueth" title="shiomu" />
            </li>
            <li className="my-2 ">
              <span className="bg-purple-400 text-gray-800 p-0.5 rounded-sm">
                Authors
              </span>{" "}
              <Link link="https://twitter.com/chionnera" title="Chione" />
            </li>
            <li className="my-2">
              <span className="bg-orange-400 text-gray-800 p-0.5 rounded-sm">
                English Proofreaders:
              </span>{" "}
              <Link
                link="https://twitter.com/morellostorment"
                title="morello"
              />
              , <Link link="https://twitter.com/ligaratus_" title="ligaratus" />
              , <Link link="https://twitter.com/Feireina" title="Fei" />,{" "}
              <Link link="https://twitter.com/blnkart_" title="BL!NK" />,{" "}
              <Link link="https://twitter.com/PausePLayed" title="PausePlay" />
            </li>
            <li className="my-2">
              <span className="bg-emerald-400 text-gray-800 p-0.5 rounded-sm">
                Japanese Translator:
              </span>{" "}
              <Link link="https://twitter.com/0TL_" title="Dogeza-chan" />
            </li>
            <li className="my-2">
              <span className="bg-orange-400 text-gray-800 p-0.5 rounded-sm">
                Japanese Proofreaders:
              </span>{" "}
              <Link link="https://twitter.com/0TL_" title="Dogeza-chan" />
              , <Link link="https://twitter.com/piprycto" title="Fao" />,{" "}
              <Link link="https://twitter.com/PigThePersona" title="ranbuta" />
              , <Link link="https://twitter.com/WakiyamaP" title="WakiyamaP" />
            </li>
            <li className="my-2">
              <span className="bg-emerald-400 text-gray-800 p-0.5 rounded-sm">
                Korean Translator:
              </span>{" "}
              <Link link="https://twitter.com/0xARCANE" title="ARCANΞ" />
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
              " Migration and rebuilding start",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">12 January 2022</span>,
              " ",
              <span className="text-red-600 font-bold">Version 2.0</span>,
              " Migrated from Gitbook and rebuilt the Database to become its own individual website",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">19 January 2022</span>,
              " ",
              " Japanese Version translation is finished",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">30 January 2022</span>,
              " ",

              " Start adding the Japanese Version to the Database",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">31 January 2022</span>,
              " ",
              <span className="text-red-600 font-bold">Version 3.0</span>,
              " Japanese Version is added",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">18 February 2022</span>,
              " ",
              <span className="text-red-600 font-bold">Version 3.1</span>,
              " Guide on how to airdrop an NFT is added",
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
