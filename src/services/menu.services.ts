import { envs } from '@/common/config/envs'
import { AxiosError, AxiosRequestConfig } from 'axios'
import axios from '../common/config/axios.intance'

import { ObtenerMenuDto } from '@/dominio/dtos/obtener-menu.dto'
import { MenuMapper } from '@/common/utils/mappers/menu.mapper'
import { MenuEntity } from '@/dominio/entities'

const API_URL = envs.API_URL

const obtenerMenu = async (data: ObtenerMenuDto): Promise<MenuEntity> => {
  try {
    const { menu_id } = data

    const config: AxiosRequestConfig<ObtenerMenuDto> = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const response = await axios.get(`${API_URL}/menus/${menu_id}`, config)
    return MenuMapper.MenuEntityFromObject(response.data)
  } catch (error) {
    throw error
  }
}

export const menuServices = { obtenerMenu }
