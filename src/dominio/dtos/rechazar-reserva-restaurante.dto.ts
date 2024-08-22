export class RechazarReservaRestauranteDto {
  private constructor(
    public readonly restaurante_id: string,
    public readonly reserva_id: string,
    public readonly token: string
  ) {}

  static crear(object: { [key: string]: any }): RechazarReservaRestauranteDto {
    const { restaurante_id, reserva_id, token } = object;
    if (!reserva_id) {
      throw new Error('El campo "reserva_id" es requerido');
    }
    if (!token) {
      throw new Error('El campo "token" es requerido');
    }
    if (!restaurante_id) {
      throw new Error('El campo "restaurante_id" es requerido');
    }
    return new RechazarReservaRestauranteDto(restaurante_id, reserva_id, token);
  }
}
