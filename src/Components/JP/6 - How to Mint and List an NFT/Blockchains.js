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
            執筆時点でアニメNFTのアーティストに
            <span className="text-pink-600 font-bold">
              最も人気のあるブロックチェーン
            </span>
            です。
          </div>

          <Card
            color="pink"
            light={true}
            content={[
              <div>
                マーケットプレイスに関する情報は
                <RouterLink
                  link="/sell-nft/choose-marketplace"
                  title="こちら"
                />
                からご覧いただけます。
              </div>,
            ]}
          />
          <div className="mb-2">
            Ethereumのマーケットプレイス:{" "}
            <Link link="https://opensea.io/" title="OpenSea" />,{" "}
            <Link link="https://foundation.app/" title="Foundation" />{" "}
            (現在、アニメ系アーティストの中心的な拠点),{" "}
            <Link link="https://makersplace.com/" title="MakersPlace" />,{" "}
            <Link link="https://knownorigin.io/" title="KnownOrigin" />,{" "}
            <Link link="https://superrare.co/" title="SuperRare" />,{" "}
            <Link link="https://anifty.jp/" title="ANIFTY" />.
          </div>

          <Card
            color="green"
            title="長所"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    全てのNFTクリエイターとコレクターに広く利用されている。
                  </li>
                  <li className="mt-1">
                    米ドル換算で最も販売量が多く、平均販売額も高い。
                  </li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="red"
            title="短所"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    ネットワーク上の各取引にかかるガス代が高い。
                  </li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="orange"
            title="重要な情報"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    ETHのすべての取引には、利用時のGWEIに基づくガス代が発生します。(GWEIおよびガス代の説明は
                    <RouterLink
                      link="/info-nft/important-terminologies"
                      title="こちら"
                      light={true}
                    />
                    をご覧ください)。
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://foundation.app/"
                      title="Foundation"
                      light={true}
                    />
                    でmintする際のガス料金の例:
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      1 ETH = USD $3000{" "}
                      <span className="relative bottom-0.5 right-0.25">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      50 GWEI = 約USD $40~$60
                    </li>
                    <li className="mt-1">
                      1 ETH = USD $4000{" "}
                      <span className="relative bottom-0.5 right-0.25">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      50 GWEI = 約USD $60~$80
                    </li>
                  </ul>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">ガス代</span>
                    は、
                    <span className="text-pink-600 font-bold">1回の取引</span>
                    ごとに発生します。もし、2つの作品を作った場合、2つのガス代がかかることになります。
                  </li>
                </ul>
              </>,
            ]}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="mb-2">
            記事執筆時点で、EthereumとPolygonが
            <span className="text-pink-600 font-bold">日本の</span>
            アニメNFTアーティストに
            <span className="text-pink-600 font-bold">
              最も人気のブロックチェーン
            </span>
            です。
          </div>

          <Card
            color="pink"
            light={true}
            content={[
              <div>
                <span className="text-pink-600 font-bold">
                  日本のアニメNFTアーティスト
                </span>
                の多くは、取引にかかる
                <span className="text-green-600 font-bold">
                  ガス代が非常に安く
                </span>
                、ブロックチェーンが
                <span className="text-green-600 font-bold">環境にも優しい</span>
                ことから、EthereumではなくPolygonを好んで使っています。
              </div>,
            ]}
          />

          <div className="mb-2">
            Polygonのマーケットプレイス:{" "}
            <Link link="https://opensea.io/" title="OpenSea" /> (Polygon
            ネットワーク)
          </div>

          <Card
            color="green"
            title="長所"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">環境に優しい。</li>
                  <li className="mt-1">
                    販売・購入時のガス代が無料（Openseaの場合）
                    <span className="relative bottom-0.5 right-1">
                      <ArrowRightAltIcon />
                    </span>
                    そのため、低価格帯のコレクションにはPolygonが向いている。
                  </li>
                  <li className="mt-1">
                    ETHメインのコレクターは、OpenSeaでPolygon
                    ETHに変換し、簡単に作品を購入することができる。
                  </li>
                  <li className="mt-1">
                    低コストでトークンやNFTをエアドロップすることが可能。
                  </li>
                  <li className="mt-1">ETHとほぼ同じ価値でFIATに交換可能。</li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="red"
            title="短所"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    利用するにあたって、EthereumネットワークとPolygonネットワークのブリッジが必要。
                  </li>
                  <li className="mt-1">
                    OpenSeaではデフォルトでPolygonでのエアドロップがhiddenタブにいくようにフィルタリングされている。
                  </li>
                  <li className="mt-1">
                    ガス代が安いため、スパムや広告NFTの送信によく使われるほか、美術品泥棒にも使われ、Polygon
                    NFT全体の人気と正当性を損ねた
                    <span className="relative bottom-0.5 right-0.25">
                      <ArrowRightAltIcon />
                    </span>
                    このため、多くのコレクターが、ガス代が高くてもETHメインネット上のNFTを好んでいる。
                  </li>
                  <li className="mt-1">
                    ポリゴンの出来高と平均販売価格は低い傾向にある
                  </li>
                </ul>
              </>,
            ]}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className="mb-2">
            Polygonに代わる
            <span className="text-green-600 font-bold">
              環境配慮型ブロックチェーン
            </span>
            。
          </div>

          <Card
            color="pink"
            light={true}
            content={[
              <div>
                <Link link="https://opensea.io/" title="OpenSea" />
                はTezosをブロックチェーンのリストに追加する予定がある。
              </div>,
            ]}
          />

          <div className="mb-2">
            Tezosのマーケットプレイス:{" "}
            <Link link="https://teia.art/" title="Teia" />,{" "}
            <Link link="https://objkt.com/" title="OBJKT" />,{" "}
            <Link link="https://kalamint.io/" title="Kalamint" />.
          </div>

          <Card
            color="green"
            title="長所"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">環境に優しい。</li>
                  <li className="mt-1">各取引にかかるガス代が非常に安い。</li>
                  <li className="mt-1">
                    1/1ではなく、マルチエディションとして作品を販売したい場合には、非常に良い選択肢。
                  </li>
                  <li className="mt-1">
                    低価格なので、コレクターやアーティスト仲間も気軽に作品を集めることができる。
                  </li>
                </ul>
              </>,
            ]}
          />

          <Card
            color="red"
            title="短所"
            light={true}
            content={[
              <>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    ETHブロックチェーンほどのコレクターはいない。
                  </li>
                  <li className="mt-1">FIAT値が低い。</li>
                </ul>
              </>,
            ]}
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
