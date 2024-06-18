import { Skeleton } from '@rneui/base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const FooterList = ({ loading }) => {
  if (!loading) return null
  return (
    <View style={{ paddingHorizontal: 10, gap: 10 }}>
      <Skeleton height={250} skeletonStyle={{ borderRadius: 10 }} />
      <Skeleton height={250} skeletonStyle={{ borderRadius: 10 }} />
      <Skeleton height={250} skeletonStyle={{ borderRadius: 10 }} />
    </View>
  )
}

export default FooterList
