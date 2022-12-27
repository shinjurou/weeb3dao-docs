import * as React from "react";
import { useRef } from "react";
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

export default function ScamBookArtist() {
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
          The scammers will airdrop the target an NFT which they will also place an enticing 
          WETH bid offer on. When the target attempts to take the bid offer the transaction 
          will fail and the error will contain a URL to a website the scammer controls. Once 
          on the site they will attempt to get the target to send transactions that will drain 
          them of valuable NFTs and wallet balances.
          </Typography>
          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                If you don't know how or why you have this NFT, chances are nobody wants 
                to buy it from you for thousands of dollars.
                </li>
                <li className="mt-1">
                Don't follow links in error messages.
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
          This scam abuses a marketplaces listing cache to post an item for sale at a very low price for a 
          split second and then cancelling the listing to leave only a much higher priced listing behind.
          </Typography> 
          <Typography paragraph={true}>
          For example the scammer might list an item for 1.6e, reduce it to 0.16e for a moment and then cancel 
          it again so when someone attempts to buy it they are prompted to pay 1.6e even though the marketplace 
          is still displaying the 0.16e listing on the website.
          </Typography>
          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                The amount will always be correct in Metamask or your wallet of choices prompt. 
                Pay attention to what you are approving!
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
          Scammers will mint fake collections of popular and recently minted projects in an attempt 
          to confuse buyers. These collections usually misspell the real collection, include an 
          extra character, number or add on the word "official" when the real collection does not.
          </Typography>
          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                Always verify links to collections by cross referencing them with the official social 
                media account of the project or checking the links or announcements channel on the 
                official server, do not blindly follow what discord users post in general chat rooms or elsewhere.
                </li>
              </ul>,
            ]}
          />
          <Typography
            variant="h5"
            color="inherit"
            component="h2"
            mt={2}
            mb={1}
          >
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
          The attacker here will initiate a conversation with the victim by offering to buy or trade an NFT using 
          services such as Sudoswap or NFTTrader, however they will send the victim a link to a 
          fake site that instead transfers the NFT, ETH or both from the victims wallet to the attacker.
          </Typography>
          <Typography paragraph={true}>
          A variation on this scam is to trade on the legitimate site however offer to trade fake "Wrapped ETH" 
          which is actually just a worthless ERC721 or ERC1155 token (See:<Link link="https://twitter.com/sudoswap/status/1490537450229223425" title="https://twitter.com/sudoswap/status/1490537450229223425"/>)
          </Typography>
          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                <Link link="https://twitter.com/sudoswap/status/1480354042781962242" title="Sudoswap (Tweet)"/> and <Link link="https://twitter.com/NftTrader/status/1476691976397361161" title="NFTTrader (Tweet)"/>{" "}
                have removed the need to send links for trades, if the other party will not share a trade code with you it is almost certainly a scam.
                </li>
                <li className="mt-1">
                Be aware of anyone refusing to use a mutually agreeable method of trading such as Opensea private listings, 
                the scammer will often claim they don't want to use Opensea to avoid commission fees however they are irrelevant 
                to the buyer as they are taken from the amount the seller receives.
                </li>
              </ul>,
            ]}
          />
          <Typography
            variant="h5"
            color="inherit"
            component="h2"
            mt={2}
            mb={1}
          >
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
