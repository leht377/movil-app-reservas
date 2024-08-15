import { EstadoReserva } from "@/common/utils/enums";

export class ObtenerReservaRestauranteDto {
  private constructor(
    public readonly restaurante_id: string,
    public readonly estado: any,
    public readonly token: string
  ) {}

  static crear(object: { [key: string]: any }): ObtenerReservaRestauranteDto {
    const { restaurante_id, estado, token } = object;
    if (!restaurante_id)
      throw new Error("El campo de restaurante_id es requerido");
    if (!token) throw new Error('El campo "token" es requerido');
    if (estado && !Object.values(EstadoReserva).includes(estado))
      throw new Error(`El valor "${estado}", no es un estado valido`);
    return new ObtenerReservaRestauranteDto(restaurante_id, estado, token);
  }
}
