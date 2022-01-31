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
          コミュニティ
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
              用語解説
            </Typography>
            <Card
              color="green"
              content={[
                <div>
                  <span className="text-green-600 font-bold">
                    コミュニティ内でよく使われるスラングや略語
                  </span>
                  を
                  <RouterLink link="/community/terminologies" title="こちら" />
                  に掲載しています。
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
              カルチャー
            </Typography>
            <Card
              color="green"
              content={[
                <div>
                  コミュニティ内の
                  <span className="text-green-600 font-bold">ベストな方法</span>
                  を
                  <RouterLink link="/community/culture" title="こちら" />
                  に掲載しています。
                </div>,
              ]}
            />
          </div>
        </div>

        <NaviButtons
          return="暗号通過取引所"
          returnlink="/crypto-exchange"
          next="用語解説"
          nextlink="/community/terminologies"
        />
      </div>
    </div>
  );
}
