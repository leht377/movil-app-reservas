export class DeleteFotoIntalacionDto {
  private constructor(
    public readonly foto_id: string,
    public readonly restaurante_id: string,
    public readonly token: string
  ) {}

  static crear(object: { [key: string]: any }): DeleteFotoIntalacionDto {
    const { foto_id, restaurante_id, token } = object
    if (!foto_id) throw new Error('El campo "foto_id"  es requerido')
    if (!restaurante_id) throw new Error('El campo "restaurante_id"  es requerido')
    if (!token) throw new Error('El campo "token" es requerido')

    // formData.append(`basura`, 'bas')

    return new DeleteFotoIntalacionDto(foto_id, restaurante_id, token)
  }
}
