import React, { useEffect } from 'react'
import { StyleSheet, View, Image, ScrollView, FlatList } from 'react-native'

import RestauranteRecomendadoItem from './RestauranteRecomendadoItem'
import useObtenerTopRestaurantes from '../hooks/useObtenerTopRestaurantes'

import StyledText from '../../../../../../components/StyledText'
import { RestauranteDetalladoEntity, RestauranteEntity } from '@/dominio/entities'

const RestaurantesRecomendadosSection = () => {
  const { cargando, obtenerTopRestaurantes, restaurantes } = useObtenerTopRestaurantes()

  const getData = async () => {
    await obtenerTopRestaurantes()
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <StyledText fontWeight='bold' fontSize='title'>
          Recomendados
        </StyledText>
        <StyledText fontSize='bodymini'>Restaurantes mejores calificados</StyledText>
      </View>

      <FlatList
        data={restaurantes}
        horizontal={true}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <RestauranteRecomendadoItem
            key={item.getId()}
            restaurante={item as RestauranteDetalladoEntity}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  }
})

export default RestaurantesRecomendadosSection
