import * as React from 'react'
import IconButtonMUI, { IconButtonProps } from '@mui/material/IconButton'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'
import { Color, ColorMono } from '@/styles/design-system/color'
import { Shadow } from '@/styles/design-system/shadowScrim'
import { ColorType } from '@/types/design-system/color'
import { Spacing } from '@/styles/design-system/spacing'

export interface IIconButtonProps extends IconButtonProps {
  btnSize?: 'small' | 'medium' | 'large' | 'xLarge'
  btnType?: 'solid' | 'fade' | 'outlined' | 'text'
  btnColor?: ColorType
  children?: React.ReactElement
}

const SmallSize: SxProps<Theme> = {
  height: '24px',
  width: '24px',
  padding: 0,
}
const MediumSize: SxProps<Theme> = {
  height: '32px',
  width: '32px',
  padding: 0,
}
const LargeSize: SxProps<Theme> = {
  height: '40px',
  width: '40px',
  padding: 0,
}
const xLargeSize: SxProps<Theme> = {
  height: '48px',
  width: '48px',
  padding: 0,
}

const BaseIconButtonStyle = {
  borderRadius: Spacing['space-s'],
}
const IconButton: React.FC<IIconButtonProps> = (props) => {
  const {
    btnSize = 'large',
    btnColor = 'primary',
    btnType = 'solid',
    children,
  } = props
  const SolidStyle: SxProps<Theme> = {
    ...BaseIconButtonStyle,
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
    },
  }
  const FadeStyle: SxProps<Theme> = {
    ...BaseIconButtonStyle,
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
    },
  }
  const OutlineStyle: SxProps<Theme> = {
    ...BaseIconButtonStyle,
    backgroundColor: ColorMono['color-white'],
    color: Color[`${btnColor}-500`],
    border: `1px solid ${Color['black-100']}`, // #E5E7E9
    ':hover': {
      backgroundColor: Color[`${btnColor}-50`],
    },
    ':focus': {
      boxShadow: Shadow['shadow-focus'],
    },
    ':disabled': {
      color: Color['black-400'],
      backgroundColor: Color[`black-25`],
    },
  }
  const TextStyle: SxProps<Theme> = {
    ...BaseIconButtonStyle,
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

  return (
    <IconButtonMUI
      {...props}
      sx={{ ...buttonSize, ...buttonStyle, ...props.sx }}
    >
      {children}
    </IconButtonMUI>
  )
}

export default IconButton
