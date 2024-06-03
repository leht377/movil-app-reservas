import { Paginacion } from '@/dominio/interfaces/paginacion.interface'
import { restauranteServices } from '@/services/restaurante.services'
import React, { useEffect, useState } from 'react'

const useObtenerRestaurantes = () => {
  // const { restaurantes, paginacion } = useAppSelector((state) => state.restaurante)

  const [restaurantes, setRestaurantes] = useState([])
  const [paginacion, setPaginacion] = useState<Paginacion | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const obtenerRestaurantes = async () => {
    if (paginacion && !paginacion.hasNextPage) return

    setLoading(true)
    setError(null)

    try {
      const response = await restauranteServices.obtener_resturantes(
        paginacion?.nextPage
      )

      if (response.paginacion?.page > 1)
        setRestaurantes([...restaurantes, ...response.restaurantes])
      else setRestaurantes(response.restaurantes)
      setPaginacion(response.paginacion)
    } catch (err) {
      setError('Error al obtener los restaurantes')
      // console.error(err) // Puedes mantenerlo comentado o eliminarlo según lo necesites
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    obtenerRestaurantes()
  }, [])

  return { restaurantes, loading, error, obtenerRestaurantes }
}

export default useObtenerRestaurantes
