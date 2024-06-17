import { ReservaEntity } from '@/dominio/entities'

export class ReservaMapper {
  static ReservaEntityFromObject(object: { [key: string]: any }): ReservaEntity {
    const {
      _id,
      id,
      restaurante_id,
      cliente_id,
      nombre_cliente,
      apellido_cliente,
      nombre_restaurante,
      locacion_restaurante,
      nombre_reservante,
      cantidad_personas,
      estado,
      fecha_reserva,
      cod_ingreso,
      hora_reserva
    } = object

    const reserva_id = _id || id

    return new ReservaEntity(
      reserva_id,
      cliente_id,
      nombre_cliente,
      apellido_cliente,
      nombre_restaurante,
      locacion_restaurante,
      restaurante_id,
      nombre_reservante,
      cantidad_personas,
      estado,
      fecha_reserva,
      hora_reserva,
      cod_ingreso
    )
  }
}
