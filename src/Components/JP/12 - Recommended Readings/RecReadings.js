import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import ReactPlayer from "react-player";

export default function RecReadings() {
  return (
    <div className="rec-readings">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          Recommended Readings
        </Typography>
        <Card
          color="green"
          title="Various informative resources created by the awesome individuals in the community!"
        />
        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div className="mt-0">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              Information about NFT and its Community
            </Typography>
            <ul className="list-disc mt-2 ml-6">
              <li className="mb-2">
                <Link
                  link="https://foundation.app/community-guidelines"
                  title="Community Guidelines"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/withFND"
                  title="@withFND"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/shinjurou.eth/uIq__DaPcJ_Y3ku41N8_EGM7fZ8EIe1MwSYA3Q-ZMnA"
                  title="thoughts as an artist (january 2022)"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/shinjuroukai"
                  title="@shinjuroukai"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/rwx.eth/oZAVzydqTHSn-2K3-MxwoWjizt4ZRc1WEV3KoX5dozE"
                  title="thoughts as a collector (november 2021)"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/robek_world"
                  title="@robek_world"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/rwx.eth/vcJSTTWNbgI0dx0yrwvs8BPZVhkK3_bn3rPHTsZzkPk"
                  title="only a sith deals in absolutes"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/robek_world"
                  title="@robek_world"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/rwx.eth/oZAVzydqTHSn-2K3-MxwoWjizt4ZRc1WEV3KoX5dozE"
                  title='Comments for "thoughts as a collector (november 2021)"'
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/_JustAziz_/"
                  title="@_JustAziz_"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/jlmaxcy.eth/AfG89SPhq_Mw0WxDiM3VdFRFd_9RRIjDcexArUNUhcA"
                  title="Patron of the Digital Renaissance: Robek’s Collection of Art and Artists"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/jlmaxcy/"
                  title="@jlmaxcy"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://mirror.xyz/rwx.eth/oZAVzydqTHSn-2K3-MxwoWjizt4ZRc1WEV3KoX5dozE"
                  title="thoughts as a collector (november 2021)"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/robek_world"
                  title="@robek_world"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://robekworld.com/h3h3-productions-why-you-should-care-about-copyright-reform-ea0698c02faa"
                  title="H3H3, Copyright Reform and You(Tube) The History of Copyright"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/robek_world"
                  title="@robek_world"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://dune.xyz/kaijuking779/NFT-Dashboard-2"
                  title="Global NFT Market Charts"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/kaijuking779"
                  title="@KaijuKing779"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/0xKiwi_/status/1460718044976533505"
                  title="Warning against @shibe75 @ECollectionNFT"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/0xKiwi_/"
                  title="@0xKiwi_"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/robek_world/status/1460721165140480008"
                  title='Comments for "Warning against @shibe75 @ECollectionNFT"'
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/robek_world"
                  title="@robek_world"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/morellostorment/status/1460764120635121673"
                  title='Comments for "Warning against @shibe75 @ECollectionNFT"'
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/morellostorment/"
                  title="@morellostorment"
                  light={true}
                />
              </li>
            </ul>
            <div className="content-center sm:h-vidsm md:h-vidmd lg:h-vidlg xl:h-vidxl mt-4">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=8Kqz2dnpaKY&feature=emb_title"
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="mt-5">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              Guides and Tips about selling NFT
            </Typography>
            <ul className="list-disc mt-2 ml-6">
              <li className="mb-2">
                <Link
                  link="https://medium.com/@impostor.eth/impostors-basic-gas-guide-nft-minting-on-fnd-superrare-b1c6cc92ec14"
                  title="Impostor’s Basic Gas Guide (NFT Minting on FND / SuperRare)"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/cantfakesigs"
                  title="@cantfakesigs"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/thinknima/status/1399768027403522063"
                  title="NFT TIPS, GETTING COLLECTORS, SHILLING ETIQUETTE"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/thinknima/"
                  title="@thinknima"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/DCLBlogger/status/1460252096620470273?t=RFIskfpw3aiHyMh8hv09Gg&s=19"
                  title="NFT Marketing 101"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/DCLBlogger/"
                  title="@DCLBlogger"
                  light={true}
                />
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              Security
            </Typography>
            <ul className="list-disc mt-2 ml-6">
              <li className="mb-2">
                <Link
                  link="https://twitter.com/niftynaut/status/1458955359649939456?s=20"
                  title="Raise awareness about some security threats and what you can do to protect yourself"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/niftynaut/"
                  title="@niftynaut"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/osf_nft/status/1444684540971266056"
                  title="How to secure your NFTs on a hard wallet"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/osf_nft/"
                  title="@osf_nft"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/NFTherder/status/1448354521361657863?s=20"
                  title="MUST DO security tips to improve the safety of your crypto & precious jpegs"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/NFTherder/"
                  title="@NFTherder"
                  light={true}
                />
              </li>
              <li className="mb-2">
                <Link
                  link="https://twitter.com/uninspired_ryu/status/1460824955151478786?s=21"
                  title="Easy to understand sketches about hardware wallet"
                  light={true}
                />{" "}
                - by{" "}
                <Link
                  link="https://twitter.com/uninspired_ryu/"
                  title="@uninspired_ryu"
                  light={true}
                />
              </li>
            </ul>
            <div className="content-center sm:h-vidsm md:h-vidmd lg:h-vidlg xl:h-vidxl mt-4">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=aUBid1zJC-U"
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <NaviButtons
          return="Environment Controversy"
          returnlink="/environment"
          next="Reverse Image Search Resources"
          nextlink="/reverse-img-search"
        />
      </div>
    </div>
  );
}