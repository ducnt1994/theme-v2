import React from "react";
import Box from "@mui/material/Box";
import { Spacing } from "@/styles/design-system/spacing";

interface IPropsMarquee {
  isRunSlide?: boolean;
  contentChildren?: React.ReactNode | string;
  backgroundColor?: string;
}

export default function Marquee(props: IPropsMarquee) {
  const { isRunSlide, contentChildren, backgroundColor } = props;
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        background: backgroundColor,
        p: `${Spacing['space-s']} ${Spacing['space-m']}`,
        display: isRunSlide ? "block" : "flex",
        alignItems: isRunSlide ? "initial" : "center",
        justifyContent: isRunSlide ? "initial" : "center",
        whiteSpace: isRunSlide ? "nowrap" : "normal",
        minHeight: '36px', // tuỳ chỉnh
      }}
    >
      <Box
        component="span"
        sx={{
          display: isRunSlide ? "inline-block" : "block",
          pl: isRunSlide ? "100%" : 0,
          animation: isRunSlide ? "marquee 10s linear infinite" : "none",
          "@keyframes marquee": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-100%)" },
          },
          textAlign: isRunSlide ? "left" : "center",
        }}
      >
        {contentChildren}
      </Box>
    </Box>
  );
}