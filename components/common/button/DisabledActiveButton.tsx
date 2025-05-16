import * as React from 'react'
import { Color } from '@/styles/design-system/color'
import { IButtonProps } from './Button'
import ButtonMUI from '@mui/material/Button'
import { SxProps, Theme } from '@mui/system'
import { Spacing } from '@/styles/design-system/spacing'
import {
  LargeSize,
  MediumSize,
  SmallSize,
  xLargeSize,
  xxLargeSize,
} from '@/types/design-system/button-type'

const BaseButtonStyle = {
  borderRadius: Spacing['space-s'],
  padding: '10px 16px',
  backgroundColor: Color['neutral-100'],
  color: Color['neutral-400'],
  ':hover': {
    backgroundColor: Color['neutral-100'],
    color: Color['neutral-400'],
  },
}
const DisabledActiveButton: React.FC<IButtonProps> = (props) => {
  const { btnSize = 'large' } = props
  let buttonSize: SxProps<Theme> = {}
  switch (btnSize) {
    case 'small':
      buttonSize = SmallSize
      break
    case 'medium':
      buttonSize = MediumSize
      break
    case 'large':
      buttonSize = LargeSize
      break
    case 'xLarge':
      buttonSize = xLargeSize
      break
    case 'xxLarge':
      buttonSize = xxLargeSize
      break
    default:
      buttonSize = LargeSize
      break
  }
  return (
    <ButtonMUI
      {...props}
      sx={{ ...buttonSize, ...BaseButtonStyle, ...props.sx }}
    />
  )
}

export default DisabledActiveButton
