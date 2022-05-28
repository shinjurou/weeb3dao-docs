import React from "react";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import weeb3dao from "../../../Imgs/cover.png";
import anifam from "../../../Imgs/anifam.jpeg";
import uwucrew from "../../../Imgs/uwucrew.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";

const naokiSaito = [
  {
    url: "https://f8n-ipfs-production.imgix.net/QmacByUSejoHFeQUVQamVayWcce21xb56K5KwoY9tPgMU3/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    title: "N",
    width: "33.3%",
    link: "https://foundation.app/@NaokiSaito/~/98535",
  },
  {
    url: "https://f8n-ipfs-production.imgix.net/QmVehtwpyBFrtXLchvphhzLEjfSXk9DoqPnAHayTsaT2BM/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    title: "F",
    width: "33.3%",
    link: "https://foundation.app/@NaokiSaito/~/101751",
  },
  {
    url: "https://f8n-ipfs-production.imgix.net/QmdUmTcY6beZdvwpBXSSe1k2LRKLeq58xxAP9ZtJbkyDoK/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    title: "T",
    width: "33.3%",
    link: "https://foundation.app/@NaokiSaito/~/103625",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 600,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Introduction() {
  return (
    <div className="introduction-info">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          メンバー紹介
        </Typography>

        <Card
          color="pink"
          content={[
            <Link link="https://twitter.com/weeb3dao" title="weeb3dao" />,
            "、",
            <Link link="https://twitter.com/AnifamNft" title="Anifam" />,
            "、",
            <Link link="https://twitter.com/uwucrewnft" title="uwucrew" />,
            " ってだれ?",
          ]}
        />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
          }}
        >
          {naokiSaito.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
              href={image.link}
              target="_blank"
              rel="noreferrer"
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
        <Card
          color="green"
          content={[
            <Link
              link="https://foundation.app/@NaokiSaito"
              title="Naoki Saito's（さいとう なおき氏） <GESTURES> コレクション "
            />,
            ' から"NFT" の文字を持つ3作品のうち2作品を落札したのは ',
            <Link link="https://twitter.com/weeb3dao" title="weeb3dao" />,
            " と ",
            <Link link="https://twitter.com/uwucrewnft" title="uwucrew" />,
            " です。",
            <br />,
            "残りの1作品については ",
            <Link
              link="https://discord.gg/vktnAzvyNQ"
              title="AnifamのDiscordサーバー"
            />,
            " で活躍されている ",
            <Link
              link="https://twitter.com/kaijuking779"
              title="KaijuKing779"
            />,
            " 氏が所有されています。",
          ]}
        />
        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div>
            <Typography variant="h2" color="inherit" component="h2" my={1}>
              <Link
                link="https://twitter.com/weeb3dao"
                title="weeb3dao"
                light={true}
              />
            </Typography>
            <img src={weeb3dao} alt="weeb3dao" />
            <div className="mt-3">
              <Link link="https://twitter.com/weeb3dao" title="weeb3dao" /> は{" "}
              <Link
                link="https://twitter.com/SaltSeaCake"
                title="SaltSeaCake"
              />{" "}
              氏が作成したNFTプロジェクトである{" "}
              <Link link="https://twitter.com/Weeb3NFT" title="weeb3" />{" "}
              から生まれました。
            </div>
            <div className="mt-2">
              そして今、私たちは新規参入したアーティストがNFTのコミュニティーに馴染むためのサポートをする為に、コレクターとアーティスト（AnifamNFTとuwucrewにも所属）の小規模なグループとなりました。
            </div>

            <Card
              color="green"
              content={[
                "weeb3daoが収集した作品の中で最も注目すべき作品は、",
                <Link
                  link="https://foundation.app/@NaokiSaito/~/103625"
                  title="Naoki Saito（さいとうなおき氏）がFoundationに出品された <GESTURES> コレクションの３作品目"
                />,
                "です。",
                <span className="text-green-600 font-bold">
                  こちらの落札価格は12.69ETHでした。
                </span>,
              ]}
            />

            <Card
              color="orange"
              content={[
                <div>
                  私たちは、新進アーティストを支援するために、ガス費用が高額となるプラットフォーム（例：Foundation、MakersPlaceなど）で最初の作品をmintするためのガス代を提供する
                  <span className="text-pink-600 font-bold">
                    Scholarship Program (奨学金制度)
                  </span>
                  を設けています。
                  <div className="text-pink-600 font-bold mt-2">
                    <span className="relative bottom-0.5">
                      <ArrowRightAltIcon />
                    </span>{" "}
                    興味のある方は、
                    <RouterLink
                      link="/weeb3dao-scholarship"
                      title="こちらのリンクから是非応募してください。"
                    />
                  </div>
                  <div className="text-violet-500 mt-2">
                    (日本語と韓国語のアーティストについては、近日公開予定の翻訳版を選択してください。)
                  </div>
                </div>,
              ]}
            />

            <Card
              color="red"
              content={[
                <div className="font-bold">
                  また、weeb3daoはアーティストを支援致しますが、
                  <span className="text-red-600 font-bold">金銭的な報酬</span>
                  や、
                  <span className="text-red-600 font-bold">成功報酬</span>
                  を求めることは
                  <span className="text-red-600 font-bold">
                    決してございません
                  </span>
                  。
                </div>,
              ]}
            />
          </div>
          <div className="mt-6">
            <Typography variant="h2" color="inherit" component="h2" my={1}>
              <Link
                link="https://twitter.com/AnifamNft"
                title="Anifam"
                light={true}
              />
            </Typography>
            <img src={anifam} alt="anifam" />

            <div className="mt-3">
              <Link link="https://twitter.com/AnifamNft" title="Anifam" /> は{" "}
              <Link link="https://twitter.com/LooonaLou" title="LooonaLou" />、
              <Link link="https://twitter.com/GreyRadian" title="GreyRadian" />
              、
              <Link link="https://twitter.com/rocielart" title="Rociel" />{" "}
              の3人によって初のアニメNFTアーティストグループとして2021年5月に設立されました。
            </div>
            <div className="mt-2">
              多くのAnifamアーティストがNFTの世界で地位を確立し、前進する努力を日々続けています。
            </div>

            <Card
              color="green"
              content={[
                <div>
                  Anifamで最も注目されているアーティストは、
                  <Link
                    link="https://twitter.com/seerlight"
                    title="SeerLight"
                  />{" "}
                  氏です。SeerLight氏は一般のNFTコミュニティでは今やブルーチップアーティストと呼ばれております。
                </div>,
              ]}
            />

            <div className="mt-3">
              現在、
              <Link
                link="https://discord.gg/vktnAzvyNQ"
                title="AnifamのDiscordサーバー"
              />
              には一千人以上のメンバーがいます。weeb3やuwucrewにいる多くのコレクターやアーティストもこのディスコードサーバーに参加しており、Anifamはアニメアーティスト仲間のハブとなっています。
            </div>
            <div className="mt-2">
              Discordサーバーには、
              <span className="text-green-600">韓国</span>と
              <span className="text-green-600">日本</span>
              で活動されているアーティスト向けのチャンネルもあり、新人アーティストのためのQ&Aチャンネルや、役立つ情報を提供するチャンネルも用意されています。
            </div>

            <Card
              color="green"
              content={[
                <div>
                  Anifamで最も注目されている日本のアーティストは{" "}
                  <Link
                    link="https://twitter.com/_NaokiSaito"
                    title="Naoki Saito（さいとう なおき氏）"
                  />
                  です。彼は日本のアーティストがNFTに参加するための道を切り開いてくれました。
                  <br />
                  <Link
                    link="https://en.wikipedia.org/wiki/Naoki_Saito"
                    title="Naoki Saito（さいとう なおき氏）についての詳細はWikipediaのページでご確認ください。​"
                  />
                </div>,
              ]}
            />
          </div>
          <div className="mt-6">
            <Typography variant="h2" color="inherit" component="h2" my={1}>
              <Link
                link="https://twitter.com/uwucrewnft"
                title="uwucrew"
                light={true}
              />
            </Typography>
            <img src={uwucrew} alt="uwucrew" />

            <div className="mt-3">
              <Link link="https://twitter.com/uwucrewnft" title="uwucrew" />
              は女性アーティスト (
              <Link link="https://twitter.com/fungibleartist" title="laur" />
              )が率いる有名なジェネレーティブNFTプロジェクトです。uwucrewは、そのサポート力と楽しめるコミュニティ運営力で最もアクティブなメンバー数を持っています。また、彼らは{" "}
              <Link
                link="https://twitter.com/daowocapital"
                title="daowo"
              />{" "}
              を設立し、以前はコミュニティ内のNFTアーティストから様々なアートワークを集めていました。
            </div>

            <Card
              color="green"
              content={[
                "daowoが収集した作品の中で最も注目すべきは、",
                <Link
                  link="https://foundation.app/@NaokiSaito/~/98535"
                  title="Naoki Saito（さいとう なおき氏）がFoundationに出品された <GESTURES> コレクションの１作品目"
                />,
                "で、",
                <span className="text-green-600 font-bold">
                  13.69ETHの落札価格を記録しています。
                </span>,
              ]}
            />

            <div className="mt-3">
              現在、
              <Link
                link="https://discord.gg/MSYmemxJt5"
                title="uwucrewのDiscordサーバー"
              />
              には5390人以上のメンバーがおり、アニメNFTのコレクターや開発者、アーティストが多く、新しい出会いやコレクターとの会話に最適な場となっています。
            </div>
            <div className="mt-2">
              また、
              色んなアニメNFTアーティストが作成したジェネレーティブPFPプロジェクトにも協力しています。
            </div>
          </div>
        </div>
        <NaviButtons
          return="Database Information"
          returnlink="/database-info"
          next="weeb3dao Mint 奨学金制度"
          nextlink="/weeb3dao-scholarship"
        />
      </div>
    </div>
  );
}
