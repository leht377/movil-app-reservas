import { envs } from "@/common/config/envs";
import { AxiosError, AxiosRequestConfig } from "axios";
import axios from "../common/config/axios.intance";
import { SolicitarReservaDto } from "@/dominio/dtos/solicitar-reserva.dto";
import { ReservaMapper } from "@/common/utils/mappers/reservaMapper";
import { CancelarReservaClienteDto } from "@/dominio/dtos/cancelar-reserva-cliente.dto";
import { ReservaEntity } from "@/dominio/entities";
import { AceptarReservaDto } from "@/dominio/dtos/aceptar-restaurante.dto";
import { RechazarReservaRestauranteDto } from "@/dominio/dtos/rechazar-reserva-restaurante.dto";
import { CancelarReservaRestauranteDto } from "@/dominio/dtos/cancelar-reserva-restaurante.dto";

const API_URL = envs.API_URL;

const solicitarReserva = async (data: SolicitarReservaDto): Promise<any> => {
  try {
    const config: AxiosRequestConfig<SolicitarReservaDto> = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${data?.token}`,
      },
    };
    const response = await axios.post(`${API_URL}/reservas`, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const cancelarReservaCliente = async (
  data: CancelarReservaClienteDto | CancelarReservaRestauranteDto
): Promise<ReservaEntity> => {
  const { reserva_id, token, ...body } = data;
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  let endPoint = `${API_URL}/reservas/${reserva_id}/cancelar`;

  const response = await axios.post(endPoint, body, config);
  const reserva = response.data;

  return ReservaMapper.ReservaEntityFromObject(reserva);
};

const aceptarReservaRestaurante = async (
  data: AceptarReservaDto
): Promise<ReservaEntity> => {
  try {
    const { reserva_id, token, ...body } = data;

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let endPoint = `${API_URL}/reservas/${reserva_id}/aceptar`;
    const response = await axios.post(endPoint, body, config);
    const reserva = response.data;

    return ReservaMapper.ReservaEntityFromObject(reserva);
  } catch (error) {
    throw error;
  }
};

const rechazarReservaRestaurante = async (
  data: RechazarReservaRestauranteDto
): Promise<ReservaEntity> => {
  try {
    const { reserva_id, token, ...body } = data;

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    let endPoint = `${API_URL}/reservas/${reserva_id}/rechazar`;
    const response = await axios.post(endPoint, body, config);
    const reserva = response.data;
    return ReservaMapper.ReservaEntityFromObject(reserva);
  } catch (error) {
    throw error;
  }
};

export const reservaServices = {
  solicitarReserva,
  cancelarReservaCliente,
  aceptarReservaRestaurante,
  rechazarReservaRestaurante,
};
