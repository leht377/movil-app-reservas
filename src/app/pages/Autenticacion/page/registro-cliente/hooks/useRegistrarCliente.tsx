import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { RegistrarClienteDto } from '../../../../../../dominio/dtos/registrar-cliente.dto'
import { useAppDispatch } from '../../../../../../redux/hooks/useAppDispatch'
import { registrarCliente, reset_status } from '../../../../../../redux/reducers/usuario.reducer'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { UsuarioRol } from '@/common/utils/enums'
import useGuardarDatosUsuario from '@/app/hooks/useGuardarDatosUsuario'
import { UsuarioEntity } from '@/dominio/entities'

const useRegistrarCliente = () => {
  const dispacth = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const { error, status } = useAppSelector((state) => state.usuario)
  const registrar = async (data: RegistrarClienteDto) => {
    try {
      setLoading(true)
      const cliente = RegistrarClienteDto.crear(data)
      await dispacth(registrarCliente(cliente)).unwrap()
    } catch (error) {
      console.log(error)
      setTimeout(() => {
        dispacth(reset_status())
      }, 3000)
    } finally {
      setLoading(false)
    }
  }

  return { registrar, loading, error, status }
}

export default useRegistrarCliente
