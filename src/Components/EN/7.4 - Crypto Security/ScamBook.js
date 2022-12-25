import * as React from "react";
import Card from "../0 - Index/Card";
import ScamBookArtist from "./ScamBookArtist";
import ScamBookCollector from "./ScamBookCollector";
import ScamBookCommunity from "./ScamBookCommunity";

export default function ControlledAccordions() {
  return (
    <div>
      <Card color="orange" title="Main Target: Artist" />
      <div id="ScamBookArtist">
        <ScamBookArtist />
      </div>

      <Card color="orange" title="Main Target: Collector" />
      <div id="ScamBookCollector">
        <ScamBookCollector />
      </div>

      <Card color="orange" title="Main Target: Community" />
      <div id="ScamBookCommunity">
        <ScamBookCommunity />
      </div>
    </div>
  );
}
