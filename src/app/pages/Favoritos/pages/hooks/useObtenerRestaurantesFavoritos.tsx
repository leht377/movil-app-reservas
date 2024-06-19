import { ObtenerRestauranteFavoritoDto } from '@/dominio/dtos/obtener-restaurante-favorito.dto copy'
import { RestauranteDetalladoEntity, RestauranteEntity } from '@/dominio/entities'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { clienteServices } from '@/services/cliente.services'
import React, { useState } from 'react'

const useObtenerRestaurantesFavoritos = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteDetalladoEntity[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const { cliente } = useAppSelector((state) => state.cliente)
  const { usuario } = useAppSelector((state) => state.usuario)
  const obtenerRestaurantesFavoritos = async () => {
    try {
      setLoading(true)
      const dto = ObtenerRestauranteFavoritoDto.crear({
        cliente_id: cliente?.getId(),
        token: usuario?.getTokent()
      })
      const restaurantesResponse = await clienteServices.obtenerRestaurantesFavoritos(dto)
      setRestaurantes(restaurantesResponse)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  return { restaurantes, setRestaurantes, loading, obtenerRestaurantesFavoritos }
}

export default useObtenerRestaurantesFavoritos
