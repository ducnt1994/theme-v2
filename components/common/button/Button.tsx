import * as React from 'react'
import ButtonMUI, { ButtonProps } from '@mui/material/Button'
import { SxProps, Theme } from '@mui/system'
import {Color, ColorMono} from "@/styles/design-system/color";
import { FontSize, FontWeight, LineHeight } from '@/styles/design-system/text'
import { Shadow } from '@/styles/design-system/shadowScrim'
import { ColorType } from '@/types/design-system/color'
import { Spacing } from '@/styles/design-system/spacing'
import CircularProgress from '@mui/material/CircularProgress'

export interface IButtonProps extends ButtonProps {
  btnSize?: 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge'
  btnType?: 'solid' | 'fade' | 'outlined' | 'text'
  btnColor?: ColorType
  isLoading?: boolean
  href?: string
}

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
const BaseButtonStyle = {
  borderRadius: Spacing['space-s'],
  padding: '10px 16px',
}
// *** hover: 600
// *** default: 500
// *** disabled: 50
const Button: React.FC<IButtonProps> = (props) => {
  const {
    btnSize = 'large',
    btnColor = 'primary',
    btnType = 'solid',
    isLoading,
  } = props
  const SolidStyle: SxProps<Theme> = {
    ...BaseButtonStyle,
    backgroundColor: Color[`${btnColor}-500`],
    color: ColorMono['color-white'],
    ':hover': {
      backgroundColor: Color[`${btnColor}-600`],
    },
    ':focus': {
      boxShadow: Shadow['shadow-focus'],
    },
    ':disabled': {
      color: Color['black-400'],
      backgroundColor: Color[`black-50`],
      border: 'none',
    },
  }
  const FadeStyle: SxProps<Theme> = {
    ...BaseButtonStyle,
    backgroundColor: Color[`${btnColor}-50`],
    color: Color[`${btnColor}-500`],
    ':hover': {
      backgroundColor: Color[`${btnColor}-600`],
      color: ColorMono['color-white'],
    },
    ':focus': {
      boxShadow: Shadow['shadow-focus'],
    },
    ':disabled': {
      color: Color['black-400'],
      backgroundColor: Color[`black-50`],
      border: 'none',
    },
  }
  const OutlineStyle: SxProps<Theme> = {
    ...BaseButtonStyle,
    backgroundColor: ColorMono['color-white'],
    color: Color[`${btnColor}-500`],
    border: `1px solid ${Color['black-100']}`,
    ':hover': {
      backgroundColor: Color[`${btnColor}-50`],
    },
    ':focus': {
      boxShadow: Shadow['shadow-focus'],
    },
    ':disabled': {
      color: Color['black-400'],
      backgroundColor: Color[`black-25`],
      border: `1px solid ${Color['black-100']}`,
    },
  }
  const TextStyle: SxProps<Theme> = {
    ...BaseButtonStyle,
    backgroundColor: 'inherit',
    color: Color[`${btnColor}-500`],
    ':hover': {
      backgroundColor: 'inherit',
    },
    ':focus': {
      boxShadow: 'none',
    },
    ':disabled': {
      color: Color['black-400'],
      backgroundColor: Color[`black-25`],
    },
  }

  let buttonStyle = {}
  let buttonSize = {}
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
  switch (btnType) {
    case 'solid':
      buttonStyle = SolidStyle
      break
    case 'fade':
      buttonStyle = FadeStyle
      break
    case 'outlined':
      buttonStyle = OutlineStyle
      break
    case 'text':
      buttonStyle = TextStyle
      break
    default:
      buttonStyle = SolidStyle
      break
  }
  const styleLoading = {
    backgroundColor: Color[`black-100`],
    color: Color[`black-400`],
    ':hover': {
      backgroundColor: Color['black-100'],
    },
    ':focus': {
      boxShadow: Shadow['shadow-focus'],
    },
    ':disabled': {
      color: Color['black-400'],
      backgroundColor: Color['black-100'],
      border: 'none',
    },
  }
  if (isLoading) {
    return (
      <ButtonMUI
        {...props}
        disabled
        startIcon={
          <CircularProgress
            size={btnSize === 'small' || btnSize === 'medium' ? 16 : 20}
            sx={{
              color: Color['black-400'],
            }}
          />
        }
        sx={{ ...buttonSize, ...BaseButtonStyle, ...styleLoading, ...props.sx }}
      />
    )
  }
  return (
    <ButtonMUI {...props} sx={{ ...buttonSize, ...buttonStyle, ...props.sx }} />
  )
}
export default Button
