import { ClienteEntity, UsuarioEntity } from '@/dominio/entities'
import axios from '../common/config/axios.intance'
import { envs } from '../common/config/envs'
import { UsuarioMapper } from '@/common/utils/mappers/usuario.mapper'

const API_URL = envs.API_URL

const atutenticarUsuario = async (data: {
  correo: string
  contrasena: string
}): Promise<UsuarioEntity> => {
  const response = await axios.post(`${API_URL}/auth/login`, data)
  const usuario = response.data

  return UsuarioMapper.UsuarioEntityFromObject(usuario)
}

export const usuarioServices = { atutenticarUsuario }
