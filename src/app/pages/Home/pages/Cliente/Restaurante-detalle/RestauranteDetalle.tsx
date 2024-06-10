import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import useObtenerRestuaranteId from './hooks/useObtenerRestuaranteId'

import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'

import CustomTabView from './components/CustomTabView'
import StartCalificacion from '@/app/components/StartCalificacion'
import MyIcon from '@/app/components/MyIcon'
import Badge from '@/app/components/Badge'
import Button from '@/app/components/Button'
import StyledText from '@/app/components/StyledText'
import { HomeStackParamList } from '@/app/routes/types/home.stack.paramlist'
import theme from '@/common/theme'
import { StackNavigationProp } from '@react-navigation/stack'
import HeaderRestaurante from '../components/HeaderRestaurante'

const renderItem = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        minHeight: Dimensions.get('screen').height - 200
      }}
    >
      <CustomTabView />
    </View>
  )
}

const RestauranteDetalle = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList>>()
  const { restauranteId } = params
  const [scrollEnabled, setScrollEnable] = useState(true)
  // const { restaurante, loading } = useObtenerRestuaranteId(restauranteId)
  const { navigate } = useNavigation<StackNavigationProp<HomeStackParamList>>()
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled stickyHeaderIndices={[1]}>
        <View>
          <HeaderRestaurante />
          <View style={styles.containerButton}>
            <Button
              title='Reservar'
              color='primary'
              onPress={() => navigate('RestauranteReserva', { restauranteId })}
            />
          </View>
        </View>
        {renderItem()}
      </ScrollView>
    </View>
  )
}
{
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary
  },

  containerButton: {
    paddingHorizontal: 20,
    marginVertical: 10
  }
})

export default RestauranteDetalle
