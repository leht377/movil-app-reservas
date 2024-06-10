import Button from '@/app/components/Button'
import useLogOut from '@/app/hooks/useLogOut'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const PerfilCliente = () => {
  const { LogOut } = useLogOut()
  return (
    <View>
      <Button onPress={LogOut} title='LogOut' />
    </View>
  )
}

const styles = StyleSheet.create({})

export default PerfilCliente
