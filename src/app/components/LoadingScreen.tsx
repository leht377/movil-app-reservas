import theme from '@/common/theme'
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Loadingv2 from '../icons/Loadingv2'
import StyledText from './StyledText'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.colors.primary} />
      <Loadingv2 width={300} height={300} />
      <StyledText>Cargando...</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LoadingScreen
