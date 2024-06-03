import theme from '@/common/theme'
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
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDC0aJlngjKLK0aMm6KDC92aJ7cdQcxtw5aQ&s'
          }}
        />
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDC0aJlngjKLK0aMm6KDC92aJ7cdQcxtw5aQ&s'
          }}
        />
      </View>
    </View>
  )
}

const IntalaccionesRestaurante = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3]}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        nestedScrollEnabled
        keyExtractor={(item) => item.toString()}
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
    flexDirection: 'row',
    gap: 10
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
