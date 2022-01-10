import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";

import cover from "../../../Imgs/cover.png";

export default function Welcome() {
  return (
    <div className="welcome">
      <img src={cover} alt="cover" />
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Welcome!
        </Typography>
        <Typography variant="h3" color="inherit" component="h3" mb={2}>
          <span className="text-orange-500">
            Firstly, welcome to the Anime NFT Community!
            <br /> We are so excited to have you here with us!
          </span>
        </Typography>
        <Typography variant="body1" color="inherit" component="div">
          This website was created by{" "}
          <Link link="https://twitter.com/weeb3dao" title="weeb3dao" /> (with
          the support of{" "}
          <Link link="https://twitter.com/AnifamNft" title="Anifam" /> and{" "}
          <Link link="https://twitter.com/uwucrewnft" title="uwucrew" />) to be
          used as an information booklet to help onboarding new anime artists
          integrate into to the current Anime NFT Community.
        </Typography>

        <Card
          color="teal"
          title='Why "Anime NFT Community" and not just NFT Community?'
          content="There are a lot of NFT Communities in general but our community mainly focus on anime-inspired style of artworks, as we consist of collectors and artists that are currently active in the Anime NFT Community."
        />

        <Typography variant="body1" color="inherit" component="div" mb={2}>
          The first NFT was created on May 2014, and while NFT has been around
          for many years now. Anime NFT artists only started to join at the
          start of 2021. This means that those of you who are joining now are{" "}
          <span className="text-green-700">
            very early to the new way of integrating NFT to the anime art world.
          </span>
        </Typography>
        <Typography variant="body1" color="inherit" component="div">
          In recent months, the Anime NFT Community has been growing
          continuously, but there is a lack of information. This led to new
          artists having to ask others continuously as they have no guidance.
          There is also a discrepancy too as each person will have different
          experiences and different answer to each question you ask.
        </Typography>

        <Card
          color="green"
          content={[
            "Due to that reason, we have created this website and hope this will be able to ",
            <span className="text-pink-600">
              help you find the information you need much easier.
            </span>,
          ]}
        />
      </div>
    </div>
  );
}
