import { envs } from '../common/config/envs'
import axios from '../common/config/axios.intance'
import { RestauranteMapper } from '../common/utils/mappers/restaurante.mapper'
import { RestauranteDetalladoEntity } from '../dominio/entities'
import { Paginacion } from '../dominio/interfaces/paginacion.interface'

const API_URL = envs.API_URL

const obtener_top_resturantes = async (): Promise<
  RestauranteDetalladoEntity[] | []
> => {
  const response = await axios.get(`${API_URL}/restaurantes?page=1&limit=20`)
  const { restaurantes, pagination } = response.data
  const restaurantesMapeados = restaurantes?.map((res) =>
    RestauranteMapper.RestauranteDetalladoEntityFromObject(res)
  )
  return restaurantesMapeados
}

const obtener_resturantes = async (
  page: number = 1
): Promise<{
  restaurantes: RestauranteDetalladoEntity[] | []
  paginacion: Paginacion
}> => {
  const response = await axios.get(
    `${API_URL}/restaurantes?page=${page}&limit=10`
  )
  const { restaurantes, paginacion } = response.data

  const restaurantesMapeados = restaurantes?.map((res) =>
    RestauranteMapper.RestauranteDetalladoEntityFromObject(res)
  )
  return { restaurantes: restaurantesMapeados, paginacion }
}

const obetenerRestaurantePorId = async (
  restauranteId: string
): Promise<RestauranteDetalladoEntity | null> => {
  const response = await axios.get(`${API_URL}/restaurantes/${restauranteId}`)
  const restaurante = response.data
  return RestauranteMapper.RestauranteDetalladoEntityFromObject(restaurante)
}
export const restauranteServices = {
  obtener_top_resturantes,
  obtener_resturantes,
  obetenerRestaurantePorId
}
