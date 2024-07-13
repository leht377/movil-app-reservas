import Button from '@/app/components/Button'
import MyIcon from '@/app/components/MyIcon'
import StyledText from '@/app/components/StyledText'
import useLogOut from '@/app/hooks/useLogOut'
import theme from '@/common/theme'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const ItemMenu = ({ onPress, title, iconName, iconSize = 30 }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderWidth: 0.4,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexDirection: 'row'
        }}
      >
        <MyIcon nombre={iconName} tamano={iconSize} />
        <StyledText fontSize='title'>{title}</StyledText>
      </View>
    </TouchableWithoutFeedback>
  )
}

const PerfilCliente = () => {
  const { LogOut } = useLogOut()

  return (
    <View style={styles.container}>
      <ItemMenu iconName={'person-outline'} onPress={() => {}} title={'Datos personales'} />
      <ItemMenu iconName={'log-out-outline'} onPress={LogOut} title={'Cerrar sesión'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1
  }
})

export default PerfilCliente
