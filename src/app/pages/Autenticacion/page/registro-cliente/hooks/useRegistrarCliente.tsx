import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RegistrarClienteDto } from '../../../../../../dominio/dtos/registrar-cliente.dto'
import { useAppDispatch } from '../../../../../../redux/hooks/useAppDispatch'
import { registrarCliente } from '../../../../../../redux/reducers/usuario.reducer'

const useRegistrarCliente = () => {
  const dispacth = useAppDispatch()

  const registrar = async (data: RegistrarClienteDto) => {
    try {
      const cliente = RegistrarClienteDto.crear(data)
      await dispacth(registrarCliente(cliente)).unwrap()
      // const usuario = await clienteServices.registrarCliente(cliente)
    } catch (error) {
      console.log(error)
    }
  }

  return { registrar }
}

export default useRegistrarCliente
