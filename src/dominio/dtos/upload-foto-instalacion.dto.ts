export class UploadFotoIntalacionDto {
  private constructor(
    public readonly dataFormInstalacion: FormData,
    public readonly restaurante_id: string,
    public readonly token: string
  ) {}

  static crear(object: { [key: string]: any }): UploadFotoIntalacionDto {
    const { foto_instalacion, restaurante_id, token } = object
    if (!foto_instalacion) throw new Error('El campo "foto_instalacion"  es requerido')
    if (!restaurante_id) throw new Error('El campo "restaurante_id"  es requerido')
    if (!token) throw new Error('El campo "token" es requerido')
    const formData = new FormData()

    formData.append(`foto_instalacion`, {
      uri: foto_instalacion,
      type: 'image/png',
      name: `foto_instalacion.jpeg`
    })
    // formData.append(`basura`, 'bas')

    return new UploadFotoIntalacionDto(formData, restaurante_id, token)
  }
}
