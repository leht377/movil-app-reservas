import { EstadoReserva } from '@/common/utils/enums'

export class ObtnerReservasClienteDto {
  private constructor(
    public readonly cliente_id: string,
    public readonly estado: any,
    public readonly token: string
  ) {}

  static crear(object: { [key: string]: any }): ObtnerReservasClienteDto {
    const { cliente_id, estado, token } = object
    if (!cliente_id) throw new Error('El campo "cliente_id" es requerido')
    if (!token) throw new Error('El campo "token" es requerido')
    if (estado && !Object.values(EstadoReserva).includes(estado))
      throw new Error(`El valor "${estado}", no es un estado valido`)
    return new ObtnerReservasClienteDto(cliente_id, estado, token)
  }
}
