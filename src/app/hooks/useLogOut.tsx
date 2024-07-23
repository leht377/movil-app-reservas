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
        dispacth(set_usuario(null))
        dispacth(set_cliente(null))
        await removeValue('usuario')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return { LogOut }
}

export default useLogOut
