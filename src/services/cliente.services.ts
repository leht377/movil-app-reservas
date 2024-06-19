import { AxiosRequestConfig } from 'axios'
import axios from '../common/config/axios.intance'
import { envs } from '../common/config/envs'
import { UsuarioMapper } from '../common/utils/mappers/usuario.mapper'
import { RegistrarClienteDto } from '../dominio/dtos/registrar-cliente.dto'
import {
  ClienteEntity,
  ReservaEntity,
  RestauranteDetalladoEntity,
  RestauranteEntity,
  UsuarioEntity
} from '../dominio/entities'
import { ClienteMapper } from '@/common/utils/mappers/cliente.mapper'
import { ObtnerReservasClienteDto } from '@/dominio/dtos/obtner-reservas-cliente.dto'
import { ReservaMapper } from '@/common/utils/mappers/reservaMapper'
import { CancelarReservaClienteDto } from '@/dominio/dtos/cancelar-reserva-cliente.dto'
import { AgregarRestauranteFavoritoDto } from '@/dominio/dtos/agregar-restaurante-favorito.dto'
import { RestauranteMapper } from '@/common/utils/mappers/restaurante.mapper'
import { ObtenerRestauranteFavoritoDto } from '@/dominio/dtos/obtener-restaurante-favorito.dto copy'

const API_URL = envs.API_URL

const registrarCliente = async (data: RegistrarClienteDto): Promise<UsuarioEntity> => {
  const config: AxiosRequestConfig<RegistrarClienteDto> = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.post(`${API_URL}/auth/registrar/clientes`, data, config)
  return UsuarioMapper.UsuarioEntityFromObject(response.data)
}

const obtenerClientePorId = async (id: string): Promise<ClienteEntity> => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.get(`${API_URL}/clientes/${id}`, config)

  return ClienteMapper.ClienteEntityFromObject(response.data)
}
const obtenerRestaurantesFavoritos = async (
  data: ObtenerRestauranteFavoritoDto
): Promise<RestauranteDetalladoEntity[]> => {
  const { cliente_id, token } = data
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(
    `${API_URL}/clientes/${cliente_id}/restaurantes/favoritos`,
    config
  )

  const restaurantes = response.data
  return restaurantes?.map((r) => RestauranteMapper.RestauranteDetalladoEntityFromObject(r))
}

const obtenerReservasCliente = async (data: ObtnerReservasClienteDto): Promise<ReservaEntity[]> => {
  const { cliente_id, estado, token } = data
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  let endPoint = estado
    ? `${API_URL}/clientes/${cliente_id}/reservas?estado=${estado}`
    : `${API_URL}/clientes/${cliente_id}/reservas`
  const response = await axios.get(endPoint, config)
  const reservas = response.data

  return reservas?.map((reserva) => ReservaMapper.ReservaEntityFromObject(reserva))
}

const cancelarReservaCliente = async (data: CancelarReservaClienteDto): Promise<ReservaEntity> => {
  const { cliente_id, reserva_id, token } = data
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  let endPoint = `${API_URL}/clientes/${cliente_id}/reservas/${reserva_id}/cancelar`

  const response = await axios.put(endPoint, {}, config)
  const reserva = response.data

  return ReservaMapper.ReservaEntityFromObject(reserva)
}
const agregarRestauranteFavorito = async (
  data: AgregarRestauranteFavoritoDto
): Promise<ClienteEntity> => {
  const { cliente_id, restaurante_id, token } = data
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  let endPoint = `${API_URL}/clientes/${cliente_id}/restaurantes/${restaurante_id}/addfavorito`

  const response = await axios.put(endPoint, {}, config)
  const cliente = response.data

  return ClienteMapper.ClienteEntityFromObject(cliente)
}

const eliminarRestauranteFavorito = async (
  data: AgregarRestauranteFavoritoDto
): Promise<ClienteEntity> => {
  const { cliente_id, restaurante_id, token } = data
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  let endPoint = `${API_URL}/clientes/${cliente_id}/restaurantes/${restaurante_id}/deletefavorito`

  const response = await axios.put(endPoint, {}, config)
  const cliente = response.data

  return ClienteMapper.ClienteEntityFromObject(cliente)
}
export const clienteServices = {
  registrarCliente,
  obtenerClientePorId,
  obtenerReservasCliente,
  cancelarReservaCliente,
  agregarRestauranteFavorito,
  eliminarRestauranteFavorito,
  obtenerRestaurantesFavoritos
}
