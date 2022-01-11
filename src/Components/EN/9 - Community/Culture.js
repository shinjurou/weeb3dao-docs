import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import NaviButtons from "../0 - Index/NaviButtons";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Culture() {
  return (
    <div className="culture">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Culture
        </Typography>
        <Card
          color="red"
          title="NFT is not a quick get rich scheme. If you are in the community just to make money then high chances are you will end up quitting after a short time frame."
        />

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Card
            color="pink"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  <span className="text-pink-600 font-bold">
                    The value of an artwork depends on the collector and not the
                    artist.
                  </span>{" "}
                  Value usually depends on{" "}
                  <span className="text-teal-600 font-bold">
                    the artist as the person, the meaning of their artworks,
                    their skills or their contributions to the community.
                  </span>
                </li>
                <li className="mt-1">
                  <span className="text-pink-600 font-bold">
                    Artists with a large following on Twitter have spent years
                    creating meaning for their artworks already and it is
                    already ingrained in their fans.
                  </span>{" "}
                  <span className="relative bottom-0.5">
                    <ArrowRightAltIcon />
                  </span>{" "}
                  Hence why their sales are made easier compared to artists with
                  a lower following.
                </li>
                <li className="mt-1">
                  <span className="text-pink-600 font-bold">
                    Art is not just about the skills but also about the emotions
                    it brings to the spectators.
                  </span>{" "}
                  Artworks with polished skills will be able to capture a
                  person's heart faster, but that doesn't mean that small
                  artists don't have a place in the NFT community.
                </li>
                <li className="mt-1">
                  <span className="text-pink-600 font-bold">
                    The more you engage with the community, the more memorable
                    you will be.
                  </span>{" "}
                  <span className="text-green-600 font-bold">
                    This will create cases where collectors will collect your
                    artworks not for your art skills, but for you as person.
                  </span>{" "}
                  <span className="relative bottom-0.5">
                    <ArrowRightAltIcon />
                  </span>{" "}
                  This means you will need to work hard if you start out as an
                  artist without a large following, but it doesn't mean you will
                  not be able to succeed in this community.
                </li>
                <li className="mt-1">
                  Similar to how there will be people who do not understand the
                  value of anime artworks, we will also not be able to
                  understand the value of certain art styles. This doesn't mean
                  we have to force ourselves to like said art styles, but
                  <span className="text-green-600 font-bold">
                    {" "}
                    we need to stay courteous and be respectful to others' taste
                    and values.
                  </span>{" "}
                  Art is{" "}
                  <span className="text-pink-600 font-bold">
                    subjective
                  </span>{" "}
                  and as such there will always be someone who will find meaning
                  on an artwork.{" "}
                  <span className="text-orange-500 font-bold">
                    It is in someone's rights to feel happy with the type of
                    artworks that they wish to possess.
                  </span>{" "}
                  Granted that they are not doing anything illegal.
                </li>
              </ul>,
            ]}
          />
          <div className="mt-5">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Socializing
            </Typography>
            <div>
              Community is the most important thing in NFT so here are some
              behavior recommendations.
            </div>
            <Card
              color="pink"
              content={[
                <div>
                  You will{" "}
                  <span className="text-pink-600">
                    not need to fulfill everything
                  </span>{" "}
                  in the Good behaviors but{" "}
                  <span className="text-red-600 font-bold">
                    Inappropriate behaviors must be avoided.
                  </span>
                </div>,
              ]}
            />
            <Card
              color="green"
              title="Good behaviors"
              content={[
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Always be respectful and kind to others.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Authentic engagements.
                    </span>
                  </li>
                  <li className="mt-1">Say GM.</li>
                  <li className="mt-1">Chat and hang out in Discord servers</li>
                  <li className="mt-1">Shill only in the allowed areas.</li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Help others
                    </span>{" "}
                    when they ask questions.
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Respect others for their taste in arts.
                    </span>{" "}
                    There are many art styles out there and it is best{" "}
                    <span className="text-red-600 font-bold">
                      not to say anything negative
                    </span>{" "}
                    about them in public spaces such as Twitter.
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Report to Discord Servers' moderators about suspicious
                      individuals or inappropriate behaviors.
                    </span>
                  </li>
                </ul>,
              ]}
            />
            <Card
              color="red"
              title="Inappropriate behaviors"
              content={[
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Make death threat jokes.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">Name-calling</span>{" "}
                    others.
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">Insult</span>{" "}
                    others.
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">Deflame</span> or{" "}
                    <span className="text-red-600 font-bold">slander</span>{" "}
                    others.
                  </li>
                  <li className="mt-1">Shill in general chat areas.</li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Send malicious links
                    </span>{" "}
                    to others.
                  </li>
                </ul>,
              ]}
            />
          </div>
          <div className="mt-5">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              Art-related
            </Typography>
            <Card
              color="pink"
              content={[
                <div>
                  You will{" "}
                  <span className="text-pink-600">
                    not need to fulfill everything
                  </span>{" "}
                  in the Good behaviors but{" "}
                  <span className="text-red-600 font-bold">
                    Inappropriate behaviors must be avoided.
                  </span>
                </div>,
              ]}
            />
            <Card
              color="green"
              title="Good behaviors"
              content={[
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Share your artworks and WIPs whenever possible if you
                      don't have an established portfolio online.
                    </span>{" "}
                    The more artworks you have in your portfolio, the easier
                    it'll be to verify your authenticity.
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Help report cases of art theft, plagiarism, etc.
                    </span>
                  </li>
                </ul>,
              ]}
            />
            <Card
              color="red"
              title="Inappropriate behaviors"
              content={[
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Sell another person's art
                    </span>{" "}
                    as NFT.
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Plagiarize/Trace/Heavily reference
                    </span>{" "}
                    someone's art.
                  </li>
                </ul>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="Terminologies"
          returnlink="/community/terminologies"
          next="FAQ"
          nextlink="/faq"
        />
      </div>
    </div>
  );
}
