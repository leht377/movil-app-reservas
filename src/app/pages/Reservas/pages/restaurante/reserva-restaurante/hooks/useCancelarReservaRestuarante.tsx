import { CancelarReservaClienteDto } from '@/dominio/dtos/cancelar-reserva-cliente.dto'
import { CancelarReservaRestauranteDto } from '@/dominio/dtos/cancelar-reserva-restaurante.dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'

import { cancelarReservaRestaurante, reset_status_cancelar_reserva } from '@/redux/reducers/restaurantes.reducer'

const useCancelarReservaRestaurante = () => {
  const { status_cancelar_reserva, error } = useAppSelector((state) => state.restaurante)
  const { usuario } = useAppSelector((state) => state.usuario)
  const dispacth = useAppDispatch()

  const cancelarReserva = async (
    idReserva: string,
    motivo: string,
    cliente_id: string
  ): Promise<boolean> => {
    try {
      const cancelarReservaDto = CancelarReservaRestauranteDto.crear({
        cliente_id: cliente_id,
        token: usuario?.getTokent(),
        reserva_id: idReserva,
        motivo_rechazo: motivo
      })

      await dispacth(cancelarReservaRestaurante(cancelarReservaDto)).unwrap()

      return true
    } catch (error) {
      console.error(JSON.stringify(error, null, 2))
      return false
    } finally {
      setTimeout(() => {
        dispacth(reset_status_cancelar_reserva())
      }, 4000)
    }
  }
  return {
    statusCancelarReserva: status_cancelar_reserva,
    cancelarReserva,
    errorCancelarReserva: error
  }
}

export default useCancelarReservaRestaurante
