import { CancelarReservaClienteDto } from '@/dominio/dtos/cancelar-reserva-cliente.dto'
import { useAppDispatch } from '@/redux/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import {
  cancelarReservaCliente,
  reset_status_cancelar_reserva
} from '@/redux/reducers/cliente.reducer'

const useCancelarReserva = () => {
  const { status_cancelar_reserva, cliente, error } = useAppSelector((state) => state.cliente)
  const { usuario } = useAppSelector((state) => state.usuario)
  const dispacth = useAppDispatch()

  const cancelarReserva = async (idReserva: string): Promise<boolean> => {
    try {
      const cancelarReservaDto = CancelarReservaClienteDto.crear({
        cliente_id: cliente?.getId(),
        token: usuario?.getTokent(),
        reserva_id: idReserva
      })

      await dispacth(cancelarReservaCliente(cancelarReservaDto)).unwrap()

      return true
    } catch (error) {
      console.error(error)
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

export default useCancelarReserva
