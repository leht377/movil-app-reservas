import Badge from '@/app/components/Badge'
import MyIcon from '@/app/components/MyIcon'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
const CardReserva = () => {
  return (
    <View style={styles.card}>
      {/* Nombre restaurante */}
      <View>
        <StyledText
          fontWeight='bold'
          fontSize='title'
          style={styles.restaurantName}
        >
          Tan's Foot
        </StyledText>
      </View>

      <View style={styles.row}>
        {/* BADGE */}
        <View style={styles.badgeContainer}>
          <Badge icon='today' text='07/03/2024' />
          <Badge icon='time' text='8:00 PM' />
        </View>
        {/* OPTIONS */}
        <View style={styles.optionsContainer}>
          <TouchableNativeFeedback>
            <View
              style={[
                styles.optionButton,
                { backgroundColor: theme.colors.primary }
              ]}
            >
              <MyIcon nombre='close-circle' tamano={30} color='white' />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View
              style={[
                styles.optionButton,
                { backgroundColor: theme.colors.tertiary }
              ]}
            >
              <MyIcon nombre='book' tamano={30} color='white' />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      {/* LOCATION */}
      <View style={styles.locationContainer}>
        <MyIcon nombre='location' tamano={25} />
        <StyledText fontWeight='bold' fontSize='title'>
          Buenaventura, calle 5 sur
        </StyledText>
      </View>
      {/* ESTADO RESERVA */}
      <View style={styles.statusContainer}>
        <View
          style={[styles.statusBadge, { backgroundColor: theme.colors.green }]}
        >
          <StyledText fontWeight='bold' color='secondary'>
            ACEPTADA
          </StyledText>
        </View>
        <View style={styles.codeContainer}>
          <StyledText fontWeight='bold'>CODIGO DE INGRESO</StyledText>
          <StyledText color='primary' fontWeight='bold' fontSize='title'>
            2000005
          </StyledText>
        </View>
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
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between'
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 10
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 5
  },
  optionButton: {
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 5
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center'
  },
  statusBadge: {
    padding: 5,
    borderRadius: 10,
    alignSelf: 'flex-start'
  },
  codeContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CardReserva
