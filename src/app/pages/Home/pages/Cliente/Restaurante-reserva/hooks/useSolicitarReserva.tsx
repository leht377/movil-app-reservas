import { SolicitarReservaDto } from '@/dominio/dtos/solicitar-reserva.dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { reset_status_reserva, solicitarReservaCliente } from '@/redux/reducers/cliente.reducer'

import React, { useEffect, useState } from 'react'

const useSolicitarReserva = () => {
  const { cliente, status_reserva, error } = useAppSelector((state) => state.cliente)
  const { usuario } = useAppSelector((state) => state.usuario)

  const [errorData, setErrorData] = useState(null)

  const dispatch = useAppDispatch()
  useEffect(() => {
    if (error) setErrorData(error)
  }, [error])

  const solicitarReserva = async (data: { [key: string]: any }): Promise<boolean> => {
    try {
      const d = {
        ...data,
        usuario_id: usuario?.getId(),
        cliente_id: cliente?.getId(),
        token: usuario?.getTokent()
      }
      const solicitarReservaDto = SolicitarReservaDto.crear(d)
      await dispatch(solicitarReservaCliente(solicitarReservaDto)).unwrap()

      return true
    } catch (error) {
      if (error instanceof Error) console.error(error.message)
      return false
    } finally {
      setTimeout(() => {
        dispatch(reset_status_reserva())
      }, 4000)
    }
  }

  return { solicitarReserva, status: status_reserva, error: errorData }
}

export default useSolicitarReserva
