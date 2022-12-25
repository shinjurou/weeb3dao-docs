import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Celebration() {
  return (
    <div className="celebration">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Celebration
        </Typography>

        <div className="mb-6"></div>
        <Card
          color="green"
          title="Congratulations on your first collected NFT! Remember to be grateful to your collector and those who have helped you!"
          content={[
            <div>
              <ul className="list-disc ml-5">
                <li className="mt-1">
                  💟{" "}
                  <span className="text-green-600 font-bold">
                    Send a thank you message to your collector
                  </span>{" "}
                  after the transaction.
                </li>
                <li className="mt-1">
                  💝{" "}
                  <span className="text-green-600 font-bold">
                    Draw a gift for the collector
                  </span>{" "}
                  would be great but{" "}
                  <span className="text-teal-600 font-bold">not mandatory</span>
                  . Prioritizing your{" "}
                  <span className="text-teal-600 font-bold">health</span> and
                  having a{" "}
                  <span className="text-teal-600 font-bold">
                    balanced schedule
                  </span>{" "}
                  is more important.
                </li>
                <li className="mt-1">
                  🙌🎉 Send a message in{" "}
                  <Link
                    link="https://discord.gg/vktnAzvyNQ"
                    title="Anifam Discord Server's #congratsu
              channel"
                  />{" "}
                  so we can congratulate you! 💖
                </li>
              </ul>
            </div>,
          ]}
        />
        <NaviButtons
          return="Promote your NFT"
          returnlink="/sell-nft/promote-nft"
          next="How to keep track of Gas"
          nextlink="/gas"
        />
      </div>
    </div>
  );
}
