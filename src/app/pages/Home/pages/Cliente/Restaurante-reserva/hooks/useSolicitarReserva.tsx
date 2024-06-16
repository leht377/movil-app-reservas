import { SolicitarReservaDto } from '@/dominio/dtos/solicitar-reserva.dto'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

const useSolicitarReserva = () => {
  const { cliente } = useAppSelector((state) => state.cliente)
  const { usuario } = useAppSelector((state) => state.usuario)
  const [cargando, setCargando] = useState<boolean>(false)
  const solicitarReserva = (data) => {
    try {
      setCargando(true)
      const d = { ...data, usuario_id: usuario?.getId(), cliente_id: cliente?.getId() }

      const solicitarReservaDto = SolicitarReservaDto.crear(d)
      console.log(solicitarReservaDto)
    } catch (error) {
      console.log(error)
    } finally {
      setCargando(false)
    }
  }

  return { solicitarReserva, loadingReserva: cargando }
}

export default useSolicitarReserva
