import SearchInput from '@/app/components/SearchInput'
import SelectInput from '@/app/components/SelectInput'
import theme from '@/common/theme'
import { EstadoReserva } from '@/common/utils/enums'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import FilterBadgeReserva from './FilterBadgeReserva'
import StyledText from '@/app/components/StyledText'

const data = [
  { label: 'Aceptadas', value: EstadoReserva.ACEPTADA },
  { label: 'Pendientes', value: EstadoReserva.PENDIENTE },
  { label: 'Canceladas', value: EstadoReserva.CANCELADA },
  { label: 'Rechazadas', value: EstadoReserva.RECHAZADA }
]
const HeaderReservas = ({ inputValue, onChangeText, estadoReserva, onChageEstadoReserva }) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.secondary,
        paddingTop: 20,
        paddingHorizontal: 10,
        gap: 5
      }}
    >
      <SearchInput
        value={inputValue}
        onChangeText={onChangeText}
        placeholder='Nombre restaurante'
      />
      {/* <StyledText fontSize='title' fontWeight='bold'>
        Filtrar reservas
      </StyledText> */}
      <View style={{ flexWrap: 'wrap', flexDirection: 'row', gap: 5 }}>
        {/* <SelectInput
          data={data}
          onSelect={(value) => onChageEstadoReserva(value?.value)}
          value={estadoReserva}
          placeholder='Seleccionar estado'
        /> */}

        {data?.map((e) => (
          <FilterBadgeReserva
            title={e.label}
            onPress={() => onChageEstadoReserva(e.value)}
            key={e.value}
            isPlus={estadoReserva === e.value}
          />
        ))}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({})

export default HeaderReservas
