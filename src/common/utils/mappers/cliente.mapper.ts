import { ClienteEntity } from '../../../dominio/entities'

export class ClienteMapper {
  static ClienteEntityFromObject(object: { [key: string]: any }): ClienteEntity {
    const { id, usuario_id, nombre, apellido, restaurantes_favoritos_ids } = object
    return new ClienteEntity(id, usuario_id, nombre, apellido, restaurantes_favoritos_ids)
  }
}
