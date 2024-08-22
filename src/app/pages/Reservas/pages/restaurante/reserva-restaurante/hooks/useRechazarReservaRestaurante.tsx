import { RechazarReservaRestauranteDto } from "@/dominio/dtos/rechazar-reserva-restaurante.dto";
import { useAppDispatch } from "@/redux/hooks/useAppDispatch";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import {
  rechazarReservaRestaurante,
  reset_status_rechazar_reserva_restaurante,
} from "@/redux/reducers/restaurantes.reducer";

const useRechazarReservaRestaurante = () => {
  const { status_rechazar_reserva, restaurante, error } = useAppSelector(
    (state) => state.restaurante
  );

  const { usuario } = useAppSelector((state) => state.usuario);

  const dispacth = useAppDispatch();

  const rechazarReserva = async (idReserva: string): Promise<boolean> => {
    try {
      const rechazarReservaDto = RechazarReservaRestauranteDto.crear({
        restaurante_id: restaurante?.getId(),
        token: usuario?.getTokent(),
        reserva_id: idReserva,
      });

      await dispacth(rechazarReservaRestaurante(rechazarReservaDto)).unwrap();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setTimeout(() => {
        dispacth(reset_status_rechazar_reserva_restaurante());
      }, 4000);
    }
  };

  return {
    statusRechazarReserva: status_rechazar_reserva,
    rechazarReserva,
    errorRechazarReserva: error,
  };
};

export default useRechazarReservaRestaurante;
