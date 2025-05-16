import * as React from 'react'
import DividerMUI, { DividerProps } from '@mui/material/Divider'
import { SxProps, Theme } from '@mui/system'
import { Spacing } from '@/styles/design-system/spacing'

export interface IDividerProps extends DividerProps {
  size?: 'small' | 'medium'
}

const Divider: React.FC<IDividerProps> = (props) => {
  const { size = 'small' } = props
  const SmallStyle: SxProps<Theme> = { borderBottomWidth: '1px' }
  const MediumStyle: SxProps<Theme> = {
    borderBottomWidth: Spacing['space-s'],
  }
  let dividerSize = {}
  switch (size) {
    case 'small':
      dividerSize = SmallStyle
      break
    case 'medium':
      dividerSize = MediumStyle
      break
    default:
      dividerSize = SmallStyle
      break
  }
  return <DividerMUI {...props} sx={{ ...dividerSize, ...props.sx }} />
}

export default Divider
