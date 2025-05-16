import { SxProps, Theme } from '@mui/system'
import { FontSize, FontWeight, LineHeight } from '@/styles/design-system/text'
const SmallSize: SxProps<Theme> = {
  width: 'fit-content',
  minWidth: '80px',
  height: '24px',
  fontSize: FontSize['text-sm'],
  lineHeight: LineHeight['leading-3'],
  fontWeight: FontWeight['font-medium'],
  textTransform: 'none',
}
const MediumSize: SxProps<Theme> = {
  width: 'fit-content',
  minWidth: '80px',
  height: '32px',
  fontSize: FontSize['text-sm'],
  lineHeight: LineHeight['leading-3'],
  fontWeight: FontWeight['font-medium'],
  textTransform: 'none',
}
const LargeSize: SxProps<Theme> = {
  width: 'fit-content',
  minWidth: '80px',
  height: '40px',
  fontSize: FontSize['text-sm'],
  lineHeight: LineHeight['leading-3'],
  fontWeight: FontWeight['font-medium'],
  textTransform: 'none',
}
const xLargeSize: SxProps<Theme> = {
  width: 'fit-content',
  minWidth: '128px',
  height: '48px',
  fontSize: FontSize['text-base'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-medium'],
  textTransform: 'none',
}
const xxLargeSize: SxProps<Theme> = {
  width: 'fit-content',
  minWidth: '128px',
  height: '56px',
  fontSize: FontSize['text-lg'],
  lineHeight: LineHeight['leading-4'],
  fontWeight: FontWeight['font-medium'],
  textTransform: 'none',
}

export { SmallSize, MediumSize, LargeSize, xxLargeSize, xLargeSize }
