export class CancelarReservaRestauranteDto {
  private constructor(
    public readonly cliente_id: string,
    public readonly reserva_id: string,
    public readonly token: string,
    public readonly motivo_rechazo:string
  ) {}
  static crear(object: { [key: string]: any }): CancelarReservaRestauranteDto {
    const { cliente_id, reserva_id, token,motivo_rechazo } = object

    if (!reserva_id) {
      throw new Error('El campo "reserva_id" es requerido')
    }
    if (!token) {
      throw new Error('El campo "token" es requerido')
    }
    if (!cliente_id) {
      throw new Error('El campo "cliente_id" es requerido')
    }
    if (!motivo_rechazo) {
      throw new Error('El campo "motivo_rechazo" es requerido')
    }
    return new CancelarReservaRestauranteDto(cliente_id, reserva_id, token, motivo_rechazo)
  }
}
