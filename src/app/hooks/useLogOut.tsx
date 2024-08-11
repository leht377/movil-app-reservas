import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import useAsyncStorage from './useAsyncStorage'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { set_usuario } from '@/redux/reducers/usuario.reducer'
import { set_cliente } from '@/redux/reducers/cliente.reducer'

const useLogOut = () => {
  const dispacth = useAppDispatch()
  const { removeValue } = useAsyncStorage()
  const { usuario } = useAppSelector((state) => state.usuario)
  const LogOut = async () => {
    try {
      if (usuario) {
        await removeValue('usuario')
        dispacth(set_cliente(null))
        dispacth(set_usuario(null))
      }
    } catch (error) {
      console.error(error)
    }
  }
  return { LogOut }
}

export default useLogOut
