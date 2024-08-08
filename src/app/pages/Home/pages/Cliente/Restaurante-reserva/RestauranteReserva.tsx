import StyledText from '@/app/components/StyledText'
import { HomeStackParamList } from '@/app/routes/types/home.stack.paramlist'
import theme from '@/common/theme'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import HeaderRestaurante from '../components/HeaderRestaurante'
import ReservarForm from './formularios/ReservarForm'
import SelectInput from '@/app/components/SelectInput'
import CalendarPicker from '@/app/components/CalendarPicker'
import useObtenerRestuaranteId from '../Restaurante-detalle/hooks/useObtenerRestuaranteId'
import LoadingScreen from '@/app/components/LoadingScreen'
import { agruparHorasServicio } from '@/common/helpers/agruparHorasServicio'
import useSolicitarReserva from './hooks/useSolicitarReserva'
import ModalStatusRegistroReserva from './components/ModalStatusRegistroReserva'
import { RestauranteDetalladoEntity } from '@/dominio/entities'

const RestauranteReserva = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList>>()
  const { restauranteId } = params
  const { restaurante, loading } = useObtenerRestuaranteId(restauranteId)

  const { solicitarReserva, status, error } = useSolicitarReserva()

  const handleSubmit = async (data) => {
    const dataR = {
      nombre_reservante: data?.nombre_reservante,
      fecha_reserva: data?.dia_reserva,
      hora_reserva: data?.hora_reserva,
      cantidad_personas: data?.cantidad_personas,
      restaurante_id: restauranteId
    }
    const fueExitoso = await solicitarReserva(dataR)
    return fueExitoso
  }

  if (loading || !restaurante) return <LoadingScreen />
  const horas = agruparHorasServicio(restaurante?.getHorasServicio())
  const dataHoras = horas?.flat()?.map((hora) => ({ label: hora, value: hora }))

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderRestaurante restaurante={restaurante as RestauranteDetalladoEntity} />
        <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
          <ReservarForm dataHoras={dataHoras} handleSubmit={handleSubmit} />
        </View>
      </ScrollView>
      <ModalStatusRegistroReserva error={error} onClose={() => {}} status={status} />
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
