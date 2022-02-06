import React from "react";
import { Bling as GPT } from "react-gpt";
//   adUnitId: 'div-gpt-ad-7316199-1',
import { AdContainer } from "./add.css";
import { DFPSlotsProvider, AdSlot } from "react-dfp";
import AD from "./ad";

import { withTheme } from "styled-components";
const adUnitPath = "/22376835783/hp-stage-banner";

const sizeMapping = [
  { viewport: [0, 0], slot: [296, 240] },
  { viewport: [750, 0], slot: [402, 492] },
  { viewport: [1050, 0], slot: [492, 456] },
  { viewport: [1120, 0], slot: [700, 456] },
];

const GoogleAd = (props) => {
  const onSlotRenderEnded = (event) => {
    /* istanbul ignore next */ console.log("Event", event);
  };

  console.log('props withTheme', props)
  return (
    <div>
      <AD
        path={adUnitPath}
        format='BANNER'
        onSlotRenderEnded={onSlotRenderEnded}
      />
    </div>
  );
};

export default withTheme(GoogleAd);
