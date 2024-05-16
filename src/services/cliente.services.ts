import { AxiosRequestConfig } from 'axios'
import axios from '../common/config/axios.intance'
import { envs } from '../common/config/envs'
import { UsuarioMapper } from '../common/utils/mappers/usuario.mapper'
import { RegistrarClienteDto } from '../dominio/dtos/registrar-cliente.dto'
import { ClienteEntity, UsuarioEntity } from '../dominio/entities'

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

export const clienteServices = { registrarCliente }
