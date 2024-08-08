import { MODO } from '@/common/utils/enums/modo_obtener_datos'
import { RestauranteDetalladoEntity } from '@/dominio/entities'
import { Paginacion } from '@/dominio/interfaces/paginacion.interface'
import { restauranteServices } from '@/services/restaurante.services'
import React, { useEffect, useState } from 'react'

const useObtenerRestaurantes = () => {
  // const { restaurantes, paginacion } = useAppSelector((state) => state.restaurante)

  const [restaurantes, setRestaurantes] = useState<RestauranteDetalladoEntity[]>([])
  const [paginacion, setPaginacion] = useState<Paginacion | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const obtenerRestaurantes = async (modo: MODO = MODO.REFRESCAR, search: string = null) => {
    if (modo === MODO.MAS_DATA && paginacion && !paginacion.hasNextPage) return

    setLoading(true)
    setError(null)

    const pagina = modo === MODO.MAS_DATA ? paginacion?.nextPage : 1
    try {
      const response = await restauranteServices.obtener_resturantes(pagina, search)

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

  const cambiarRestaurantes = (restaurantes: RestauranteDetalladoEntity[]) => {
    setRestaurantes(restaurantes)
  }

  useEffect(() => {
    obtenerRestaurantes()
  }, [])

  return { restaurantes, loading, error, obtenerRestaurantes, cambiarRestaurantes, paginacion }
}

export default useObtenerRestaurantes
