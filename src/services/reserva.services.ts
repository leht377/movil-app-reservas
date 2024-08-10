import { envs } from '@/common/config/envs'
import { AxiosError, AxiosRequestConfig } from 'axios'
import axios from '../common/config/axios.intance'
import { SolicitarReservaDto } from '@/dominio/dtos/solicitar-reserva.dto'
import { ReservaMapper } from '@/common/utils/mappers/reservaMapper'
import { CancelarReservaClienteDto } from '@/dominio/dtos/cancelar-reserva-cliente.dto'
import { ReservaEntity } from '@/dominio/entities'

const API_URL = envs.API_URL

const solicitarReserva = async (data: SolicitarReservaDto): Promise<any> => {
  try {
    const config: AxiosRequestConfig<SolicitarReservaDto> = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data?.token}`
      }
    }
    const response = await axios.post(`${API_URL}/reservas`, data, config)
    return response.data
  } catch (error) {
    throw error
  }
}
const cancelarReservaCliente = async (data: CancelarReservaClienteDto): Promise<ReservaEntity> => {
  const { reserva_id, token, ...body } = data
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  let endPoint = `${API_URL}/reservas/${reserva_id}/cancelar`

  const response = await axios.post(endPoint, body, config)
  const reserva = response.data

  return ReservaMapper.ReservaEntityFromObject(reserva)
}
export const reservaServices = { solicitarReserva, cancelarReservaCliente }
