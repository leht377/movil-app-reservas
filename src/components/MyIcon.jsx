import { Ionicons } from '@expo/vector-icons'

import React from 'react'

const MyIcon = ({ nombre, color, tamano }) => {
  return (
    <Ionicons name={nombre} color={color} size={tamano} />
  )
}

export default MyIcon
