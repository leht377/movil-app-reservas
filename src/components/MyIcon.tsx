import { Ionicons } from '@expo/vector-icons'

import React from 'react'

interface Props {
  nombre: any
  color?: string
  tamano?: number
}
const MyIcon: React.FC<Props> = ({ nombre, color, tamano }) => {
  return <Ionicons name={nombre} color={color} size={tamano} />
}

export default MyIcon
