export class CancelarReservaClienteDto {
  private constructor(
    public readonly cliente_id: string,
    public readonly reserva_id: string,
    public readonly token: string
  ) {}
  static crear(object: { [key: string]: any }): CancelarReservaClienteDto {
    const { cliente_id, reserva_id, token } = object

    if (!reserva_id) {
      throw new Error('El campo "reserva_id" es requerido')
    }
    if (!token) {
      throw new Error('El campo "token" es requerido')
    }
    if (!cliente_id) {
      throw new Error('El campo "cliente_id" es requerido')
    }
    return new CancelarReservaClienteDto(cliente_id, reserva_id, token)
  }
}
