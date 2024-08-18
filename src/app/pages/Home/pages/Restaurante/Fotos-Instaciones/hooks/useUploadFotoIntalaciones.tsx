import { UploadFotoIntalacionDto } from '@/dominio/dtos/upload-foto-instalacion.dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { uploadFotoInstalacionRestaurante } from '@/redux/reducers/restaurantes.reducer'
import React, { useState } from 'react'

const useUploadFotoIntalaciones = () => {
  const { restaurante } = useAppSelector((state) => state.restaurante)
  const { usuario } = useAppSelector((state) => state.usuario)
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const uploadFotoIntalaciones = async (data: any) => {
    if (!usuario || !restaurante) return
    try {
      setLoading(true)
      const dto = UploadFotoIntalacionDto.crear({
        ...data,
        token: usuario.getTokent(),
        restaurante_id: restaurante?.getId()
      })

      await dispatch(uploadFotoInstalacionRestaurante(dto)).unwrap()
    } catch (error) {
      // console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { uploadFotoIntalaciones, loading }
}

export default useUploadFotoIntalaciones
