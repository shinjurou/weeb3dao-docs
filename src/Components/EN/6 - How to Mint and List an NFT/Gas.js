import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExample from "../0 - Index/WordExample";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import ethgas from "../../../Imgs/ethgas.png";
import ethgaschrome from "../../../Imgs/ethgaschrome.png";
import ethgastable from "../../../Imgs/ethgastable.png";
import blocknative from "../../../Imgs/blocknative.png";
import gasbotgg from "../../../Imgs/gasbotgg.png";
import gasbot from "../../../Imgs/gasbot.png";
import gwei from "../../../Imgs/gwei.png";

export default function Gas() {
  return (
    <div className="gas">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          How to keep track of Gas
        </Typography>

        <div className="mb-6"></div>
        <Card
          color="teal"
          content={[
            <div>
              An article with explanations for gwei, gas price and gas limit is
              available{" "}
              <Link
                link="https://decenter.org/en/what-are-gas-gas-limit-and-gas-price-in-the-ethereum-network"
                title="here"
              />
              .
            </div>,
          ]}
        />
        <Card
          color="green"
          content={[
            <div>
              There are certain days with hours in which GWEI is at its{" "}
              <span className="text-pink-600 font-bold">lowest.</span>
              <WordExample
                notReal={true}
                explain={[
                  <>
                    highest of the week is{" "}
                    <span className="text-pink-600 font-bold">200 GWEI</span>{" "}
                    and the lowest of the week is{" "}
                    <span className="text-pink-600 font-bold">30 GWEI.</span>
                  </>,
                ]}
              />
              <div className="mt-2">
                As GWEI fluctuates every hour and is inconsistent each week. If
                you want to avoid spending too much on gas then you can check
                out these tools to help keep track of gas price.
              </div>
            </div>,
          ]}
        />

        <Divider>
          <Chip label="Gas Tracking Tools" />
        </Divider>
        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div className="mt-1">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={3}
              mb={1}
            >
              <Link link="https://www.gwei.at/" title="GWEI" light={true} />
            </Typography>
            <img src={gwei} alt="Gwei website" className="rounded mb-2" />
          </div>
          <div className="mt-1">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={3}
              mb={1}
            >
              <Link
                link="https://chrome.google.com/webstore/detail/blocknative-eth-gas-estim/ablbagjepecncofimgjmdpnhnfjiecfm"
                title="Blocknative ETH Gas Estimator for Chrome"
                light={true}
              />
            </Typography>

            <img
              src={ethgas}
              alt="How to pin the BlockNative extension in Chrome."
              className="rounded mb-2"
            />
            <div className="mb-3">
              Click on the pin button in order to have it installed in your
              Chrome browser for easy viewing.
            </div>
            <img
              src={ethgaschrome}
              alt="BlockNative extension pinned in Chrome."
              className="rounded mb-2"
            />
            <div className="mb-3">
              The number that is showing here is the current GWEI from{" "}
              <Link
                link="https://www.blocknative.com/gas-estimator"
                title="BlockNative"
              />
              .
            </div>
            <div className="mb-3">
              Clicking on the icon will show you this screen.
            </div>

            <img
              src={ethgastable}
              alt="BlockNative Gas Table."
              className="rounded mt-2"
            />
          </div>

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={3}
              mb={1}
            >
              <Link
                link="https://www.blocknative.com/gas-estimator"
                title="Blocknative Website"
                light={true}
              />
            </Typography>
            <div className="mb-3">
              Blocknative has a compilation overview of GWEI prices{" "}
              <span className="text-orange-500 font-bold">
                24/7 throughout one week
              </span>{" "}
              in UTC Timezone.
            </div>
            <img
              src={blocknative}
              alt="Blocknative Gas Table"
              className="rounded mb-2"
            />
            <ul className="list-disc  ml-6">
              <li className="mt-1">
                Right most in this graph is the current GWEI today.
              </li>
              <li className="mt-1">Left most was the GWEI 7 days ago.</li>
              <li className="mt-1">Dark purple shades = Low gas fee</li>
              <li className="mt-1">
                Lightest purple color = Highest gas fee of the week
              </li>
            </ul>
            <Card
              color="green"
              content={[
                <div>
                  GWEI is usually the{" "}
                  <span className="text-green-600 font-bold">
                    lowest on weekends
                  </span>{" "}
                  as there are not as much people using it compare to other days
                  of the week.
                  <span className="text-pink-600 font-bold">
                    {" "}
                    However this also fluctuates and some weekends ended up
                    being exceptions.
                  </span>
                </div>,
              ]}
            />
          </div>

          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={3}
              mb={1}
            >
              <Link
                link="https://top.gg/bot/631048498002919434"
                title="GasTracker Discord Bot"
                light={true}
              />
            </Typography>
            <ul className="list-disc ml-6">
              <li className="mt-1">
                Most NFT Discord Servers{" "}
                <span className="text-pink-600 font-bold">
                  {" "}
                  will have this bot in their server.
                </span>{" "}
              </li>
              <li className="mt-1">
                If you want to invite the bot to your own server then
                <span className="text-pink-600 font-bold">
                  {" "}
                  click "Invite"
                </span>{" "}
                to let the bot join your private server
              </li>
            </ul>
            <img
              src={gasbotgg}
              alt="MakersPlace Upload Creation button"
              className="rounded my-2"
            />
            <ul className="list-disc ml-6">
              <li className="mt-1">
                The bot will be available on the{" "}
                <span className="text-pink-600 font-bold">
                  {" "}
                  right tab of Discord
                </span>{" "}
                with its status as the current gas prices.
              </li>
            </ul>

            <img
              src={gasbot}
              alt="MakersPlace Upload Creation button"
              className="rounded mt-2"
            />
          </div>
        </div>
        <NaviButtons
          return="Celebration"
          returnlink="/sell-nft/celebration"
          next="Burn your NFT"
          nextlink="/burn-NFT"
        />
      </div>
    </div>
  );
}
