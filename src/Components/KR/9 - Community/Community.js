import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";

import RouterLink from "../0 - Index/RouterLink";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Community() {
  return (
    <div className="community">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          NFT 커뮤니티
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div>
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              커뮤니티 용어집
            </Typography>
            <Card
              color="green"
              content={[
                <div>
                  <span className="text-green-600 font-bold">
                    Commonly used slangs and abbreviations
                  </span>{" "}
                  within the community are listed{" "}
                  <RouterLink link="/community/terminologies" title="here." />
                </div>,
              ]}
            />
          </div>
          <div className="mt-8">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              NFT 커뮤니티의 문화
            </Typography>
            <Card
              color="green"
              content={[
                <div>
                  <span className="text-green-600 font-bold">
                    Best practices
                  </span>{" "}
                  within the community are listed{" "}
                  <RouterLink link="/community/culture" title="here." />
                </div>,
              ]}
            />
          </div>
        </div>

        <NaviButtons
          return="암호화폐 거래하기"
          returnlink="/crypto-exchange"
          next="커뮤니티 용어집"
          nextlink="/community/terminologies"
        />
      </div>
    </div>
  );
}
