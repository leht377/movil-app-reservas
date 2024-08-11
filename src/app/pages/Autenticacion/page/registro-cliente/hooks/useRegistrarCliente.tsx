import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { RegistrarClienteDto } from '../../../../../../dominio/dtos/registrar-cliente.dto'
import { useAppDispatch } from '../../../../../../redux/hooks/useAppDispatch'
import { registrarCliente } from '../../../../../../redux/reducers/usuario.reducer'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { UsuarioRol } from '@/common/utils/enums'
import useGuardarDatosUsuario from '@/app/hooks/useGuardarDatosUsuario'
import { UsuarioEntity } from '@/dominio/entities'

const useRegistrarCliente = () => {
  const dispacth = useAppDispatch()
  // const { usuario } = useAppSelector((state) => state.usuario)
  // const { guardarDatosCliente } = useGuardarDatosUsuario()
  const registrar = async (data: RegistrarClienteDto) => {
    try {
      const cliente = RegistrarClienteDto.crear(data)
      await dispacth(registrarCliente(cliente)).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   console.log(usuario)
  //   ;(async () => {
  //     if (usuario && usuario.getRol() === UsuarioRol.CLIENTE)
  //       await guardarDatosCliente(usuario as UsuarioEntity)
  //   })()
  // }, [usuario])
  return { registrar }
}

export default useRegistrarCliente
