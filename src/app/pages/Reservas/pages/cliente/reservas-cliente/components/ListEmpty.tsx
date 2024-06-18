import StyledText from '@/app/components/StyledText'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const ListEmpty = ({ loading }) => {
  if (loading) return
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <StyledText>No hay reservas ...</StyledText>
    </View>
  )
}

export default ListEmpty
