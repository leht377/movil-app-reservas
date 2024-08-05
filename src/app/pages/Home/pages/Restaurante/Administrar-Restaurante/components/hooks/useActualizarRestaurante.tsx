import { ActualizarRestauranteDto } from '@/dominio/dtos/actualizar-restaurante.dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import {
  actualizarRestauranteAsy,
  reset_status_actualizar_restaurate
} from '@/redux/reducers/restaurantes.reducer'

const useActualizarRestaurante = () => {
  const { usuario } = useAppSelector((state) => state.usuario)
  const { restaurante, status_actualizar_restaurante } = useAppSelector(
    (state) => state.restaurante
  )
  const dispacth = useAppDispatch()

  const actualizarDataRestaurante = async (data: any) => {
    if (!usuario || !restaurante) return
    try {
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
      }, 2000)
    }
  }

  return { status_actualizacion: status_actualizar_restaurante, actualizarDataRestaurante }
}

export default useActualizarRestaurante
