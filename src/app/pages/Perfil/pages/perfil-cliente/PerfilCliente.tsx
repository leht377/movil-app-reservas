import Button from '@/app/components/Button'
import MyIcon from '@/app/components/MyIcon'
import StyledText from '@/app/components/StyledText'
import useLogOut from '@/app/hooks/useLogOut'
import CorazonIcon from '@/app/icons/CorazonIcon'
import LoveIcon from '@/app/icons/LoveIcon'
import theme from '@/common/theme'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import React from 'react'
import { StatusBar } from 'react-native'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const ItemMenu = ({ onPress, title, iconName, iconSize = 25 }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          flexDirection: 'row'
        }}
      >
        <StyledText fontSize='title'>{title}</StyledText>
        <MyIcon nombre={iconName} tamano={iconSize} />
      </View>
    </TouchableNativeFeedback>
  )
}

const PerfilCliente = () => {
  const { LogOut } = useLogOut()

  return (
    <View style={styles.container}>
      <StyledText
        fontWeight='bold'
        fontSize='title'
        style={{ marginVertical: 10, paddingHorizontal: 20 }}
      >
        OPCIONES DE USUARIO
      </StyledText>

      <ItemMenu iconName={'log-out'} onPress={LogOut} title={'Cerrar sesión'} />

      <View
        style={{
          bottom: 50,
          position: 'absolute',
          right: 30
        }}
      >
        <LoveIcon />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
    position: 'relative',
    paddingTop: StatusBar.currentHeight
  }
})

export default PerfilCliente
