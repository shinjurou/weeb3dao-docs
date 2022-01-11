import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";

export default function ReverseImageSearch() {
  return (
    <div className="reverse-image-search">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Reverse Image Search Resources
        </Typography>
        <Card
          color="green"
          content={[
            <div>
              <Link link="https://twitter.com/shiomueth" title="Shiomu" /> has
              provided various resources to help the process of reverse image
              search in order to{" "}
              <span className="text-green-600 font-bold">
                verify authenticity for artworks.
              </span>
            </div>,
          ]}
        />
        <Card
          color="red"
          title="Some of these sites will show NSFW search results."
        />

        <ul className="list-disc mt-2 ml-6">
          <li className="mb-2">
            <Link
              link="https://iqdb.org/"
              title="https://iqdb.org/"
              light={true}
            />{" "}
            (aggregator: danbooru, konachan, yande.re, gelbooru, sankaku,
            e-shuushuu, zerochan, anime-pictures)
          </li>
          <li className="mb-2">
            <Link
              link="https://trace.moe/"
              title="https://trace.moe/"
              light={true}
            />{" "}
            (search scene from anime)
          </li>
          <li className="mb-2">
            <Link
              link="https://ascii2d.net/"
              title="https://ascii2d.net/"
              light={true}
            />{" "}
            <Link
              link="https://saucenao.com/"
              title="https://saucenao.com/"
              light={true}
            />
          </li>
          <li className="mb-2">
            General image search Good old google reverse image search
          </li>
          <li className="mb-2">
            <Link
              link="https://yandex.com/"
              title="https://yandex.com/"
              light={true}
            />{" "}
            (good for flipped/cropped images)
          </li>
          <li className="mb-2">
            <Link
              link="https://tineye.com/"
              title="https://tineye.com/"
              light={true}
            />{" "}
            <Link
              link="https://3d.iqdb.org/"
              title="https://3d.iqdb.org/"
              light={true}
            />{" "}
            (for searching cosplay, idols, models)
          </li>
        </ul>
        <Card
          color="teal"
          title="Reverse Image Search process"
          content={[
            <ol className="list-decimal ml-6">
              <li className="mt-1">Search with the image you have</li>
              <li className="mt-1">
                Look for a higher res/un-flipped/uncropped copy elsewhere
              </li>
              <li className="mt-1">Use it to search for the actual source</li>
            </ol>,
          ]}
        />
        <NaviButtons
          return="Recommended Readings"
          returnlink="/rec-readings"
          next=""
          nextlink=""
        />
      </div>
    </div>
  );
}
