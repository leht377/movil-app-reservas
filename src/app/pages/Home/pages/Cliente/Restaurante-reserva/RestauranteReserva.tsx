import StyledText from '@/app/components/StyledText'
import { HomeStackParamList } from '@/app/routes/types/home.stack.paramlist'
import theme from '@/common/theme'
import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import HeaderRestaurante from '../components/HeaderRestaurante'
import ReservarForm from './formularios/ReservarForm'
import SelectInput from '@/app/components/SelectInput'
import CalendarPicker from '@/app/components/CalendarPicker'

const RestauranteReserva = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList>>()
  const { restauranteId } = params

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderRestaurante />
        <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
          <CalendarPicker onSelectDay={(value) => console.log(value)} />
          <ReservarForm />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary
  }
})

export default RestauranteReserva
