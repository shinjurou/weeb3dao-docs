import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";
import WordExplain from "../0 - Index/WordExplain";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Terminologies() {
  return (
    <div className="terminologies">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Terminologies
        </Typography>
        <Card
          color="green"
          content={[
            <div>
              A more extensive list for{" "}
              <span className="text-green-600 font-bold">
                Common Terminologies used in communities
              </span>{" "}
              and{" "}
              <RouterLink
                link="/info-nft/important-terminologies"
                title="not just for selling your NFT."
              />
            </div>,
          ]}
        />
        <ul className="list-disc mt-5 ml-6">
          <li>
            <WordExplain word="GM" explain="Good Morning." />
          </li>
          <li>
            <WordExplain word="GN" explain="Good Night." />
          </li>
          <li>
            <WordExplain word="NGMI" explain="Not going to make it." />
          </li>
          <li>
            <WordExplain word="GMI" explain="Going to make it." />
          </li>
          <li>
            <WordExplain word="WAGMI" explain="We're all going to make it." />
          </li>
          <li>
            <WordExplain word="DYOR" explain="Do your own research." />
          </li>
          <li>
            <WordExplain word="FOMO" explain="Fear of missing out." />
          </li>
          <li>
            <WordExplain word="FUD" explain="Fear, uncertainty, and doubt." />
          </li>
          <li>
            <WordExplain
              word="HODL"
              explain="Hold on to dear life (Keep your NFT and not sell it)."
            />
          </li>
          <li>
            <WordExplain
              word="Rekt"
              explain="Someone who lost a lot of money from a bad trade."
            />
          </li>
          <li>
            <WordExplain word="PFP" explain="Profile Picture." />
          </li>
          <li>
            <WordExplain
              word="Paper Hands"
              explain="People who quickly sell their NFT(s) asset."
            />
          </li>
          <li>
            <WordExplain
              word="Diamond Hands"
              explain="People who hold NFT(s) for a project long term through its up and down prices."
            />
          </li>
          <li>
            <WordExplain
              word="Whale"
              explain="Someone who has a lot of ETH and purchasing a large number of assets."
            />
          </li>
          <li>
            <WordExplain word="Bag" explain="NFT assets a person holds." />
          </li>
          <li>
            <WordExplain
              word="Bagholder"
              explain={[
                <span>
                  An investor who holds for too long that the asset's value
                  dropped.{" "}
                  <span className="relative bottom-0.5">
                    <ArrowRightAltIcon />
                  </span>{" "}
                  huge loss
                </span>,
              ]}
            />
          </li>
          <li>
            <WordExplain
              word="Shitcoin"
              explain="A crypto currency with no value or purpose."
            />
          </li>
          <li>
            <WordExplain
              word="Memecoin"
              explain="Cryptocurrency based on a meme."
            />
          </li>
          <li>
            <WordExplain
              word="Apeing In"
              explain="Spending a lot of ETH for a project."
            />
          </li>
          <li>
            <WordExplain
              word="Pumping"
              explain="Raising an NFT asset price quickly."
            />
          </li>
          <li>
            <WordExplain
              word="Pump and dump"
              explain="Buying a large amount of NFTs from a project to inflate its price, then resell them at peak to make quick money."
            />
          </li>
          <li>
            <WordExplain
              word="Alpha"
              explain="The intel someone posesses that no one has found out yet."
            />
          </li>
          <li>
            <WordExplain
              word="Floor"
              explain="Lowest price available in a project."
            />
          </li>
          <li>
            <WordExplain
              word="Sweep the floor"
              explain="Buy all the NFTs at floor price to raise the project's price immediately."
            />
          </li>
          <li>
            <WordExplain word="Flex" explain="Show off." />
          </li>
          <li>
            <WordExplain word="Wen" explain="When." />
          </li>
          <li>
            <WordExplain
              word="DAO"
              explain="Decentralized autonomous organization = a community with a shared bank account."
            />
          </li>
          <li>
            <WordExplain word="Ser" explain="Sir." />
          </li>
          <li>
            <WordExplain
              word="Probably Nothing"
              explain="The phrase is used sarcastically."
            />
          </li>
          <li>
            <WordExplain word="Fren" explain="Friend." />
          </li>
          <li>
            <WordExplain
              word="McDonalds"
              explain="Backup plan for when we NGMI."
            />
          </li>
          <li>
            <WordExplain
              word="Generative Art"
              explain="Art created algorithmically on the blockchain when minted using a specific set of assets."
            />
          </li>
          <li>
            <WordExplain
              word="Looks Rare"
              explain="Rarity is important in NFT, this phrase is used sarcastically."
            />
          </li>
          <li>
            <WordExplain word="IRL" explain="In Real Life." />
          </li>
          <li>
            <WordExplain
              word="Liquidity"
              explain="Available ETH to buy NFTs."
            />
          </li>
          <li>
            <WordExplain word="Lambo" explain="Become rich." />
          </li>
          <li>
            <WordExplain
              word="Wen Lambo?"
              explain="When are we going to get rich?"
            />
          </li>
          <li>
            <WordExplain
              word="No-coiner"
              explain="People who are skeptical of crypto or don't have any coin."
            />
          </li>
          <li>
            <WordExplain word="Noob/Newb" explain="Inexperienced people." />
          </li>
          <li>
            <WordExplain word="LFG" explain="Let's f*cking go." />
          </li>
          <li>
            <WordExplain
              word="Gas wars"
              explain="Large number of people minting same project causing gas to increase significantly."
            />
          </li>
          <li>
            <WordExplain word="Ded" explain="Dead." />
          </li>
          <li>
            <WordExplain
              word="Rug"
              explain="Creators running away from a project."
            />
          </li>
          <li>
            <WordExplain word="Derivative" explain="Fanart." />
          </li>
          <li>
            <WordExplain
              word="OG"
              explain={[
                <span>
                  Original gangster{" "}
                  <span className="relative bottom-0.5">
                    <ArrowRightAltIcon />
                  </span>{" "}
                  People who are early.
                </span>,
              ]}
            />
          </li>
          <li>
            <WordExplain
              word="Seems legit"
              explain="Has excellent prospects."
            />
          </li>
          <li>
            <WordExplain word="NFA" explain="Not financial advice." />
          </li>
          <li>
            <WordExplain
              word="Airdrop"
              explain="Owner sends free NFT to someone."
            />
          </li>
        </ul>
        <NaviButtons
          return="Community"
          returnlink="/community"
          next="Culture"
          nextlink="/community/culture"
        />
      </div>
    </div>
  );
}
