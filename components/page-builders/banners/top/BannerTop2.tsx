
import React from "react";
import Marquee from "@/components/common/marquee/Marquee";
import {Color} from "@/styles/design-system/color";
import Typography from "@/components/common/typography/Typography";

export default function BannerTop2() {
  return (
    <>
      <Marquee
        isRunSlide={true}
        contentChildren={<Typography textType={'text24S'}>"Đây là đức béo"</Typography>}
        backgroundColor={Color['black-25']}
      />
    </>
  )
}