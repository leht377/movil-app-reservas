export class SolicitarReservaDto {
  private constructor(
    public readonly restaurante_id: string,
    public readonly cliente_id: string,
    public readonly nombre_reservante: string,
    public readonly fecha_reserva: Date,
    public readonly hora_reserva: Date,
    public readonly cantidad_personas: number,
    public readonly usuario_id: string
  ) {}
  static crear(object: { [key: string]: any }): SolicitarReservaDto {
    const {
      restaurante_id,
      cliente_id,
      nombre_reservante,
      fecha_reserva,
      hora_reserva,
      usuario_id,
      cantidad_personas
    } = object
    if (!restaurante_id || typeof restaurante_id !== 'string') {
      throw new Error('El campo "restaurante_id" es requerido y debe ser una cadena de texto')
    }
    if (!usuario_id) throw new Error('no se encontro el usuario_id')
    if (!cliente_id || typeof cliente_id !== 'string') {
      throw new Error('El campo "cliente_id" es requerido y debe ser una cadena de texto')
    }

    if (!nombre_reservante || typeof nombre_reservante !== 'string') {
      throw new Error('El campo "nombre_reservante" es requerido y debe ser una cadena de texto')
    }
    if (!cantidad_personas) throw new Error('El campo "cantidad_personas" es requerido ')

    let cantidad_personas_number = parseInt(cantidad_personas)
    if (isNaN(cantidad_personas_number))
      throw new Error('El campo "cantidad_personas" debe ser un numero entero ')

    const fechaReservaDate = new Date(fecha_reserva)
    if (isNaN(fechaReservaDate.getTime())) {
      throw new Error('El campo "fecha_reserva" debe ser una fecha válida')
    }

    if (!hora_reserva) {
      throw new Error('El campo "hora_reserva" es requerido')
    }

    return new SolicitarReservaDto(
      restaurante_id,
      cliente_id,
      nombre_reservante,
      fechaReservaDate,
      hora_reserva,
      cantidad_personas,
      usuario_id
    )
  }
}
