import useAsyncStorage from '@/app/hooks/useAsyncStorage'
import useGuardarDatosUsuario from '@/app/hooks/useGuardarDatosUsuario'
import useObtenerCliente from '@/app/hooks/useObtenerCliente'
import { UsuarioRol } from '@/common/utils/enums'
import { LoginDto } from '@/dominio/dtos/login.dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { set_cliente } from '@/redux/reducers/cliente.reducer'
import { set_usuario } from '@/redux/reducers/usuario.reducer'

import { usuarioServices } from '@/services/usuario.services'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const useLogin = () => {
  const { guardarDatosCliente } = useGuardarDatosUsuario()

  const autenticar = async ({ email, contrasena }) => {
    try {
      const loginDto = LoginDto.crear({ correo: email, contrasena })
      const usuario = await usuarioServices.atutenticarUsuario(loginDto)

      if (usuario.getRol() === UsuarioRol.RESTAURANTE) {
      }
      if (usuario.getRol() === UsuarioRol.CLIENTE) {
        guardarDatosCliente(usuario)
      }

      // console.log(usuario)
    } catch (error) {
      console.error(error)
    }
  }

  return { autenticar }
}

export default useLogin
