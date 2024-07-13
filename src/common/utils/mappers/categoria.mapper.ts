import { CategoriaEntity, MenuEntity } from '@/dominio/entities'

export class CategoriaMapper {
  static categoriaEntityFromObject(object: { [key: string]: any }): CategoriaEntity {
    const { id, nombre } = object

    return new CategoriaEntity(id, nombre)
  }
}
