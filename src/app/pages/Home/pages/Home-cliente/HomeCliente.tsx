import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from '../../../../components/StyledText'
import OpcionesClienteSection from './components/OpcionesClienteSection'
import RestaurantesRecomendadosSection from './components/RestaurantesRecomendadosSection'
import theme from '../../../../../common/theme'
import { Image } from 'react-native'
import HeaderHome from './components/HeaderHome'
import { SearchBar } from '@rneui/themed'

const HomeCliente = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'purple', flex: 0.4 }}>
        <HeaderHome />
      </View>

      <View style={{ flex: 0.6, gap: 3 }}>
        <View
          style={{
            backgroundColor: theme.colors.secondary,
            flex: 0.5,
            paddingHorizontal: 20,
            paddingVertical: 10
          }}
        >
          <OpcionesClienteSection />
        </View>
        <View style={{ backgroundColor: theme.colors.secondary, flex: 0.5 }}>
          <RestaurantesRecomendadosSection />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomeCliente
