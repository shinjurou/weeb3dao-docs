import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";

import fakecollection1 from "../../../Imgs/ScamGuidebook/collector/fakecollection-1.jpg";
import sudoswipe1 from "../../../Imgs/ScamGuidebook/collector/sudoswipe-1.jpg";

const Accordion = styled((props) => <MuiAccordion elevation={0} {...props} />)(
  ({ theme }) => ({})
);

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor:
      theme.palette.type === "dark"
        ? "rgba(255, 255, 255, .02)"
        : "rgba(0, 0, 0, .04)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      marginLeft: theme.spacing(1),
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ScamBookArtist(isExpanded) {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

    const yOffset = -150;
    const element = document.getElementById("ScamBookCollector");
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    if (element) {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                transform: "rotate(-90deg)",
                color: theme.palette.type === "dark" ? "#C5C5C5" : null,
              }}
            />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Airdropped WETH Offer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The scammers will{" "}
            <span className="text-orange-500 font-bold">
              airdrop the target an NFT
            </span>{" "}
            which they will also{" "}
            <span className="text-orange-500 font-bold">
              place an enticing WETH bid offer on
            </span>
            . When the target attempts to{" "}
            <span className="text-pink-600 font-bold">take the bid offer</span>
            <span className="text-red-600 font-bold">
              {" "}
              the transaction will fail
            </span>{" "}
            and{" "}
            <span className="text-red-600 font-bold">
              the error will contain a URL to a website the scammer controls
            </span>
            . Once on the site they will attempt to get the target to{" "}
            <span className="text-red-600 font-bold">
              send transactions that will drain them of valuable NFTs and wallet
              balances.
            </span>
          </Typography>
          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  If you don't know how or why you have this NFT, chances are{" "}
                  <span className="text-pink-600 font-bold">
                    nobody wants to buy it from you for thousands of dollars
                  </span>
                  .
                </li>
                <li className="mt-1">
                  <span className="text-red-600 font-bold">
                    Don't follow links in error messages
                  </span>
                  .
                </li>
              </ul>,
            ]}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                transform: "rotate(-90deg)",
                color: theme.palette.type === "dark" ? "#C5C5C5" : null,
              }}
            />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Cached Listings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph={true}>
            This scam{" "}
            <span className="text-orange-500 font-bold">
              abuses a marketplaces listing cache
            </span>{" "}
            <span className="text-pink-600 font-bold">
              to post an item for sale at a very low price for a split second
            </span>{" "}
            and then
            <span className="text-red-600 font-bold">
              {" "}
              cancelling the listing
            </span>{" "}
            to leave only a much higher priced listing behind.
          </Typography>
          <Typography paragraph={true}>
            For example the scammer might list an item for{" "}
            <span className="text-pink-600 font-bold">1.6e</span>, reduce it to{" "}
            <span className="text-pink-600 font-bold">0.16e</span> for a moment
            and then cancel it again so when someone attempts to buy it they are
            prompted to <span className="text-red-600 font-bold">pay 1.6e</span>{" "}
            even though the marketplace is still displaying the 0.16e listing on
            the website.
          </Typography>
          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  The amount will{" "}
                  <span className="text-pink-600 font-bold">
                    always be correct in Metamask or your wallet of choices
                    prompt
                  </span>
                  .{" "}
                  <span className="text-red-600 font-bold">
                    Pay attention to what you are approving!
                  </span>
                </li>
              </ul>,
            ]}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                transform: "rotate(-90deg)",
                color: theme.palette.type === "dark" ? "#C5C5C5" : null,
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Fake Collections
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Scammers will{" "}
            <span className="text-orange-500 font-bold">
              mint fake collections of popular and recently minted projects
            </span>{" "}
            in an attempt to{" "}
            <span className="text-red-600 font-bold">confuse buyers</span>.
            These collections usually{" "}
            <span className="text-pink-600 font-bold">
              misspell the real collection
            </span>
            ,{" "}
            <span className="text-pink-600 font-bold">
              include an extra character
            </span>
            , <span className="text-pink-600 font-bold">number</span> or{" "}
            <span className="text-pink-600 font-bold">
              add on the word "official"
            </span>{" "}
            when the real collection does not.
          </Typography>
          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  <span className="text-red-600 font-bold">
                    Always verify links to collections
                  </span>{" "}
                  by{" "}
                  <span className="text-pink-600 font-bold">
                    cross referencing them with the official social media
                    account of the project
                  </span>{" "}
                  or{" "}
                  <span className="text-pink-600 font-bold">
                    checking the links or announcements channel on the official
                    server
                  </span>
                  ,{" "}
                  <span className="text-red-600 font-bold">
                    do not blindly follow what discord users post in general
                    chat rooms or elsewhere
                  </span>
                  .
                </li>
              </ul>,
            ]}
          />
          <Typography variant="h5" color="inherit" component="h2" mt={2} mb={1}>
            Example Screenshot
          </Typography>
          <img
            src={fakecollection1}
            alt="Fake uwucrew collections on Opensea"
            className="my-2 rounded"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                transform: "rotate(-90deg)",
                color: theme.palette.type === "dark" ? "#C5C5C5" : null,
              }}
            />
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Sudoswipe
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph={true}>
            The attacker here will{" "}
            <span className="text-orange-500 font-bold">
              initiate a conversation with the victim by offering to buy or
              trade an NFT
            </span>{" "}
            using services such as{" "}
            <span className="text-pink-600 font-bold">Sudoswap</span> or{" "}
            <span className="text-pink-600 font-bold">NFTTrader</span>, however{" "}
            <span className="text-red-600 font-bold">
              they will send the victim a link to a fake site that instead
              transfers the NFT, ETH or both from the victims wallet to the
              attacker
            </span>
            .
          </Typography>
          <Typography paragraph={true}>
            A variation on this scam is to trade on the legitimate site however
            offer to{" "}
            <span className="text-red-600 font-bold">
              trade fake "Wrapped ETH"
            </span>{" "}
            which is actually just a worthless ERC721 or ERC1155 token (See:
            <Link
              link="https://twitter.com/sudoswap/status/1490537450229223425"
              title="https://twitter.com/sudoswap/status/1490537450229223425"
            />
            )
          </Typography>
          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  <Link
                    link="https://twitter.com/sudoswap/status/1480354042781962242"
                    title="Sudoswap (Tweet)"
                  />{" "}
                  and{" "}
                  <Link
                    link="https://twitter.com/NftTrader/status/1476691976397361161"
                    title="NFTTrader (Tweet)"
                  />{" "}
                  have removed the need to send links for trades, if the other
                  party will{" "}
                  <span className="text-red-600 font-bold">
                    not share a trade code
                  </span>{" "}
                  with you it is almost certainly a scam.
                </li>
                <li className="mt-1">
                  <span className="text-red-600 font-bold">
                    Be aware of anyone refusing to use a mutually agreeable
                    method of trading such as Opensea private listings
                  </span>
                  , the scammer will often claim they don't want to use Opensea
                  to avoid{" "}
                  <span className="text-pink-600 font-bold">
                    commission fees
                  </span>{" "}
                  however they are irrelevant to the buyer as they are taken
                  from the amount the seller receives.
                </li>
              </ul>,
            ]}
          />
          <Typography variant="h5" color="inherit" component="h2" mt={2} mb={1}>
            Example Screenshot
          </Typography>
          <img
            src={sudoswipe1}
            alt="Sudoswap fake weth"
            className="my-2 rounded"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
