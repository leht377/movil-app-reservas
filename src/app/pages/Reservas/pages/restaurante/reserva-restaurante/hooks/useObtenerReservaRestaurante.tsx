import { EstadoReserva } from "@/common/utils/enums";
import { ObtenerReservaRestauranteDto } from "@/dominio/dtos/obtener-reservas-restaurante.dto";
import { ReservaEntity } from "@/dominio/entities";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { restauranteServices } from "@/services/restaurante.services";
import React, { useState } from "react";

const useObtenerReservaRestaurante = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [reservas, setReservas] = useState<ReservaEntity[]>(null);
  const { restaurante } = useAppSelector((state) => state.restaurante);
  const { usuario } = useAppSelector((state) => state.usuario);
  const obtenerReservas = async (estado: EstadoReserva | undefined) => {
    try {
      setLoading(true);
      const reservaDto = ObtenerReservaRestauranteDto.crear({
        restaurante_id: restaurante?.getId(),
        token: usuario?.getTokent(),
        estado: estado,
      });

      const reservas = await restauranteServices.obtenerReservasRestaurante(
        reservaDto
      );
      setReservas(reservas);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, reservas, obtenerReservas };
};

export default useObtenerReservaRestaurante;
