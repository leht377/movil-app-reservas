import { ReservaEntity } from '@/dominio/entities'
import { PaltoMapper } from './plato.mapper'

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
      platos,
      fecha_reserva,
      cod_ingreso,
      hora_reserva
    } = object

    const reserva_id = _id || id
    
    let platosEnti = [] 
    if (Array.isArray(platos)) platosEnti = platos?.map((p) => PaltoMapper.platoEntityFromObject(p))


    return new ReservaEntity(
      reserva_id,
      cliente_id,
      nombre_cliente,
      platosEnti,
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
