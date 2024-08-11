import useAsyncStorage from '@/app/hooks/useAsyncStorage'
import useGuardarDatosUsuario from '@/app/hooks/useGuardarDatosUsuario'
import useObtenerCliente from '@/app/hooks/useObtenerCliente'
import { UsuarioRol } from '@/common/utils/enums'
import { LoginDto } from '@/dominio/dtos/login.dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { set_cliente } from '@/redux/reducers/cliente.reducer'
import { set_usuario } from '@/redux/reducers/usuario.reducer'

import { usuarioServices } from '@/services/usuario.services'
import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

const useLogin = () => {
  const { guardarDatosCliente, guardarDatosRestaurante } = useGuardarDatosUsuario()
  const [error, setError] = useState(null)

  const autenticar = async ({ email, contrasena }) => {
    try {
      const loginDto = LoginDto.crear({ correo: email, contrasena })
      const usuario = await usuarioServices.atutenticarUsuario(loginDto)

      if (usuario.getRol() === UsuarioRol.RESTAURANTE) {
        guardarDatosRestaurante(usuario)
      }
      if (usuario.getRol() === UsuarioRol.CLIENTE) {
        guardarDatosCliente(usuario)
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        setError('Usuario o contraseña invalida')
      } else {
        setError('Error desconocido')
        console.error(error)
      }
      setTimeout(() => {
        setError(null)
      }, 3000)
    }
  }

  return { autenticar, error }
}

export default useLogin
