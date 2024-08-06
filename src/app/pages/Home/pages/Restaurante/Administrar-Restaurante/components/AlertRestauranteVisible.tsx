import MyIcon from '@/app/components/MyIcon'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AlertRestauranteVisible = ({ visible, onPressInvisible }) => {
  if (!visible) return
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 0.5,
        backgroundColor: '#e4e5ea',
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
        gap: 3,
        elevation: 1
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <StyledText fontWeight='bold' color='primary'>
          ALERTA
        </StyledText>
        <TouchableOpacity onPress={onPressInvisible}>
          <MyIcon nombre={'close'} tamano={23} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>

      <StyledText>
        Tu restaurante actualmente no es visible. Completa el formulario para que los clientes
        puedan ver y reservar en tu restaurante.
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({})

export default AlertRestauranteVisible
