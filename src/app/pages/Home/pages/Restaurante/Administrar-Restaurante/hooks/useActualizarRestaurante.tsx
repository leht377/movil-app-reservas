import { ActualizarRestauranteDto } from '@/dominio/dtos/actualizar-restaurante.dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import {
  actualizarRestauranteAsy,
  reset_status_actualizar_restaurate
} from '@/redux/reducers/restaurantes.reducer'
import { useState } from 'react'

const useActualizarRestaurante = () => {
  const { usuario } = useAppSelector((state) => state.usuario)
  const [loading, setLoading] = useState(false)
  const { restaurante, status_actualizar_restaurante, error } = useAppSelector(
    (state) => state.restaurante
  )
  const dispacth = useAppDispatch()

  const actualizarDataRestaurante = async (data: any) => {
    if (!usuario || !restaurante) return
    try {
      setLoading(true)
      const restauranteDto = ActualizarRestauranteDto.crear({
        ...data,
        restaurante_id: restaurante.getId(),
        token: usuario.getTokent()
      })
      await dispacth(actualizarRestauranteAsy(restauranteDto)).unwrap()
    } catch (error) {
      console.error('aca error', error)
    } finally {
      setTimeout(() => {
        dispacth(reset_status_actualizar_restaurate())
        setLoading(false)
      }, 2000)
    }
  }

  return {
    status_actualizacion: status_actualizar_restaurante,
    actualizarDataRestaurante,
    loading,
    error
  }
}

export default useActualizarRestaurante
