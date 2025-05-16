import TypographyMUI, { TypographyProps } from '@mui/material/Typography'
import {
  FontSize,
  FontWeight,
  LineHeight,
} from '@/styles/design-system/text'
import { SxProps, Theme } from '@mui/system'
import * as React from 'react'

export interface ITypographyProps extends TypographyProps {
  textType?:
    | 'text48M'
    | 'text48R'
    | 'text40M'
    | 'text40R'
    | 'text32M'
    | 'text32R'
    | 'text28M'
    | 'text28R'
    | 'text28S'
    | 'text24M'
    | 'text24R'
    | 'text24S'
    | 'text20M'
    | 'text20R'
    | 'text20S'
    | 'text20B'
    | 'text18M'
    | 'text18R'
    | 'text18S'
    | 'text18B'
    | 'text16M'
    | 'text16R'
    | 'text16S'
    | 'text16B'
    | 'text14M'
    | 'text14R'
    | 'text14S'
    | 'text14B'
    | 'text12M'
    | 'text12R'
    | 'text12S'
    | 'text10M'
    | 'text10R'
    | 'text10S'
}

const text48M: SxProps<Theme> = {
  fontSize: FontSize['text-6xl'],
  lineHeight: LineHeight['leading-10'],
  fontWeight: FontWeight['font-medium'],
}
const text48R: SxProps<Theme> = {
  fontSize: FontSize['text-6xl'],
  lineHeight: LineHeight['leading-10'],
  fontWeight: FontWeight['font-regular'],
}
const text40M: SxProps<Theme> = {
  fontSize: FontSize['text-5xl'],
  lineHeight: LineHeight['leading-9'],
  fontWeight: FontWeight['font-medium'],
}
const text40R: SxProps<Theme> = {
  fontSize: FontSize['text-5xl'],
  lineHeight: LineHeight['leading-9'],
  fontWeight: FontWeight['font-regular'],
}
const text32M: SxProps<Theme> = {
  fontSize: FontSize['text-4xl'],
  lineHeight: LineHeight['leading-8'],
  fontWeight: FontWeight['font-medium'],
}
const text32R: SxProps<Theme> = {
  fontSize: FontSize['text-4xl'],
  lineHeight: LineHeight['leading-8'],
  fontWeight: FontWeight['font-regular'],
}
const text28M: SxProps<Theme> = {
  fontSize: FontSize['text-3xl'],
  lineHeight: LineHeight['leading-7'],
  fontWeight: FontWeight['font-medium'],
}
const text28R: SxProps<Theme> = {
  fontSize: FontSize['text-3xl'],
  lineHeight: LineHeight['leading-7'],
  fontWeight: FontWeight['font-regular'],
}
const text28S: SxProps<Theme> = {
  fontSize: FontSize['text-3xl'],
  lineHeight: LineHeight['leading-7'],
  fontWeight: FontWeight['font-semibold'],
}
const text24M: SxProps<Theme> = {
  fontSize: FontSize['text-2xl'],
  lineHeight: LineHeight['leading-6'],
  fontWeight: FontWeight['font-medium'],
}
const text24R: SxProps<Theme> = {
  fontSize: FontSize['text-2xl'],
  lineHeight: LineHeight['leading-6'],
  fontWeight: FontWeight['font-regular'],
}
const text24S: SxProps<Theme> = {
  fontSize: FontSize['text-2xl'],
  lineHeight: LineHeight['leading-6'],
  fontWeight: FontWeight['font-semibold'],
}
const text20M: SxProps<Theme> = {
  fontSize: FontSize['text-xl'],
  lineHeight: LineHeight['leading-5'],
  fontWeight: FontWeight['font-medium'],
}
const text20R: SxProps<Theme> = {
  fontSize: FontSize['text-xl'],
  lineHeight: LineHeight['leading-5'],
  fontWeight: FontWeight['font-regular'],
}
const text20S: SxProps<Theme> = {
  fontSize: FontSize['text-xl'],
  lineHeight: LineHeight['leading-5'],
  fontWeight: FontWeight['font-semibold'],
}
const text20B: SxProps<Theme> = {
  fontSize: FontSize['text-xl'],
  lineHeight: LineHeight['leading-5'],
  fontWeight: FontWeight['font-bold'],
}
const text18M: SxProps<Theme> = {
  fontSize: FontSize['text-lg'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-medium'],
}
const text18R: SxProps<Theme> = {
  fontSize: FontSize['text-lg'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-regular'],
}
const text18S: SxProps<Theme> = {
  fontSize: FontSize['text-lg'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-semibold'],
}
const text18B: SxProps<Theme> = {
  fontSize: FontSize['text-lg'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-bold'],
}
const text16M: SxProps<Theme> = {
  fontSize: FontSize['text-base'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-medium'],
}
const text16R: SxProps<Theme> = {
  fontSize: FontSize['text-base'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-regular'],
}
const text16S: SxProps<Theme> = {
  fontSize: FontSize['text-base'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-semibold'],
}
const text16B: SxProps<Theme> = {
  fontSize: FontSize['text-base'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-bold'],
}
const text14M: SxProps<Theme> = {
  fontSize: FontSize['text-sm'],
  lineHeight: LineHeight['leading-3'],
  fontWeight: FontWeight['font-medium'],
}
const text14R: SxProps<Theme> = {
  fontSize: FontSize['text-sm'],
  lineHeight: LineHeight['leading-3'],
  fontWeight: FontWeight['font-regular'],
}
const text14S: SxProps<Theme> = {
  fontSize: FontSize['text-sm'],
  lineHeight: LineHeight['leading-3'],
  fontWeight: FontWeight['font-semibold'],
}
const text14B: SxProps<Theme> = {
  fontSize: FontSize['text-sm'],
  lineHeight: LineHeight['leading-3'],
  fontWeight: FontWeight['font-bold'],
}
const text12M: SxProps<Theme> = {
  fontSize: FontSize['text-xs'],
  lineHeight: LineHeight['leading-2'],
  fontWeight: FontWeight['font-medium'],
}
const text12R: SxProps<Theme> = {
  fontSize: FontSize['text-xs'],
  lineHeight: LineHeight['leading-2'],
  fontWeight: FontWeight['font-regular'],
}
const text12S: SxProps<Theme> = {
  fontSize: FontSize['text-xs'],
  lineHeight: LineHeight['leading-2'],
  fontWeight: FontWeight['font-semibold'],
}
const text10M: SxProps<Theme> = {
  fontSize: FontSize['text-s'],
  lineHeight: LineHeight['leading-1'],
  fontWeight: FontWeight['font-medium'],
}
const text10R: SxProps<Theme> = {
  fontSize: FontSize['text-s'],
  lineHeight: LineHeight['leading-1'],
  fontWeight: FontWeight['font-regular'],
}
const text10S: SxProps<Theme> = {
  fontSize: FontSize['text-s'],
  lineHeight: LineHeight['leading-1'],
  fontWeight: FontWeight['font-semibold'],
}
const Typography: React.FC<ITypographyProps> = (props) => {
  const { textType } = props
  let styleText = {}
  switch (textType) {
    case 'text48M':
      styleText = text48M
      break
    case 'text48R':
      styleText = text48R
      break
    case 'text40M':
      styleText = text40M
      break
    case 'text40R':
      styleText = text40R
      break
    case 'text32M':
      styleText = text32M
      break
    case 'text32R':
      styleText = text32R
      break
    case 'text28M':
      styleText = text28M
      break
    case 'text28R':
      styleText = text28R
      break
    case 'text28S':
      styleText = text28S
      break
    case 'text24M':
      styleText = text24M
      break
    case 'text24R':
      styleText = text24R
      break
    case 'text24S':
      styleText = text24S
      break
    case 'text20M':
      styleText = text20M
      break
    case 'text20R':
      styleText = text20R
      break
    case 'text20S':
      styleText = text20S
      break
    case 'text20B':
      styleText = text20B
      break
    case 'text18M':
      styleText = text18M
      break
    case 'text18R':
      styleText = text18R
      break
    case 'text18S':
      styleText = text18S
      break
    case 'text18B':
      styleText = text18B
      break
    case 'text16M':
      styleText = text16M
      break
    case 'text16R':
      styleText = text16R
      break
    case 'text16S':
      styleText = text16S
      break
    case 'text16B':
      styleText = text16B
      break
    case 'text14M':
      styleText = text14M
      break
    case 'text14R':
      styleText = text14R
      break
    case 'text14S':
      styleText = text14S
      break
    case 'text14B':
      styleText = text14B
      break
    case 'text12M':
      styleText = text12M
      break
    case 'text12R':
      styleText = text12R
      break
    case 'text12S':
      styleText = text12S
      break
    case 'text10M':
      styleText = text10M
      break
    case 'text10R':
      styleText = text10R
      break
    case 'text10S':
      styleText = text10S
      break
    default:
      styleText = text16R
      break
  }
  return (
    <TypographyMUI
      {...props}
      sx={{ ...styleText, ...props.sx, wordBreak:'break-word' }}
    ></TypographyMUI>
  )
}

export default Typography
