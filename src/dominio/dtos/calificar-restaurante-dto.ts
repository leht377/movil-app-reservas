export class CalificarRestauranteDto {
  private constructor(
    public readonly restaurante_id: string,
    public readonly token: string,
    public readonly calificacion: number
  ) {}
  static crear(object: { [key: string]: any }): CalificarRestauranteDto {
    const { restaurante_id, token, calificacion } = object

    if (!token) throw new Error('El campo "token" es requerido')
    if (!calificacion) throw new Error('El campo "calificacion" es requerido')

    if (!restaurante_id) throw new Error('El campo "restaurante_id" es requerido')

    return new CalificarRestauranteDto(restaurante_id, token, calificacion)
  }
}
