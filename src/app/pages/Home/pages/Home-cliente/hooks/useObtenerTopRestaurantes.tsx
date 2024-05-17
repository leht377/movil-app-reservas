import React, { useState } from 'react'
import { useAppSelector } from '../../../../../../redux/hooks/useAppSelector'
import { useAppDispatch } from '../../../../../../redux/hooks/useAppDispatch'
import { get_top_restaurantes } from '../../../../../../redux/reducers/restaurantes.reducer'

const useObtenerTopRestaurantes = () => {
  const { top_restaurantes } = useAppSelector((state) => state.restaurante)
  const dispatch = useAppDispatch()
  const [cargando, setCargando] = useState<Boolean>(false)

  const obtenerTopRestaurantes = async () => {
    try {
      setCargando(true)
      await dispatch(get_top_restaurantes()).unwrap()
    } catch (error) {
    } finally {
      setCargando(false)
    }
  }
  return { restaurantes: top_restaurantes, cargando, obtenerTopRestaurantes }
}

export default useObtenerTopRestaurantes
