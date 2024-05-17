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
      <View style={styles.header}>
        <HeaderHome />
      </View>

      <View style={styles.containerSections}>
        <View style={styles.sectionOpcionesClientes}>
          <OpcionesClienteSection />
        </View>
        <View style={styles.sectionRestaurantesRecomendados}>
          <RestaurantesRecomendadosSection />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.4
  },
  containerSections: { flex: 0.6, gap: 3 },
  sectionOpcionesClientes: {
    backgroundColor: theme.colors.secondary,
    flex: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  sectionRestaurantesRecomendados: { backgroundColor: theme.colors.secondary, flex: 0.5 }
})

export default HomeCliente
