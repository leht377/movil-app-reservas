import theme from '@/common/theme'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { StyleSheet, View } from 'react-native'

const renderItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{
            uri: item?.uri
          }}
        />
      </View>
    </View>
  )
}

const IntalaccionesRestaurante = () => {
  const { restaurante_actual } = useAppSelector((state) => state.restaurante)
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurante_actual.getUrlFotosInstalaciones()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={styles.contentContainer}
        nestedScrollEnabled

        // keyExtractor={(item) => item?.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    gap: 10
  },
  contentContainer: {
    gap: 10
  },
  itemContainer: {
    flex: 0.5,
    height: 200,
    flexDirection: 'row'
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: theme.colors.quaternary
  },
  image: {
    flex: 1
  }
})

export default IntalaccionesRestaurante
