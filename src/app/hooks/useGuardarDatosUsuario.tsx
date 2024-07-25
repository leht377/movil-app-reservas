import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import useAsyncStorage from './useAsyncStorage'
import useObtenerCliente from './useObtenerCliente'
import useObtenerRestauranteID from './useObtenerRestauranteID'
import { UsuarioEntity } from '@/dominio/entities'
import { set_usuario } from '@/redux/reducers/usuario.reducer'
import { set_cliente } from '@/redux/reducers/cliente.reducer'
import { set_restaurante } from '@/redux/reducers/restaurantes.reducer'

const useGuardarDatosUsuario = () => {
  const dispacth = useAppDispatch()
  const { setValue, error } = useAsyncStorage()
  const { obtenerCliente } = useObtenerCliente()
  const {obtenerRestaurante} = useObtenerRestauranteID()


  const guardarDatosCliente = async (usuario: UsuarioEntity): Promise<void> => {
    try {
      const cliente = await obtenerCliente(usuario.getRolUsuarioId())
      await setValue('usuario', usuario)
      await setValue('cliente', cliente)

      if (!error) {
        dispacth(set_usuario(usuario))
        dispacth(set_cliente(cliente))
      } else {
        console.error(error)
      }
    } catch (error) {
      throw error
    }
  }

  const guardarDatosRestaurante = async ( usuario: UsuarioEntity): Promise<void> =>{
    try {
      const restaurante = await obtenerRestaurante(usuario.getRolUsuarioId())
      await setValue('usuario', usuario)
      await setValue('restaurante', restaurante)

      if(!error){
        dispacth(set_usuario(usuario))
        dispacth(set_restaurante(restaurante))
      }else{
        console.error(error)
      }
      
    } catch (error) {
      throw(error)
    }
  }

  return { guardarDatosCliente, guardarDatosRestaurante  }
}

export default useGuardarDatosUsuario
