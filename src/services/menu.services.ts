import { envs } from "@/common/config/envs";
import { AxiosError, AxiosRequestConfig } from "axios";
import axios from "../common/config/axios.intance";

import { ObtenerMenuDto } from "@/dominio/dtos/obtener-menu.dto";
import { MenuMapper } from "@/common/utils/mappers/menu.mapper";
import { MenuEntity, PlatoEntity } from "@/dominio/entities";
import { RegistrarMenuDto } from "@/dominio/dtos/registrar-menu.dto";
import { RegistrarPlatoDto } from "@/dominio/dtos/regsitrar-plato.dto";
import { PaltoMapper } from "@/common/utils/mappers/plato.mapper";

const API_URL = envs.API_URL;

const obtenerMenu = async (data: ObtenerMenuDto): Promise<MenuEntity> => {
  try {
    const { menu_id } = data;

    const config: AxiosRequestConfig<ObtenerMenuDto> = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(`${API_URL}/menus/${menu_id}`, config);
    return MenuMapper.MenuEntityFromObject(response.data);
  } catch (error) {
    throw error;
  }
};

const registrarMenu = async (data: RegistrarMenuDto): Promise<MenuEntity> => {
  try {
    const { token } = data;
    const config: AxiosRequestConfig<RegistrarMenuDto> = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/menus`, data, config);
    return MenuMapper.MenuEntityFromObject(response.data);
  } catch (error) {
    console.error(error.response);
    throw error;
  }
};

const registrarPlato = async (
  data: RegistrarPlatoDto
): Promise<PlatoEntity> => {
  try {
    const { menu_id, ...body } = data;

    const config: AxiosRequestConfig<RegistrarPlatoDto> = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${API_URL}/menus/${menu_id}/platos`,
      body,
      config
    );
    return PaltoMapper.platoEntityFromObject(response.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const menuServices = { obtenerMenu, registrarMenu, registrarPlato };
