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
import RouterLink from "../0 - Index/RouterLink";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
          <Tab label="Ethereum" {...a11yProps(0)} />
          <Tab label="Polygon" {...a11yProps(1)} />
          <Tab label="Tezos" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="mb-2">
            The{" "}
            <span className="text-pink-600 font-bold">
              most popular blockchain
            </span>{" "}
            for anime NFT artists at the current time of writing.
          </div>

          <Card
            color="pink"
            light={true}
            content={[
              <div>
                Information about marketplaces are available{" "}
                <RouterLink link="/sell-nft/choose-marketplace" title="here" />.
              </div>,
            ]}
          />
          <div className="mb-2">
            Marketplaces for Ethereum:{" "}
            <Link link="https://opensea.io/" title="OpenSea" />,{" "}
            <Link link="https://foundation.app/" title="Foundation" />{" "}
            (currently the main hub for anime-inspired artists),{" "}
            <Link link="https://makersplace.com/" title="MakersPlace" />,
            <Link link="https://knownorigin.io/" title="KnownOrigin" />,{" "}
            <Link link="https://superrare.co/" title="SuperRare" />,{" "}
            <Link link="https://anifty.jp/" title="ANIFTY" />.
          </div>

          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Widely used for all NFT creators + collectors
                  </li>
                  <li className="mt-1">
                    Have the highest volume and average sale value in terms of
                    USD
                  </li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    High gas fees for each transaction on the network
                  </li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="orange"
            title="Important information"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    All transactions on ETH will incur a gas fee based on the
                    GWEI at the time of usage. (GWEI and gas fee explanations
                    are available{" "}
                    <RouterLink
                      link="/info-nft/important-terminologies"
                      title="here"
                      light={true}
                    />
                    )
                  </li>
                  <li className="mt-1">
                    Examples for gas fee price for minting on{" "}
                    <Link
                      link="https://foundation.app/"
                      title="Foundation"
                      light={true}
                    />
                    :
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      1 ETH = USD $3000{" "}
                      <span className="relative bottom-0.5 right-0.5">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      50 GWEI = approximately USD $40~$60
                    </li>
                    <li className="mt-1">
                      1 ETH = USD $4000{" "}
                      <span className="relative bottom-0.5 right-0.5">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      50 GWEI = approximately USD $60~$80
                    </li>
                  </ul>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      Each gas fee
                    </span>{" "}
                    is for{" "}
                    <span className="text-pink-600 font-bold">
                      each transaction
                    </span>
                    . If you mint x2 artworks then it will cost x2 gas fees.
                  </li>
                </ul>
              </>,
            ]}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="mb-2">
            Ethereum and Polygon are the{" "}
            <span className="text-pink-600 font-bold">
              most popular blockchains
            </span>{" "}
            for{" "}
            <span className="text-pink-600 font-bold">
              Japanese anime NFT artists
            </span>{" "}
            at the current time of writing.
          </div>

          <Card
            color="pink"
            light={true}
            content={[
              <div>
                Many{" "}
                <span className="text-pink-600 font-bold">
                  Japanese anime NFT artists
                </span>{" "}
                prefer to use Polygon instead of Ethereum for its{" "}
                <span className="text-green-600 font-bold">
                  very low gas fees
                </span>{" "}
                for transactions and blockchain is also{" "}
                <span className="text-green-600 font-bold">eco-friendly</span>.
              </div>,
            ]}
          />

          <div className="mb-2">
            Marketplace for Polygon:{" "}
            <Link link="https://opensea.io/" title="OpenSea" /> (Polygon
            Network)
          </div>

          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">Eco-friendly</li>
                  <li className="mt-1">
                    No gas fee for any sale or purchase (on OpenSea){" "}
                    <span className="relative bottom-0.5 right-0.5">
                      <ArrowRightAltIcon />
                    </span>{" "}
                    Therefore Polygon is better for lower priced collections
                  </li>
                  <li className="mt-1">
                    Collectors on ETH main net can convert to Polygon ETH on
                    OpenSea and able to purchase your artwork(s) easily
                  </li>
                  <li className="mt-1">
                    Can be used to airdrop tokens or NFTs for a very low cost
                  </li>
                  <li className="mt-1">
                    Can be exchanged into FIAT at almost the same value as ETH
                  </li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Needs bridging/conversion between Ethereum network and
                    Polygon network for usage
                  </li>
                  <li className="mt-1">
                    OpenSea hides Polygon airdrops and filters "Activity" tab to
                    only Ethereum by default
                  </li>
                  <li className="mt-1">
                    Commonly used to send spam or advertisement NFTs as well as
                    art thieves due to the low gas costs, which hurt the
                    popularity and legitimacy of Polygon NFTs as a whole.{" "}
                    <span className="relative bottom-0.5 right-0.5">
                      <ArrowRightAltIcon />
                    </span>{" "}
                    Due to this, a lot of collectors still prefer NFTs on ETH
                    Mainnet despite higher gas fees
                  </li>
                  <li className="mt-1">
                    Volume and average sale price on polygon tend to be lower
                  </li>
                </ul>
              </>,
            ]}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className="mb-2">
            An alternative to Polygon for{" "}
            <span className="text-green-600 font-bold">
              eco-friendly blockchain
            </span>
            .
          </div>

          <Card
            color="pink"
            light={true}
            content={[
              <div>
                <Link link="https://opensea.io/" title="OpenSea" /> have plans
                to add Tezos to their list of blockchains.
              </div>,
            ]}
          />

          <div className="mb-2">
            Marketplaces for Tezos:{" "}
            <Link link="https://hicetnunc.art/" title="Hicetnunc" />,{" "}
            <Link link="https://objkt.com/" title="OBJKT" />,{" "}
            <Link link="https://kalamint.io/" title="Kalamint" />.
          </div>

          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">Eco-friendly</li>
                  <li className="mt-1">
                    Very low cost gas for each transaction
                  </li>
                  <li className="mt-1">
                    Very good option if you want to sell your artworks as
                    multiple editions instead of 1/1
                  </li>
                  <li className="mt-1">
                    Collectors and fellow artists will be able to collect your
                    artwork(s) easily due to its low prices.
                  </li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Doesn't have as much collectors as ETH blockchain
                  </li>
                  <li className="mt-1">Low FIAT value</li>
                </ul>
              </>,
            ]}
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
