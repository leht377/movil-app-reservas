export class ObtenerMenuDto {
  private constructor(public readonly menu_id: string, public readonly token: string) {}
  static crear(object: { [key: string]: any }): ObtenerMenuDto {
    const { menu_id, token } = object

    if (!token) {
      throw new Error('El campo "token" es requerido')
    }
    if (!menu_id) {
      throw new Error('El campo "cliente_id" es requerido')
    }
    return new ObtenerMenuDto(menu_id, token)
  }
}
