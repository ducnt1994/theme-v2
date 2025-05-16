"use client";
import React from "react";
import {useAppSelector} from "@/redux/hooks";
import {selectTheme} from "@/features/layout/layoutSelector";
import Button from "@/components/common/button/Button";

export default function BannerExtra1() {
  const themeSelected = useAppSelector(selectTheme)
  console.log("themeSelected", themeSelected);
  return (
    <div>ducbeoo</div>
  )
}