import SearchInput from '@/app/components/SearchInput'
import SelectInput from '@/app/components/SelectInput'
import theme from '@/common/theme'
import { EstadoReserva } from '@/common/utils/enums'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const data = [
  { label: 'Todas', value: undefined },
  { label: 'Aceptadas', value: EstadoReserva.ACEPTADA },
  { label: 'Pendientes', value: EstadoReserva.PENDIENTE },
  { label: 'Canceladas', value: EstadoReserva.CANCELADA },
  { label: 'Rechazadas', value: EstadoReserva.RECHAZADA }
]
const HeaderReservas = ({ inputValue, onChangeText, estadoReserva, onChageEstadoReserva }) => {
  return (
    <View
      style={{ backgroundColor: theme.colors.secondary, paddingTop: 20, paddingHorizontal: 10 }}
    >
      <SearchInput
        value={inputValue}
        onChangeText={onChangeText}
        placeholder='Nombre restaurante'
      />
      <View style={{ marginTop: 10, width: '70%' }}>
        <SelectInput
          data={data}
          onSelect={(value) => onChageEstadoReserva(value?.value)}
          value={estadoReserva}
          placeholder='Seleccionar estado'
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({})

export default HeaderReservas
