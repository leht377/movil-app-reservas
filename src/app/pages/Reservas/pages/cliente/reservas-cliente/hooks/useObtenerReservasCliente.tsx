import { EstadoReserva } from '@/common/utils/enums'
import { ObtnerReservasClienteDto } from '@/dominio/dtos/obtner-reservas-cliente.dto'
import { ReservaEntity } from '@/dominio/entities'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { clienteServices } from '@/services/cliente.services'
import React, { useState } from 'react'

const useObtenerReservasCliente = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [reservas, setReservas] = useState<ReservaEntity[]>(null)
  const { cliente } = useAppSelector((state) => state.cliente)
  const { usuario } = useAppSelector((state) => state.usuario)
  const obtenerReservas = async (estado: EstadoReserva | undefined) => {
    try {
      setLoading(true)
      const reservaDto = ObtnerReservasClienteDto.crear({
        cliente_id: cliente?.getId(),
        token: usuario?.getTokent(),
        estado: estado
      })

      const reservas = await clienteServices.obtenerReservasCliente(reservaDto)
      setReservas(reservas)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { loading, reservas, obtenerReservas }
}

export default useObtenerReservasCliente
