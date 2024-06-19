export class AgregarRestauranteFavoritoDto {
  private constructor(
    public readonly cliente_id: string,
    public readonly restaurante_id: string,
    public readonly token: string
  ) {}
  static crear(object: { [key: string]: any }): AgregarRestauranteFavoritoDto {
    const { cliente_id, restaurante_id, token } = object

    if (!restaurante_id) {
      throw new Error('El campo "restaurante_id" es requerido')
    }
    if (!token) {
      throw new Error('El campo "token" es requerido')
    }
    if (!cliente_id) {
      throw new Error('El campo "cliente_id" es requerido')
    }
    return new AgregarRestauranteFavoritoDto(cliente_id, restaurante_id, token)
  }
}
