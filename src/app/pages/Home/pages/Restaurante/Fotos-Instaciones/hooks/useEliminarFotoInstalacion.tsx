import { DeleteFotoIntalacionDto } from '@/dominio/dtos/delete-foto-instalacion.dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import {
  deleteFotoInstalacionRestaurante,
  uploadFotoInstalacionRestaurante
} from '@/redux/reducers/restaurantes.reducer'
import React, { useState } from 'react'

const useEliminarFotoInstalacion = () => {
  const { restaurante } = useAppSelector((state) => state.restaurante)
  const { usuario } = useAppSelector((state) => state.usuario)
  const dispatch = useAppDispatch()
  const [loadingDelete, setLoading] = useState(false)
  const eliminarFotoIntalaciones = async (foto_id: string) => {
    if (!usuario || !restaurante) return
    try {
      setLoading(true)
      const dto = DeleteFotoIntalacionDto.crear({
        foto_id: foto_id,
        token: usuario.getTokent(),
        restaurante_id: restaurante?.getId()
      })

      await dispatch(deleteFotoInstalacionRestaurante(dto)).unwrap()
    } catch (error) {
      // console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { eliminarFotoIntalaciones, loadingDelete }
}

export default useEliminarFotoInstalacion
