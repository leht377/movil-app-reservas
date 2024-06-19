export class ObtenerRestauranteFavoritoDto {
  private constructor(
    public readonly cliente_id: string,

    public readonly token: string
  ) {}
  static crear(object: { [key: string]: any }): ObtenerRestauranteFavoritoDto {
    const { cliente_id, token } = object

    if (!token) {
      throw new Error('El campo "token" es requerido')
    }
    if (!cliente_id) {
      throw new Error('El campo "cliente_id" es requerido')
    }
    return new ObtenerRestauranteFavoritoDto(cliente_id, token)
  }
}
