import { HashtagEntity, MenuEntity } from '@/dominio/entities'

export class HastagsMapper {
  static hastagEntityFromObject(object: { [key: string]: any }): HashtagEntity {
    const { id, nombre } = object

    return new HashtagEntity(id, nombre)
  }
}
