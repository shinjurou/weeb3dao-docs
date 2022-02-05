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
            MetaMaskは、
            <span className="text-pink-600 font-bold">Ethereum</span> と{" "}
            <span className="text-pink-600 font-bold">Polygon</span>{" "}
            のブロックチェーンに使用することができます。
          </div>
          <div className="mb-2">
            Ethereumのマーケットプレイス:{" "}
            <Link link="https://opensea.io/" title="OpenSea" />、
            <Link link="https://foundation.app/" title="Foundation" />、
            <Link link="https://makersplace.com/" title="MakersPlace" />、
            <Link link="https://knownorigin.io/" title="KnownOrigin" />、
            <Link link="https://superrare.co/" title="SuperRare" />、
            <Link link="https://anifty.jp/" title="ANIFTY" />.
          </div>
          <div className="mb-2">
            Polygonのマーケットプレイス:{" "}
            <Link link="https://opensea.io/" title="OpenSea" /> (Polygon
            ネットワーク)
          </div>
          <div className="mb-2">
            マーケットプレイスに関する情報は
            <RouterLink link="/sell-nft/choose-marketplace" title="こちら" />
            からご覧いただけます。
          </div>
          <Card
            color="teal"
            title="MetaMaskウォレットの作成方法に関するガイド"
            light={true}
            content={[
              <div>
                <ol className="list-decimal ml-4">
                  <li className="mt-1">
                    <Link
                      link="https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask"
                      title="Chrome, Firefox, Edge, またはBraveに拡張機能をインストールします。​"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://www.followchain.org/make-metamask-wallet/"
                      title="MetaMask walletをセットアップします。​"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    ウォレットのためにETHを購入する (
                    <span className="text-pink-600">
                      最初のアートワークを作るためにETHを購入する代わりに、{" "}
                      <RouterLink
                        link="/weeb3dao-scholarship"
                        title="weeb3dao Mint 奨学金制度"
                      />{" "}
                      に応募することを強くお勧めします
                    </span>
                    )。
                  </li>
                </ol>
                <ul className="list-disc ml-10">
                  <li className="mt-1">
                    <Link
                      link="https://metamask.zendesk.com/hc/en-us/articles/360058239311-How-to-buy-ETH"
                      title="MetaMask経由で直接購入"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://help.foundation.app/en/articles/4731452-a-complete-guide-to-getting-eth-and-a-wallet-with-metamask"
                      title="Coinbase(最大手暗号資産取引所)で購入"
                      light={true}
                    />
                  </li>{" "}
                  <li className="mt-1">
                    これらの方法がうまくいかない場合は、
                    <Link
                      link="https://ethereum.org/en/get-eth/"
                      title="こちら"
                      light={true}
                    />
                    であなたの国で利用可能なサービスを確認することができます。
                    <br />
                    <span className="text-orange-500 font-bold">
                      推奨:
                    </span>{" "}
                    <Link
                      link="https://www.myetherwallet.com/"
                      title="MEW"
                      light={true}
                    />{" "}
                    <Link
                      link="https://kb.myetherwallet.com/en/swap/buy-eth-via-simplex/"
                      title="(Simplexでクレジットカードを使いETHを購入できるため)。"
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
            Kukaiは <span className="text-pink-600 font-bold">Tezos</span>{" "}
            のブロックチェーンに使用されています。
          </div>
          <div className="mb-2">
            Tezosのマーケットプレイス:{" "}
            <Link link="https://teia.art/" title="Teia" />,{" "}
            <Link link="https://objkt.com/" title="OBJKT" />,{" "}
            <Link link="https://kalamint.io/" title="Kalamint" />.
          </div>

          <Card
            color="teal"
            title="Kukaiウォレットの作成方法に関するガイド"
            light={true}
            content={[
              <div>
                <ol className="list-decimal ml-4">
                  <li className="mt-1">
                    <Link
                      link="https://docs.kukai.app/learn-kukai/new-wallet"
                      title="Kukaiウォレットをセットアップする。"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">ウォレットにTezosを購入。</li>
                </ol>
                <ul className="list-disc ml-10">
                  <li className="mt-1">
                    <Link
                      link="https://www.kraken.com/en-gb/learn/buy-tezos-xtz"
                      title="Krakenで購入"
                      light={true}
                    />
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://wheretobuytezos.com/how-to-buy-tezos-xtz/coinbase"
                      title="Coinbase(最大手暗号資産取引所)で購入"
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
