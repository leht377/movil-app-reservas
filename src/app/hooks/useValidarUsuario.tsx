import { UsuarioMapper } from '@/common/utils/mappers/usuario.mapper'
import React from 'react'
import useGuardarDatosUsuario from './useGuardarDatosUsuario'
import useAsyncStorage from './useAsyncStorage'

const useValidarUsuario = () => {
  const { getValue } = useAsyncStorage()
  const { guardarDatosCliente } = useGuardarDatosUsuario()

  const validarUsuario = async () => {
    try {
      const usuarioGuardado = (await getValue('usuario')) as any
      if (!usuarioGuardado) return
      const usuario = UsuarioMapper.UsuarioEntityFromObject({
        usuario: usuarioGuardado,
        token: usuarioGuardado?.token
      })
      await guardarDatosCliente(usuario)
    } catch (error) {
      console.error(error)
    }

    //
  }

  return { validarUsuario }
}

export default useValidarUsuario
