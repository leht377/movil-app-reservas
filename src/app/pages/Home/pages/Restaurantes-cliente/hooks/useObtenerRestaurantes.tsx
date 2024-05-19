import React, { useCallback, useEffect, useState } from 'react'
import { useAppSelector } from '../../../../../../redux/hooks/useAppSelector'
import { useAppDispatch } from '../../../../../../redux/hooks/useAppDispatch'
import { get_restaurantes } from '../../../../../../redux/reducers/restaurantes.reducer'

const useObtenerRestaurantes = () => {
  const { restaurantes, paginacion } = useAppSelector((state) => state.restaurante)

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [hasMoreData, setHasMoreData] = useState(true)

  const dispatch = useAppDispatch()

  const obtenerRestaurantes = useCallback(async () => {
    setLoading(true)
    setError(null)

    // const nextPage = paginacion?.nextPage ? paginacion?.nextPage : 1
    const page = paginacion ? (paginacion.hasNextPage ? paginacion.nextPage : paginacion.page) : 1

    try {
      await dispatch(get_restaurantes(page)).unwrap()
      setHasMoreData(paginacion?.hasNextPage)
    } catch (err) {
      setError('Error al obtener los restaurantes')
      // console.error(err) // Puedes mantenerlo comentado o eliminarlo según lo necesites
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    console.log(paginacion)
  }, [paginacion])
  useEffect(() => {
    obtenerRestaurantes()
  }, [])

  return { restaurantes, loading, error, obtenerRestaurantes }
}

export default useObtenerRestaurantes
