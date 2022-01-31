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
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ReportIcon from "@mui/icons-material/Report";
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
          <Tab label="OpenSea" {...a11yProps(0)} />
          <Tab label="Foundation" {...a11yProps(1)} />
          <Tab label="MakersPlace" {...a11yProps(2)} />
          <Tab label="KnownOrigin" {...a11yProps(3)} />
          <Tab label="SuperRare" {...a11yProps(4)} />
          <Tab label="ANIFTY" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Card
            color="green"
            title="長所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      誰でも自由に使える 誰でもアカウントを作成し
                    </span>
                    、申請手続きなしでOpenSeaの利用を開始することができます。
                  </li>
                  <li className="mt-1">
                    他のマーケットプレイスとは
                    <Link
                      link="https://opensea.io/gas-free"
                      title="異なるガス代のシステム"
                    />
                    を採用しています。ガス代は初期設定時に一度だけです（現在の取引GWEIガス価格×2に近い金額)。これ以降のmintはすべて
                    <span className="text-green-600 font-bold">無料</span>
                    です。ガス代は、あなたのNFTが販売され、
                    <span className="text-orange-500 font-bold">
                      コレクター
                    </span>
                    が支払うときにのみ発生します。
                  </li>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      ETHメインネットとPolygonネットワーク
                    </span>
                    を簡単に切り替えることができ、両方のブロックチェーンを使用することができます。
                    <span className="text-green-600 font-bold">
                      Polygonネットワークでは、いかなる取引にもガスは必要ありません
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    OpenSeaは、あなたが他のマーケットプレイスでmintまたは購入した
                    <span className="text-pink-600 font-bold">すべてのNFT</span>
                    を表示します。これは、
                    <span className="text-orange-500 font-bold">二次販売</span>
                    を容易にするのに役立ちます。
                  </li>
                  <li className="mt-1">
                    NFTの販売後、コレクター向けに
                    <span className="text-pink-600 font-bold">
                      「アンロック可能なコンテンツ」
                    </span>
                    を追加することができます。
                  </li>
                  <li className="mt-1">
                    イーサリアムブロックチェーンの
                    <span className="text-green-600 font-bold">
                      プラットフォーム手数料
                    </span>{" "}
                    が<span className="text-green-600 font-bold">2.5%</span>
                    と最も低く設定されています。
                  </li>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      二次流通のロイヤリティは自由に設定可能
                    </span>
                    です。
                  </li>
                  <li className="mt-1">
                    Openseaでは、他のプラットフォームで購入したNFTであっても、
                    <span className="text-green-600 font-bold">
                      販売することができます
                    </span>
                    。ただし、
                    <span className="text-red-600 font-bold">
                      利用規約に違反
                    </span>
                    し、
                    <span className="text-red-600 font-bold">BAN</span>または
                    <span className="text-red-600 font-bold">上場廃止</span>
                    されたごく一部のコレクションは除きます。
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
                    OpenSeaには
                    <span className="text-orange-500 font-bold">
                      フォローシステム
                    </span>
                    が<span className="text-pink-600 font-bold">ない</span>
                    ので、好きなアーティストを
                    <span className="text-red-600 font-bold">追跡</span>
                    することはできません。
                    <span className="relative bottom-0.5 right-1">
                      <ArrowRightAltIcon />
                    </span>{" "}
                    <span className="text-orange-500 font-bold">Twitter</span>
                    で好きなアーティストやコレクションを追跡する必要があります。
                  </li>
                  <li className="mt-1">
                    OpenSeaは、1/1
                    のNFTよりも、ジェネレーティブなPFPプロジェクトやコレクションによく使われます。
                  </li>
                  <li className="mt-1">
                    キュレーションされたマーケットプレイスに比べて、
                    <span className="text-red-600 font-bold">
                      発見性が著しく劣ります
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
                OpenSeaでは、NFTを販売するために
                <span className="text-orange-500 font-bold">4つのシステム</span>
                を用意しており、お客様の好みに合わせて選択することができます。
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      固定価格での販売
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    時間制オークションには
                    <Link
                      link="https://support.opensea.io/hc/en-us/articles/1500003246082-How-do-timed-auctions-work-"
                      title="2つのタイプ"
                    />
                    があります。詳細はリンク先の記事をご覧ください。
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
                  <div className="mt-1">
                    <span className="relative bottom-0.5 right-0.5">
                      <ArrowRightAltIcon />
                    </span>
                    OpenSeaの
                    <span className="text-orange-500">最低落札価格</span>は現在
                    <span className="text-pink-600 font-bold">1ETH</span>
                    に設定されています。つまり、オークションが
                    <span className="text-orange-500">
                      1ETH以下で終了した場合
                    </span>
                    、売り手はOpenSeaが
                    <span className="text-teal-600 font-bold">
                      自動的に入札を受け入れる
                    </span>
                    のではなく、
                    <span className="text-pink-600 font-bold">
                      手動で最高入札額を受け入れなければなりません
                    </span>
                    。
                  </div>
                  <li className="mt-1">
                    他者からの
                    <span className="text-pink-600 font-bold">
                      オファーを受ける
                    </span>
                    。
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="orange"
            title="重要な情報"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    別のマーケットプレイス（例：Foundation）からNFTをmintすると、OpenSeaではNFTは
                    <span className="text-orange-500 font-bold">
                      Foundationのコレクション
                    </span>
                    の一部として表示され、自分のコレクションには表示されません。
                    <span className="relative bottom-0.5 right-1">
                      <ArrowRightAltIcon />
                    </span>
                    OpenSeaの自分のコレクションにNFTを表示させるには、Foundationのコレクションとしてmintする必要があります。OpenSea上のFoundationのコレクションの例は
                    <Link
                      link="https://opensea.io/collection/the-girls-of-armament-v2"
                      title="こちらから"
                    />
                    。
                  </li>
                  <li className="mt-1">
                    購入完了後もNFTを変更することができますので、
                    <Link
                      link="https://support.opensea.io/hc/en-us/articles/1500012270982-What-is-Freezing-Metadata-"
                      title="販売前にメタデータを凍結"
                    />
                    しておくことをお勧めします。これにはガス代がかかりますが（他のマーケットプレイスとほぼ同じコスト）、このステップを選択するアーティストはあまりいません。
                    <span className="relative bottom-0.5 right-1">
                      <ArrowRightAltIcon />
                    </span>
                    新しいアーティストから購入する際に、
                    <span className="text-red-600 font-bold">
                      コレクターにリスク
                    </span>
                    を生じさせ、コレクターはNFTの購入を躊躇う可能性があります。ですので、
                    <span className="text-pink-600 font-bold">
                      一貫したポートフォリオ
                    </span>
                    を持っていない限り、販売が難しくなる可能性があります。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 ">
                      {" "}
                      <ReportIcon />{" "}
                      購入したいアーティストの真偽に自信がない場合、
                      <Link
                        link="https://discord.gg/vktnAzvyNQ"
                        title="AnifriendsのDiscordサーバー"
                      />
                      の<span className="font-bold">Mods</span>
                      のいずれかに連絡してサポートを求めてください。
                    </span>
                  </li>
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
                    現在、
                    <span className="text-orange-500 font-bold">
                      1/1のアニメNFTアーティスト
                    </span>
                    に
                    <span className="text-green-600 font-bold">
                      最も人気のあるマーケットプレイス
                    </span>
                    はFoundationです。
                  </li>
                  <li className="mt-1">
                    Mint方法は
                    <span className="text-green-600 font-bold">
                      分かりやすく簡単
                    </span>
                    です。
                  </li>
                  <li className="mt-1">
                    現在、
                    <span className="text-green-600 font-bold">
                      最も優れたUIと体験
                    </span>
                    と
                    <span className="text-green-600 font-bold">使いやすさ</span>
                    を備えています。
                  </li>
                  <li className="mt-1">
                    現在、
                    <span className="text-green-600 font-bold">
                      アニメコレクターの大半
                    </span>
                    はFoundationを利用してNFTを収集している。
                  </li>
                  <li className="mt-1">
                    最近、
                    <span className="text-pink-600 font-bold">
                      コレクション
                    </span>
                    が実装され、すべてのアーティストが利用できるようになった。
                  </li>
                  <li className="mt-1">
                    NFTの販売を
                    <Link
                      link="https://help.foundation.app/en/articles/5305276-how-can-i-create-a-split-on-foundation"
                      title="協力者と分割"
                    />
                    することができます（
                    <span className="text-orange-500 font-bold">最大で3人</span>
                    の協力者を追加することができます)。
                  </li>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      プライベートセール
                    </span>
                    機能。
                  </li>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      TwitterとInstagramの認証
                    </span>
                    、および
                    <span className="text-orange-500 font-bold">
                      プロフィール
                    </span>
                    に<span className="text-pink-600 font-bold">ENS</span>
                    を表示。
                    <span className="relative bottom-0.5 right-1">
                      <ArrowRightAltIcon />
                    </span>
                    これらのアカウントがリンクされているアーティストの
                    <span className="text-pink-600 font-bold">正当性</span>
                    を簡単に確認することができます。
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
                    <Link
                      link="https://makersplace.com/"
                      title="MakersPlace"
                      light={true}
                    />
                    や
                    <Link
                      link="https://knownorigin.io/"
                      title="KnownOrigin"
                      light={true}
                    />
                    より
                    <span className="text-red-600 font-bold">ガス代が高い</span>
                    。
                  </li>
                  <li className="mt-1">
                    mintする際と出品する際に
                    <span className="text-red-600 font-bold">
                      ガス代を2回支払う必要がある
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      アニメ系NFTアーティストが多いため
                    </span>
                    、他のマーケットプレイスより
                    <span className="text-red-600 font-bold">競争率が高い</span>
                    可能性。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">1/1NFTのみ</span>
                    可能で、エディションは不可。
                  </li>
                  <li className="mt-1">
                    現在、mintされたNFTの
                    <span className="text-red-600 font-bold">
                      サムネイル画像のトリミング性能が悪く
                    </span>
                    、
                    <span className="text-orange-500 font-bold">
                      サムネイルの編集をすることもできない
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
                    <span className="text-orange-500 font-bold">招待制</span>
                    のため、Foundationで
                    <span className="text-pink-600 font-bold">販売した人</span>
                    からの招待で参加できます。
                  </li>
                  <li className="mt-1">
                    ファンデーションでは、NFTを販売するために、入札モデルという
                    <span className="text-orange-500 font-bold">
                      1つのシステム
                    </span>
                    のみが用意されています。
                  </li>
                  <ol className="list-decimal ml-6">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        最低落札価格
                      </span>
                      を設定します。
                    </li>
                    <li className="mt-1">
                      コレクターがあなたの作品に
                      <span className="text-orange-500 font-bold">入札</span>
                      すると、
                      <span className="text-pink-600 font-bold">
                        24時間のカウントダウン
                      </span>
                      が開始されます。
                    </li>
                    <li className="mt-1">
                      入札は24時間後に
                      <span className="text-pink-600 font-bold">終了</span>
                      し、あなたもしくはコレクターは、Foundationのウォレットから
                      <span className="text-orange-500 font-bold">
                        コレクターのウォレット
                      </span>
                      にNFTを転送するための
                      <span className="text-pink-600 font-bold">
                        決済手数料
                      </span>
                      を支払う必要があります。(通常、コレクターが決済手数料を支払うので、コレクターを待つのがベストです)。
                    </li>
                  </ol>
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
                    最近、
                    <Link
                      link="https://rare.makersplace.com/2021/09/21/announcing-our-new-smart-token-contract/"
                      title="スマートコントラクトをアップデート"
                    />
                    し、NFTの
                    <span className="text-green-600 font-bold">
                      mintと送金にかかるガス料金を平均60％削減しました
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    経営陣は
                    <span className="text-green-600 font-bold">協力的</span>
                    で、現在アニメアーティストのプラットフォームへの参加に力を注いでいます。
                  </li>
                  <li className="mt-1">
                    <Link
                      link="https://discord.gg/dbbAB4CHzK"
                      title="Discordサーバー"
                    />
                    で
                    <span className="text-green-600 font-bold">
                      コミュニティイベントを開催しています
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Foundationより先
                    </span>
                    <span className="text-pink-600 font-bold">
                      コレクション
                    </span>{" "}
                    のシステムを導入している。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      1/1、エディションNFTの両方を販売可能
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    作品を売りに出す必要はない。mintの後、
                    <span className="text-green-600 font-bold">
                      その作品のオファーを受け始めることができる
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Ethereumでのデジタルウォレット決済と、PaypalやクレジットカードによるFIAT決済の両方が仕様可能
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
                    NFTをアップロードする前に登録と確認が必要なため、新しいアーティストにとって
                    <span className="text-red-600 font-bold">
                      時間と手間がかかり
                    </span>
                    、混乱する可能性があります。
                  </li>
                  <li className="mt-1">
                    コレクターは、
                    <span className="text-orange-500 font-bold">
                      ウォレットで直接ログインする代わりに
                    </span>
                    、あなたのNFTを購入する前に
                    <span className="text-red-600 font-bold">サインアップ</span>
                    する必要があり、この方法を好まないコレクターにとっては不便に感じる可能性があります。
                  </li>
                  <li className="mt-1">
                    販売終了時に
                    <span className="text-red-600 font-bold">
                      決済手数料を自分で支払う必要
                    </span>
                    があります。
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
                    <span className="text-orange-500 font-bold">
                      キュレーションベースシステム
                    </span>{" "}
                    のみなので、
                    <Link
                      link="https://docs.google.com/forms/d/e/1FAIpQLSewnu8ch_KjAbKPnA5OjQSP4a3k7ihpCmhtthmFgfGK4dUStg/viewform"
                      title="応募フォーム"
                    />
                    が受理された後に投稿できるようになります。
                  </li>
                  <li className="mt-1">
                    または、
                    <span className="text-pink-600 font-bold">
                      MakersPlaceのキュレーターの1人からの招待で参加することができます
                    </span>
                    。現在、
                    <span className="text-orange-500 font-bold">
                      Anifriendsには現在
                    </span>{" "}
                    <Link
                      link="https://twitter.com/GreyRadian"
                      title="GreyRadian"
                    />{" "}
                    と{" "}
                    <Link
                      link="https://twitter.com/shinjuroukai"
                      title="Shinjurou"
                    />{" "}
                    の
                    <span className="text-orange-500 font-bold">
                      2名のキュレーター
                    </span>
                    が在籍しており、興味のある方はご連絡ください。
                  </li>
                  <li className="mt-1">
                    MakersPlaceでは、NFTを販売するために
                    <span className="text-orange-500 font-bold">
                      3つのシステム
                    </span>
                    を用意されており、好みに応じて選択することができます。
                  </li>
                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        固定価格での販売
                      </span>
                      。
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        最低落札価格
                      </span>
                      を設定する。
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        他者からのオファー
                      </span>
                      を受ける。
                    </li>
                  </ul>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
          <Card
            color="green"
            title="長所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    ガス代は、
                    <span className="text-green-600 font-bold">
                      mintと出品をあわせて一度だけ支払う必要があります
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    ガス代は、
                    <span className="text-green-600 font-bold">
                      Foundationの半額程度になります
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Foundationより先
                    </span>
                    <span className="text-pink-600 font-bold">
                      コレクション
                    </span>{" "}
                    のシステムを導入している。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      1/1、エディションNFTの両方を販売可能
                    </span>
                    で、
                    <span className="text-orange-500 font-bold">
                      コレクション内のNFT
                    </span>
                    に
                    <span className="text-green-600 font-bold">
                      ラダリングプライス
                    </span>
                    を設定することができます。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      メディアアップロードサイズはFoundationの2倍です
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    KnownOriginは、
                    <span className="text-orange-500 font-bold">2021年</span>
                    まで継続的にプラットフォームの
                    <span className="text-green-600 font-bold">
                      改善と新機能の追加
                    </span>
                    を続けてきました。
                  </li>
                  <li className="mt-1">
                    NFTの販売を
                    <Link
                      link="https://help.foundation.app/en/articles/5305276-how-can-i-create-a-split-on-foundation"
                      title="協力者と分割"
                    />
                    することができます（
                    <span className="text-orange-500 font-bold">最大で5人</span>
                    の協力者を追加することができます)。
                  </li>
                  <li className="mt-1">
                    NFTの販売後、コレクター向けに
                    <span className="text-pink-600 font-bold">
                      「アンロック可能なコンテンツ」
                    </span>
                    を追加することができます。
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
                      新しいアートを発見するが難しく、新人アーティストが最初に始めるプラットホームとしてはお勧めできない
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      アニメに影響を受けたNFT
                    </span>
                    や
                    <span className="text-orange-500 font-bold">
                      アニメNFTのコレクター
                    </span>
                    は<span className="text-red-600 font-bold">少ない</span>
                    です。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      オークションはあまり行われていない
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    他のプラットフォームに比べ、コミュニティが
                    <span className="text-red-600 font-bold">閉鎖的</span>
                    である。
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
                    <span className="text-orange-500 font-bold">
                      キュレーションベースシステム
                    </span>
                    のみなので、アーティストになるには、募集が開始された際に、応募する必要があります。KnownOriginは、
                    <Link
                      link="https://knownorigin.io/artist-application"
                      title="応募フォーム"
                    />
                    を開くたびに最大1500名のみを受け付けます。
                  </li>
                  <li className="mt-1">
                    KnownOriginでは、NFTの販売方法として
                    <span className="text-orange-500 font-bold">
                      4つのシステム
                    </span>
                    を用意しており、好みに応じて選択することができます。(詳細については
                    <Link
                      link="https://docs.knownorigin.io/guide/auction-types/"
                      title="こちら"
                    />
                    から)
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        固定価格での販売
                      </span>
                      。
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        最低落札価格
                      </span>
                      を設定します。リザーブプライス達成後は、いつでも入札を終了することができます。また、Foundationと同様に24時間の自動タイマーも設定できます。
                    </li>

                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        他者からのオファー
                      </span>
                      を受ける。
                    </li>
                    <li className="mt-1">
                      <Link
                        link="https://docs.knownorigin.io/guide/auction-types/#stepped-sale"
                        title="Stepped sale system"
                      />{" "}
                      (ステップセールシステム)
                    </li>
                  </ul>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
          <Card
            color="green"
            title="長所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    現在、他のプラットフォームと比較して、販売されたNFTの価格としては
                    <span className="text-pink-600 font-bold">
                      最も高いATHを有しています
                    </span>
                    。(
                    <Link
                      link="https://superrare.com/artwork-v2/hunter-inn-30058"
                      title="SeerLightの「Hunter lnn」は100ETHで落札されました"
                    />
                    )
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      1/1、エディションNFTの両方が可能です
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
                    その
                    <span className="text-orange-500 font-bold">選考</span>は
                    <span className="text-red-600 font-bold">極めて厳選</span>
                    されたものです。
                  </li>
                  <li className="mt-1">
                    プラットフォーム上の
                    <span className="text-orange-500 font-bold">
                      アニメNFTアーティスト
                    </span>
                    の数が
                    <span className="text-red-600 font-bold">極端</span>
                    に少ない。
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
                    <span className="text-orange-500 font-bold">
                      キュレーションベースシステム
                    </span>
                    のみなので、
                    <Link
                      link="https://docs.google.com/forms/d/e/1FAIpQLScTZhB9On31j-uoFzMD3hg0gGNf3hgjVyBz1xwCHsOBSydvPw/viewform"
                      title="応募フォーム"
                    />
                    から申請する必要があります。
                  </li>
                  <li className="mt-1">
                    SuperRareでは、NFTを販売する際に
                    <span className="text-orange-500 font-bold">
                      3つのシステム
                    </span>
                    を用意しており、好みに合わせて選択することができます。
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        固定価格での販売
                      </span>
                      。
                    </li>
                    <li className="mt-1">
                      <li className="mt-1">
                        <span className="text-pink-600 font-bold">
                          最低落札価格
                        </span>
                        を設定します。リザーブプライス達成後は、いつでも入札を終了することができます。また、Foundationと同様に24時間の自動タイマーも設定できます。
                      </li>
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        他者からのオファー
                      </span>
                      を受ける。
                    </li>
                  </ul>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={5} dir={theme.direction}>
          <Card
            color="green"
            title="長所"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    プラットフォームを
                    <span className="text-green-600 font-bold">
                      継続的に改善する非常に熱心な開発チーム
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    他の1/1マーケットプレイスと比較した際に、
                    <span className="text-green-600 font-bold">
                      手数料が最も低いです
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      他のマーケットプレイスでは取り扱いのない
                    </span>
                    <span className="text-green-600 font-bold">
                      日本人アーティスト
                    </span>
                    を起用している。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      日本語が堪能なスタッフが在籍しているため
                    </span>
                    、
                    <span className="text-green-600 font-bold">
                      他のマーケットプレイスに比べ
                    </span>
                    、日本人アーティストとの
                    <span className="text-green-600 font-bold">
                      コミュニケーション
                    </span>
                    や<span className="text-green-600 font-bold">サポート</span>
                    が充実している。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      英語の添削が可能
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">ガス代は、</span>
                    <span className="text-orange-500 font-bold">
                      ANIFTYから支払われる
                    </span>
                    ので、
                    <span className="text-green-600 font-bold">無料</span>
                    で作品をmintできます。
                  </li>
                  <li className="mt-1">
                    ANIFTYは、
                    <span className="text-teal-600 font-bold">
                      認定アーティスト
                    </span>
                    のために、英語と日本語の両方で
                    <span className="text-orange-500 font-bold">
                      詳細なガイド
                    </span>
                    を作成しました。
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
                    プラットフォームは
                    <span className="text-red-600 font-bold">非常に新しい</span>
                    が、さらなる
                    <span className="text-red-600 font-bold">改良が必要</span>。
                  </li>
                  <li className="mt-1">
                    ANIFTYに出品しているNFTは他のマーケットプレイスで、
                    <span className="text-red-600 font-bold">
                      より高い値段で売れる
                    </span>
                    可能性がある。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">コミュニティ</span>
                    が他のマーケットプレイスより
                    <span className="text-red-600 font-bold">小さい</span>。
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      アップロードできるファイル形式
                    </span>
                    が<span className="text-red-600 font-bold">PNG</span>と
                    <span className="text-red-600 font-bold">GIF</span>にしか
                    <span className="text-red-600 font-bold">
                      対応していない
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      利用できるタグが限られている
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
                    <span className="text-orange-500 font-bold">
                      キュレーションベースシステム
                    </span>{" "}
                    のみなので、
                    <Link
                      link="https://docs.google.com/forms/d/e/1FAIpQLSec69eFAHFYgt-sINhX1V1sYd2KpaVssYQxStr-wERnvY8WlA/viewform"
                      title="応募フォーム"
                    />
                    が受理された後に投稿できるようになります。
                  </li>
                  <li className="mt-1">
                    ANIFTYでは現在、NFTを販売する際に
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
                  <li className="mt-1">
                    現在、開発チームは
                    <span className="text-orange-500 font-bold">
                      入札システム
                    </span>
                    のプラットフォームへの実装に取り組んでいます。
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
