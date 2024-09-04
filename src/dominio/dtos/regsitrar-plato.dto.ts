export class RegistrarPlatoDto {
  private constructor(
    public readonly token: string,
    public readonly restaurante_id: string,
    public readonly menu_id: string,
    public readonly formDataRegistrarPlato: FormData // public readonly nombre: string, // public readonly hashtags_ids: string[], // public readonly categorias_ids: string[], // public readonly descripcion: string, // public readonly url_foto_principal: string, // public readonly url_fotos_secundarias: string[]
  ) {}

  static crear(object: { [key: string]: any }): RegistrarPlatoDto {
    const {
      token,
      restaurante_id,
      menu_id,
      nombre,
      hashtags_ids,
      categorias_ids,
      descripcion,
      url_foto_principal,
      url_fotos_secundarias
    } = object
    if (!token) throw new Error('El campo token es requerido')
    if (!nombre) throw new Error('El campo nombre es requerido')
    if (!restaurante_id) throw new Error('El campo restaurante_id es requerido')
    if (!menu_id) throw new Error('El campo menu_id es requerido')
    if (!hashtags_ids) throw new Error('El campo hashtags_ids es requerido')
    if (!descripcion) throw new Error('El campo descripción es requerido')
    if (!url_foto_principal) throw new Error('El campo url_foto_principal  es requerido')
    if (!url_fotos_secundarias) throw new Error('El campo url_fotos_secundarias es requerido')
    if (!categorias_ids) throw new Error('El campo categorias_ids es requerido')

    const formData = new FormData()

    formData.append('nombre', nombre)
    formData.append('restaurante_id', restaurante_id)
    formData.append('menu_id', menu_id)
    formData.append('descripcion', descripcion)

    if (Array.isArray(hashtags_ids) && hashtags_ids.length > 0) {
      // hashtags_ids.forEach((h) => {
      //   formData.append('hashtags_ids', h)
      // })
      formData.append('hashtags_ids', JSON.stringify(hashtags_ids))
    }

    if (Array.isArray(categorias_ids) && categorias_ids.length > 0) {
      // categorias_ids.forEach((h) => {
      //   formData.append('categorias_ids', h)
      // })

      formData.append('categorias_ids', JSON.stringify(categorias_ids))
    }

    formData.append('url_foto_principal', {
      uri: url_foto_principal,
      type: url_foto_principal.mimeType || 'image/jpeg',
      name: 'foto_principal.jpg'
    })
    // if (url_foto_principal && typeof url_foto_principal === 'object' && url_foto_principal.uri) {

    // }

    if (Array.isArray(url_fotos_secundarias)) {
      url_fotos_secundarias.forEach((foto, index) => {
        formData.append(`url_fotos_secundarias`, {
          uri: foto,
          type: foto.mimeType || 'image/jpeg',
          name: `fotos_secundarias_${index + 1}.jpg`
        })
      })
    }

    return new RegistrarPlatoDto(token, restaurante_id, menu_id, formData)
  }
}
