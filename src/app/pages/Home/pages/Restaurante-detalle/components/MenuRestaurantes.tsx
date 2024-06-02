import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import FilterHastag from './FilterHastag/FilterHastag'
import StyledText from '../../../../../components/StyledText'
import { HashtagEntity } from '../../../../../../dominio/entities'
import { Image } from 'react-native'
import theme from '../../../../../../common/theme'
import CardPlato from '../../../../../components/CardPlato'

const MenuRestaurantes = () => {
  const onSelectFilters = (filters: string[]) => {
    console.log(filters)
  }
  const renderItem = ({ item }) => {
    return <CardPlato />
  }
  return (
    <View style={styles.container}>
      <FilterHastag onSelectFilters={onSelectFilters} />

      {/* CARD MENU */}

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={renderItem}
        nestedScrollEnabled
        keyExtractor={(item) => item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    gap: 10
  }
})

export default MenuRestaurantes
