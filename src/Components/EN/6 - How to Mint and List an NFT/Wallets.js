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
          <Tab label="MetaMask" {...a11yProps(0)} />
          <Tab label="Kukai" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="mb-2">
            MetaMask is can be used for the{" "}
            <span className="text-pink-600 font-bold">Ethereum</span> and{" "}
            <span className="text-pink-600 font-bold">Polygon</span>{" "}
            blockchains.
          </div>
          <div className="mb-2">
            Marketplaces for Ethereum:{" "}
            <Link link="https://opensea.io/" title="OpenSea" />,{" "}
            <Link link="https://foundation.app/" title="Foundation" />,{" "}
            <Link link="https://makersplace.com/" title="MakersPlace" />,
            <Link link="https://knownorigin.io/" title="KnownOrigin" />,{" "}
            <Link link="https://superrare.co/" title="SuperRare" />,{" "}
            <Link link="https://anifty.jp/" title="ANIFTY" />.
          </div>
          <div className="mb-2">
            Marketplace for Polygon:{" "}
            <Link link="https://opensea.io/" title="OpenSea" /> (Polygon
            Network)
          </div>
          <div className="mb-2">
            Information about marketplaces are available{" "}
            <RouterLink link="/sell-nft/choose-marketplace" title="here" />.
          </div>
          <Card
            color="teal"
            title="Guide on how to create a MetaMask wallet"
            light={true}
            content={[
              <div>
                <ol className="list-decimal ml-4">
                  <li className="mt-1">
                    <Link
                      link="https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask"
                      title="Install the extension on Chrome, Firefox, Edge, or Brave"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://www.followchain.org/make-metamask-wallet/"
                      title="Set up your MetaMask wallet"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    Buy ETH for your wallet (
                    <span className="text-pink-600">
                      Highly recommend everyone to apply for{" "}
                      <RouterLink
                        link="/weeb3dao-scholarship"
                        title="the weeb3dao
                      scholarship"
                      />{" "}
                      instead of buying ETH to mint your first artwork
                    </span>
                    )
                  </li>
                </ol>
                <ul className="list-disc ml-10">
                  <li className="mt-1">
                    <Link
                      link="https://metamask.zendesk.com/hc/en-us/articles/360058239311-How-to-buy-ETH"
                      title="Directly via MetaMask"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://help.foundation.app/en/articles/4731452-a-complete-guide-to-getting-eth-and-a-wallet-with-metamask"
                      title="Using Coinbase"
                      light={true}
                    />
                  </li>{" "}
                  <li className="mt-1">
                    If those methods don't work then you can check{" "}
                    <Link
                      link="https://ethereum.org/en/get-eth/"
                      title="the services
                      available for the country you are in here"
                      light={true}
                    />
                    . <br />
                    <span className="text-orange-500 font-bold">
                      Recommendation:
                    </span>{" "}
                    <Link
                      link="https://www.myetherwallet.com/"
                      title="MEW"
                      light={true}
                    />
                    as you can buy ETH{" "}
                    <Link
                      link="https://kb.myetherwallet.com/en/swap/buy-eth-via-simplex/"
                      title="using your credit card through
                      Simplex"
                      light={true}
                    />
                  </li>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="mb-2">
            Kukai is used for the{" "}
            <span className="text-pink-600 font-bold">Tezos</span> blockchain.
          </div>
          <div className="mb-2">
            Marketplaces for Tezos:{" "}
            <Link link="https://hicetnunc.art/" title="Hicetnunc" />,{" "}
            <Link link="https://objkt.com/" title="OBJKT" />,{" "}
            <Link link="https://kalamint.io/" title="Kalamint" />.
          </div>

          <Card
            color="teal"
            title="Guide on how to create a Kukai wallet"
            light={true}
            content={[
              <div>
                <ol className="list-decimal ml-4">
                  <li className="mt-1">
                    <Link
                      link="https://docs.kukai.app/learn-kukai/new-wallet"
                      title="Set up your Kukai wallet"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">Buy Tezos for your wallet</li>
                </ol>
                <ul className="list-disc ml-10">
                  <li className="mt-1">
                    <Link
                      link="https://www.kraken.com/en-gb/learn/buy-tezos-xtz"
                      title="Using Kraken"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://wheretobuytezos.com/how-to-buy-tezos-xtz/coinbase"
                      title="Using Coinbase"
                      light={true}
                    />
                  </li>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
