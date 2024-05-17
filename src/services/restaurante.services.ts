import { envs } from '../common/config/envs'
import axios from '../common/config/axios.intance'
import { RestauranteMapper } from '../common/utils/mappers/restaurante.mapper'
import { RestauranteDetalladoEntity } from '../dominio/entities'

const API_URL = envs.API_URL

const obtener_top_resturantes = async (): Promise<RestauranteDetalladoEntity[] | []> => {
  const response = await axios.get(`${API_URL}/restaurantes?page=1&limit=20`)
  const { restaurantes, pagination } = response.data
  const restaurantesMapeados = restaurantes?.map((res) =>
    RestauranteMapper.RestauranteDetalladoEntityFromObject(res)
  )
  return restaurantesMapeados
}

export const restauranteServices = { obtener_top_resturantes }
