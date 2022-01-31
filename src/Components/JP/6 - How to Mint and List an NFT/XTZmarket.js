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
            title="重要な情報"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    hic et
                    nuncはTezosで最も人気のあるマーケットプレイスでしたが、2021年11月12日に作者により廃止されました。現在、ここで公開されているウェブサイトは、
                    <span className="text-orange-500 font-bold">
                      オリジナルのhic et nuncの開発者とコミュニティ
                    </span>
                    によって保存されているミラーです。
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="green"
            title="長所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    アカウントを作れば、
                    <span className="text-green-600 font-bold">誰でも</span>
                    申請手続きなしでhic et nuncを使い始めることができます。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      ウォレットを接続すれば
                    </span>
                    、
                    <span className="text-green-600 font-bold">すぐにmint</span>
                    することができます。
                  </li>
                  <li className="mt-1">
                    <span className="text-teal-600 font-bold">
                      hic et nuncでmintされたNFT
                    </span>
                    は、
                    <span className="text-green-600 font-bold">
                      OBJKTにも表示されます
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    hic et nuncは、
                    <span className="text-teal-600 font-bold">
                      Tezosブロックチェーン上
                    </span>
                    でエディション作品を販売するには
                    <span className="text-green-600 font-bold">
                      非常に優れたマーケットプレイス
                    </span>
                    です。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      二次販売時のロイヤリティを好みに応じて設定することができます
                    </span>
                    。
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="短所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      UIに大きな改善が必要
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      NFTのタグは使用できません
                    </span>
                  </li>
                  <li className="mt-1">
                    作品検索が
                    <span className="text-red-600 font-bold">
                      ほとんどできない
                    </span>
                    ので、
                    <span className="text-pink-600 font-bold">
                      TwitterやDiscordで作品をアピールする必要がある
                    </span>
                    。
                  </li>
                </ul>
              </div>,
            ]}
          />

          <Card
            color="teal"
            title="一般情報"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    hic et nuncでは現在、NFTを販売する際に
                    <span className="text-orange-500 font-bold">
                      1つのシステム
                    </span>
                    のみが利用可能です。
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        固定価格での販売
                      </span>
                      。
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
            title="長所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    アカウントを作れば、
                    <span className="text-green-600 font-bold">
                      誰でも申請手続きなし
                    </span>
                    でOBJKTを使い始めることができます。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      TezosブロックチェーンにおけるOpenSeaのようなポジション
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      hic et nuncより
                    </span>
                    <span className="text-green-600 font-bold">
                      新しいアーティストや作品を発見する
                    </span>
                    のに優れています。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      二次販売時のロイヤリティを好みに応じて設定することができます
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    将来的に実装予定の機能についての
                    <Link
                      link="https://roadmap.objkt.com/"
                      title="ロードマップがある"
                    />
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      独自のスマートコントラクト
                    </span>
                    でmintできる。
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="短所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      作品を出品する前に
                    </span>
                    、コレクションを
                    <span className="text-red-600 font-bold">作成</span>
                    する必要があり、作成する際に
                    <span className="text-red-600 font-bold">ガス代</span>
                    がかかります。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      NFTのタグは使用できません
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="一般情報"
            light={true}
            content={[
              <div>
                OBJKTでは、NFTの販売方法として
                <span className="text-orange-500 font-bold">4つのシステム</span>
                を用意しており、好みに応じて選択することができます。
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      固定価格での販売
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      時間制オークションには2つのタイプ
                    </span>
                    があります。
                  </li>
                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        最高入札者に販売するオークション
                      </span>
                      。
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        販売価格が下落していくオークション(ダッチオークション)
                      </span>
                      。
                    </li>
                  </ul>

                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      他者からのオファー
                    </span>
                    を受ける。
                  </li>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <Card
            color="green"
            title="長所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      アーティストを認証するための申請プロセスがあります
                    </span>
                    。(キュレーションベースではない）これにより、コレクターは検証されたアーティストから
                    <span className="text-green-600 font-bold">安全</span>
                    に収集することができます。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      hic et Nuncより
                    </span>
                    <span className="text-green-600 font-bold">
                      新しいアーティストや作品を発見する
                    </span>
                    のに優れています。
                  </li>
                  <li className="mt-1">
                    一般的に、アーティストは作品を
                    <span className="text-orange-500 font-bold">5TEZ</span>
                    前後に設定しており、
                    <span className="text-pink-600 font-bold">
                      hic et nuncの平均価格より高い。
                    </span>
                  </li>
                  <li className="mt-1">
                    現在、
                    <span className="text-green-600 font-bold">
                      Tezosブロックチェーンでは最も優れたUI
                    </span>
                    です。
                  </li>
                  <li className="mt-1">
                    <span className="text-teal-600 font-bold">
                      KalamintでmintされたNFT
                    </span>
                    は、
                    <span className="text-green-600 font-bold">
                      OBJKTにも表示されます
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      二次販売時のロイヤリティを好みに応じて設定することができます
                    </span>
                    。
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="短所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      ガイドはありません
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      NFTのタグは使用できません
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      1つのエディションにつき0.5TEZの保管料がかかる
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      アニメコレクターが少ないため、販売数は少ない
                    </span>
                    が、販売時の利益は
                    <span className="text-orange-500 font-bold">
                      hic et nunc atより高くなる
                    </span>
                    。
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="一般情報"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    各エディションをmintするための
                    <span className="text-orange-500 font-bold">ガス代</span>
                    は、
                    <span className="text-pink-600 font-bold">
                      0.05から0.3TEZ
                    </span>
                    程度です。
                  </li>
                  <li className="mt-1">
                    Kalamintでは、NFTの販売方法として
                    <span className="text-orange-500 font-bold">
                      2つのシステム
                    </span>
                    を用意しており、好みに応じて選択することができます。
                  </li>
                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        固定価格での販売
                      </span>
                      。
                    </li>
                    <li className="mt-1">
                      オークションの
                      <span className="text-pink-600 font-bold">
                        基準価格とタイマーを設定
                      </span>
                      し、
                      <span className="text-teal-600 font-bold">
                        任意のタイミング
                      </span>
                      でオークションを終了させることができる。
                      <span className="text-teal-600 font-bold">
                        最高入札者はタイマーが終了次第
                      </span>
                      、オークションを終了させることができます。
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
