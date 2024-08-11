import { UsuarioMapper } from '@/common/utils/mappers/usuario.mapper'
import React from 'react'
import useGuardarDatosUsuario from './useGuardarDatosUsuario'
import useAsyncStorage from './useAsyncStorage'
import { UsuarioEntity } from '@/dominio/entities'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { UsuarioRol } from '@/common/utils/enums'

const useValidarUsuario = () => {
  const { getValue } = useAsyncStorage()
  const { guardarDatosCliente, guardarDatosRestaurante } = useGuardarDatosUsuario()
  const { usuario } = useAppSelector((state) => state.usuario)
  const { cliente } = useAppSelector((state) => state.cliente)
  const { restaurante } = useAppSelector((state) => state.restaurante)

  const verLocalStorage = async (): Promise<UsuarioEntity | null> => {
    let usuarioGuardado = (await getValue('usuario')) as any
    if (!usuarioGuardado) return

    const usuario = UsuarioMapper.UsuarioEntityFromObject({
      usuario: usuarioGuardado,
      token: usuarioGuardado?.token
    })
    return usuario
  }

  const validarUsuario = async () => {
    try {
      if (
        (usuario && usuario.getRol() === UsuarioRol.CLIENTE && cliente) ||
        (usuario && usuario.getRol() === UsuarioRol.RESTAURANTE && restaurante)
      )
        return

      const usuarioParaGuardar = (usuario as UsuarioEntity) ?? (await verLocalStorage())

      if (usuarioParaGuardar) {
        if (usuarioParaGuardar.getRol() === UsuarioRol.CLIENTE) {
          guardarDatosCliente(usuarioParaGuardar)
        } else if (usuarioParaGuardar.getRol() === UsuarioRol.RESTAURANTE) {
          guardarDatosRestaurante(usuarioParaGuardar)
        }
      }
      // await guardarDatosCliente(usuario)
    } catch (error) {
      console.error(error)
    }

    //
  }

  return { validarUsuario }
}

export default useValidarUsuario
