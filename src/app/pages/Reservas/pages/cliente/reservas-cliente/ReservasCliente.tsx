import Badge from '@/app/components/Badge'
import CalendarPicker from '@/app/components/CalendarPicker'
import MyIcon from '@/app/components/MyIcon'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import React, { useEffect, useState } from 'react'
import { TouchableNativeFeedback } from 'react-native'
import { StyleSheet, View } from 'react-native'
import CardReserva from '../../components/CardReserva'
import { ScrollView } from 'react-native'
import { SearchBar } from '@rneui/themed'
import SelectInput from '@/app/components/SelectInput'
import { FlatList } from 'react-native'
import useObtenerReservasCliente from './hooks/useObtenerReservasCliente'
import LoadingScreen from '@/app/components/LoadingScreen'
import { RefreshControl } from 'react-native-gesture-handler'

const data = [
  { label: 'Todas', value: 'Todas' },
  { label: 'Aceptadas', value: 'Aceptadas' },
  { label: 'Rechazadas', value: 'Rechazadas' }
]

const renderItem = ({ item }) => {
  return <CardReserva reserva={item} />
}

const header = () => {
  const [filtroEstadoReserva, setFiltroEstadoReserva] = useState<String>('Todas')
  return (
    <View style={{ backgroundColor: theme.colors.secondary }}>
      <SearchBar lightTheme placeholder='Codigo de ingreso' />
      <View style={{ marginTop: 10 }}>
        <SelectInput
          data={data}
          onSelect={(value) => setFiltroEstadoReserva(value?.value)}
          value={filtroEstadoReserva}
          placeholder='Estado reserva'
        />
      </View>
    </View>
  )
}
const ReservasCliente = () => {
  const { loading, obtenerReservas, reservas } = useObtenerReservasCliente()
  const [refreshing, setRefreshing] = useState(false)
  useEffect(() => {
    obtenerReservas(undefined)
  }, [])

  const onRefresh = async () => {
    setRefreshing(true)
    await obtenerReservas(undefined)
    setRefreshing(false)
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={reservas}
        ListEmptyComponent={<StyledText>Cargando...</StyledText>}
        ListHeaderComponent={header}
        stickyHeaderIndices={[0]}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 10 }}
        ListFooterComponent={<View style={{ height: 10 }} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1
  }
})

export default ReservasCliente
