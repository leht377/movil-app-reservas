import { useAppDispatch } from "@/redux/hooks/useAppDispatch";
import { RegistrarRestauranteDto } from "@/dominio/dtos/registrat-restaurante.dtos";
import { registrarRestaurante } from "@/redux/reducers/usuario.reducer";

const useRegistrarRestaurante = () => {
  const dispatch = useAppDispatch();

  const registrar = async (data: RegistrarRestauranteDto) => {
    try {
      const restaurante = RegistrarRestauranteDto.crear(data);
      await dispatch(registrarRestaurante(restaurante)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return { registrar };
};

export default useRegistrarRestaurante;
