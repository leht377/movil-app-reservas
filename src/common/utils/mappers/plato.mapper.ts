import { PlatoEntity } from '@/dominio/entities'
import { HastagsMapper } from './hastags.mapper'
import { CategoriaMapper } from './categoria.mapper'

export class PaltoMapper {
  static platoEntityFromObject(object: { [key: string]: any }): PlatoEntity {
    const { id, categorias, hastags, nombre, descripcion, foto_principal, fotos_secundarias } =
      object

    const categoriasMapeadas = categorias?.map((c) => CategoriaMapper.categoriaEntityFromObject(c))
    const hashtagMapeados = hastags?.map((h) => HastagsMapper.hastagEntityFromObject(h))
    return new PlatoEntity(
      id,
      categoriasMapeadas,
      hashtagMapeados,
      nombre,
      descripcion,
      foto_principal,
      fotos_secundarias
    )
  }
}
