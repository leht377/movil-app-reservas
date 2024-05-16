import React from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import StyledText from '../../../../../components/StyledText'

import RestauranteRecomendadoItem from './RestauranteRecomendadoItem'

const RestaurantesRecomendadosSection = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <StyledText fontWeight='bold' fontSize='title'>
          Recomendados
        </StyledText>
        <StyledText fontSize='bodymini'>Restaurantes mejores calificados</StyledText>
      </View>
      <ScrollView contentContainerStyle={{ flexDirection: 'row' }} horizontal={true}>
        <RestauranteRecomendadoItem />
        <RestauranteRecomendadoItem />
        <RestauranteRecomendadoItem />
        <RestauranteRecomendadoItem />
        <RestauranteRecomendadoItem />
      </ScrollView>
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
