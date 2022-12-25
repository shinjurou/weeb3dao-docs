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

import commissionrar1 from "../../../Imgs/ScamGuidebook/artist/commissionrar-1.jpg";

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
            Cached Listings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This scam aims to{" "}
            <span className="text-orange-500 font-bold">
              install malware on your PC
            </span>{" "}
            <span className="text-red-600 font-bold">
              which steals your metamask seed phrase
            </span>{" "}
            and gives the scammer access to your wallets. The scammer often
            claims to have commissioned work but for whatever reason it is
            unfinished and they want you to finish it or they will offer up a
            file of assets they want you to rework in your artistic style. The
            scammer will hold a bit of a conversation about commissioning you,
            your rates and such but if you ask too much back about the job they
            will be quite persistent and say it is all in proposal inside the{" "}
            <span className="text-pink-600 font-bold">zip</span> or{" "}
            <span className="text-pink-600 font-bold">rar</span> file they sent
            you. Within the <span className="text-pink-600 font-bold">zip</span>{" "}
            or <span className="text-pink-600 font-bold">rar</span> file that
            the scammer sends to you may be files that look like{" "}
            <span className="text-pink-600 font-bold">.docx</span>,{" "}
            <span className="text-pink-600 font-bold">.PDF</span> or{" "}
            <span className="text-pink-600 font-bold">.PSD</span> files but
            actually have double extensions such as{" "}
            <span className="text-red-600 font-bold">
              unfinished-work.psd.exe
            </span>{" "}
            or <span className="text-red-600 font-bold">brief.pdf.scr</span>.{" "}
            Attempting to open any such file will{" "}
            <span className="text-orange-500 font-bold">
              infect your PC with malware
            </span>{" "}
            and{" "}
            <span className="text-red-600 font-bold">
              transfer your seed phrase to the scammer who will drain your
              wallet
            </span>
            .
          </Typography>

          <Card
            color="pink"
            title="Key Points"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  The scammer needs you to{" "}
                  <span className="text-pink-600 font-bold">
                    click on those files
                  </span>
                  , so{" "}
                  <span className="text-red-600 font-bold">
                    be suspicious of anyone who won't explain the commission or
                    answer more questions in the DM
                  </span>
                  .
                </li>
                <li className="mt-1">
                  Turn on{" "}
                  <span className="text-pink-600 font-bold">
                    "Show File Extensions" in Windows Explorer
                  </span>{" "}
                  and{" "}
                  <span className="text-pink-600 font-bold">
                    double check the final extension (.xxx)
                  </span>{" "}
                  is what you think it is{" "}
                  <span className="text-red-600 font-bold">
                    before clicking on any files
                  </span>
                  .
                </li>
              </ul>,
            ]}
          />

          <Card
            color="green"
            title="Useful Link"
            content={[
              <div>
                <Link link="https://www.virustotal.com/" title="VirusTotal" />{" "}
                is a free service owned by Google that lets you{" "}
                <span className="text-teal-600 font-bold">
                  upload files or file archives (zip/rar)
                </span>{" "}
                and{" "}
                <span className="text-orange-500 font-bold">
                  scans them for malicious content
                </span>
                .
              </div>,
            ]}
          />

          <Typography variant="h5" color="inherit" component="h2" mt={2} mb={1}>
            Example Screenshot
          </Typography>
          <img src={commissionrar1} alt="img3" className="my-2 rounded" />
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
            Fake Collections
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Insert text here</Typography>
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
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Sudoswipe
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Insert text here</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
