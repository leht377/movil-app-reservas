import { AceptarReservaDto } from "@/dominio/dtos/aceptar-restaurante.dto";
import { useAppDispatch } from "@/redux/hooks/useAppDispatch";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { aceptarReservaRestaurante, reset_status_aceptar_reserva_restaurante } from "@/redux/reducers/restaurantes.reducer";

const useAceptarReservaRestaurante = () => {
  const { status_aceptar_reserva, restaurante, error } = useAppSelector(
    (state) => state.restaurante
  );
  const { usuario } = useAppSelector((state) => state.usuario);

  const dispacth = useAppDispatch();

  const aceptarReserva = async (idReserva: string): Promise<boolean> => {
    try {
      const aceptarReservaDto = AceptarReservaDto.crear({
        restaurante_id: restaurante?.getId(),
        token: usuario?.getTokent(),
        reserva_id: idReserva,
      });

      await dispacth(aceptarReservaRestaurante(aceptarReservaDto)).unwrap();
      return true
    } catch (error) {
        console.error(error)
        return false
    }finally {
        setTimeout(() =>{
            dispacth(reset_status_aceptar_reserva_restaurante())
        }, 4000)
    }
  };

  return {
   statusAceptarReserva :status_aceptar_reserva,
   aceptarReserva,
   errorAceptarReserva: error
  }
};

export default useAceptarReservaRestaurante;
