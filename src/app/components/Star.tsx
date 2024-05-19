import React from 'react'

import theme from '../../common/theme'
import MyIcon from './MyIcon'

interface Props {
  type: 'completa' | 'mitad' | 'vacia'
  size: number
}

const Star: React.FC<Props> = ({ size = 15, type }) => {
  let tipo_estrella: string

  switch (type) {
    case 'completa':
      tipo_estrella = 'star'
      break
    case 'mitad':
      tipo_estrella = 'star-half'
      break
    case 'vacia':
      tipo_estrella = 'star-outline'
      break
    default:
      tipo_estrella = 'star-outline'
      break
  }

  return <MyIcon nombre={tipo_estrella} tamano={size} color={theme.colors.primary} />
}

export default Star
