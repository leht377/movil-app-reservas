import { envs } from '@/common/config/envs'
import { AxiosError, AxiosRequestConfig } from 'axios'
import axios from '../common/config/axios.intance'
import { SolicitarReservaDto } from '@/dominio/dtos/solicitar-reserva.dto'

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

export const reservaServices = { solicitarReserva }
