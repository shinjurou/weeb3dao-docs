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

import discordtakeover1 from "../../../Imgs/ScamGuidebook/community/discordtakeover-1.jpg";
import discordtakeoverjs1 from "../../../Imgs/ScamGuidebook/community/discordtakeover-javascript-1.jpg";
import discordtakeoverjs2 from "../../../Imgs/ScamGuidebook/community/discordtakeover-javascript-2.jpg";
import discordtakeoverjs3 from "../../../Imgs/ScamGuidebook/community/discordtakeover-javascript-3.jpg";

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
    const element = document.getElementById("ScamBookCommunity");
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
            Discord Account Takeover (Browser Console Version)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph={true}>
            This method, along with the malicious javascript method, aim to{" "}
            <span className="text-orange-500 font-bold">
              steal a victims Discord auth token
            </span>
            .{" "}
            <span className="text-red-600 font-bold">
              This token can be used to access the victims account by bypassing
              password and 2fa requirements
            </span>
            , and is often used to{" "}
            <span className="text-pink-600 font-bold">post surprise</span>,{" "}
            <span className="text-pink-600 font-bold">limited time mints</span>{" "}
            run by the attackers in the victims discord servers.
          </Typography>
          <Typography paragraph={true}>
            This attack hits the victim from multiple angles,{" "}
            <span className="text-red-600 font-bold">
              first the attacker will get the victim banned in a mutual server
            </span>{" "}
            <span className="text-pink-600 font-bold">
              (usually by impersonating them and faking a spam report)
            </span>
            , then they will{" "}
            <span className="text-red-600 font-bold">
              reach out to the victim acting as a moderator from the server they
              have just been banned from
            </span>{" "}
            and{" "}
            <span className="text-pink-600 font-bold">
              explain to the victim that they have been banned for sending spam
            </span>
            . At this point the victim is expected to plead their case to the
            attacker who will then offer to{" "}
            <span className="text-red-600 font-bold">
              bring into the DM (direct message) the account of the person who
              reported the victim for spamming
            </span>
            . There are now 3 accounts in the conversation:
          </Typography>
          <Typography paragraph={true}>
            <ol type="1">
              <li className="text-teal-600 font-bold">1. Victim</li>
              <li className="text-red-600 font-bold">
                2. Moderator (attacker)
              </li>
              <li className="text-red-600 font-bold">
                3. Spam reporter (also attacker)
              </li>
            </ol>
          </Typography>
          <Typography paragraph={true}>
            After some more back and forth{" "}
            <span className="text-red-600 font-bold">
              the spam reporter will claim the victim has sent them threats in a
              DM
            </span>{" "}
            and{" "}
            <span className="text-red-600 font-bold">
              the moderator will ask the victim to provide "Chat Logs"
            </span>{" "}
            to prove the victim{" "}
            <span className="text-orange-500 font-bold">
              has not edited messages or screenshots{" "}
            </span>
            between them and the spam reporter.
          </Typography>
          <Typography paragraph={true}>
            The attack can take a couple of different paths at this point, some
            might{" "}
            <span className="text-red-600 font-bold">
              ask the victim to screenshare their Discord developer console
            </span>
            , others will{" "}
            <span className="text-red-600 font-bold">
              ask the victim to download
            </span>{" "}
            and{" "}
            <span className="text-red-600 font-bold">send the attacker</span> a{" "}
            <span className="text-pink-600 font-bold">.HAR</span> file from the
            developer console. Whatever the path, this is the point at which{" "}
            <span className="text-red-600 font-bold">the token is stolen</span>,
            either from the victim unwittingly scrolling past the token and{" "}
            <span className="text-red-600 font-bold">
              the attacker taking a screenshot
            </span>{" "}
            or sending the <span className="text-pink-600 font-bold">.HAR</span>{" "}
            file which includes it.
          </Typography>
          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  The developer console{" "}
                  <span className="text-pink-600 font-bold">
                    has a number of very large red warnings
                  </span>{" "}
                  stating that the user is{" "}
                  <span className="text-red-600 font-bold">
                    not to show or type anything into the console that someone
                    else is instructing them to do
                  </span>
                  .{" "}
                  <span className="text-red-600 font-bold">
                    Do not ignore these!
                  </span>
                </li>
                <li className="mt-1">
                  Discord have{" "}
                  <span className="text-pink-600 font-bold">
                    removed access to the developer console
                  </span>{" "}
                  entirely in the stable branch of the desktop app due to the
                  frequency of this attack. Strongly encourage your team members
                  to{" "}
                  <span className="text-red-600 font-bold">
                    only use Discord through the official Discord apps and not a
                    web browser
                  </span>{" "}
                  if possible.
                </li>
              </ul>,
            ]}
          />
          <Typography variant="h5" color="inherit" component="h2" mt={2} mb={1}>
            Example Screenshot
          </Typography>
          <img
            src={discordtakeover1}
            alt="Example fake mint"
            className="my-2 rounded"
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
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Discord Account Takeover (Javascript Version)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph={true}>
            This method, along with the console method, aim to{" "}
            <span className="text-orange-500 font-bold">
              steal a victims Discord auth token
            </span>
            .{" "}
            <span className="text-red-600 font-bold">
              This token can be used to access the victims account by bypassing
              password and 2fa requirements
            </span>
            , and is often used to{" "}
            <span className="text-pink-600 font-bold">post surprise</span>,{" "}
            <span className="text-pink-600 font-bold">limited time mints</span>{" "}
            run by the attackers in the victims discord servers. This attack{" "}
            <span className="text-red-600 font-bold">
              makes use of malicious javascript code to fetch your discord auth
              token
            </span>{" "}
            from your web browsers local storage.
          </Typography>

          <Card
            color="pink"
            title="Key Points"
            content={[
              <>
                It is impossible to cover all precursors to this attack as it
                can be disguised in many different ways and crafted to appeal to
                certain targets, however the key point to be aware of is that{" "}
                <span className="text-red-600 font-bold">
                  the attacker requires the victim to interact with a dialogue
                  box and a bookmark they will ask the victim to create
                </span>
                .
              </>,
            ]}
          />

          <Card
            color="orange"
            title="Hacking Patterns"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  <Link
                    link="https://twitter.com/TheBlondeAlex/status/1490763727444054016"
                    title="The Blonde Alex twitter thread"
                  ></Link>
                </li>
                <li className="mt-1">
                  <Link
                    link="https://twitter.com/SerpentAU/status/1485002643370037254"
                    title="SerpentAU twitter thread"
                  ></Link>
                </li>
              </ul>,
            ]}
          />
          <Typography variant="h5" color="inherit" component="h2" mt={2} mb={1}>
            Example Screenshots
          </Typography>
          <img
            src={discordtakeoverjs1}
            alt="Attackers DM"
            className="my-2 rounded"
          />
          <img
            src={discordtakeoverjs2}
            alt="Malicious site"
            className="my-2 rounded"
          />
          <img
            src={discordtakeoverjs3}
            alt="Bookmark Javascript code"
            className="my-2 rounded"
          />
          <img
            src={discordtakeover1}
            alt="Example fake mint"
            className="my-2 rounded"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
