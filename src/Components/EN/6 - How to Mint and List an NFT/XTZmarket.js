import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="hic et nunc" {...a11yProps(0)} />
          <Tab label="OBJKT" {...a11yProps(1)} />
          <Tab label="Kalamint" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Card
            color="orange"
            title="Important Note"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    hic et nunc was the most popular marketplace on Tezos; has
                    been discontinued on 12 November 2021 by its creator.
                    Currently the website available here is a mirror preserved
                    by the original{" "}
                    <span className="text-orange-500 font-bold">
                      hic et nunc's developers and community
                    </span>
                    .
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Open for everyone to use.
                    </span>{" "}
                    Anyone can make an account and start using Hic et Nunc
                    without needing to go through an application process.
                  </li>
                  <li className="mt-1">
                    You can{" "}
                    <span className="text-green-600 font-bold">
                      start minting instantly
                    </span>{" "}
                    after{" "}
                    <span className="text-orange-500 font-bold">
                      connecting your wallet
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    NFTs{" "}
                    <span className="text-teal-600 font-bold">
                      minted on Hic et Nunc
                    </span>{" "}
                    will{" "}
                    <span className="text-green-600 font-bold">
                      also show up on OBJKT
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    hic et nunc is{" "}
                    <span className="text-green-600 font-bold">
                      a very good marketplace on the Tezos blockchain for
                      artworks with editions.
                    </span>
                  </li>
                  <li className="mt-1">
                    You can{" "}
                    <span className="text-green-600 font-bold">
                      set the royalty fee for secondary sale according to your
                      preference.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Needs major improvement on their UI experience.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Tags for NFT is not available.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Almost impossible
                    </span>{" "}
                    to search for artworks on here so{" "}
                    <span className="text-pink-600 font-bold">
                      you will need to promote your artworks on Twitter and
                      Discord.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />

          <Card
            color="teal"
            title="General Information"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    hic et nunc currently only has{" "}
                    <span className="text-orange-500 font-bold">1 system</span>{" "}
                    available for selling NFT(s)
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        fixed "buy now" price
                      </span>
                      .
                    </li>
                  </ul>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Open for everyone to use.
                    </span>{" "}
                    Anyone can make an account and start using Hic et Nunc
                    without needing to go through an application process.
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      The equivalent of OpenSea for the Tezos blockchain.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Better than hic et Nunc
                    </span>{" "}
                    for{" "}
                    <span className="text-green-600 font-bold">
                      discovering new artists and artworks.
                    </span>
                  </li>
                  <li className="mt-1">
                    You can{" "}
                    <span className="text-green-600 font-bold">
                      set the royalty fee for secondary sale according to your
                      preference.
                    </span>
                  </li>
                  <li className="mt-1">
                    Has a{" "}
                    <Link
                      link="https://roadmap.objkt.com/"
                      title="roadmap for future features."
                    />{" "}
                  </li>
                  <li className="mt-1">
                    You can apply to{" "}
                    <span className="text-green-600 font-bold">
                      mint using your own smart contract.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    You are{" "}
                    <span className="text-red-600 font-bold">
                      required to create a collection
                    </span>{" "}
                    before being able to{" "}
                    <span className="text-orange-500 font-bold">
                      mint your artwork.
                    </span>{" "}
                    This will{" "}
                    <span className="text-red-600 font-bold">
                      require a gas fee.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Tags for NFT is not available.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="General Information"
            light={true}
            content={[
              <div>
                OBJKT has{" "}
                <span className="text-orange-500 font-bold">4 systems</span>{" "}
                available for selling NFT(s) in which you can choose depending
                on your preference:
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Set a{" "}
                    <span className="text-pink-600 font-bold">
                      fixed "buy now" price
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    There are{" "}
                    <span className="text-orange-500 font-bold">
                      2 types of timed auctions
                    </span>{" "}
                    available.
                  </li>
                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        Sell to the highest bidder.
                      </span>
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        Sell with declining price(Dutch auction).
                      </span>
                    </li>
                  </ul>

                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      Accept offers
                    </span>{" "}
                    from others.
                  </li>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Has an application process to verify artists
                    </span>{" "}
                    (not curation based). This will help collectors to be able
                    to collect from verified artists for{" "}
                    <span className="text-green-600 font-bold">safety.</span>
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Better than hic et Nunc
                    </span>{" "}
                    for{" "}
                    <span className="text-green-600 font-bold">
                      discovering new artists and artworks.
                    </span>
                  </li>
                  <li className="mt-1">
                    Generally, artists set their artworks at around{" "}
                    <span className="text-orange-500 font-bold">5 TEZ</span>,
                    which is{" "}
                    <span className="text-pink-600 font-bold">
                      higher than the average price in Hic et Nunc.
                    </span>
                  </li>
                  <li className="mt-1">
                    Currently has the{" "}
                    <span className="text-green-600 font-bold">
                      best UI experience for the Tezos blockchain.
                    </span>
                  </li>
                  <li className="mt-1">
                    NFTs{" "}
                    <span className="text-teal-600 font-bold">
                      minted on Kalamint
                    </span>{" "}
                    will{" "}
                    <span className="text-green-600 font-bold">
                      also show up on OBJKT
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    You can{" "}
                    <span className="text-green-600 font-bold">
                      set the royalty fee for secondary sale according to your
                      preference.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Lack of written guides
                    </span>{" "}
                    on their website.
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Tags for NFT is not available.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Has a storage fee of 0.5 TEZ per NFT edition.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Sales will be rare due to lack of anime collectors
                    </span>{" "}
                    on the platform, but{" "}
                    <span className="text-orange-500 font-bold">
                      profit will be higher than Hic et Nunc at sale.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="General Information"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    The approximate{" "}
                    <span className="text-orange-500 font-bold">
                      cost to mint each edition
                    </span>{" "}
                    will be{" "}
                    <span className="text-pink-600 font-bold">
                      anywhere between 0.05 to 0.3 TEZ.
                    </span>
                  </li>
                  <li className="mt-1">
                    Kalamint has{" "}
                    <span className="text-orange-500 font-bold">2 systems</span>{" "}
                    available for selling NFT(s) in which you can choose
                    depending on your preference:
                  </li>
                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        fixed "buy now" price
                      </span>
                      .
                    </li>
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        base price and time frame for auction
                      </span>
                      . Creator can{" "}
                      <span className="text-teal-600 font-bold">
                        settle the auction any time they want or highest bidder
                        to settle the auction after timer ends.
                      </span>
                    </li>
                  </ul>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
