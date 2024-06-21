import { RestauranteDetalladoEntity } from '@/dominio/entities'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { set_restaurante_actual } from '@/redux/reducers/restaurantes.reducer'
import { restauranteServices } from '@/services/restaurante.services'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

const useObtenerRestuaranteId = (restauranteId: string) => {
  const [restaurante, setRestaurante] = useState<RestauranteDetalladoEntity | null>(null)
  const { restaurante_actual } = useAppSelector((state) => state.restaurante)
  const [loading, setLoading] = useState(false)

  const ditspacth = useAppDispatch()
  const obtenerRestaurante = async () => {
    try {
      setLoading(true)
      const restauranteResponse = await restauranteServices.obetenerRestaurantePorId(restauranteId)
      ditspacth(set_restaurante_actual(restauranteResponse))
      // setRestaurante(restauranteResponse)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    obtenerRestaurante()
  }, [])

  return { restaurante: restaurante_actual, loading }
}

export default useObtenerRestuaranteId
