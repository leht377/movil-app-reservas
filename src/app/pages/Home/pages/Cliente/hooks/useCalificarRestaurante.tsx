import { CalificarRestauranteDto } from '@/dominio/dtos/calificar-restaurante-dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import {
  calificarRestaurante,
  reset_status_calificar_restaurate
} from '@/redux/reducers/restaurantes.reducer'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

const useCalificarRestaurante = () => {
  const { cliente } = useAppSelector((state) => state.cliente)
  const { usuario } = useAppSelector((state) => state.usuario)
  const { status_calificar_restaurante } = useAppSelector((state) => state.restaurante)
  const [cargando, setCargando] = useState(false)
  const dispatch = useAppDispatch()
  const calificarRestauranteCliente = async (restaurante_id: string, calificacion: number) => {
    try {
      setCargando(true)
      const dto = CalificarRestauranteDto.crear({
        restaurante_id: restaurante_id,
        token: usuario?.getTokent(),
        calificacion: calificacion
      })

      await dispatch(calificarRestaurante(dto)).unwrap()
    } catch (error) {
      console.error(error)
    } finally {
      setCargando(false)
      setTimeout(() => {
        dispatch(reset_status_calificar_restaurate())
      }, 3000)
    }
  }
  return { calificarRestauranteCliente, cargando, status: status_calificar_restaurante }
}

export default useCalificarRestaurante
