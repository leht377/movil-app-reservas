export class ActualizarRestauranteDto {
  private constructor(
    public readonly token: string,
    public readonly restaurante_id: string,
    public readonly formDataRestaurante: FormData // public readonly descripcion?: string, // public readonly foto_restaurante?: string, // public readonly horas_servicios?: string[], // public readonly dias_servicios?: string[]
  ) {}
  static crear(object: { [key: string]: any }): ActualizarRestauranteDto {
    const {
      descripcion,
      restaurante_id,
      token,
      foto_restaurante,
      horas_servicios,
      dias_servicios
    } = object

    if (!restaurante_id) throw new Error('El campo "restaurante_id" es requerido')
    if (!token) throw new Error('El campo "token" es requerido')
    if (dias_servicios && !Array.isArray(dias_servicios))
      throw new Error('El campo "dias_servicios" debe de ser un array')
    if (horas_servicios && !Array.isArray(horas_servicios))
      throw new Error('El campo "horas_servicios" debe de ser un array')

    const formData = new FormData()
    if (descripcion) formData.append('descripcion', descripcion)
    if (horas_servicios && Array.isArray(horas_servicios) && horas_servicios.length > 0)
      formData.append('horas_servicios', JSON.stringify(horas_servicios))

    if (dias_servicios && Array.isArray(dias_servicios) && dias_servicios.length > 0)
      formData.append('dias_servicios', JSON.stringify(dias_servicios))

    if (foto_restaurante) {
      formData.append(`foto_restaurante`, {
        uri: foto_restaurante?.uri,
        type: foto_restaurante?.mimeType,
        name: `foto_restaurante.jpg`
      })
    }

    return new ActualizarRestauranteDto(token, restaurante_id, formData)
  }
}
