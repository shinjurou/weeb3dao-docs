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
          color="green"
          title="Contribute to the Database"
          content={[
            <div>
              {" "}
              Please follow the{" "}
              <Link
                link="https://github.com/shinjurou/weeb3dao-docs/blob/main/guidelines/CONTRIBUTING.md"
                title="Contribution Guidelines"
              />{" "}
              and make a pull request to the{" "}
              <Link
                link="https://github.com/shinjurou/weeb3dao-docs"
                title="repository"
              />{" "}
              if you wish to{" "}
              <span className="text-teal-600">edit any typo</span>,{" "}
              <span className="text-green-600">correct an information</span>,{" "}
              <span className="text-pink-600">provide new information</span> or{" "}
              <span className="text-orange-500">
                provide translation into another language
              </span>
              .
            </div>,
          ]}
        />

        <Card
          color="purple"
          content={[
            <div>
              Please feel free to{" "}
              <span className="text-green-600 font-bold">
                drop a message to weeb3dao members
              </span>{" "}
              in the{" "}
              <Link
                link="https://discord.gg/fndmoe"
                title="FND.moe
                server"
              />{" "}
              if you require assistance .
            </div>,
          ]}
        />

        <div className="contributors my-12 lg:ml-12 md:ml-6 sm:ml-2">
          <Typography variant="h3" color="inherit" component="h3">
            <span className="text-orange-500">Contributors</span>
          </Typography>
          <ul className="list-disc mt-3 ml-5">
            <li className="my-2 ">
              <span className="bg-indigo-500 text-gray-800 p-0.5 rounded-sm">
                Website Developers:
              </span>{" "}
              <Link link="https://twitter.com/shinjuroueth" title="shinjurou" />
              , <Link link="https://twitter.com/ligaratus_" title="ligaratus" />
            </li>
            <li className="my-2 ">
              <span className="bg-red-400 text-gray-800 p-0.5 rounded-sm">
                Authors:
              </span>{" "}
              <Link link="https://twitter.com/shinjuroueth" title="shinjurou" />{" "}
              , <Link link="https://twitter.com/chionnera" title="Chione" />
            </li>
            <li className="my-2">
              <span className="bg-emerald-400 text-gray-800 p-0.5 rounded-sm">
                Translators:
              </span>{" "}
              <Link link="https://twitter.com/0TL_" title="Dogeza-chan" />{" "}
              (Japanese),{" "}
              <Link link="https://twitter.com/0xARCANE" title="ARCANΞ" />{" "}
              (Korean)
            </li>
            <li className="my-2">
              <span className="bg-orange-400 text-gray-800 p-0.5 rounded-sm">
                Proofreaders:
              </span>{" "}
              <br />
              <div className="mt-1"></div>
              English:{" "}
              <Link
                link="https://twitter.com/morellostorment"
                title="morello"
              />
              , <Link link="https://twitter.com/ligaratus_" title="ligaratus" />
              , <Link link="https://twitter.com/Feireina" title="Fei" />,{" "}
              <Link link="https://twitter.com/blnkart_" title="BL!NK" />,{" "}
              <Link link="https://twitter.com/PausePLayed" title="PausePlay" />
              <br />
              Japanese:{" "}
              <Link link="https://twitter.com/0TL_" title="Dogeza-chan" />
              , <Link link="https://twitter.com/piprycto" title="Fao" />,{" "}
              <Link link="https://twitter.com/PigThePersona" title="ranbuta" />,{" "}
              <Link link="https://twitter.com/WakiyamaP" title="WakiyamaP" />
            </li>
            <li className="my-2 ">
              <span className="bg-cyan-500 text-gray-800 p-0.5 rounded-sm">
                Scholarship Handlers:
              </span>{" "}
              <Link link="https://twitter.com/shiomueth" title="shiomu" />,{" "}
              <Link link="https://twitter.com/ligaratus_" title="ligaratus" />,{" "}
              <Link link="https://twitter.com/LumenWakuWaku" title="Lumen" />,{" "}
              <Link
                link="https://twitter.com/morellostorment"
                title="morello"
              />
            </li>
            <li className="my-2">
              <span className="bg-violet-500 text-gray-800 p-0.5 rounded-sm">
                Domain Owner:
              </span>{" "}
              <Link
                link="https://twitter.com/morellostorment"
                title="morello"
              />
            </li>
          </ul>
        </div>

        <Card
          color="teal"
          content={[
            <div>
              All information available on this website were gathered{" "}
              <span className="text-pink-600">from the internet</span> and
              thanks to the{" "}
              <span className="text-pink-600">information provided</span> by{" "}
              <span className="text-orange-500">artists</span> and{" "}
              <span className="text-orange-500">collectors</span> in the{" "}
              <span className="text-teal-500">Anime NFT circle</span>.
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
              " Japanese translation is finished",
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
              " Added Japanese Version",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">18 February 2022</span>,
              " ",
              <span className="text-red-600 font-bold">Version 3.1</span>,
              ' Added "How to airdrop an NFT"',
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">28 May 2022</span>,
              " ",
              <span className="text-red-600 font-bold">Version 3.2</span>,
              " Ethereum Marketplace information is updated",
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">3 December 2022</span>,
              " ",
              <span className="text-red-600 font-bold">Version 3.3</span>,
              ' Added "Contribution Guidelines"',
            ]}
          />
          <Checkbox
            checked={true}
            label={[
              <span className="text-violet-500">25 December 2022</span>,
              " ",
              <span className="text-red-600 font-bold">Version 4.0</span>,
              ' Updated website; Added "How to use Manifold"; Updated "Environment Controversy" to "NFT Controversy"',
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
