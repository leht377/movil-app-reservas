export class RegistrarMenuDto {
  private constructor(
    public readonly restaurante_id: string,
    public readonly token: string
  ) {}

  static crear(object: { [key: string]: any }): RegistrarMenuDto {
    const { restaurante_id, token } = object;

    if (!restaurante_id) {
      throw new Error("El campo restaurante_id es requerido");
    }
    if (!token) {
      throw new Error("El campo token es requerido");
    }
    return new RegistrarMenuDto(restaurante_id, token);
  }
}
