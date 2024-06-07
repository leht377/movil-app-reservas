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

const data = [
  { label: 'Todas', value: 'Todas' },
  { label: 'Aceptadas', value: 'Aceptadas' },
  { label: 'Rechazadas', value: 'Rechazadas' }
]

const renderItem = () => {
  return <CardReserva />
}
const ReservasCliente = () => {
  const [filtroEstadoReserva, setFiltroEstadoReserva] =
    useState<String>('Todas')

  return (
    <View style={styles.container}>
      <View
        style={{
          gap: 10
        }}
      >
        <ScrollView
          nestedScrollEnabled
          stickyHeaderIndices={[1]}
          contentContainerStyle={{ gap: 10 }}
        >
          <CalendarPicker onSelectDay={() => {}} />
          <View
            style={{
              backgroundColor: theme.colors.secondary,
              paddingHorizontal: 10,
              marginTop: 10
            }}
          >
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
          <View style={{ paddingHorizontal: 10 }}>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              renderItem={renderItem}
              contentContainerStyle={{ gap: 10 }}
              nestedScrollEnabled
              ListFooterComponent={<View style={{ height: 20 }} />}
            />
          </View>
        </ScrollView>
      </View>
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
