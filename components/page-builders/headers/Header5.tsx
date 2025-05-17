
import React from "react";
import {useAppSelector} from "@/redux/hooks";
import {selectTheme} from "@/features/layout/layoutSelector";
import Button from "@/components/common/button/Button";

export default function Header5() {
  const themeSelected = useAppSelector(selectTheme)
  return (
    <div>ducbeoo</div>
  )
}