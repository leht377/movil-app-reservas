import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { RestauranteDetalladoEntity } from '../../../../../../dominio/entities'
import { restauranteServices } from '../../../../../../services/restaurante.services'

const useObtenerRestuaranteId = (restauranteId: string) => {
  const [restaurante, setRestaurante] =
    useState<RestauranteDetalladoEntity | null>(null)
  const [loading, setLoading] = useState(false)

  const obtenerRestaurante = async () => {
    try {
      setLoading(true)
      const restauranteResponse =
        await restauranteServices.obetenerRestaurantePorId(restauranteId)
      setRestaurante(restauranteResponse)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    obtenerRestaurante()
  }, [])

  return { restaurante, loading }
}

export default useObtenerRestuaranteId
