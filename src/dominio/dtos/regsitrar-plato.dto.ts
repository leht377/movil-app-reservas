export class ResgistrarPlatoDto {
  private constructor(
    public readonly nombre: string,
    public readonly restaurate_id: string,
    public readonly menu_id: string,
    public readonly hashtags_ids: string[],
    public readonly descripcion: string,
    public readonly url_foto_principal: string,
    public readonly url_fotos_secuandarias: string[],
    public readonly categorias_ids: string[]
  ) {}

  static crear(object: { [key: string]: any }): ResgistrarPlatoDto {
    const {
      nombre,
      restaurante_id,
      menu_id,
      hashtags_ids,
      categorias_ids,
      descripcion,
      url_foto_principal,
      url_fotos_secuandarias,
    } = object;
    if (!nombre) {
      throw new Error("El campo nombre es requerido");
    }
    if (!restaurante_id) {
      throw new Error("El campo restaurante_id es requerido");
    }
    if (!menu_id) {
      throw new Error("El campo menu_id es requerido");
    }
    if (!hashtags_ids) {
      throw new Error("El campo hashtags_ids es requerido");
    }
    if (!descripcion) {
      throw new Error("El campo descripcion es requerido");
    }
    if (!url_foto_principal) {
      throw new Error("El campo url_foto_principal  es requerido");
    }
    if (!url_fotos_secuandarias) {
      throw new Error("El campo url_fotos_secuandarias es requerido");
    }
    if (!categorias_ids) {
      throw new Error("El campo categorias_ids es requerido");
    }
    return new ResgistrarPlatoDto(
      nombre,
      restaurante_id,
      menu_id,
      hashtags_ids,
      categorias_ids,
      descripcion,
      url_foto_principal,
      url_fotos_secuandarias
    );
  }
}
