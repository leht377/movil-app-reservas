import { AxiosRequestConfig } from 'axios'
import axios from '../common/config/axios.intance'
import { envs } from '../common/config/envs'
import { UsuarioMapper } from '../common/utils/mappers/usuario.mapper'
import { RegistrarClienteDto } from '../dominio/dtos/registrar-cliente.dto'
import { ClienteEntity, UsuarioEntity } from '../dominio/entities'
import { ClienteMapper } from '@/common/utils/mappers/cliente.mapper'

const API_URL = envs.API_URL

const registrarCliente = async (
  data: RegistrarClienteDto
): Promise<UsuarioEntity> => {
  const config: AxiosRequestConfig<RegistrarClienteDto> = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.post(
    `${API_URL}/auth/registrar/clientes`,
    data,
    config
  )
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
export const clienteServices = { registrarCliente, obtenerClientePorId }
