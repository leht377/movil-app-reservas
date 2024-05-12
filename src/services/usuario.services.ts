import axios from '../common/config/axios.intance'
import { envs } from '../common/config/envs'

const API_URL = envs.API_URL

const atutenticarUsuario = async (data: { correo: string; contrasena: string }) => {
  const response = await axios.post(`${API_URL}/auth/login`, data)
  console.log(response.data)
}

export const usuarioServices = { atutenticarUsuario }
