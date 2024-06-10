import { clienteServices } from '@/services/cliente.services'
import React from 'react'

const useObtenerCliente = () => {
  const obtenerCliente = async (id: string) => {
    try {
      const cliente = await clienteServices.obtenerClientePorId(id)
      return cliente
    } catch (error) {
      throw error
    }
  }
  return { obtenerCliente }
}

export default useObtenerCliente
