import Badge from '@/app/components/Badge'
import MyIcon from '@/app/components/MyIcon'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import { EstadoReserva } from '@/common/utils/enums'
import { ReservaEntity } from '@/dominio/entities'
import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'

interface Props {
  reserva: ReservaEntity
  onPressCancelar: (idReserva: string) => void
}

function formatDate(isoString) {
  const date = new Date(isoString)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0') // Los meses en JavaScript van de 0 a 11
  const year = date.getUTCFullYear()

  return `${day}/${month}/${year}`
}
const CardReserva: React.FC<Props> = ({ reserva, onPressCancelar }) => {
  const fecha = reserva?.getFechaReserva() ? formatDate(reserva?.getFechaReserva()) : undefined
  let styleStatusBadge = {}
  const estadoReserva = reserva?.getEstado()
  switch (estadoReserva) {
    case EstadoReserva.ACEPTADA:
      styleStatusBadge = styles.statusAceptada
      break
    case EstadoReserva.PENDIENTE:
      styleStatusBadge = styles.statusPendiente
      break
    case EstadoReserva.RECHAZADA:
      styleStatusBadge = styles.statusRechazada
      break
    case EstadoReserva.CANCELADA:
      styleStatusBadge = styles.statusCancelada
      break
    default:
      break
  }
  return (
    <View style={styles.card}>
      {/* Nombre restaurante */}
      <View>
        <StyledText fontWeight='bold' fontSize='title' style={styles.restaurantName}>
          {reserva?.getNombreRestaurante()}
        </StyledText>
      </View>

      <View style={styles.row}>
        {/* BADGE */}
        <View style={styles.badgeContainer}>
          <Badge icon='today' text={fecha} />
          <Badge icon='time' text={reserva?.getHoraReserva()} />
        </View>
        {/* OPTIONS */}
        {estadoReserva === EstadoReserva.PENDIENTE && (
          <View style={styles.optionsContainer}>
            <TouchableNativeFeedback onPress={() => onPressCancelar(reserva?.getId())}>
              <View style={[styles.optionButton, { backgroundColor: theme.colors.primary }]}>
                <MyIcon nombre='close-circle' tamano={30} color='white' />
              </View>
            </TouchableNativeFeedback>
            {/* <TouchableNativeFeedback>
              <View style={[styles.optionButton, { backgroundColor: theme.colors.tertiary }]}>
                <MyIcon nombre='book' tamano={30} color='white' />
              </View>
            </TouchableNativeFeedback> */}
          </View>
        )}
      </View>
      {/* LOCATION */}
      <View style={styles.locationContainer}>
        <MyIcon nombre='location' tamano={25} />
        <StyledText fontWeight='bold' fontSize='title'>
          {reserva?.getLocacionRestaurante()}
        </StyledText>
      </View>
      {/* INFORMACION BASICA */}
      <View style={styles.informacionBasica}>
        <View style={styles.locationContainer}>
          <MyIcon nombre='person' tamano={25} />
          <StyledText fontWeight='bold' fontSize='title'>
            {reserva?.getNombreReservante()}
          </StyledText>
        </View>
        <View style={styles.locationContainer}>
          <MyIcon nombre='people' tamano={25} />
          <StyledText fontWeight='bold' fontSize='title'>
            {reserva?.getCantidadPersonas()}
          </StyledText>
        </View>
      </View>

      {/* ESTADO RESERVA */}
      <View style={styles.statusContainer}>
        <View style={[styles.statusBadge, styleStatusBadge]}>
          <StyledText fontWeight='bold' color='secondary'>
            {reserva?.getEstado()}
          </StyledText>
        </View>

        {reserva?.getCodIngreso() && (
          <View style={styles.codeContainer}>
            <StyledText fontWeight='bold'>CODIGO RESERVA</StyledText>
            <StyledText color='primary' fontWeight='bold' fontSize='title'>
              {reserva?.getCodIngreso()}
            </StyledText>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    gap: 10,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 0.2
  },
  restaurantName: {
    fontSize: 28
  },
  informacionBasica: {
    flexDirection: 'row',
    gap: 10
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 10
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 5
  },
  statusAceptada: {
    backgroundColor: theme.colors.green
  },
  statusRechazada: {
    backgroundColor: theme.colors.primary
  },
  statusCancelada: {
    backgroundColor: theme.colors.primary
  },
  statusPendiente: {
    backgroundColor: theme.colors.quaternary
  },
  optionButton: {
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 5
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center'
  },
  statusBadge: {
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start'
  },
  codeContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CardReserva
