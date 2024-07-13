import { MenuEntity } from '@/dominio/entities'
import { PaltoMapper } from './plato.mapper'

export class MenuMapper {
  static MenuEntityFromObject(object: { [key: string]: any }): MenuEntity {
    const { id, restaurante_id, platos } = object
    const platosMapeados = platos?.map((p) => PaltoMapper.platoEntityFromObject(p))
    return new MenuEntity(id, restaurante_id, platosMapeados)
  }
}
