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
          Introduction
        </Typography>

        <Card
          color="pink"
          content={[
            "Who are ",
            <Link link="https://twitter.com/weeb3dao" title="weeb3dao" />,
            ", ",
            <Link link="https://twitter.com/AnifamNft" title="Anifam" />,
            " and ",
            <Link link="https://twitter.com/uwucrewnft" title="uwucrew" />,
            " ?",
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
            "2 out of 3 artworks from ",
            <Link
              link="https://foundation.app/@NaokiSaito"
              title="Naoki Saito's <GESTURES> collection "
            />,
            'forming the letters "NFT" were collected by: ',
            <Link link="https://twitter.com/weeb3dao" title="weeb3dao" />,
            " and ",
            <Link link="https://twitter.com/uwucrewnft" title="uwucrew" />,
            ".",
            <br />,
            "While the remaining artwork was collected by ",
            <Link
              link="https://twitter.com/kaijuking779"
              title="KaijuKing779"
            />,
            " who is an active member of ",
            <Link
              link="https://discord.gg/vktnAzvyNQ"
              title="Anifriends Discord Server"
            />,
            ".",
          ]}
        />
        <div className="intro grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
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
              <Link link="https://twitter.com/weeb3dao" title="weeb3dao" /> came
              from <Link link="https://twitter.com/Weeb3NFT" title="weeb3" />,
              which is an NFT project created by{" "}
              <Link
                link="https://twitter.com/SaltSeaCake"
                title="SaltSeaCake"
              />
              .
            </div>
            <div className="mt-2">
              Now, we became a small group of collectors and artists (which also
              belong in AnifamNFT and uwucrew) who wants to help new artists
              integrate into the NFT community.
            </div>

            <Card
              color="green"
              content={[
                "The most notable artwork to have been collected by weeb3dao is ",
                <Link
                  link="https://foundation.app/@NaokiSaito/~/103625"
                  title="the 3rd artwork from Naoki Saito's <GESTURES> collection on Foundation"
                />,
                " which had a ",
                <span className="text-green-600 font-bold">
                  winning bid of 12.69 ETH.
                </span>,
              ]}
            />

            <Card
              color="orange"
              content={[
                "We have a ",
                <span className="text-pink-600 font-bold">
                  Scholarship Program
                </span>,
                " to help new emerging artists by ",
                <span className="text-orange-500">
                  providing them the gas fee
                </span>,
                " to mint their first artwork on a high gas platform (example: Foundation, MakersPlace, etc.)",
                <br />,
                <span className="text-pink-600 font-bold ml-8">
                  <ArrowRightAltIcon /> If you are interested then please
                </span>,
                " ",
                <RouterLink
                  link="/weeb3dao-scholarship"
                  title="click this link and apply for the program"
                />,
                ".",
                <br />,
                <div className="text-violet-500 ml-8">
                  (For Japanese and Korean artists please select the
                  corresponding links for the translations if you are struggling
                  with the English version of the Scholarship website which will
                  be available at a later date)
                </div>,
              ]}
            />

            <Card
              color="red"
              content={[
                <div className="font-bold">
                  weeb3dao will{" "}
                  <span className="text-red-600 font-bold">never</span> ask for
                  any{" "}
                  <span className="text-red-600 font-bold">
                    monetary compensation
                  </span>{" "}
                  or{" "}
                  <span className="text-red-600 font-bold">
                    contingency fee
                  </span>{" "}
                  for any help we provide for artists.
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
              <Link link="https://twitter.com/AnifamNft" title="Anifam" /> was
              founded by{" "}
              <Link link="https://twitter.com/LooonaLou" title="LooonaLou" />,
              <Link link="https://twitter.com/GreyRadian" title="GreyRadian" />,
              and <Link link="https://twitter.com/rocielart" title="Rociel" />{" "}
              in May 2021. The group then became the first anime NFT artists
              group to be created.
            </div>
            <div className="mt-2">
              Many Anifam artists have established themselves in the NFT world
              and continuing to strive forward.
            </div>

            <Card
              color="green"
              content={[
                <div>
                  The most notable artist in Anifam is{" "}
                  <Link
                    link="https://twitter.com/seerlight"
                    title="SeerLight"
                  />{" "}
                  who is now considered a blue chip artist in the general NFT
                  Community, aside from Anime NFT Community. Seer currently has
                  <Link
                    link="https://twitter.com/seerlight/status/1451367288498651137"
                    title=" an ATH sale of 125 ETH."
                  />
                </div>,
              ]}
            />

            <div className="mt-3">
              Currently there are 1k+ members in the{" "}
              <Link
                link="https://discord.gg/vktnAzvyNQ"
                title="Anifriends Discord Server"
              />
              . Many collectors and artists who in weeb3 and uwucrew are also in
              the discord server and Anifriends has become a hub for fellow
              anime artists.
            </div>
            <div className="mt-2">
              The discord server also has channels for{" "}
              <span className="text-green-600">Korean</span> and{" "}
              <span className="text-green-600">Japanese</span> artists. The
              server also has channels to provide helpful information along with
              a Q&A channel for new artists.
            </div>

            <Card
              color="green"
              content={[
                <div>
                  The most notable artist in Anifriends is the Japanese artist{" "}
                  <Link
                    link="https://twitter.com/_NaokiSaito"
                    title="Naoki Saito"
                  />{" "}
                  who paved a strong way for Japanese artists to join NFT in
                  Japan.
                  <br />
                  <Link
                    link="https://en.wikipedia.org/wiki/Naoki_Saito"
                    title="Read more about Naoki Saito on his Wikipedia webpage."
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
              <Link link="https://twitter.com/uwucrewnft" title="uwucrew" /> is
              a prominent generative NFT project led by a female artist (
              <Link link="https://twitter.com/fungibleartist" title="laur" />
              ). uwucrew has the most active members with its supportive and fun
              community. They also founded{" "}
              <Link link="https://twitter.com/daowocapital" title="daowo" /> and
              previously collected various artworks from NFT artists within the
              community.
            </div>

            <Card
              color="green"
              content={[
                "The most notable artwork to have been collected by daowo is ",
                <Link
                  link="https://foundation.app/@NaokiSaito/~/98535"
                  title="Naoki Saito's Genesis NFT on Foundation"
                />,
                " which had a ",
                <span className="text-green-600 font-bold">
                  winning bid of 13.69 ETH.
                </span>,
              ]}
            />

            <div className="mt-3">
              Currently there are 5.39k members in their{" "}
              <Link
                link="https://discord.gg/MSYmemxJt5"
                title="Discord Server"
              />
              . There are a lot of anime collectors, developers, and artists
              here, which makes this a great place to meet new fellow artists or
              talk to collectors.
            </div>
            <div className="mt-2">
              They are also helping other generative PFP projects created by
              members from AnifamNFT.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
