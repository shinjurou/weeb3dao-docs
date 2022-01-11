import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "../0 - Index/Card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ReportIcon from "@mui/icons-material/Report";
import Link from "../0 - Index/Link";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="OpenSea" {...a11yProps(0)} />
          <Tab label="Foundation" {...a11yProps(1)} />
          <Tab label="MakersPlace" {...a11yProps(2)} />
          <Tab label="KnownOrigin" {...a11yProps(3)} />
          <Tab label="SuperRare" {...a11yProps(4)} />
          <Tab label="ANIFTY" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Open for everyone to use.
                    </span>{" "}
                    Anyone can make an account and start using OpenSea without
                    needing to go through an application process.
                  </li>
                  <li className="mt-1">
                    Has a{" "}
                    <Link
                      link="https://opensea.io/gas-free"
                      title="different gas fee system"
                    />{" "}
                    compared to other marketplaces. You will only need to pay
                    the initial set up gas fee once (which is approximately
                    close to x2 the current transaction GWEI gas price). All
                    minting after this are{" "}
                    <span className="text-green-600 font-bold">free</span> for
                    the{" "}
                    <span className="text-orange-500 font-bold">creator</span>.
                    Gas fee will only occur when your NFT is sold and is paid
                    for by the{" "}
                    <span className="text-orange-500 font-bold">collector</span>
                    .
                  </li>
                  <li className="mt-1">
                    You can{" "}
                    <span className="text-pink-600 font-bold">
                      switch between ETH Mainnet and Polygon network easily
                    </span>{" "}
                    and able to use both blockchains.{" "}
                    <span className="text-green-600 font-bold">
                      Polygon network does not require any gas for any
                      transaction.
                    </span>
                  </li>
                  <li className="mt-1">
                    OpenSea{" "}
                    <span className="text-pink-600 font-bold">
                      shows all NFT(s)
                    </span>{" "}
                    you have minted or bought on other marketplaces. This helps
                    making{" "}
                    <span className="text-orange-500 font-bold">
                      secondary sales easier
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      Add additional “unlockable contents"
                    </span>{" "}
                    for collectors after any NFT's sale.
                  </li>
                  <li className="mt-1">
                    Has the{" "}
                    <span className="text-green-600 font-bold">
                      lowest platform fee
                    </span>{" "}
                    for the Ethereum blockchain at{" "}
                    <span className="text-green-600 font-bold">2.5%</span>.
                  </li>
                  <li className="mt-1">
                    You can{" "}
                    <span className="text-pink-600 font-bold">
                      set the royalty fee
                    </span>{" "}
                    for secondary sale according to your preference.
                  </li>
                  <li className="mt-1">
                    You can sell{" "}
                    <span className="text-green-600 font-bold">ANY NFT</span> on
                    Opensea - even if it was purchased from a different
                    platform, with the exception of very few{" "}
                    <span className="text-red-600 font-bold">banned</span> or{" "}
                    <span className="text-red-600 font-bold">delisted</span>{" "}
                    collections which{" "}
                    <span className="text-red-600 font-bold">
                      violate their terms of service
                    </span>
                    .
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    OpenSea{" "}
                    <span className="text-pink-600 font-bold">
                      doesn't have
                    </span>{" "}
                    a{" "}
                    <span className="text-orange-500 font-bold">
                      follow system
                    </span>{" "}
                    so it means you will{" "}
                    <span className="text-red-600 font-bold">not</span> be able
                    to keep track of your favourite artists.{" "}
                    <span className="relative bottom-0.5 right-0.5">
                      <ArrowRightAltIcon />
                    </span>{" "}
                    You will have to{" "}
                    <span className="text-pink-600 font-bold">keep track</span>{" "}
                    of artists or collections you like via{" "}
                    <span className="text-orange-500 font-bold">Twitter</span> .
                  </li>
                  <li className="mt-1">
                    OpenSea is more commonly used for generative PFP projects
                    and collections instead of 1/1 NFTs.
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Significantly worse for discoverability
                    </span>{" "}
                    compared to curated marketplaces.
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="General Information"
            light={true}
            content={[
              <div>
                OpenSea has{" "}
                <span className="text-orange-500 font-bold">4 systems</span>{" "}
                available for selling NFT(s) in which you can choose depending
                on your preference:
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Set a{" "}
                    <span className="text-pink-600 font-bold">
                      fixed "buy now" price
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    There are{" "}
                    <Link
                      link="https://support.opensea.io/hc/en-us/articles/1500003246082-How-do-timed-auctions-work-"
                      title="2 types of timed auctions"
                    />{" "}
                    available. please read the article linked for the full
                    information.
                  </li>
                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        Sell to the highest bidder.
                      </span>
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        Sell with declining price(Dutch auction).
                      </span>
                    </li>
                  </ul>
                  <div className="mt-1">
                    <span className="relative bottom-0.5 right-0.5">
                      <ArrowRightAltIcon />
                    </span>
                    <span className="text-orange-500">
                      Lowest "reserve price"
                    </span>{" "}
                    on OpenSea is currently set at{" "}
                    <span className="text-pink-600 font-bold">1 ETH</span> .
                    This means that if an auction{" "}
                    <span className="text-orange-500">ends below 1 ETH</span>,
                    the seller will have to{" "}
                    <span className="text-pink-600 font-bold">
                      manually accept the highest bid
                    </span>{" "}
                    rather than{" "}
                    <span className="text-teal-600 font-bold">
                      having the bid accepted automatically
                    </span>{" "}
                    by OpenSea.
                  </div>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      Accept offers
                    </span>{" "}
                    from others.
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="orange"
            title="Important Note"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Minting an NFT from a different marketplace (For example:
                    Foundation) will result in the NFT showing up on OpenSea as
                    a part of{" "}
                    <span className="text-orange-500 font-bold">
                      Foundation's collection
                    </span>{" "}
                    and not your own collection{" "}
                    <span className="relative bottom-0.5 right-0.5">
                      <ArrowRightAltIcon />
                    </span>
                    You will have to mint as a collection on Foundation in order
                    for the NFT(s) to be shown in your own collection on
                    OpenSea.{" "}
                    <Link
                      link="https://opensea.io/collection/the-girls-of-armament-v2"
                      title="Example of a Foundation's collection on OpenSea"
                    />
                    .
                  </li>
                  <li className="mt-1">
                    You will still be able to change the NFT(s) after the
                    purchase is completed, so it is recommended to{" "}
                    <Link
                      link="https://support.opensea.io/hc/en-us/articles/1500012270982-What-is-Freezing-Metadata-"
                      title="freeze your
                    metadata before sale"
                    />
                    . This will incur a gas fee (which costs approximately the
                    same as other marketplaces) however not so many artists
                    choose to do this step{" "}
                    <span className="relative bottom-0.5 right-0.5">
                      <ArrowRightAltIcon />
                    </span>
                    Can create{" "}
                    <span className="text-red-600 font-bold">
                      risks for collectors
                    </span>{" "}
                    when purchasing from new artists, which can make collectors
                    hesitant to buy from you. This can make it difficult for you
                    to make a sale, unless you have a{" "}
                    <span className="text-pink-600 font-bold">
                      consistent portfolio
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 ">
                      {" "}
                      <ReportIcon /> If any collector is unsure of the
                      authenticity of the artist they wish to purchase from,
                      please contact one of the{" "}
                      <span className="font-bold">Mods</span> in{" "}
                      <Link
                        link="https://discord.gg/vktnAzvyNQ"
                        title="Anifriends Discord Server"
                      />{" "}
                      for assistance.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Currently, Foundation{" "}
                    <span className="text-green-600 font-bold">
                      is the most popular marketplace
                    </span>{" "}
                    for{" "}
                    <span className="text-orange-500 font-bold">
                      1/1 anime NFT artists
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    Minting is{" "}
                    <span className="text-green-600 font-bold">
                      straight-forward and easy to understand
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    Currently has the{" "}
                    <span className="text-green-600 font-bold">
                      best UI experience
                    </span>{" "}
                    and{" "}
                    <span className="text-green-600 font-bold">
                      easy to use
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Majority of anime collectors
                    </span>{" "}
                    are currently using Foundation to collect NFT.
                  </li>
                  <li className="mt-1">
                    Recently implemented a{" "}
                    <span className="text-pink-600 font-bold">
                      collection system
                    </span>{" "}
                    into their website and is now available to all artists.
                  </li>
                  <li className="mt-1">
                    You can{" "}
                    <Link
                      link="https://help.foundation.app/en/articles/5305276-how-can-i-create-a-split-on-foundation"
                      title="split an NFT sale"
                    />{" "}
                    <span className="text-pink-600 font-bold">
                      with your collaborator(s)
                    </span>{" "}
                    (up to total{" "}
                    <span className="text-orange-500 font-bold">max 3</span>{" "}
                    extra collaborators).
                  </li>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      Private sale
                    </span>{" "}
                    function.
                  </li>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      Twitter and Instagram verification
                    </span>{" "}
                    , along with showing{" "}
                    <span className="text-pink-600 font-bold">ENS</span> in{" "}
                    <span className="text-orange-500 font-bold">profile</span>.{" "}
                    <span className="relative bottom-0.5 right-0.5">
                      <ArrowRightAltIcon />
                    </span>
                    Makes it easy to{" "}
                    <span className="text-pink-600 font-bold">
                      verify legitimacy
                    </span>{" "}
                    for artists with those accounts linked.
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Higher gas fee
                    </span>{" "}
                    than{" "}
                    <Link
                      link="https://makersplace.com/"
                      title="MakersPlace"
                      light={true}
                    />{" "}
                    and{" "}
                    <Link
                      link="https://knownorigin.io/"
                      title="KnownOrigin"
                      light={true}
                    />
                    .
                  </li>
                  <li className="mt-1">
                    You will need to{" "}
                    <span className="text-red-600 font-bold">
                      pay the gas fees twice
                    </span>
                    : 1 for minting and 1 for listing.
                  </li>
                  <li className="mt-1">
                    Might have{" "}
                    <span className="text-red-600 font-bold">
                      a more competitive atmosphere
                    </span>{" "}
                    compared to other marketplaces, due to being more{" "}
                    <span className="text-orange-500 font-bold">
                      populated with anime NFT artists
                    </span>{" "}
                    .
                  </li>
                  <li className="mt-1">
                    Only allows{" "}
                    <span className="text-red-600 font-bold">1/1 NFTs</span> and
                    does not allow editions.
                  </li>
                  <li className="mt-1">
                    Currently has{" "}
                    <span className="text-orange-500 font-bold">
                      bad thumbnail image crop
                    </span>{" "}
                    for minted NFTs and{" "}
                    <span className="text-red-600 font-bold">
                      does not allow
                    </span>{" "}
                    you to{" "}
                    <span className="text-red-600 font-bold">
                      edit thumbnail crop
                    </span>
                    .
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="General Information"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Invite-based system
                    </span>{" "}
                    so you can join with an invite from someone who has{" "}
                    <span className="text-pink-600 font-bold">made a sale</span>{" "}
                    on Foundation.
                  </li>
                  <li className="mt-1">
                    Foundation only has{" "}
                    <span className="text-orange-500 font-bold">1 system</span>{" "}
                    available to selling your NFT(s) which is the bidding model.
                  </li>
                  <ol className="list-decimal ml-6">
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        minimum bid price.
                      </span>
                    </li>
                    <li className="mt-1">
                      A{" "}
                      <span className="text-pink-600 font-bold">
                        24 hour countdown
                      </span>{" "}
                      will{" "}
                      <span className="text-orange-500 font-bold">start</span>{" "}
                      once a collector bids on your work.
                    </li>
                    <li className="mt-1">
                      Bidding{" "}
                      <span className="text-pink-600 font-bold">
                        ends after 24 hours
                      </span>{" "}
                      and either you or the collector will need to{" "}
                      <span className="text-orange-500 font-bold">
                        pay a settling fee
                      </span>{" "}
                      to transfer the NFT from Foundation's wallet to the
                      collector's wallet. (Usually the collector will pay the
                      settling fee so it is best to wait for them).
                    </li>
                  </ol>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Recently{" "}
                    <Link
                      link="https://rare.makersplace.com/2021/09/21/announcing-our-new-smart-token-contract/"
                      title="updated their smart contract"
                      light={true}
                    />{" "}
                    to{" "}
                    <span className="text-green-600 font-bold">
                      decrease an average of 60% gas fees
                    </span>{" "}
                    for{" "}
                    <span className="text-orange-500 font-bold">
                      both minting and transferring NFTs
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Supportive management team
                    </span>{" "}
                    and currently is excited to continue onboarding anime
                    artists into their platform.
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Community events available
                    </span>{" "}
                    in their{" "}
                    <Link
                      link="https://discord.gg/dbbAB4CHzK"
                      title="Discord Server"
                    />{" "}
                    .
                  </li>
                  <li className="mt-1">
                    Has implemented the{" "}
                    <span className="text-pink-600 font-bold">
                      collection system
                    </span>{" "}
                    <span className="text-orange-500 font-bold">
                      before Foundation
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Allows both 1/1 and edition NFTs.
                    </span>
                  </li>
                  <li className="mt-1">
                    You will not need to list the artwork up for sale. After
                    mint, you can{" "}
                    <span className="text-green-600 font-bold">
                      start accepting offers
                    </span>{" "}
                    for it.
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Accept both digital wallet payment in Ethereum and FIAT
                      payment via Paypal and credit card.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    The process of registering and verifying before being able
                    to upload your NFT can be{" "}
                    <span className="text-red-600 font-bold">
                      time consuming
                    </span>{" "}
                    and{" "}
                    <span className="text-red-600 font-bold">confusing</span>{" "}
                    for new artists.
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Requires collectors to sign up
                    </span>{" "}
                    before they can purchase your NFT(s) instead of{" "}
                    <span className="text-orange-500 font-bold">
                      logging in directly with their wallet
                    </span>
                    , which might inconvenience some collectors who do not like
                    this method.
                  </li>
                  <li className="mt-1">
                    You will need to{" "}
                    <span className="text-red-600 font-bold">
                      pay the settling fee yourself
                    </span>{" "}
                    at the end of the sale.
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="General Information"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Curation-based system
                    </span>{" "}
                    so you can join only after{" "}
                    <Link
                      link="https://docs.google.com/forms/d/e/1FAIpQLSewnu8ch_KjAbKPnA5OjQSP4a3k7ihpCmhtthmFgfGK4dUStg/viewform"
                      title="your application"
                    />{" "}
                    has been accepted.
                  </li>
                  <li className="mt-1">
                    Alternatively, you can join via{" "}
                    <span className="text-pink-600 font-bold">
                      an invitation from one of MakersPlace curators
                    </span>
                    . There are currently{" "}
                    <span className="text-orange-500 font-bold">
                      2 curators available in Anifriends
                    </span>{" "}
                    who you can contact to express your interest:{" "}
                    <Link
                      link="https://twitter.com/GreyRadian"
                      title="GreyRadian"
                    />{" "}
                    and{" "}
                    <Link
                      link="https://twitter.com/shinjuroukai"
                      title="Shinjurou"
                    />
                    .
                  </li>
                  <li className="mt-1">
                    MakersPlace has{" "}
                    <span className="text-orange-500 font-bold">3 systems</span>{" "}
                    available for selling NFT(s) in which you can choose
                    depending on your preference:
                  </li>
                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        fixed "buy now" price
                      </span>
                      .
                    </li>
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        minimum bid price.
                      </span>
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        Accept offers
                      </span>{" "}
                      from others.
                    </li>
                  </ul>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Gas fee will only need to be{" "}
                    <span className="text-green-600 font-bold">
                      paid once for both minting and listing.
                    </span>
                  </li>
                  <li className="mt-1">
                    Gas fee is estimated to be around{" "}
                    <span className="text-green-600 font-bold">
                      half of Foundation's gas price.
                    </span>
                  </li>
                  <li className="mt-1">
                    Has implemented the{" "}
                    <span className="text-pink-600 font-bold">
                      collection system
                    </span>{" "}
                    <span className="text-orange-500 font-bold">
                      before Foundation
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Allows both 1/1 and edition NFTs.
                    </span>{" "}
                    You can set{" "}
                    <span className="text-green-600 font-bold">
                      laddering price
                    </span>{" "}
                    to{" "}
                    <span className="text-orange-500 font-bold">
                      your NFTs in a collection
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Media upload size is x2 compare to Foundation.
                    </span>
                  </li>
                  <li className="mt-1">
                    KnownOrigin has been{" "}
                    <span className="text-green-600 font-bold">
                      continuously improving
                    </span>{" "}
                    and{" "}
                    <span className="text-green-600 font-bold">
                      adding in new features
                    </span>{" "}
                    for their platform{" "}
                    <span className="text-orange-500 font-bold">
                      throughout 2021
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    You can{" "}
                    <Link
                      link="https://docs.knownorigin.io/guide/creating-editions/#collaborations"
                      title="split NFT sale"
                    />{" "}
                    <span className="text-pink-600 font-bold">
                      with your collaborator(s)
                    </span>{" "}
                    (up to total{" "}
                    <span className="text-orange-500 font-bold">
                      max 5 ETH addresses
                    </span>{" "}
                    for one edition).
                  </li>
                  <li className="mt-1">
                    <span className="text-pink-600 font-bold">
                      Add additional “unlockable contents"
                    </span>{" "}
                    for collectors after NFT's sale.
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Discovering new art is difficult, not a recommended
                      starting platform for new artists.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Anime-inspired NFTs
                    </span>{" "}
                    and{" "}
                    <span className="text-orange-500 font-bold">
                      anime NFT collectors
                    </span>{" "}
                    are <span className="text-red-600 font-bold">scarce</span>.
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Not many auctions
                    </span>{" "}
                    are happening on the platform.
                  </li>
                  <li className="mt-1">
                    Community is more{" "}
                    <span className="text-red-600 font-bold">closed off</span>{" "}
                    than other platforms.
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="General Information"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Curation-based system
                    </span>{" "}
                    only so you will have to apply through{" "}
                    <Link
                      link="https://knownorigin.io/artist-application"
                      title="their application"
                    />{" "}
                    when it's opened in order to be an artist on the platform.
                    KnownOrigin will only accept a maximum of 1500 applications
                    each time they open their forms.
                  </li>
                  <li className="mt-1">
                    KnownOrigin has{" "}
                    <span className="text-orange-500 font-bold">4 systems</span>{" "}
                    available for selling NFT(s) in which you can choose
                    depending on your preference (
                    <Link
                      link="https://docs.knownorigin.io/guide/auction-types/"
                      title="Information link here"
                    />
                    ):
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        fixed "buy now" price
                      </span>
                      .
                    </li>
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        minimum bid price
                      </span>{" "}
                      (reserve price). After the reserve price is met, you can
                      end the bidding process whenever you want or set automatic
                      24 hours timer system similar to Foundation.
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        Accept offers
                      </span>{" "}
                      from others.
                    </li>
                    <li className="mt-1">
                      <Link
                        link="https://docs.knownorigin.io/guide/auction-types/#stepped-sale"
                        title="Stepped sale system"
                      />
                      .
                    </li>
                  </ul>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Currently has the{" "}
                    <span className="text-pink-600 font-bold">
                      highest ATH for a sold NFT
                    </span>{" "}
                    price compared to other platforms. (
                    <Link
                      link="https://superrare.com/artwork-v2/hunter-inn-30058"
                      title="Hunter Inn by SeerLight was sold for 100 ETH"
                    />
                    )
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Allows both 1/1 and edition NFTs.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Their{" "}
                    <span className="text-orange-500 font-bold">curation</span>{" "}
                    is{" "}
                    <span className="text-red-600 font-bold">
                      extremely selective
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Extremely limited number
                    </span>{" "}
                    of{" "}
                    <span className="text-orange-500 font-bold">
                      anime artists
                    </span>{" "}
                    on the platform.
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="General Information"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Curation-based system
                    </span>{" "}
                    only, so you will have to apply through{" "}
                    <Link
                      link="https://docs.google.com/forms/d/e/1FAIpQLScTZhB9On31j-uoFzMD3hg0gGNf3hgjVyBz1xwCHsOBSydvPw/viewform"
                      title="their application"
                    />
                    .
                  </li>
                  <li className="mt-1">
                    SuperRare has{" "}
                    <span className="text-orange-500 font-bold">3 systems</span>{" "}
                    available for selling NFT(s) in which you can choose
                    depending on your preference:
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        fixed "buy now" price
                      </span>
                      .
                    </li>
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        minimum bid price
                      </span>{" "}
                      (reserve price). After the reserve price is met, you can
                      end the bidding process whenever you want or set an
                      automatic 24 hours timer system similar to Foundation.
                    </li>
                    <li className="mt-1">
                      <span className="text-pink-600 font-bold">
                        Accept offers
                      </span>{" "}
                      from others.
                    </li>
                  </ul>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>

        <TabPanel value={value} index={5} dir={theme.direction}>
          <Card
            color="green"
            title="Pros"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Enthusiastic development team
                    </span>{" "}
                    who continuously improve the platform.
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Has the lowest platform fee
                    </span>{" "}
                    compared to other 1/1 marketplaces.
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Has onboarded Japanese artists
                    </span>{" "}
                    who are{" "}
                    <span className="text-orange-500 font-bold">
                      not available on other marketplaces.
                    </span>{" "}
                  </li>
                  <li className="mt-1">
                    Able to{" "}
                    <span className="text-green-600 font-bold">
                      communicate
                    </span>{" "}
                    and{" "}
                    <span className="text-green-600 font-bold">support</span>{" "}
                    Japanese artists{" "}
                    <span className="text-green-600 font-bold">
                      better than other platforms
                    </span>{" "}
                    due to{" "}
                    <span className="text-orange-500 font-bold">
                      having fluent Japanese speakers in their team.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      English correction check is available.
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      Gas will be paid by ANIFTY
                    </span>{" "}
                    instead of yourself for minting. Which means you can mint
                    your work for{" "}
                    <span className="text-green-600 font-bold">free</span>.
                  </li>
                  <li className="mt-1">
                    ANIFTY wrote{" "}
                    <span className="text-orange-500 font-bold">
                      an indepth guide
                    </span>{" "}
                    for{" "}
                    <span className="text-teal-600 font-bold">
                      their certified artists
                    </span>{" "}
                    in both English and Japanese.
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="red"
            title="Cons"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    Platform is{" "}
                    <span className="text-red-600 font-bold">very new</span> and{" "}
                    <span className="text-red-600 font-bold">
                      needs more improvements
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    NFTs listed on ANIFTY could be{" "}
                    <span className="text-red-600 font-bold">
                      sold at a higher price
                    </span>{" "}
                    on other marketplaces.
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Community is smaller
                    </span>{" "}
                    than other marketplaces.
                  </li>
                  <li className="mt-1">
                    Currently{" "}
                    <span className="text-red-600 font-bold">
                      only supports PNG and GIF
                    </span>{" "}
                    for{" "}
                    <span className="text-orange-500 font-bold">
                      their upload file types
                    </span>
                    .
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      Limited tags available.
                    </span>
                  </li>
                </ul>
              </div>,
            ]}
          />
          <Card
            color="teal"
            title="General Information"
            light={true}
            content={[
              <div>
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-orange-500 font-bold">
                      Curation-based system
                    </span>{" "}
                    only, so you will have to apply through{" "}
                    <Link
                      link="https://docs.google.com/forms/d/e/1FAIpQLSec69eFAHFYgt-sINhX1V1sYd2KpaVssYQxStr-wERnvY8WlA/viewform"
                      title="their application"
                    />
                    .
                  </li>
                  <li className="mt-1">
                    ANIFTY currently only has{" "}
                    <span className="text-orange-500 font-bold">1 system</span>{" "}
                    available for selling NFT(s)
                  </li>

                  <ul className="list-disc ml-6">
                    <li className="mt-1">
                      Set a{" "}
                      <span className="text-pink-600 font-bold">
                        fixed "buy now" price
                      </span>
                      .
                    </li>
                  </ul>
                  <li className="mt-1">
                    The development team is currently working on{" "}
                    <span className="text-orange-500 font-bold">
                      implementing the bidding system
                    </span>{" "}
                    into their platform.
                  </li>
                </ul>
              </div>,
            ]}
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
